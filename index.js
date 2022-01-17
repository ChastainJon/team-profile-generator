const inquirer = require('inquirer')
const Employee = require('./lib/Employee')
const generatePage = require('./src/generate-page')
const fs = require('fs')
const {resolve} = require('path')

const team = {
    employees: []
}
const promptUser = team => {
    if(!team.employees){
       team.employees = []
    }
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
                message: 'What is your e-mail?'
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
            team.employees.push(employeeData)
            if(employeeData.confirmNewEmployee){
                return (promptUser(team))
            }else{
                return team
            }
        })
}

promptUser(team)
.then((data) =>{
    return generatePage(data.employees)
})
.then((pageHTML) =>{
    fs.writeFile('./dist/index.html', pageHTML, err => {
        if(err){
            reject(err)
            //return out of the function here to mkae sure the Promise doesn't accidentally execute the resolve() function as well
            return
        }
    })
    console.log('Page generated in /dist')
})