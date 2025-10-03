#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");

const nome = chalk.white("Cássio Gabriel Costa dos Santos");
const apelido = chalk.white("cgcdoss");

const rotOcupacao = chalk.white.bold("Ocupação:");
const ocupacao = chalk.white("Dev Frontend Sênior na Credsystem");

const rotTwitter = chalk.white.bold("Twitter:".padStart(9));
const twitter = chalk.grey("https://twitter.com/") + chalk.cyan("cgcdoss");

const rotGithub = chalk.white.bold("E-mail:".padStart(9));
const github = chalk.yellow("contato@cassiogabriel.com");

const rotGmail = chalk.white.bold("GitHub:".padStart(9));
const gmail = chalk.grey("https://github.com/") + chalk.green("cgcdoss");

const rotLinkedIn = chalk.white.bold("LinkedIn:");
const linkedIn =
  chalk.grey("https://linkedin.com/in/") + chalk.blue("cassio-gabriel-costa-santos");

const rotCartao = chalk.white.bold("Cartão:".padStart(9));
const cartao = chalk.red("npx") + " " + chalk.white("cgcdoss");

let saida = chalk.green(`   ${nome} / ${apelido}\n\n`);
saida += `${rotOcupacao} ${ocupacao}\n\n`;
saida += `${rotTwitter} ${twitter}\n`;
saida += `${rotGmail} ${gmail}\n`;
saida += `${rotGithub} ${github}\n`;
saida += `${rotLinkedIn} ${linkedIn}\n\n`;
saida += `${rotCartao} ${cartao}`;

const opcoes = {
  padding: 2,
  margin: 2,
  borderStyle: "round"
};

console.log(boxen(saida, opcoes));
