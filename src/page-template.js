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
        <title>Portfolio Demo</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header>
        <div class="container flex-row justify-space-between align-center py-3">
            <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
            <nav class="flex-row">
            
            </nav>
        </div>
        </header>


        <main class="container flex-row justify-space-between align-center my-5">
        ${generateTeam(team)}

        <div class="card">
            <img src="img_avatar.png" alt="Avatar" style="width:100%">
            <div class="container">
                <h4><b>John Doe</b></h4> 
                <p>Architect & Engineer</p> 
            </div>
        </div>
        
        </main>

        

        <footer class="container text-center py-3">
        <h3 class="text-dark">&copy;2020 Made by Os</h3>
        </footer>
    </body>
    </html>
    `;

  generateSite.writeFile(fileContent);
};

const generateTeam = (team) => {
  return team.map((member) => {
    return `
            <div class="card">
                <div>${member.name}</div>
                <div>${member.id}</div>
            </div>
        `;
  });
};
