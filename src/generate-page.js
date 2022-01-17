generateEmployees = employeesArr => {
const managers = []
const engineers = []
const interns = []

for(i=0; i < employeesArr.length; i++){
    switch(employeesArr[i].role){
        case 'Manager':
            managers.push(employeesArr[i])
            break
        case 'Engineer':
            engineers.push(employeesArr[i])
            break
        case 'Intern':
            interns.push(employeesArr[i])
            break
    }
}

return`
    <div id="managers" class="row justify-content-center">
        <h1 class = text-center>Managers</h1>
        <div class="col-sm-2 mb-2">
            ${managers
                .map(({name, id, email, officeNumber}) =>{
                    return`
                    <div class="card border-dark">
                        <div class="card-header bg-primary text-white border-bottom border-dark">
                            <h2>${name}</h2>
                            <h3>&#9749 Manager</h3>
                        </div>
                        <div class="card-body">
                            <p>ID: ${id}</p>
                            <p>
                                Email:
                                <a href="mailto: ${email}">${email}</a>
                            </p>
                            <p>Office Number: ${officeNumber}</p>
                        </div>
                    </div>
                    `
                })
                .join('')}
        </div>
    </div>
    <div id="engineers" class="row justify-content-center">
        <h1 class="text-center">Engineers</h1>
        <div class="col-sm-2 mb-2">
            ${engineers
                .map(({name, id, email, githubUsername}) =>{
                    return `
                    <div class="card border-dark">
                        <div class="card-header bg-primary text-white border-bottom border-dark">
                            <h2>${name}</h2>
                            <h3>&#128187 Engineer</h3>
                        </div>
                        <div class="card-body">
                            <p>ID: ${id}</p>
                            <p>
                                Email:
                                <a href="mailto: ${email}">${email}</a>
                            </p>
                            <p>
                                GitHub: <a href="https://www.github.com/${githubUsername}">${githubUsername}</a>
                            </p>
                        </div>
                    </div>
                    `
                })
                .join('')}
        
            
        </div>
    </div>
    <div id="interns" class="row justify-content-center">
        <h1 class="text-center">Interns</h1>
        <div class="col-sm-2 mb-2">
        ${interns
            .map(({name, id, email, school}) => {
                return`
                <div class="card border-dark">
                    <div class="card-header bg-primary text-white border-bottom border-dark">
                        <h2>${name}</h2>
                        <h3>&#127891 Intern</h3>
                    </div>
                    <div class="card-body">
                        <p>ID: ${id}</p>
                        <p>
                            Email:
                            <a href="mailto: ${email}">${email}</a>
                        </p>
                        <p>School: ${school}</p>
                    </div>
                </div>
                `
            })
            .join('')}
            
        </div>
    </div>
    `
}







module.exports = employeeData => {
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title></title>
            <meta name="description" content="">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
        </head>
        <body class=" m-2">
            <div id = "title" class="text-center bg-danger p-3 rounded-3">
                <h1 class="text-white">My Team</h1>
            </div>
            ${generateEmployees(employeeData)}
        </body>
    </html>
        
    `
}