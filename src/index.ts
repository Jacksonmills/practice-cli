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

program.command("add <numbers...>").action((numbers: number[]) => {
  const total = numbers.reduce((a, b) => a + b, 0);
  console.log(`Total: ${total}`);
}).description("Adds a list of numbers");

program.command("get-max <numbers...>").action((numbers: number[]) => {
  const max = numbers.reduce((a, b) => Math.max(a, b));
  console.log(`Max: ${max}`);
}).description("Gets the max number from a list of numbers");

program.parse(process.argv);