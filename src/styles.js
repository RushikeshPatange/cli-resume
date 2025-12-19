import chalk from "chalk";
import gradient from "gradient-string";

// ═══════════════════════════════════════════════════════════════════════════════
// STYLING CONSTANTS
// ═══════════════════════════════════════════════════════════════════════════════

export const colors = {
  primary: "#6366f1", // Indigo
  secondary: "#ec4899", // Pink
  accent: "#10b981", // Emerald
  warning: "#f59e0b", // Amber
  info: "#3b82f6", // Blue
  cyan: "#06b6d4", // Cyan
};

export const gradients = {
  title: gradient(["#667eea", "#764ba2", "#f093fb"]),
  subtitle: gradient(["#4facfe", "#00f2fe"]),
  section: gradient(["#fa709a", "#fee140"]),
  success: gradient(["#11998e", "#38ef7d"]),
  cool: gradient(["#2193b0", "#6dd5ed"]),
  fire: gradient(["#f12711", "#f5af19"]),
};

// ═══════════════════════════════════════════════════════════════════════════════
// ASCII ART
// ═══════════════════════════════════════════════════════════════════════════════

export const asciiArt = `
██████╗ ██╗   ██╗███████╗██╗  ██╗██╗██╗  ██╗███████╗███████╗██╗  ██╗
██╔══██╗██║   ██║██╔════╝██║  ██║██║██║ ██╔╝██╔════╝██╔════╝██║  ██║
██████╔╝██║   ██║███████╗███████║██║█████╔╝ █████╗  ███████╗███████║
██╔══██╗██║   ██║╚════██║██╔══██║██║██╔═██╗ ██╔══╝  ╚════██║██╔══██║
██║  ██║╚██████╔╝███████║██║  ██║██║██║  ██╗███████╗███████║██║  ██║
╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝
`;

export const divider = chalk.gray("━".repeat(70));
export const thinDivider = chalk.gray("─".repeat(70));
