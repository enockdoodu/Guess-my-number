import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
const stdlib = loadStdlib();

const startingBalance = stdlib.parseCurrency(100);
const accPlayerOne = await stdlib.newTestAccount(startingBalance);
const accPlayerTwo = await stdlib.newTestAccount(startingBalance);

const fmt = (a) => stdlib.formatCurrency(a, 4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));
const beforePlayerOne = await getBalance(accPlayerOne);
const beforePlayerTwo = await getBalance(accPlayerTwo);

const ctcPlayerOne = accPlayerOne.contract(backend);
const ctcPlayerTwo = accPlayerTwo.contract(backend, ctcPlayerOne.getInfo());
const OUTCOME = ["Player Two wins", "Draw", "PlayerOne wins"];

const PlayerOne = (Who) => ({
  ...stdlib.hasRandom,
  getRandomNumber: () => {
    const randomNumber = Math.floor(Math.random() * 5);
    console.log(`${Who} gave Random number ${randomNumber}`);
    return randomNumber;
  },
  getGuess: () => {
    // <-- async now
    const guess = Math.floor(Math.random() * 5);
    console.log(`${Who} played ${guess}`);
    return guess;
  },
  seeOutcome: (outcome) => {
    console.log(`${Who} saw outcome ${OUTCOME[outcome]}`);
  },
  informTimeout: () => {
    console.log(`${Who} observed a timeout`);
  },
});
await Promise.all([
  ctcPlayerOne.p.PlayerOne({
    ...PlayerOne("PlayerOne"),
    amount: stdlib.parseCurrency(10),
    deadline: 15,
  }),
  ctcPlayerTwo.p.PlayerTwo({
    ...PlayerOne("PlayerTwo"),
    acceptWager: async (amt) => {
      // <-- async now
      console.log(`PlayerTwo accepts the wager of ${fmt(amt)}.`);
    },
  }),
]);
const afterPlayerOne = await getBalance(accPlayerOne);
const afterPlayerTwo = await getBalance(accPlayerTwo);

console.log(`PlayerOne went from ${beforePlayerOne} to ${afterPlayerOne}.`);
console.log(`PlayerTwo went from ${beforePlayerTwo} to ${afterPlayerTwo}.`);
