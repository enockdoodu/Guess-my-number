import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

const startingBalance = stdlib.parseCurrency(100);
const accAlice = await stdlib.newTestAccount(startingBalance);
const accBob = await stdlib.newTestAccount(startingBalance);

const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());
const OUTCOME = ['Bob wins', 'Draw', 'Alice wins'];
const Player = (Who) => ({
    getRandomNumber:() =>{
        const randomNumber = Math.floor(Math.random());
        console.log(`${Who} gave Random number ${randomNumber}`);
        return randomNumber;
    },
    getGuess: () => {
      const guess = Math.floor(Math.random());
      console.log(`${Who} played ${guess}`);
      return guess;
    },
    seeOutcome: (outcome) => {
      console.log(`${Who} saw outcome ${OUTCOME[outcome]}`);
    },
  });
await Promise.all([
    ctcAlice.p.Alice({
        ...Player('Alice'),
      }),
      ctcBob.p.Bob({
        ...Player('Bob'),
      }),
]);