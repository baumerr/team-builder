const generateTeam = (data) => {
  const engineers = data.filter((employee) => employee.getRole() == "Engineer");

  const interns = data.filter((employee) => employee.getRole() == "Intern");

  const managers = data.filter((employee) => employee.getRole() == "Manager");
  console.log("1", engineers);
  console.log("2", interns);
  console.log("3", managers);

  return `
    <section>
        ${managers.map(({ name, id, email}) => {
            return `
                <div>
                    <h3>
                        Name: ${name}
                    </h3>
                    <h4>
                        ID: ${id}
                    </h4>
                    <h4>
                        Email: ${email}
                    </h4>
                </div>
            `
        })
        .join('')}
    </section>
    <section>
        ${engineers.map(({ name, id, email}) => {
            return `
                <div>
                    <h3>
                        Name: ${name}
                    </h3>
                    <h4>
                        ID: ${id}
                    </h4>
                    <h4>
                        Email: ${email}
                    </h4>
                </div>
            `
        })
        .join('')}
    </section>
    <section>
        ${interns.map(({ name, id, email}) => {
            return `
                <div>
                    <h3>
                        Name: ${name}
                    </h3>
                    <h4>
                        ID: ${id}
                    </h4>
                    <h4>
                        Email: ${email}
                    </h4>
                </div>
            `
        })
        .join('')}
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
      </head>

      <body>
        <header>
            <h1>Your Team!</h1>
        </header>
        <main>
            ${generateTeam(data)}
        </main>
      </body>
      <footer>
        <h3>
            Made with Coffee.
        </h3>
      </footer>

    `;
};
