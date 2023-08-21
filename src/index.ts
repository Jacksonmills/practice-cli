#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
  .argument("<string>", "String to log")
  .option("-c, --caps", "Log in all caps")
  .action((message: string, opts: {
    caps?: boolean;
  }) => {
    if (opts.caps) {
      console.log(message.toUpperCase());
      return;
    }
    console.log(message);
  })
  .description('Logs a message to the console');

program.command("add <numbers...>").action((numbers: string[]) => {
  const total = numbers.reduce((a, b) => {
    const numA = Number(a);
    const numB = Number(b);

    if (isNaN(numA) || isNaN(numB)) {
      console.error("Invalid number");
      process.exit(1);
    };

    return numA + numB;
  }, 0);
  console.log(`Total: ${total}`);
}).description("Adds a list of numbers");

program.command("max <numbers...>").action((numbers: string[]) => {
  const max = numbers.reduce((a, b) => {
    const numA = Number(a);
    const numB = Number(b);

    if (isNaN(numA) || isNaN(numB)) {
      console.error("Invalid number");
      process.exit(1);
    };

    return numA > numB ? numA : numB;
  }, 0);

  console.log(`Max: ${max}`);
}).description("Gets the max number from a list of numbers");

program.parse(process.argv);