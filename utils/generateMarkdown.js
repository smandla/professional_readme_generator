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
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function renderTechnologiesSection(technologies) {
  // console.log(technologies);
  let string = "";
  for (let i in technologies) {
    //- HTML
    string += `\n - ${technologies[i]}`;
  }
  console.log(string);
  return string;
}
function renderUsage(usage) {
  return `assets/images/demo.gif`;
}
// TODO: Create a function to generate markdown for README
// Credits to University of California, Berkeley.
function generateMarkdown(data) {
  // console.log(data.toc.split(","));
  return `# ${data.projectName}
  
  ## Table of Contents
  
  ${data.description ? `- [Description](#description)` : ""}
  ${data.technologies ? `- [Technologies](#technologies)` : ""}
  ${data.deployedLink ? `- [Deployed Link](#link)` : ""}
  ${data.usage ? `- [Usage](#usage)` : ""}
  ${
    data.linkedin || data.portfolio
      ? `- [User Information](#userinformation)`
      : ""
  }
  ${data.contributions ? `- [Credits](#credits)` : ""}
  ${data.license ? `- [License](#license)` : ""}

  ## Description
  ${data.description}
  ## Technologies
  ${renderTechnologiesSection(data.technologies)}
  ## Deployed Link
  [Deployed Link](${data.deployedLink})
  ${data.usage ? `## Usage \n ${data.usage}` : ""}

  ## Usage
  ![alt text](renderUsage(${data.gif}))

  ## User Information

  [Email](${data.email})
  [LinkedIn](${data.linkedin}) |
  [Portfolio](${data.portfolio}) |

  
  ## Credits
  
  ${data.credits}
  
  ## License
  
  ${renderLicenseBadge(data.license)}
  
  ---
  
  © 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
  

`;
}

module.exports = generateMarkdown;
