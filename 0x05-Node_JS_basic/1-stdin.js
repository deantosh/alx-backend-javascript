// Create a program named 1-stdin.js that will be executed through command line:

const readline = require('readline');

// Create interface for user input
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display initial message
console.log('Welcome to Holberton School, what is your name?');

// Handle user input
r1.on('line', (input) => {
  console.log(`Your name is: ${input}`);
});

// Handle program close
r1.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
