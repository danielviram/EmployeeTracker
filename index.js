const mysql = require('mysql');
const inquirer = require("inquirer");
// const { start } = require('repl');
const { printTable } = require('console-table-printer');
const figlet = require('figlet');
let roles;
let departments;
let managers;
let employees;

    // Connection To Local Host //
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "empDB"
});
    
    connection.connect(function(err) {
    if (err) throw err;
start();

 });

//  figlet('Employee Tracker', (err, result) => {
//     console.log(err || result);
//   });


//  Start of Function //
 function start() {
     inquirer
     .prompt({
        name: "choices",
        type: "list",
        message: "What would you like to do?",
        choices: ["ADD", "VIEW", "UPDATE", "DELETE","EXIT"]
     })
     .then(function(answer) {
        // console.log(answer);

        if (answer.choices === "ADD"){
            addSomething();
        }
        else if (answer.choices === "VIEW"){
            viewSomething();
        }
        else if (answer.choices === "UPDATE"){
            updateSomething();
        }
        else if (answer.choices === "DELETE"){
            deleteSomething();
        }
        else if (answer.choices === "EXIT"){
            figlet('BYE', (err, result) => {
                console.log(err || result);
              });
            
              connection.end();
            }
            else{
              connection.end();
            }
      });
 };

 getRoles = () => {
     connection.query ("SELECT id, title FROM role", (err,res) => {
         if (err) throw err;
         roles = res;
         console.table(roles);
     })
 };

 addSomething = () => {
     inquirer.prompt ([
         {
          name: "add",
          type: "list",
          message: "What do you want to add?",
          choices:["DEPARTMENT", "ROLE", "EMPLOYEE", "EXIT"]
         }
     ])
     .then (function(answer){
         if (answer.add === "DEPARTMENT"){
            console.log ("Add a new:" + answer.add);
            addDepartment();
         }
         else if (answer.add === "ROLE"){
             console.log ("Add a new" + answer.add);
             addRole();
         }
         else if (answer.add === "EMPLOYEE"){
            console.log ("Add a new" + answer.add);
            addEmployee();
        }
        else if (answer.add === "EXIT"){
        figlet('BYE', (err, result) => {
                console.log(err || result);
              });
            
              connection.end();
            }
            else{
              connection.end();
            }
      });
 }

 addDepartment = () => {
     inquirer.prompt ([
         {
         name: "department",
         type: "input",
         message: "What department would you likd to add?"
         }
     ])
//      .them (function(answer){
//          connection.query(`INSERT INTO department (name) VALUES (`${answer.departments}`)`)`)
//      })
//  }