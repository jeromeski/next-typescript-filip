/*
@--------------------------
@ SPECIAL TYPE VOID
@---------------------------
@
*/

type Noop = () => any;
type Noop2 = () => void;

function play1(x: Noop) {
  const result = x();
  console.log(result);
}

function play2(x: Noop2) {
  const result = x();
  console.log(result);
}

const x = () => 'BAZZ';

play1(x);
play2(x);
