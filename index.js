#! /usr/bin/env node
import inquirer from "inquirer";
const userDetails = {};
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
    console.log(userDetails);
}
main();
