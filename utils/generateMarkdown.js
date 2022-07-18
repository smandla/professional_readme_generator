// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case "APACHE 2.0":
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case "GPL 3.0":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    case "BSD 3":
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This repo is licensed by ${license} \n`;
}

function renderTechnologiesSection(technologies) {
  let string = "";

  for (let i in technologies) {
    //- HTML
    string += `\n - ${technologies[i]}`;
  }
  return string;
}
// function renderUsage(usage) {
//   return `./images/${usage}`;
// }
function renderCode(code) {
  return "```ruby \n" + code + "\n``` ";
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
  
  ## License

  ${renderLicenseSection(data.license)}

  ${renderLicenseBadge(data.license)}

   
  ## Description
  ${data.description}

  ## Table of Contents
  ${data.installation ? `- [Installation](#installation)` : ""}
  ${data.technologies[0] === undefined ? "" : `- [Technologies](#technologies)`}
  ${data.deployedLink ? `- [Deployed Link](#link)` : ""}
  ${data.usage ? `- [Usage](#usage)` : ""}
  ${
    data.linkedin || data.portfolio
      ? `- [User Information](#user%20information)`
      : ""
  }
  ${data.contributions ? `- [Credits](#credits)` : ""}
  ${data.tests ? `- [Tests](#tests)` : ""}
  ${data.email ? `- [Questions](#questions)` : ""}
  ${
    data.installation
      ? `## Installation \n To install necessary dependencies, run the following command: \n
${renderCode(data.installation)}`
      : ""
  }
  
  ${
    data.technologies[0] === undefined
      ? ""
      : `## Technologies \n
  ${renderTechnologiesSection(data.technologies)}`
  }
  ${
    data.deployedLink
      ? `## Deployed Link
  [Deployed Link](${data.deployedLink})`
      : ""
  }

  ${data.usage ? `## Usage \n ${data.usage}\n` : ""}
  ${
    data.username || data.email || data.linkedin || data.portfolio
      ? `## User Information \n 
  [Github](https://github.com/${data.username}) |
  [Email](${data.email}) |
  [LinkedIn](${data.linkedin}) |
  [Portfolio](${data.portfolio})`
      : ""
  }
  ${
    data.credits
      ? `  ## Credits\n

  ${data.credits}`
      : ""
  }
  
  ${
    data.tests
      ? `## Tests \n To run tests, run the following command: \n
${renderCode(data.tests)}`
      : ""
  }

  ${
    data.email
      ? `## Questions \n If you have any questions about the repo, open an issue or contact me directly at ${data.email}.   `
      : ""
  }
  
  ---
  
  © 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
  

`;
}

module.exports = generateMarkdown;
