// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data.toc.split(","));
  return `# ${data.title}

  ## Javascript - Module 5 Challenge
  
  ## Table of Contents
  
  - [Description](#description)
  - [Technologies](#technologies)
  - [Deployed Link](#link)
  - [Usage](#usage)
  - [User Information](#userinformation)
  - [Credits](#credits)
  - [License](#license)
  
  ## Description
  
  A work day schedule where the data persists and the user can save anything they would like within each work hour time block. As long as you save through the button whenever a change is made, your data should be saved! Have fun managing your work day!
  
  ## Technologies
  
  - HTML
  - CSS
  - Bootstrap
  - jQuery
  
  ## Deployed Link
  
  [Deployed Link](https://smandla.github.io/work_day_scheduler/)
  
  ## Usage
  
  ### Website Demo
  
  ![alt text](assets/images/demo.gif)
  
  ### Code Snippet
  
  ![alt text](assets/images/codesnippet1.png)
  
  #### Code snippet for the time block creation iteration using jQuery to create tag, add classes, and add some styling based on the block we're currently creating.
  
  ## User Information
  
  [LinkedIn](https://www.linkedin.com/in/srikavya-mandla/) |
  [Portfolio](https://smandla.github.io/kavya_professionalportfolio/)
  
  ## Credits
  
  Credits to University of California, Berkeley.
  
  ## License
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
  ---
  
  © 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
  

`;
}

module.exports = generateMarkdown;
