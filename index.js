const inquirer = require("inquirer")
const fs = require('fs')

inquirer
    .prompt([
        {
            type: "input",
            message: "I would like to speak to the manager!",
            name: "opener",
        },
        {
            type: "input",
            message: "I'm writing down your info. Badge ID number!",
            name: "softIntro",
        },
        {
            type: "input",
            message: "I would like your email, as well!",
            name: "collection",
        },
        {
            type: "input",
            message: "I'm giving you a call. What is your number?!",
            name: "closer",
        },
    ]) 
    .then(answers => {
        const manager = new Manager("manager", answers.opener, answers.softIntro, answers.collection, answers.closer)
    })