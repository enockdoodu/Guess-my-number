# [The Price is Right - tutorial](https://github.com/Ankita-0607/WWC_The_price_is_right/blob/main/tutorial.md)
### Women Who Code Bouny hack✨

The Price is Right is two player Dapp game developed as a part of Women Who Code Bounty Hack.
In this tutorial , we will learn step by step how I built the game on Reach platform.  
This assumes that you've completed the [tutorial](https://docs.reach.sh/tut/rps/#tut-1).

Please check if Reach is installed on you machine by typing following 
```sh
./reach version
```
Above command should print Reach version. 

Now Let's create directory first : 
```sh
mkdir /reach/thePriceIsRight
```
You should start off by initializing your Reach program:
```
$ ../reach init
```
#  Problem Analysis
The first step of designing any program is to perform problem analysis and determine what we have to do to successfully solve the problem. You should answer some questions concerning the design of the application to go through the same process I did while writing this project. You should also write your own answers in your Reach program (index.rsh) using a comment. /* Remember comments are written like this. */

- Who is involved in this application?
- What information do they know at the start of the program?
- What information are they going to discover and use in the program?
- What funds change ownership during the application and how?
 
Stop! Write down the problem analysis of this program as a comment.
Here's my answers to those questions:
- The Price is Right involves 2 roles: One player (Alice) who creates the game and a second player (Bob) who joins the game.
- At the start of the program, Alice would know the wager and the timeout limit (deadline) they set for that particular session.
- Bob would accept the wager and joins the Game
- Both player gives their guesses during course of the game
- Both player sees the Price at the end who is the winner. 
- The two players will pay the wager and the winner of the game would get paid both players' wagers as a reward.  

## Data Definition
For the next step, I am going to define the data type equivalents of the values I used in my answers from the previous section. Also, in this step I'll be deciding what functions our participants will have.

- What functions/values does Alice need to start the game?
- What functions/values does Bob need to join the game?
- What functions/values do the two players need to play guesses?
- What functions/values do the two players need to inform the contract of winner?
Now this gives us fair idea about what functions we would need and lets start preparing our index.rsh file with these functions. 
``` javascript
const Player = {
    ...hasRandom,
    getRandomNumber:Fun([], UInt),
    getGuess: Fun([], UInt),
    seeOutcome: Fun([UInt,UInt], Null),
    informTimeout: Fun([], Null),
  };
  
  [
  const Alice = Participant('Alice', {
    ...Player,
    wager: UInt,
    deadline: UInt, 
  });
  const Bob   = Participant('Bob', {
    ...Player,
    acceptWager: Fun([UInt], Null),
  });
  ]
```
We are going to represent the cost of the wager and the deadline with UInt (unsigned integer). Alice will set these two values after creating the contract. There is a function that gives Bob the choice of accepting or rejecting the wager set by Alice. The two participants have four (4) other functions in common that lets them do the following:
- getRandomNumber : This is to generate one random number so that contact can calculate random price. It will be system generated random number. 
- getGuess : This is to get guesses of both the players. 
- seeOutcome : This function is for both players to see outcome 
- informTimeout : This function informs timeout if one person does not submit their guess or just drops. 

## Communication Construction
Now we can design the structure of communication of our application. Try to write this part in accordance with what the flow of the contract would be from start to finish:

###### Stop! Write down the communication pattern for this program as comments.

1. Alice sets the wager and deadline and deploys the contract.
2. Bob accepts the wager and joins the game.
3. Contract takes in reandom number from both the players and generates price. 
4. Alice plays the price guess
5. Bob playes the price guess 
6. The contract compares both the gusses with price and defines winner 
7. If Both the guesses are same, they both again plays the guesses and this goes on as long as the result is obtained. 

The phrase "As long as" indicates a loop going on in the game. That means this game will go on as long as both players keep giving the same guesses. 

