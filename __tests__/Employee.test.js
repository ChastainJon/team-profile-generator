const Employee = require('../lib/Employee')

test('creates an employee object', () =>{
    const employee = new Employee(
        {
            role: 'Manager',
            name: 'Jon Doe',
            id: 2,
            email: 'Email@email.com',
            officeNumber: '1',
            confirmNewEmployee: false
        }
    )

    expect(employee.name).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toEqual(expect.any(String))
})

test('gets employees name', () =>{
    const employee = new Employee(
        {
            role: 'Manager',
            name: 'Jon Doe',
            id: 2,
            email: 'Email@email.com',
            officeNumber: '1',
            confirmNewEmployee: false
        }
    )
    
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name))
})

test('get employees ID', () =>{
    const employee = new Employee(
        {
            role: 'Manager',
            name: 'Jon Doe',
            id: 2,
            email: 'Email@email.com',
            officeNumber: '1',
            confirmNewEmployee: false
        }
    )

    expect(employee.getId()).toEqual(employee.id)
})

test('get employees email', ()=>{
    const employee = new Employee(
        {
            role: 'Manager',
            name: 'Jon Doe',
            id: 2,
            email: 'Email@email.com',
            officeNumber: '1',
            confirmNewEmployee: false
        }
    )

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email))
})

test('get employees role', () =>{
    const employee = new Employee(
        {
            role: 'Manager',
            name: 'Jon Doe',
            id: 2,
            email: 'Email@email.com',
            officeNumber: '1',
            confirmNewEmployee: false
        }
    )

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'))
})