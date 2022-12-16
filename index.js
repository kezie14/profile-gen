const inquirer = require("inquirer")
const fs = require('fs')
const Manager = require("./lib/Manager")
const Team = require("./src/Team")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
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
        addToTeam();
    })

const addToTeam = () => {
    inquirer 
        .prompt([
            {
                type: "list",
                message: "New User",
                choices: [
                    "engineer", "intern", "done"
                ], 
                name: "name"
            }
        ])
        .then(answers => {
            answers.name == "engineer" ? engineer() : 
            answers.name == "intern" ? intern() : 
            Indigo();
        })
}
const engineer = () => {


    inquirer
        .prompt([
            {
                type: "input",
                message: "Name, please?",
                name: "opener",
            },
            {
                type: "input",
                message: "Badge ID?",
                name: "softIntro",
            },
            {
                type: "input",
                message: "I would like your email, as well!",
                name: "collection",
            },
            {
                type: "input",
                message: "Can I get your GitHub deets?",
                name: "closer",
            },
        ]) 
        .then(answers => {
            const eng = new Engineer("engineer", answers.opener, answers.softIntro, answers.collection, answers.closer)
            team.push(eng)
            console.log(team)
            addToTeam();
        })
    }

    const intern = () => {


        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Name, please?",
                    name: "opener",
                },
                {
                    type: "input",
                    message: "Badge ID?",
                    name: "softIntro",
                },
                {
                    type: "input",
                    message: "I would like your email, as well!",
                    name: "collection",
                },
                {
                    type: "input",
                    message: "What college did you attend?",
                    name: "closer",
                },
            ]) 
            .then(answers => {
                const int = new Intern("intern", answers.opener, answers.softIntro, answers.collection, answers.closer)
                team.push(int)
                console.log(team)
                addToTeam();
            })
        }


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