#! /usr/bin/env node
import inquirer from "inquirer";

interface userDetailsType {
  accountNumber: number;
  accountPassword: number;
}

const userDetails: userDetailsType = {} as userDetailsType;

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

  userDetails.accountNumber = userResponse.accountNumber;
  userDetails.accountPassword = userResponse.accountNumber;

  generateAccountData();
}

function generateAccountData() {}

main();
