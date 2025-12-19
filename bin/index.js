#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

import { resume } from "../src/config.js";
import { colors, gradients } from "../src/styles.js";
import {
  clearScreen,
  printHeader,
  printWelcome,
  link,
} from "../src/helpers.js";
import {
  displayContact,
  displaySummary,
  displayExperience,
  displayEducation,
  displaySkills,
  displayProjects,
  displayInterests,
  displayAll,
} from "../src/display.js";
import boxen from "boxen";

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN MENU
// ═══════════════════════════════════════════════════════════════════════════════

const menuChoices = [
  // About Me
  new inquirer.Separator(chalk.hex(colors.secondary).bold(" ─── About Me ───")),
  { name: "  📬  Contact Information", value: "contact" },
  { name: "  👤  Professional Summary", value: "summary" },

  // Career
  new inquirer.Separator(chalk.hex(colors.primary).bold(" ─── Career ───")),
  { name: "  💼  Work Experience", value: "experience" },
  { name: "  🎓  Education", value: "education" },

  // Technical
  new inquirer.Separator(chalk.hex(colors.accent).bold(" ─── Technical ───")),
  { name: "  🛠️   Technical Skills", value: "skills" },
  { name: "  🚀  Featured Projects", value: "projects" },

  // Personal
  new inquirer.Separator(chalk.hex(colors.cyan).bold(" ─── Personal ───")),
  { name: "  🎯  Interests & Hobbies", value: "interests" },

  // Actions
  new inquirer.Separator(chalk.gray(" ─────────────────────────")),
  { name: "  📄  View Full Resume", value: "all" },
  new inquirer.Separator(" "),
  { name: "  👋  Exit", value: "exit" },
];

const handleSelection = async (choice) => {
  switch (choice) {
    case "contact":
      await displayContact();
      break;
    case "summary":
      await displaySummary();
      break;
    case "experience":
      await displayExperience();
      break;
    case "education":
      await displayEducation();
      break;
    case "skills":
      await displaySkills();
      break;
    case "projects":
      await displayProjects();
      break;
    case "interests":
      await displayInterests();
      break;
    case "all":
      await displayAll();
      break;
    case "exit":
      return false;
  }
  return true;
};

const showMenu = async () => {
  try {
    const { section } = await inquirer.prompt([
      {
        type: "list",
        name: "section",
        message: chalk.hex(colors.primary)(
          "What would you like to know about me?"
        ),
        choices: menuChoices,
        pageSize: 20,
        loop: false,
      },
    ]);

    return section;
  } catch (error) {
    // Handle Ctrl+C gracefully
    if (error.name === "ExitPromptError" || error.message?.includes("SIGINT")) {
      return "exit";
    }
    throw error;
  }
};

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN FUNCTION
// ═══════════════════════════════════════════════════════════════════════════════

// Handle Ctrl+C gracefully
process.on("SIGINT", () => {
  console.log("\n\n");
  console.log(
    gradients.success("  Thanks for stopping by! Have a great day! 🌟")
  );
  console.log("\n");
  process.exit(0);
});

const main = async () => {
  clearScreen();
  printHeader();
  printWelcome();

  let running = true;

  while (running) {
    const choice = await showMenu();

    if (choice === "exit") {
      console.log("\n");
      const goodbyeBox = boxen(
        `${gradients.success("Thank you for viewing my resume!")}\n\n` +
          `${chalk.white(
            "Let's connect and build something amazing together! 🚀"
          )}\n\n` +
          `${link(resume.contact.linkedin, resume.contact.linkedin)}\n` +
          `${link(resume.contact.email, `mailto:${resume.contact.email}`)}`,
        {
          padding: 1,
          margin: 1,
          borderStyle: "round",
          borderColor: colors.accent,
          title: "👋 Goodbye!",
          titleAlignment: "center",
        }
      );
      console.log(goodbyeBox);
      console.log("\n");
      running = false;
    } else {
      await handleSelection(choice);

      console.log("\n");
      try {
        const { continueViewing } = await inquirer.prompt([
          {
            type: "confirm",
            name: "continueViewing",
            message: chalk.gray("Would you like to view another section?"),
            default: true,
          },
        ]);

        if (!continueViewing) {
          running = false;
          console.log("\n");
          console.log(
            gradients.success("  Thanks for stopping by! Have a great day! 🌟")
          );
          console.log("\n");
        } else {
          clearScreen();
          printHeader();
        }
      } catch (error) {
        // Handle Ctrl+C gracefully
        if (
          error.name === "ExitPromptError" ||
          error.message?.includes("SIGINT")
        ) {
          running = false;
          console.log("\n");
          console.log(
            gradients.success("  Thanks for stopping by! Have a great day! 🌟")
          );
          console.log("\n");
        } else {
          throw error;
        }
      }
    }
  }
};

// Run the CLI
main();
