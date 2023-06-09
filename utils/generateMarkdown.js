// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if(license === undefined){
    return "";
  }
  if (license === 'Apache License 2.0'){
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
  }
  else if (license === 'GNU General Public License v3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
  }
  else if (license === 'MIT License') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
  }
  else if (license === 'Mozilla Public License 2.0') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]'
  }
  else if (license === 'Eclipse Public License 1.0') {
    return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]'
  }
  else if (license === 'None') {
    return 'None'
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if(license === undefined){
    return "";
  }
  if (license === 'Apache License 2.0'){
    return '(https://opensource.org/licenses/Apache-2.0)';
  }
  else if (license === 'GNU General Public License v3.0') {
    return '(https://www.gnu.org/licenses/gpl-3.0)';
  }
  else if (license === 'MIT License') {
    return '(https://opensource.org/licenses/MIT)';
  }
  else if (license === 'Mozilla Public License 2.0') {
    return '(https://opensource.org/licenses/MPL-2.0)'
  }
  else if (license === 'Eclipse Public License 1.0') {
    return '(https://opensource.org/licenses/EPL-1.0)'
  }
  else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  
  ## Table of Contents

  [Installation](#installation)

  [Usage](#usage)

  [License](#license)

  [Contribution](#contribution)

  [Test](#test)

  [Questions](#questions)


  ## Installation 

  ${data.installation}


  ## Usage

  ${data.usage}


  ## License 

  ${data.license}


  ## Contribution

  ${data.contribution}

  ## Test

  ${data.test}

  ## Questions

  ### View below for additional information about this project, including a Github account and Email address for contact:

  [Github](https://github.com/${data.githubUserName})

  [Email](mailto: ${data.email})

`;
}

module.exports = generateMarkdown;
