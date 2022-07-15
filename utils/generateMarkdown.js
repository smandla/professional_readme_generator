// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "APACHE 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "GPL 3.0") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === "BSD 3") {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  } else {
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

// TODO: Create a function to generate markdown for README
// Credits to University of California, Berkeley.
function generateMarkdown(data) {
  console.log(data);
  // console.log(data.toc.split(","));
  return `# ${data.projectName}
  

  ## Table of Contents
  
  ${data.description ? `- [Description](#description)` : ""}
  ${data.technologies ? `- [Technologies](#technologies)` : ""}

  ${data.deployedLink ? `- [Deployed Link](#link)` : ""}

  ${data.description ? `- [Description](#description)` : ""}

  - [Description](#description)
  - [Technologies](#technologies)
  - [Deployed Link](#link)
  - [Usage](#usage)
  - [User Information](#userinformation)
  
  - [Credits](#credits)
  - [License](#license)
  
  ## Description
  ${data.description}
  ## Technologies
  ${renderTechnologiesSection(data.technologies)}
  ## Deployed Link
  [Deployed Link](${data.deployedLink})
  ${data.usage ? `## Usage \n ${data.usage}` : ""}

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
