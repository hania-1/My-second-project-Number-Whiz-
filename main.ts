#! /usr/bin/env node

import inquirer from "inquirer"

//computer itself generate a number!  completed!

//get input from user to guess the number!  completed!

//match users input and computer generated number!  completed!

const randomnumber=Math.floor(Math.random()*6 + 1);

const answer = await inquirer.prompt([
    {
        name: "userAssumeNumber",
        type: "number",
        message: "Feel free to guess a number between 1-6:",
    }
])

if(answer.userAssumeNumber === randomnumber) {
    console.log("Well played, you've guessed correctly!")
}else{
    console.log("Incorrect, give it another try!")
}