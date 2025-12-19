import chalk from "chalk";
import boxen from "boxen";
import { createSpinner } from "nanospinner";

import { resume } from "./config.js";
import { colors, thinDivider } from "./styles.js";
import { sleep, link, printSectionHeader } from "./helpers.js";

// ═══════════════════════════════════════════════════════════════════════════════
// SECTION DISPLAY FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════════

export const displayContact = async () => {
  printSectionHeader("Contact Information", "📬");

  const contactBox = boxen(
    `${chalk.hex(colors.info)("📧 Email:")}     ${link(
      resume.contact.email,
      `mailto:${resume.contact.email}`
    )}\n` +
      `${chalk.hex(colors.info)("💼 LinkedIn:")}  ${link(
        resume.contact.linkedin,
        resume.contact.linkedin
      )}\n` +
      `${chalk.hex(colors.info)("🐙 GitHub:")}    ${link(
        resume.contact.github,
        resume.contact.github
      )}`,
    {
      padding: 1,
      margin: { left: 2 },
      borderStyle: "round",
      borderColor: colors.info,
    }
  );
  console.log(contactBox);
};

export const displaySummary = async () => {
  printSectionHeader("Professional Summary", "👤");

  const summaryBox = boxen(chalk.white(resume.summary), {
    padding: 1,
    margin: { left: 2 },
    borderStyle: "round",
    borderColor: colors.accent,
  });
  console.log(summaryBox);
};

export const displayExperience = async () => {
  printSectionHeader("Work Experience", "💼");

  for (const job of resume.experience) {
    const roleTitle = chalk.hex(colors.primary).bold(job.role);
    const company = chalk.hex(colors.secondary)(job.company);
    const duration = chalk.gray(job.duration);
    const location = chalk.gray.italic(job.location);

    console.log(`  ${roleTitle}`);
    console.log(`  ${company} • ${duration} • ${location}`);
    console.log("");

    job.highlights.forEach((highlight) => {
      console.log(
        chalk.white(`    ${chalk.hex(colors.accent)("▹")} ${highlight}`)
      );
    });

    console.log(thinDivider);
  }
};

export const displayEducation = async () => {
  printSectionHeader("Education", "🎓");

  for (const edu of resume.education) {
    console.log(`  ${chalk.hex(colors.primary).bold(edu.degree)}`);
    console.log(
      `  ${chalk.hex(colors.secondary)(edu.institution)} • ${chalk.gray(
        edu.year
      )}`
    );
    console.log("");

    if (edu.achievements) {
      edu.achievements.forEach((achievement) => {
        console.log(
          chalk.white(`    ${chalk.hex(colors.accent)("★")} ${achievement}`)
        );
      });
    }
  }
};

export const displaySkills = async () => {
  printSectionHeader("Technical Skills", "🛠️");

  const skillCategories = [
    {
      name: "Languages",
      icon: "💻",
      skills: resume.skills.languages,
      color: "#f472b6",
    },
    {
      name: "Frontend",
      icon: "🎨",
      skills: resume.skills.frontend,
      color: "#60a5fa",
    },
    {
      name: "Backend",
      icon: "⚙️",
      skills: resume.skills.backend,
      color: "#34d399",
    },
    {
      name: "Databases",
      icon: "🗄️",
      skills: resume.skills.databases,
      color: "#fbbf24",
    },
    {
      name: "DevOps",
      icon: "☁️",
      skills: resume.skills.devops,
      color: "#a78bfa",
    },
    {
      name: "Tools",
      icon: "🔧",
      skills: resume.skills.tools,
      color: "#f87171",
    },
  ];

  for (const category of skillCategories) {
    const skillBadges = category.skills
      .map((skill) => chalk.bgHex(category.color).black(` ${skill} `))
      .join(" ");

    console.log(
      `  ${category.icon} ${chalk.bold.hex(category.color)(category.name)}`
    );
    console.log(`     ${skillBadges}`);
    console.log("");
  }
};

export const displayProjects = async () => {
  printSectionHeader("Featured Projects", "🚀");

  for (const project of resume.projects) {
    const projectBox = boxen(
      `${chalk.bold.hex(colors.primary)(project.name)}\n\n` +
        `${chalk.white(project.description)}\n\n` +
        `${chalk.hex(colors.warning)("Tech:")} ${project.tech
          .map((t) => chalk.cyan(t))
          .join(chalk.gray(" • "))}\n` +
        `${chalk.hex(colors.info)("🔗")} ${link(project.link, project.link)}`,
      {
        padding: 1,
        margin: { left: 2, bottom: 1 },
        borderStyle: "round",
        borderColor: colors.primary,
      }
    );
    console.log(projectBox);
  }
};

export const displayCertifications = async () => {
  printSectionHeader("Certifications", "🏆");

  const certBox = boxen(
    resume.certifications.map((cert) => chalk.white(cert)).join("\n"),
    {
      padding: 1,
      margin: { left: 2 },
      borderStyle: "round",
      borderColor: colors.warning,
    }
  );
  console.log(certBox);
};

export const displayInterests = async () => {
  printSectionHeader("Interests & Hobbies", "🎯");

  // Display interests in a 2-column grid
  const interests = resume.interests;
  const rows = [];

  for (let i = 0; i < interests.length; i += 2) {
    const col1 = chalk.hex(colors.cyan)(interests[i].padEnd(35));
    const col2 = interests[i + 1]
      ? chalk.hex(colors.cyan)(interests[i + 1])
      : "";
    rows.push(`${col1}${col2}`);
  }

  const interestBox = boxen(rows.join("\n"), {
    padding: 1,
    margin: { left: 2 },
    borderStyle: "round",
    borderColor: colors.cyan,
  });
  console.log(interestBox);
};

export const displayAll = async () => {
  const spinner = createSpinner("Loading full resume...").start();
  await sleep(500);
  spinner.success({ text: "Resume loaded!" });

  await displayContact();
  await displaySummary();
  await displayExperience();
  await displayEducation();
  await displaySkills();
  await displayProjects();
  await displayInterests();
};
