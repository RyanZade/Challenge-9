// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if (license === 'apache'){
    licenseLink = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }else if(license === 'BSD'){
    licenseLink = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  }else if(license === 'Eclipse'){
    licenseLink = '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
  }else {
    licenseLink = '';
  }
  return licenseLink
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
  
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  1. [ Description. ](#description)
  2. [ Installation instructions. ](#installation)
  3. [ Usage Information. ](#usage)
  4. [ Contributing Guidelines. ](#contributing)
  5. [ Test Instructions. ](#test)
  6. [ Github. ](#github)
  7. [ Email. ](#email)

  ## License
  ${renderLicenseLink(data.license)}

  # Description 
  ${data.description} 

  # Installation
  ${data.installationInstructions} 

  # Usage
  ${data.usage} 

  # Contributing
  ${data.contribution} 

  # Test
  ${data.test} 

  # Github
  ${data.github} <https://www.github.com/${data.github}> 
  
  # Email
  <${data.email}> for any further questions.
`};

module.exports = generateMarkdown;
