#! /usr/bin/env node
import inquirer from "inquirer";

const answers = await inquirer.prompt ([
    {
        massage:"Enter first number",
        type:"number", 
        name:"firstNumber"
    },
    {
        massage:"Enter second number",
        type:"number", 
        name:"secondNumber"},
    {  
        massage:"select one operator",
        type:"list",
        name:"operator",
        choices:["addition","subtraction","multiplication","division"]
    },
]);
if (answers.operator === "addition"){
    console.log(answers.firstNumber + answers.secondNumber);
}
else if(answers.operator === "subtraction"){
    console.log(answers.firstNumber - answers.secondNumber);
}
else if(answers.operator === "multiplication"){
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.operator === "division"){
    console.log(answers.firstNumber / answers.secondNumber);
}else {
    console.log("please select valid operator");
}

