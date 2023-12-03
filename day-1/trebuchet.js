const fs = require("fs");
const readline = require("readline");

/**
 * Extrait le premier chiffre ainsi que le dernier,
 * et fait un entier de [first][last]
 * Exemple : first = 1; last = 2 : final = 12
 * @param {string} line Ligne à parse
 * @returns {number}
 */
function extractNumber(line) {
  let firstNumber = line.match(/\d/);
  let lastNumber = line.match(/\d(?=[^\d]*$)/);

  if (firstNumber && lastNumber) {
    return parseInt(firstNumber[0]) * 10 + parseInt(lastNumber[0]);
  }
}

/**
 * Fonction Trebuchet pour le Advent of Code 2023
 * https://adventofcode.com/2023/day/1
 * @param {string} input Fichier d'entrée
 */
async function trebuchet(input) {
  const file_stream = fs.createReadStream(input);

  const rl = readline.createInterface({
    input: file_stream,
    crlfDelay: Infinity,
  });

  let sum = 0;

  for await (const line of rl) {
    sum += extractNumber(line);
  }

  console.log(sum);
}

trebuchet("./input.txt");
