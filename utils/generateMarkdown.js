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

// TODO: Create a function to generate markdown for README
// Credits to University of California, Berkeley.
function generateMarkdown(data) {
  console.log(data);
  // console.log(data.toc.split(","));
  return `# ${data.username}
  

  ## Table of Contents
  
  - [Description](#description)
  - [Technologies](#technologies)
  - [Deployed Link](#link)
  - [Usage](#usage)
  - [User Information](#userinformation)
  - [Credits](#credits)
  - [License](#license)
  
  ## Description
  
  ## Technologies

  ## Deployed Link
  
  ## Usage


  
  ## User Information
  
  [LinkedIn](https://www.linkedin.com/in/srikavya-mandla/) |
  [Portfolio](https://smandla.github.io/kavya_professionalportfolio/)
  
  ## Credits
  

  
  ## License
  
  ${renderLicenseBadge(data.license)}
  
  ---
  
  © 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
  

`;
}

module.exports = generateMarkdown;
