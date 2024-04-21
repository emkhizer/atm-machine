#!/usr/bin/env node
import inquirer from "inquirer";

let myBalance = 5000;
let myPin = 7860;

console.log("welcome to ATM Machine");

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: "Enter your Pin:"
  }
])
if (pinAnswer.pin === myPin) {
  console.log("Pin is Correct, Login Succesfull");
  let operationAnswer = await inquirer.prompt([
    {
      name: "operation",
      type: "list",
      message: "select an operation:",
      choices: ["withdraw Amount", "Check Balance"]
    }
  ]);
  if (operationAnswer.operation === "withdraw Amount") {
    let amountAnswer = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: "enter the Amount to wihdraw:"
      },
    ]);
    if (amountAnswer.amount > myBalance) {
      console.log("insufficient Balance");
    } else {
      myBalance -= amountAnswer.amount;
      console.log(`${amountAnswer.amount} Withdraw Succesfully`);
      console.log(`Your remaining Balance is : ${myBalance}`);
    }
  }
  else if(operationAnswer.operation === "Check Balance"){
    console.log(`Your Account Balance is ${myBalance}`);
  }
}
else{
    console.log("You have entered wrong pin!,Please try again")
}
