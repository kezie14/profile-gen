const inquirer = require("inquirer")
const fs = require('fs')
const Manager = require("./lib/Manager")
const Team = require("./src/Team")
let team = []

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
        team.push(manager)
        console.log(team)
        Indigo();
    })
const Indigo = () => {
    let finished = Team(team)
    fs.writeFile("./dist/index.html", finished, (err) => {
        if (err) {
        console.log(err)
        }else{
            console.log("fileCreated")
        }
    })
}