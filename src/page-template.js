const generateTeam = (data) => {
  const engineers = data.filter((employee) => employee.getRole() == "Engineer");

  const interns = data.filter((employee) => employee.getRole() == "Intern");

  const managers = data.filter((employee) => employee.getRole() == "Manager");

  return `
    <section class='container'>
        <div class="row border border-dark">
        ${managers.map(({ name, id, email, officeNumber, getRole}) => {
            return `
                    <div class="col card border border-dark" style="width: 18rem">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item text-center">Role: ${getRole()}</li>
                            <li class="list-group-item text-center">Name: ${name}</li>
                            <li class="list-group-item text-center">ID: ${id}</li>
                            <li class="list-group-item text-center">Email: <a href='mailto: ${email}'>${email}</a></li>
                            <li class="list-group-item text-center">Office Number: ${officeNumber}</li>
                        </ul>
                    </div>
            `
        })
        .join('')}
        </div>
    </section>
    <section class='container'>
        <div class="row border border-dark">
        ${engineers.map(({ name, id, email, github, getRole}) => {
            return `
                <div class="col card border border-dark" style="width: 18rem">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item text-center">Role: ${getRole()}</li>
                        <li class="list-group-item text-center">Name: ${name}</li>
                        <li class="list-group-item text-center">ID: ${id}</li>
                        <li class="list-group-item text-center">Email: <a href='mailto: ${email}'>${email}</a></li>
                        <li class="list-group-item text-center">GitHub: <a href='https://github.com/${github}'>https://github.com/${github}</a></li>
                    </ul>
                </div>
            `
        })
        .join('')}
        </div>
    </section>
    <section class='container'>
        <div class="row border border-dark">
        ${interns.map(({ name, id, email, school, getRole}) => {
            return `
                <div class="col card border border-dark" style="width: 18rem">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item text-center">Role: ${getRole()}</li>
                        <li class="list-group-item text-center">Name: ${name}</li>
                        <li class="list-group-item text-center">ID: ${id}</li>
                        <li class="list-group-item text-center">Email: <a href='mailto: ${email}'>${email}</a></li>
                        <li class="list-group-item text-center">School: ${school}</li>
                    </ul>
                </div>
            `
        })
        .join('')}
        </div>
    </section>
  `
};

module.exports = (data) => {
  return `
    <!DOCTYPE html>
      <html lang="en">

      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Team-Builder</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
          <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
          <link rel="stylesheet" href="style.css">
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
      </head>

      <body>
        <header class="container">
            <div class="row">
                <div class="col-12 align-center">
                    <h1 class="text-center">Your Team!</h1>
                </div>
            </div>
        </header>
        <main>
            ${generateTeam(data)}
        </main>
      </body>

      <footer class="container">
            <div class="row">
                <div class="col-12 align-center">
                    <h6 class="text-center">Made With Coffee</h6>
                </div>
            </div>
      </footer>

    `;
};
