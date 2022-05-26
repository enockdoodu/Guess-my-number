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
  Alice.publish(saltAlice, guessAlice).timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));;
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
