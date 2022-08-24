'reach 0.1';
const [ isOutcome, pOne_Win, DRAW, pTwo_Win] = makeEnum(3);

const winner = (price, guessPlayerOne, guessPlayerTwo) => {
    if(guessPlayerTwo==guessPlayerOne)
    {
        return 1;
    }
    else if (guessPlayerTwo == price) 
    {
         return 0;
    }
    else if(guessPlayerOne == price)
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
  const PlayerOne = Participant('PlayerOne', {
    ...Player,
    wager: UInt,
    deadline: UInt, 
  });
  const PlayerTwo   = Participant('PlayerTwo', {
    ...Player,
    acceptWager: Fun([UInt], Null),
  });
  init();
  const informTimeout = () => {
    each([PlayerOne, PlayerTwo], () => {
      interact.informTimeout();
    });
  };
  PlayerOne.only(() => {
    const wager = declassify(interact.wager);
    const randomPlayerOne = declassify(interact.getRandomNumber());
    const deadline = declassify(interact.deadline);
  });
  PlayerOne.publish(wager,randomPlayerOne,deadline).pay(wager);;
  commit();

  PlayerTwo.only(() => {
    interact.acceptWager(wager);
    const randomPlayerTwo = declassify(interact.getRandomNumber());
  });
  PlayerTwo.publish(randomPlayerTwo).pay(wager).timeout(relativeTime(deadline), () => closeTo(PlayerOne, informTimeout));

  const price = (randomPlayerTwo+randomPlayerOne)/2;
  var outcome = DRAW;
  invariant( balance() == 2 * wager && isOutcome(outcome) );

  while ( outcome == DRAW ) {
    commit();
  PlayerOne.only(() => {
    const _guessPlayerOne = interact.getGuess();
    const [_commitPlayerOne, _saltPlayerOne] = makeCommitment(interact, _guessPlayerOne);
    const commitPlayerOne = declassify(_commitPlayerOne);
  });
  PlayerOne.publish(commitPlayerOne);
  commit();

  unknowable(PlayerTwo, PlayerOne(_guessPlayerOne, _saltPlayerOne));
  PlayerTwo.only(() => {
    const guessPlayerTwo = declassify(interact.getGuess());
  });
  PlayerTwo.publish(guessPlayerTwo).timeout(relativeTime(deadline), () => closeTo(PlayerOne, informTimeout));
  commit();
  PlayerOne.only(() => {
    const pPlayerOne = declassify(_saltPlayerOne);
    const guessPlayerOne = declassify(_guessPlayerOne);
  });
  PlayerOne.publish(pPlayerOne, guessPlayerOne).timeout(relativeTime(deadline), () => closeTo(PlayerTwo, informTimeout));;
  checkCommitment(commitPlayerOne, pPlayerOne, guessPlayerOne);
  outcome = winner(price, guessPlayerOne, guessPlayerTwo);
  continue;
}
  const            [forPlayerOne, forPlayerTwo] =
  outcome == 2 ? [       2,      0] :
  outcome == 0 ? [       0,      2] :
  [       1,      1];
  transfer(forPlayerOne * wager).to(PlayerOne);
  transfer(forPlayerTwo   * wager).to(PlayerTwo);
  commit();
  each([PlayerOne, PlayerTwo], () => {
    interact.seeOutcome(outcome,price);
  });
});