Main logic of our contract should now look like
```javascript
// Enum value that we use to represent the current outcome of the game
const [ isOutcome, B_WINS, DRAW, A_WINS ] = makeEnum(3);

// Function that computes the outcome by comapring guesses of both players with price
const winner = (price, guessAlice, guessBob) => {
    if(guessBob==guessAlice)
    {
        return 1;
    }
    else if (guessBob == price) 
    {
         return 0;
    }
    else if(guessAlice == price)
    {
         return 2;
    }
    else {
        return 1;
    }
  };
```
```javascript
// Get wager, random number and deadline from Alice. Alice pays the wager amount to the contract too.
  Alice.only(() => {
    const wager = declassify(interact.wager);
    const randomAlice = declassify(interact.getRandomNumber());
    const deadline = declassify(interact.deadline);
  });
  Alice.publish(wager,randomAlice,deadline).pay(wager);;
  commit();



// Bob accepts the wager and pays the wager amount to the contract. Also get random number from Bob
  Bob.only(() => {
    interact.acceptWager(wager);
    const randomBob = declassify(interact.getRandomNumber());
  });
  Bob.publish(randomBob).pay(wager).timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));

// Contact calculates price based on both random numbers. 
  const price = (randomBob+randomAlice)/2;

/** There will always be double of the wager amount in the contract since Alice and Bob 
 * both pay the wager into the contract before this point. 
 *  Also, the value of 'outcome' should always be one of B_WINS, A_WINS, CONTINUE or TERMINATE.
**/
 
  var outcome = DRAW;
  invariant( balance() == 2 * wager && isOutcome(outcome) )
  while ( outcome == DRAW ) {
    commit();
// Alice takes first turn by playing a move.
  Alice.only(() => {
    const _guessAlice = interact.getGuess();
    const [_commitAlice, _saltAlice] = makeCommitment(interact, _guessAlice);
    const commitAlice = declassify(_commitAlice);
  });
  Alice.publish(commitAlice);
  commit();

  unknowable(Bob, Alice(_guessAlice, _saltAlice));
// Bob goes next
  Bob.only(() => {
    const guessBob = declassify(interact.getGuess());
  });
  Bob.publish(guessBob) 
  commit();
  Alice.only(() => {
    const saltAlice = declassify(_saltAlice);
    const guessAlice = declassify(_guessAlice);
  });
  Alice.publish(saltAlice, guessAlice).timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));;
  checkCommitment(commitAlice, saltAlice, guessAlice);
  outcome = winner(price, guessAlice, guessBob);
  continue;
}
```
In the code, we defined the values that would represent the current outcome of our game using an enum (isOutcome).

We also defined a function (winner) that calculates the current outcome of the game by running a comparison of the gusses by both players. If either of the player's guess matches with the price, the respective player wins and game terminates. But if Both the players gives the same gusses, the outcome would be draw and in that case game continues. 

So far our code works. But we have not enforce timeout yet. Lets do that. 
```javascript
 const informTimeout = () => {
    each([Alice, Bob], () => {
      interact.informTimeout();
    });
  };
  ```
To implement the timeout, we will use the deadline value that Alice created the contract with.

The timeout will be enforced when -
- Bob is to pay the wager:
```javascript
Bob.only(() => {
    interact.acceptWager(wager);
    const randomBob = declassify(interact.getRandomNumber());
  });
  Bob.publish(randomBob).pay(wager).timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
```
- Bob makes his guess 
```javascript
Bob.only(() => {
    const guessBob = declassify(interact.getGuess());
  });
  Bob.publish(guessBob).timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
```
- Alices makes her guess 
```javascript 
Alice.only(() => {
    const saltAlice = declassify(_saltAlice);
    const guessAlice = declassify(_guessAlice);
  });
  Alice.publish(saltAlice, guessAlice).timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
 ```
