const Engineer = require('../lib/Engineer')

test('creates Engineer object', ()=>{
    const engineer = new Engineer(
        {
            role: 'Engineer',
            name: 'Jon Doe',
            id: 1,
            email: 'email@email.com',
            githubUsername: 'JonDoe',
            confirmNewEmployee: false
          }
    )

    expect(engineer.name).toEqual(expect.any(String))
    expect(engineer.id).toEqual(expect.any(Number))
    expect(engineer.email).toEqual(expect.any(String))
    expect(engineer.github).toEqual(expect.any(String))
})

test('gets Engineers github username', ()=>{
    const engineer = new Engineer(
        {
            role: 'Engineer',
            name: 'Jon Doe',
            id: 1,
            email: 'email@email.com',
            githubUsername: 'JonDoe',
            confirmNewEmployee: false
          }
    )

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github))
})

test('gets Engineers role', ()=> {
    const engineer = new Engineer(
        {
            role: 'Engineer',
            name: 'Jon Doe',
            id: 1,
            email: 'email@email.com',
            githubUsername: 'JonDoe',
            confirmNewEmployee: false
          }
    )

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'))
})