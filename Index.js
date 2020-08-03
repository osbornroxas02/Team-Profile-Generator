const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const generateHTML = require('./src/page-template');

class Prompt {
    team = []
    
    start = () => {
        this.getRole();
    }

    getRole = () => {
        inquirer
        .prompt({
            type: 'list',
            name: 'role',
            choices: ['Manager', 'Intern', 'Engineer']
        }) 
        .then(({ role }) => {
            this.role = role
            console.log(role);
            this.getName();
            
        });
    }
    
    getName = () => {
        inquirer
        .prompt({
            type: 'text',
            name: 'name',
            message: "Add Employee name:"
        })
        .then(({ name }) => {
            this.name = name
            console.log(name);
            this.getEmail();
        })
    };
    getEmail = () => {
        inquirer
        .prompt({
            type: 'text',
            name: 'email',
            message: "Add Employee email:"
        })
        .then(({ email }) => {
            this.email = email
            console.log(email);
            this.getId();
    
        })
    };
    
    getId = () => {
        inquirer
        .prompt({
            type: 'text',
            name: 'id',
            message: "Add Employee Id:"
        })
        .then(({ id }) => {
            this.id = id
            console.log(id);
            if(this.role === 'Manager') {
                this.getOfficeNumber();
            }
            else if (this.role === 'Intern') {
                this.getSchool();
            }
            else if (this.role === 'Engineer') {
                this.getGitHUb();
            }
            else {
                console.log('create employee');

                this.team.push(new Employee(this.name, this.role, this.role, this.id, this.email))
                this.promptNewMember();
            }
        })
    };
    
    getOfficeNumber = () => {
        inquirer
        .prompt({
            type: 'text',
            name: 'officeNumber',
            message: "Add manager's office number:"
        })
        .then(({ officeNumber }) => {
            this.officeNumber = officeNumber
            console.log(officeNumber);
            console.log('create manager');

            this.team.push(new Manager(this.name, this.role, this.id, this.email, this.officeNumber))
            this.promptNewMember();
        })
    };
    
    getSchool = () => {
        inquirer
        .prompt({
            type: 'text',
            name: 'school',
            message: "Add school:"
        })
        .then(({ school }) => {
            this.school = school
            console.log(school);
            console.log('create intern');

            this.team.push(new Intern(this.name, this.role, this.id, this.email, this.school))
            this.promptNewMember();
        })
    };
    
    getGitHUb = () => {
        inquirer
        .prompt({
            type: 'text',
            name: 'gitHub',
            message: "Add gitHub:"
        })
        .then(({ gitHub }) => {
            this.gitHub = gitHub
            console.log(gitHub);
            console.log('create engineer');

            this.team.push(new Engineer(this.name, this.role, this.id, this.email, this.gitHub) )
            this.promptNewMember();
        })
    };

    //Prompt new team member
    promptNewMember = () => {
        inquirer
        .prompt({
            type: 'confirm',
            name: 'newMember',
            message: 'Would you like to add a team member?'
        }) 
        .then(({ newMember }) => {
            if(newMember === true) {
                this.start();
            } else {
                console.log('generate HTML'); 
                generateHTML({ team: this.team });
                console.log(this.team);
            }  
        })
    }
};

const prompt = new Prompt()
prompt.start()
