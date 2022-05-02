import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

const startingBalance = stdlib.parseCurrency(100);
const accAlice = await stdlib.newTestAccount(startingBalance);
const accBob = await stdlib.newTestAccount(startingBalance);

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));
const beforeAlice = await getBalance(accAlice);
const beforeBob = await getBalance(accBob);

const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());
const OUTCOME = ['Bob wins', 'Draw', 'Alice wins'];


const Player = (Who) => ({
    ...stdlib.hasRandom, 
    getRandomNumber:() =>{
        const randomNumber = Math.floor(Math.random()*10);
        console.log(`${Who} gave Random number ${randomNumber}`);
        return randomNumber;
    },
    getGuess: () => {
      const guess = Math.floor(Math.random()*10);
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
    ctcAlice.p.Alice({
      ...Player('Alice'),
      wager: stdlib.parseCurrency(5),
      deadline: 10,
    }),
    ctcBob.p.Bob({
      ...Player('Bob'),
      acceptWager: async (amt) => { // <-- async now
        if ( Math.random() <= 0.5 ) {
          for ( let i = 0; i < 10; i++ ) {
            console.log(`  Bob takes his sweet time...`);
            await stdlib.wait(1);
          }
        } else {
          console.log(`Bob accepts the wager of ${fmt(amt)}.`);
        }
      },
    }),
  ]);
const afterAlice = await getBalance(accAlice);
const afterBob = await getBalance(accBob);

console.log(`Alice went from ${beforeAlice} to ${afterAlice}.`);
console.log(`Bob went from ${beforeBob} to ${afterBob}.`);
