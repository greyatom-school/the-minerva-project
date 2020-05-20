let employees = [{
    "id": 1,
    "name": "nehal",
    "email": "nehal.g@test.com",
    "phone": 1234567891,
    "address": "Mumbai 400 101",
    "designation": "developer",
    "team": "PNG"
}, {
    "id": 2,
    "name": "ankita",
    "email": "ankita.g@test.com",
    "phone": 1234567891,
    "address": "Mumbai 400 101",
    "designation": "CONSULTANT",
    "team": "CPG"
}];

const findEmployeeByID = (id) => {
    let data = employees.filter(function(employee) { 
        console.log(employee.id, id);
        return employee.id === id;
    });
    console.log(data);
    return data;
}

const findRowIDofEmployeeByID = (id) => {
    let index;
    employees.forEach(function(employee, i) { 
        if(employee.id === id) {
            index = i;
        };
    });
    return index;
}

const filterByEmailAndName = (email, name) => {
    if(email || name) {
        return employees.filter((employee) => {
            if(email && name) {
                return employee.email.toLowerCase().includes(email.toLowerCase()) && employee.name.toLowerCase().includes(name.toLowerCase());
            } else if(email) {
                return employee.email.toLowerCase().includes(email.toLowerCase());
            } else if(name) {
                return employee.name.toLowerCase().includes(name.toLowerCase());
            }
        });
    } else {
        return employees;
    }
}

const saveEmployee = (employeeData) => {
    employeeData.id =  generateId();  // write any logic to generate the id
    employees.push(employeeData);
    return employeeData;
}

const updateEmployee = (employeeData) => {
    let index = findRowIDofEmployeeByID(employeeData.id); // get the data row the needs to be updated
    employees[index] = employeeData; // replace the data by the new data at that row
    return employeeData;
}

const deleteEmployee = (id) => {
    console.log(employees);
    let index = findRowIDofEmployeeByID(id); // get the data row the needs to be updated
    employees.splice(index, 1); // remove the data at that row index
    return true;
}

function generateId() {
    let id;
    if(employees.length) {
        id = employees[employees.length - 1].id + 1;
    } else {
        id = 1;
    }
    return id;
}

module.exports = {
    findEmployeeByID,
    filterByEmailAndName,
    saveEmployee,
    updateEmployee,
    deleteEmployee
}