#! /usr/bin/env node
import inquirer from "inquirer";
async function main() {
    const response = await inquirer.prompt({
        message: "Guess a number. (1-10)",
        type: "number",
        name: "userInput",
    });
}
main();
