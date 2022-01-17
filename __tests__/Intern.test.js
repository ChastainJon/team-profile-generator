const Intern = require("../lib/Intern");

test('creates an Intern object', ()=>{
    const intern = new Intern(
        {
            role: 'Intern',
            name: 'Jon Doe',
            id: 1,
            email: 'email@email',
            school: 'school',
            confirmNewEmployee: false
          }
    )

    expect(intern.name).toEqual(expect.any(String))
    expect(intern.id).toEqual(expect.any(Number))
    expect(intern.email).toEqual(expect.any(String))
    expect(intern.school).toEqual(expect.any(String))
})

test('gets interns school', ()=>{
    const intern = new Intern(
        {
            role: 'Intern',
            name: 'Jon Doe',
            id: 1,
            email: 'email@email',
            school: 'school',
            confirmNewEmployee: false
          }
    )
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school))
})

test('gets interns role', () => {
    const intern = new Intern(
        {
            role: 'Intern',
            name: 'Jon Doe',
            id: 1,
            email: 'email@email',
            school: 'school',
            confirmNewEmployee: false
          }
    )

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'))
})