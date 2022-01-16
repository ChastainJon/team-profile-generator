const Employee = require('../lib/Employee')
class Engineer extends Employee{
    constructor(data){
        super(data)

        this.github = data.githubUsername
    }

    getGithub(){
        return this.github
    }

    getRole(){
        return 'Engineer'
    }
}

module.exports = Engineer