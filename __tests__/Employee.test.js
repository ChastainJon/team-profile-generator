const Employee = require('../lib/Employee.js')

test('Creates new employee object', () => {
    const employee = new Employee()
    
    expect(employee.name).toEqual(expect.any(String))
})