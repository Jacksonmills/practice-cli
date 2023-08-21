#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();
program
  .name('string-util')
  .description('CLI to some JS string utils')
  .version('0.8.0');

program.action(() => {
  console.log('Hello world!');
}).description('Prints "Hello world!"');

program.parse(process.argv);