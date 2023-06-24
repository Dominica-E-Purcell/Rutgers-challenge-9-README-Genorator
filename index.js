const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require ('./generateMarkdown')
// const questions = [title, github, descriptionPrompt1, descriptionPrompt2, descriptionPrompt3, descriptionPrompt4, installation, usage, credits, license, features, tests];
const promptDataForREADME = () => {


  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your repository?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
      },
    {
      type: 'input',
      name: 'descriptionPrompt1',
      message: 'What was your motivation? Who, or what, are you trying to serve?',
    },
    {
        type: 'input',
        name: 'descriptionPrompt2',
        message: 'Why did you build THIS project?',
      },
      {
        type: 'input',
        name: 'descriptionPrompt3',
        message: 'What problem does your project solve?',
      },
      {
        type: 'input',
        name: 'descriptionPrompt4',
        message: 'What did you learn while working on this project?',
      },
    {
        type: 'input',
        name: 'installation',
        message: 'What steps are needed to INSTALL your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What steps are needed to USE your project?',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Are there any collaborators, third party assets, or tutorials you need to credit?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Enter your license.',
    },
    {
        type: 'input',
        name: 'features',
        message: 'Does your project have features?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter your LinkedIn URL.',
    },
  ]);
}  
//fs.writeFileSync(READMEContent, userResponse, () => {const READMEContent = generateREADME(userResponse) }) 

const init = () => {
  promptDataForREADME()
    .then((userResponse) => fs.writeFileSync('README.md', generateMarkdown(userResponse)))
    .then(() => console.log('Successfully created README!'))
    .catch((err) => console.error(err));
};
init();

