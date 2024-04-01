#!/usr/bin/env node
// Import the inquirer module from the node_modules folder
import inquirer from "inquirer";

// Initialize an empty array to store the to-do tasks
let toDo: string[] = [];
// let toDo = [];

// Initialize a variable to control the while loop
let condition = true;

// Define an async function to run the program
async function main() {
  // Use a while loop to keep running the program until the user decides to stop
  while (condition) {
    // Use await to wait for the user's response to the prompt
    let addTask = await inquirer.prompt([
      {
        // Define the first prompt: ask the user to enter a task
        name: "to do",
        type: "input",
        message: "what you want to add in your to do ? : ",
      },
      {
        // Define the second prompt: ask the user if they want to add more tasks
        name: "add more",
        type: "confirm",
        message: "do you want to add more ? ",
        default: "fasle",
      },
    ]);

    // Add the user's task to the toDo array
    toDo.push(addTask["to do"]);

    // Update the condition variable based on the user's response to the second prompt
    condition = addTask["add more"];

    // Print the updated toDo array
    console.log(toDo);
  };
};

// Call the main function to start the program
main();