// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  () => {
    if (licenseSection) {

    }
    else (!licenseSection)
      { return ''
  }
}}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# <Your-Project-Title> ${data.title}
## Github User Name ${data.github}
## Description 
### Prompt 1 
What was your motivation? ${data.descriptionPrompt1}
### Prompt 2 
Why did you build this project? ${data.descriptionPrompt2}
### Prompt 3
What problem does it solve? ${data.descriptionPrompt3}
### Prompt 4
What did you learn? ${data.descriptionPrompt4}
## Installation${data.installation}
## Usage ${data.usage}
## Credits ${data.credits}
## License ${data.license}
## Features ${data.features}
## Tests ${data.tests}`
}

module.exports = generateMarkdown;
