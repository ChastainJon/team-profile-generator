class Employee{
    constructor(data){
        this.name = data.name
        this.id = data.id
        this.email = data.email
    }

    getName(){
        return `Employee's name: ${this.name}`
    }

    getId(){
        return `Employee's ID: ${this.id}`
    }

    getEmail(){
        return `Employee's e-mail address: ${this.email}`
    }
    getRole(){
        return `Employee's role: Employee`
    }
}

module.exports = Employee