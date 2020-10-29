DROP DATABASE IF EXISTS empDB;
CREATE DATABASE empDB;
USE empDB;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    salary DECIMAL (10,2) NOT NULL,
    department_id INT,
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name  VARCHAR(50) NOT NULL,
    role_id  VARCHAR(50) NOT NULL,
    manager_id  VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO department (name)
VALUES ("Head"),("Enginnering "),("Legal"),("Sales");

INSERT INTO role (title, salary, department_id)
VALUES ("CEO","1000000 ","1"), ("Engineer", "80000", "2"), ("Lawyer", "70000", "3"), ("Salesperson", "50000", "4");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Daniel","Viramontes","1","1"),("Josue","Viramontes","2","2"),("Carla","Rod","3","3"),("Paullo","Viramz","4","4");

-- VIEW ALL --
SELECT e.id, e.first_name, e.last_name, d.name AS department, r.title, r.salary, CONCAT_WS(" ", m.first_name, m.last_name) AS manager FROM employee e LEFT JOIN employee m ON m.id = e.manager_id INNER JOIN role r ON e.role_id = r.id INNER JOIN department d ON r.department_id = d.id ORDER BY e.id ASC;


-- VIEW ALL ROLES --
SELECT  r.id, r.title, r.salary, d.name as Department_Name FROM role AS r INNER JOIN department AS d ON r.department_id = d.id;
-- GET EMP --
SELECT id, CONCAT_WS(' ', first_name, last_name) AS Employee_Name FROM employee