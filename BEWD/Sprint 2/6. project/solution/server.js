const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const async = require('async');
const stompit = require('stompit');
const DatabaseOperations = require("./DatabaseOperations");
const DataValidation = require("./DataValidation");
const port = process.env.PORT || 8080;

app.listen(port);

console.log('server started on: ' + port, process.env.NODE_ENV);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json({
    limit: "50mb"
}));

/*
This api will return the list of employees in the organisation
*/
app.get("/employees", (request, response) => {
    // We are using local data store here sine we are not connected to any data but once we start using a databse we can fetch the employees from that database and return
    let queryParams = request.query; // request.params returns the query params object. In oour case we need to check if user has asked to filter on the basis of email or name
    let {email, name} = queryParams;
    let result = DatabaseOperations.filterByEmailAndName(email, name);
    response.send(result);
});


/*
This API will get a employee by employee id
*/
app.get("/employees/:id", (request, response) => { 
    let pathParams = request.params; // request.params returns the paths params object. 
    let id = parseInt(pathParams.id); //get id path params
    let result = DatabaseOperations.findEmployeeByID(id);
    response.send(result);
});

/*
- This end point will validate the employee data and if the data is valid it will save the data in the database. 
- If the data is valid, it will return the data that was created at the backend which contains the id of that record
- If the data is not valid, it will send relevant HTTP status code along with the error message
*/
app.post("/employees", (request, response) => {
    let employeeData = request.body; // request.body returns the data the client has sent in the request
    let validateData = validateEmployeeData(employeeData);

    if(validateData.valid) { // check if the data sent by client is valid if not send bad request error to the client
        let data = DatabaseOperations.saveEmployee(employeeData);
        if(data) { // check if the data is saved successfully
            response.send(data); // return the saved data with the id that is generated.
        } else { // if not send the error to the client
            response.status(500).send("Error saving employee data in database");
        }    
    } else {
        response.status(400).send(validateData.message); //response.status sets the hhtp status code of the response. By default it is 200. 400 means bad request from the client
    }
});

/* Updates the employee by employee id
- This end point will validate the employee data and if the data is valid, it will update the data in the database corresponding to that id.
- If the data is valid, it will return the updated data
- If the data is not valid, it will send relevant HTTP status code along with the error message
*/
app.put("/employees/:id", (request, response) => {
    let pathParams = request.params; // request.params returns the paths params object. 
    let id = parseInt(pathParams.id); //get id path params
    let employeeData = request.body; // request.body returns the data the client has sent in the request
    let validateData = validateEmployeeData(employeeData);

    if(validateData.valid) { // check if the data sent by user is valid if not send bad request error to the client
        let data = DatabaseOperations.updateEmployee(employeeData);
        if(data) { // check if the data is saved successfully
            response.send(data); // return the saved data with the id that is generated.
        } else { // if not send the error to the client
            response.status(500).send("Error saving employee data in database");
        }    
    } else {
        response.status(400).send(validateData.message); //response.status sets the hhtp status code of the response. By default it is 200. 400 means bad request from the client
    }
});

app.delete("/employees/:id", (request, response) => {
    let pathParams = request.params; // request.params returns the paths params object. 
    let id = parseInt(pathParams.id); //get id path params
    let result = DatabaseOperations.deleteEmployee(id);
    if(result) {
        response.send("Employee removed successfully");
    } else {
        response.status(500).send("Error removing employee data from the database");
    }
});

function validateEmployeeData(employeeData) {
    let valid,
        message;

    if(!employeeData || !Object.keys(employeeData).length) { // check if the client has sent the employee data
        message = "Please send employee data"; 
    } else if(!employeeData.email || !DataValidation.validateEmail(employeeData.email)) { // check if email is valid
        message = "Please enter a valid email";
    } else if(!employeeData.phone || !DataValidation.validateMobile(employeeData.phone)) {
        message = "Please enter a valid mobile";
    } else {
        valid = true;
    }

    return {
        valid: valid,
        message: message
    }
}