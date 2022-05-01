'reach 0.1';
const winner = (price, guessAlice, guessBob) => {
    if (guessBob == price) 
    {
         return 2;
    }
    else if(guessAlice == price)
    {
         return 0;
    }
    else {
        return 1;
    }

  };
const Player = {
    getRandomNumber:Fun([], UInt),
    getGuess: Fun([], UInt),
    seeOutcome: Fun([UInt], Null),
  };
  
export const main = Reach.App(() => {
  const Alice = Participant('Alice', {
    ...Player,
  });
  const Bob   = Participant('Bob', {
    ...Player,
  });
  init();
  Alice.only(() => {
    const randomAlice = declassify(interact.getRandomNumber());
  });
  Alice.publish(randomAlice);
  commit();
  Bob.only(() => {
    const randomBob = declassify(interact.getRandomNumber());
  });
  Bob.publish(randomBob);
  commit();

  const price = ((randomBob+randomAlice)*randomBob)/randomAlice
  
  Alice.only(() => {
    const guessAlice = declassify(interact.getGuess());
  });
  Alice.publish(guessAlice);
  commit();

  Bob.only(() => {
    const guessBob = declassify(interact.getGuess());
  });
  Bob.publish(guessBob);
  const outcome = winner(price, guessAlice, guessBob);
  commit();
  each([Alice, Bob], () => {
    interact.seeOutcome(outcome);
  });
});