In addition to this, we can crate a funciton to annonce winner 
```javascript 
  each([Alice, Bob], () => {
    interact.seeOutcome(outcome,price);
  });
 ```
With all this combined, our index.rsh file will look like this. 
```javascript 
'reach 0.1';
const [ isOutcome, B_WINS, DRAW, A_WINS ] = makeEnum(3);

const winner = (price, guessAlice, guessBob) => {
    if(guessBob==guessAlice)
    {
        return 1;
    }
    else if (guessBob == price) 
    {
         return 0;
    }
    else if(guessAlice == price)
    {
         return 2;
    }
    else {
        return 1;
    }
  };
const Player = {
    ...hasRandom,
    getRandomNumber:Fun([], UInt),
    getGuess: Fun([], UInt),
    seeOutcome: Fun([UInt,UInt], Null),
    informTimeout: Fun([], Null),
  };
  
export const main = Reach.App(() => {
  const Alice = Participant('Alice', {
    ...Player,
    wager: UInt,
    deadline: UInt, 
  });
  const Bob   = Participant('Bob', {
    ...Player,
    acceptWager: Fun([UInt], Null),
  });
  init();
  const informTimeout = () => {
    each([Alice, Bob], () => {
      interact.informTimeout();
    });
  };
  Alice.only(() => {
    const wager = declassify(interact.wager);
    const randomAlice = declassify(interact.getRandomNumber());
    const deadline = declassify(interact.deadline);
  });
  Alice.publish(wager,randomAlice,deadline).pay(wager);;
  commit();

  Bob.only(() => {
    interact.acceptWager(wager);
    const randomBob = declassify(interact.getRandomNumber());
  });
  Bob.publish(randomBob).pay(wager).timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));

  const price = (randomBob+randomAlice)/2;
  var outcome = DRAW;
  invariant( balance() == 2 * wager && isOutcome(outcome) );

  while ( outcome == DRAW ) {
    commit();
  Alice.only(() => {
    const _guessAlice = interact.getGuess();
    const [_commitAlice, _saltAlice] = makeCommitment(interact, _guessAlice);
    const commitAlice = declassify(_commitAlice);
  });
  Alice.publish(commitAlice);
  commit();

  unknowable(Bob, Alice(_guessAlice, _saltAlice));
  Bob.only(() => {
    const guessBob = declassify(interact.getGuess());
  });
  Bob.publish(guessBob).timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
  commit();
  Alice.only(() => {
    const saltAlice = declassify(_saltAlice);
    const guessAlice = declassify(_guessAlice);
  });
  Alice.publish(saltAlice, guessAlice).timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
  checkCommitment(commitAlice, saltAlice, guessAlice);
  outcome = winner(price, guessAlice, guessBob);
  continue;
}
  const            [forAlice, forBob] =
  outcome == 2 ? [       2,      0] :
  outcome == 0 ? [       0,      2] :
  /* tie      */ [       1,      1];
  transfer(forAlice * wager).to(Alice);
  transfer(forBob   * wager).to(Bob);
  commit();
  each([Alice, Bob], () => {
    interact.seeOutcome(outcome,price);
  });
});
```
That's all about contract. Now lets write our interactions. 
# Interaction :
Now that we have a complete contract, we can write the frontend. Since we'll be interacting with an API to play the actual The Price is Right game, using a web frontend library is a better choice. In our case it will be React. The code below was wrote using Typescript. For state management, the redux library was used.

