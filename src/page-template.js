const generateSite = require("../utils/generate-site");

module.exports = (templateData) => {
  const { team } = templateData;

  const fileContent = `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <!-- CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./style.css">

    <title>Portfolio Demo</title>
  </head>

  <body>
  <header>
    <div class="container main-color flex-row justify-space-between align-center py-3">
      <h1 class="page-title py-2 px-3">My Team</h1>
      <nav class="flex-row"></nav>
    </div>
  </header>

  <main class="container flex-row justify-space-between align-center my-5">
    <div class="row">
      ${generateTeam(team)} 
    </div>       
  </main>

  </body>

  <!-- Bootstrap -->
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
    integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
    integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
    integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  </html>
  `;

generateSite.writeFile(fileContent);
};

const generateTeam = (team) => {
return team.map((member) => {
  return `
    <div class="col-sm-12 col-md-4">
      <div class="card mb-3" style="max-width: 18rem;">
        <div class="card-header main-color">${member.name}<br />${member.role}</div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${member.id}</li>
            <li class="list-group-item">Email: ${member.email}</li>
            <li class="list-group-item">blah</li>
          </ul>
        </div>
      </div>
    </div>
  `;
  }).join(' ');
};
