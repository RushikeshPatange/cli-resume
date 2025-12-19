import chalk from "chalk";
import boxen from "boxen";
import terminalLink from "terminal-link";

import { resume } from "./config.js";
import { colors, gradients, asciiArt, divider } from "./styles.js";

// ═══════════════════════════════════════════════════════════════════════════════
// UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════════

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const clearScreen = () => {
  console.clear();
};

// ═══════════════════════════════════════════════════════════════════════════════
// LINK FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════════

// Create styled link text (clickable in supported terminals)
export const link = (text, url) => {
  const fullUrl = url.startsWith("http") ? url : `https://${url}`;
  return terminalLink(chalk.cyan.underline(text), fullUrl, {
    fallback: (text) => chalk.cyan.underline(text),
  });
};

// ═══════════════════════════════════════════════════════════════════════════════
// PRINT FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════════

export const printHeader = () => {
  console.log("\n");
  console.log(gradients.title(asciiArt));
  console.log(
    chalk.gray.italic(
      `                    ${resume.title} | ${resume.location}`
    )
  );
  console.log("\n");
};

export const printWelcome = () => {
  const welcomeBox = boxen(
    `${chalk.bold.hex(colors.primary)(
      "👋 Welcome to my interactive CLI Resume!"
    )}\n\n` +
      `${chalk.white(resume.tagline)}\n\n` +
      `${chalk.gray("Navigate through sections to learn more about me.")}`,
    {
      padding: 1,
      margin: { bottom: 1 },
      borderStyle: "round",
      borderColor: "#6366f1",
      title: "✨ " + resume.name,
      titleAlignment: "center",
    }
  );
  console.log(welcomeBox);
};

export const printSectionHeader = (title, emoji = "📋") => {
  console.log("\n");
  console.log(divider);
  console.log(gradients.section(`  ${emoji}  ${title.toUpperCase()}`));
  console.log(divider);
  console.log("");
};

export const printSubHeader = (text) => {
  console.log(chalk.hex(colors.cyan).bold(`\n  ▸ ${text}`));
};