Stop! Insert  `interact` calls to the [frontend](https://docs.reach.sh/model/#ref-model) into the program.
```javascript
import React from 'react';
import AppViews from './views/AppViews';
import DeployerViews from './views/DeployerViews';
import AttacherViews from './views/AttacherViews';
import { renderDOM, renderView } from './views/render';
import './index.css';
import * as backend from './build/index.main.mjs';
import { loadStdlib,ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
const intToOutcome = ['Bob wins!', 'Draw!', 'Alice wins!'];
const { standardUnit } = reach;
const defaults = { defaultFundAmt: '10', defaultWager: '3', standardUnit };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: 'ConnectAccount', ...defaults };
  }
  async componentDidMount() {
    console.log("component mounted");
    reach.setWalletFallback(reach.walletFallback({providerEnv:'TestNet',MyAlgoConnect}))
    const acc = await reach.getDefaultAccount();
    const balAtomic = await reach.balanceOf(acc);
    const bal = reach.formatCurrency(balAtomic, 4);
    this.setState({ acc, bal });
    if (await reach.canFundFromFaucet()) {
      this.setState({ view: 'FundAccount' });
    } else {
      this.setState({ view: 'DeployerOrAttacher' });
    }
  }
  async fundAccount(fundAmount) {
    await reach.fundFromFaucet(this.state.acc, reach.parseCurrency(fundAmount));
    this.setState({ view: 'DeployerOrAttacher' });
  }
  async skipFundAccount() { this.setState({ view: 'DeployerOrAttacher' }); }
  selectAttacher() { this.setState({ view: 'Wrapper', ContentView: Attacher }); }
  selectDeployer() { this.setState({ view: 'Wrapper', ContentView: Deployer }); }
  render() { return renderView(this, AppViews); }
}

class Player extends React.Component {
  random() { return reach.hasRandom.random(); }
  async getRandomNumber() { // Fun([], UInt)
    const randomNumber = Math.floor(Math.random() * 10);
    console.log("randomNumber"+randomNumber);
    return randomNumber;
  }
  async getGuess() { // Fun([], UInt)
    const guess = await new Promise(resolveGuessP => {
      this.setState({ view: 'GetGuess', playable: true, resolveGuessP });
    });
    this.setState({ view: 'WaitingForResults', guess });
    return guess;
  }
 
  seeOutcome(i,price) { 
    this.setState({ view: 'Done', outcome: intToOutcome[i], price: ""+price }); 
  }
  informTimeout() { this.setState({ view: 'Timeout' }); }
  playGuess(guess) { this.state.resolveGuessP(guess); }
}

class Deployer extends Player {
  constructor(props) {
    super(props);
    this.state = { view: 'SetWager' };
  }
  setWager(wager) { this.setState({ view: 'Deploy', wager }); }
  async deploy() {
    const ctc = this.props.acc.contract(backend);
    this.setState({ view: 'Deploying', ctc });
    this.wager = reach.parseCurrency(this.state.wager); // UInt
    this.deadline = { ETH: 10, ALGO: 100, CFX: 1000 }[reach.connector]; // UInt
    backend.Alice(ctc, this);
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
    this.setState({ view: 'WaitingForAttacher', ctcInfoStr });
  }
  render() { return renderView(this, DeployerViews); }
}
class Attacher extends Player {
  constructor(props) {
    super(props);
    this.state = { view: 'Attach' };
  }
  attach(ctcInfoStr) {
    const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr));
    this.setState({ view: 'Attaching' });
    backend.Bob(ctc, this);
  }
  async acceptWager(wagerAtomic) { // Fun([UInt], Null)
    const wager = reach.formatCurrency(wagerAtomic, 4);
    return await new Promise(resolveAcceptedP => {
      this.setState({ view: 'AcceptTerms', wager, resolveAcceptedP });
    });
  }
  termsAccepted() {
    this.state.resolveAcceptedP();
    this.setState({ view: 'WaitingForTurn' });
  }
  render() { return renderView(this, AttacherViews); }
}

renderDOM(<App />);

```

# Discussion 
Congrats for making it to the end of the tutorial. You succeeded in implementing the The Price is Right game to run on the blockchain all by yourself!

The same concept can be implemented for a wide variety of board games like chess, checkers, backgammon etc.

If you found this tutorial rewarding, please let us know on the [Discord](https://discord.com/invite/AZsgcXu) community! See you around 😉

