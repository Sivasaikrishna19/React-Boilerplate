#!/usr/bin/env node
import { execSync } from "child_process";

const projectName = process.argv[2] || "my-react-app";
const repoUrl = "https://github.com/Sivasaikrishna19/react-ts-vite-boilerplate.git";

console.log(`🚀 Setting up ${projectName} using React + TypeScript Boilerplate...`);

execSync(`git clone --depth 1 ${repoUrl} ${projectName}`, { stdio: "inherit" });
execSync(`rm -rf ${projectName}/.git`, { stdio: "inherit" });

console.log(`✅ Boilerplate setup complete!`);
console.log(`👉 Next Steps:`);
console.log(`cd ${projectName}`);
console.log(`npm install`);
console.log(`npm run dev`);
