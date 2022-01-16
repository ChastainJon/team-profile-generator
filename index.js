const inquirer = require('inquirer')
const Employee = require('./lib/Employee')

const employees = []

const promptUser = () => {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'role',
                message: 'What role is this employee?',
                choices: ['Manager', 'Engineer', 'Intern']
                
            },
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?'
            },
            {
                type: 'number',
                name: 'id',
                message: 'What is your user ID?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your e-mail'
            },
            {
                type: 'number',
                name: 'officeNumber',
                message: 'What is your office number?',
                when: ({role}) => {
                    if(role === 'Manager'){
                        return true
                    }else{
                        return false
                    }
                }
            },
            {
                type: 'input',
                name: 'githubUsername',
                message: 'What is your GitHub username?',
                when: ({role}) => {
                    if(role === 'Engineer'){
                        return true
                    }else{
                        return false
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: 'What school do you go to?',
                when: ({role}) => {
                    if(role === 'Intern'){
                        return true
                    }else{
                        return false
                    }

                }
            },
            {
                type: 'confirm',
                name: 'confirmNewEmployee',
                message: 'Would you like to enter another employee?',
                default: false
            }

        ]).then(employeeData =>{
            employees.push(employeeData)
            if(employeeData.confirmNewEmployee){
                return (promptUser(employeeData))
            }else{
                return employeeData
            }
        })
}

promptUser()
.then((data) =>{
    console.log(data)
})