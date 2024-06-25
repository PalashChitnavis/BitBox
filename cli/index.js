#!/usr/bin/env node
import { program } from "commander";
import fs from "fs";
program
  .version("1.0.0")
  .description("A simple CLI created with Node.js and Commander.js");

program
  .command("filebana <name>")
  .description("make a file in the current directory")
  .action((name) => {
    fs.appendFile(name, "", function (err) {
      if (err) throw err;
      console.log("Saved!");
    });
  });

program.parse();
