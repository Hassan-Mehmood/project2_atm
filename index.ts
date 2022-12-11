#! /usr/bin/env node
import inquirer from "inquirer";

function getRandomNumber() {
  return Math.floor(Math.random() * 100000) + 1;
}

async function main() {
  console.log("Signup with your account");

  const userResponse = await inquirer.prompt([
    {
      name: "accountNumber",
      type: "number",
      message: "Please Enter account number",
    },
    {
      name: "accountPassword",
      type: "password",
      mask: true,
      message: "Enter account password ",
    },
  ]);

  generateAccountData();
}

async function generateAccountData() {
  const accountBalance = getRandomNumber();

  console.log(`
    1. Check account balance.
    2. Withdraw cash.
    3. Deposit cash.
    4. Exit.
  `);

  while (true) {
    const { option } = await inquirer.prompt({
      message: "Select an option",
      type: "number",
      name: "option",
    });

    if (option === 1) {
      console.log(`Account Balance: ${accountBalance}`);
    } else if (option === 2) {
      const { option } = await inquirer.prompt({
        message: "How much do you want to withdraw?",
        type: "number",
        name: "option",
      });

      console.log(`New account balance is ${accountBalance - option}`);
    } else if (option === 3) {
      const { option } = await inquirer.prompt({
        message: "How much do you want to withdraw?",
        type: "number",
        name: "option",
      });

      console.log(`New account balance is ${accountBalance + option}`);
    } else {
      break;
    }
  }
}

main();
