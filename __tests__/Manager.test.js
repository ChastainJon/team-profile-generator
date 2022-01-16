const Manager = require('../lib/Manager')

test('creates a manager object', () =>{
    const manager = new Manager(
        {
            role: 'Manager',
            name: 'Jon Doe',
            id: 2,
            email: 'Email@email.com',
            officeNumber: 1,
            confirmNewEmployee: false
        }
    )

    expect(manager.name).toEqual(expect.any(String))
    expect(manager.id).toEqual(expect.any(Number))
    expect(manager.email).toEqual(expect.any(String))
    expect(manager.officeNumber).toEqual(expect.any(Number))
})

test('get managers role', () => {
    const manager = new Manager(
        {
            role: 'Manager',
            name: 'Jon Doe',
            id: 2,
            email: 'Email@email.com',
            officeNumber: 1,
            confirmNewEmployee: false
        }
    )

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'))
})