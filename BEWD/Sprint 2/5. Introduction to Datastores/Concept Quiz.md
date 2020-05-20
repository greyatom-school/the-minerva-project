### Assessment Quiz

1. If you store the data in global variable and on rest call if you keep on appending data in that variable like below, then it will reside in the memory for the lifetime of your application. Even if you restart the application?

```js
const fs = require('fs')
const employees = [{
    name: "test",
    age: 10,
    email: "test@gmail.com"
}];

app.post('/employees', function (req, res) {
    const employee = req.body;
    fs.appendFile('employees.txt', JSON.stringify({
        name: employee.name,
        age: employee.age,
        email: employee.email
    }), (err) => {
        if (err) {
            console.log('Error saving employee!');
        } else {
            res.send('Employee successfully added');;
        }
    })
});
```
- `True`
- `False`* 


2. What is the disadvantage of storing data in a file?
- `THe data will be lost if the application restarts`
- `Scaling our application will be an issue`
- `there is no easy way to access them in parallel (system-wide locks will prevent you from writing)`
- `Both 2 and 3`*

3. How to use database in you application?
- `Require it directly`
- `Find the npm module, insatll the module and then require it`
- `there is no easy way to access them in parallel (system-wide locks will prevent you from writing)`*
- `None of the above`

4. Default postgreSQL port?
- `5432`*
- `5435`
- `8080`
- `None of the above`

5. Node.js application can access which of the following databases?
- `NoSQL databases`
- `Relational databases`
- `All of the above`*
- `None of the above`