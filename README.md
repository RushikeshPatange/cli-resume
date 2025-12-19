# 🚀 Rushikesh Patange - CLI Resume

A beautiful, interactive command-line resume that showcases my professional journey.

![Node.js](https://img.shields.io/badge/Node.js-22+-green)
![License](https://img.shields.io/badge/license-MIT-blue)

## ✨ Features

- 🎨 **Colorful Output** - Beautiful gradients and colors that work across all terminals
- 📦 **Structured Layout** - Clean, organized sections for easy navigation
- 🔄 **Interactive Menu** - Navigate through different resume sections
- 🌈 **ASCII Art Header** - Eye-catching terminal art
- 🔗 **Clickable Links** - Direct links to GitHub, LinkedIn, and projects (Cmd+Click / Ctrl+Click)
- 📱 **Cross-Platform** - Works on Windows, macOS, and Linux
- 🛡️ **Graceful Exit** - Clean handling of Ctrl+C interruptions

## 🚀 Quick Run

```bash
npx @rushipatange/cli-resume
```

## 📦 Installation

### Run directly (no install required)

```bash
npx @rushipatange/cli-resume
```

### Install globally

```bash
npm install -g @rushipatange/cli-resume
show-resume
```

### Run from source

```bash
git clone https://github.com/rushikeshpatange/cli-resume.git
cd cli-resume
npm install
npm start
```

## 📋 Sections

- **📬 Contact Information** - How to reach me
- **👤 Professional Summary** - Brief overview of my career
- **💼 Work Experience** - Detailed job history
- **🎓 Education** - Academic background
- **🛠️ Technical Skills** - Languages, frameworks, tools
- **🚀 Featured Projects** - Showcase of my work
- **🎯 Interests & Hobbies** - Personal interests

## 🎨 Preview

```
██████╗ ██╗   ██╗███████╗██╗  ██╗██╗██╗  ██╗███████╗███████╗██╗  ██╗
██╔══██╗██║   ██║██╔════╝██║  ██║██║██║ ██╔╝██╔════╝██╔════╝██║  ██║
██████╔╝██║   ██║███████╗███████║██║█████╔╝ █████╗  ███████╗███████║
██╔══██╗██║   ██║╚════██║██╔══██║██║██╔═██╗ ██╔══╝  ╚════██║██╔══██║
██║  ██║╚██████╔╝███████║██║  ██║██║██║  ██╗███████╗███████║██║  ██║
╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝
```

## 🛠️ Tech Stack

- **Node.js** (>=22.0.0) - Runtime environment
- **Chalk** - Terminal string styling
- **Gradient-string** - Beautiful color gradients
- **Boxen** - Create boxes in terminal
- **Inquirer** - Interactive CLI prompts
- **Nanospinner** - Elegant terminal spinners
- **Terminal-link** - Clickable hyperlinks in terminals

## 📁 Project Structure

```
cli-resume/
├── bin/
│   └── index.js          # Entry point (main menu & app logic)
├── src/
│   ├── config.js         # Resume data (your info)
│   ├── styles.js         # Colors, gradients, ASCII art
│   ├── helpers.js        # Utility functions
│   └── display.js        # Section display functions
├── package.json
├── LICENSE               # MIT License
└── README.md
```

## 📝 Customization

To customize this resume for yourself:

1. Clone the repository
2. Edit the `resume` object in `src/config.js`
3. Update the ASCII art in `src/styles.js` if desired
4. Change colors in `src/styles.js`
5. Update `package.json` with your package name
6. Publish to npm with your own package name

## 📄 Publishing to npm

1. Create an account on [npmjs.com](https://www.npmjs.com/)
2. Update `package.json` with your details:
   - Change `name` to your package name
   - Update `author` and other metadata
   - Update `bin` field with your command name
3. Run:

```bash
npm login
npm publish
```

## 🔗 Links

- **GitHub**: [github.com/rushikeshpatange/cli-resume](https://github.com/rushikeshpatange/cli-resume)
- **LinkedIn**: [linkedin.com/in/rushikeshpatange](https://www.linkedin.com/in/rushikeshpatange)

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Copyright © 2025 Rushikesh Patange

---

⭐ If you like this project, give it a star on GitHub!
