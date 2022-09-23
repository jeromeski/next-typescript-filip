class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// interface PersonUserInfo {
//   (name: string, age: number): string;
// }

type PersonUserInfo = (name: string, age?: number) => string;

// type Person = {
//   name: string;
//   age: number;
// };

// interface Person {
//   name: string;
//   age: number;
// }

export default function play() {
  const name = 'Jerome';
  const age = 42;
  // const name = true;
  // const age = false;

  const person = {
    name,
    age,
  };

  const getUserInfo: PersonUserInfo = (name: string, age: number): string => {
    const info = `${name} is ${age}`;
    return info;
  };

  function getUserInfo2(person: any) {
    const info = `${person.name} is ${person.age}`;
    return info;
  }

  function getUserInfo3(person: Person) {
    const info = `${person.name} is ${person.age}`;
    return info;
  }

  const getUserInfo4: PersonUserInfo = (
    name: string,
    age: number = 0
  ): string => {
    const info = `${name} is ${age}`;
    return info;
  };

  console.log(getUserInfo2(person));
  console.log(getUserInfo3(new Person('Edward', 42)));
  console.log(getUserInfo4('Jake'));
  const getUserData = getUserInfo(name, age);

  return getUserData;
}

const playTwo = () => {
  const strArr: string[] = ['a', 'b'];
  const numArr: Array<number> = [1, 2];

  /*
   *
   * ---------------
   *    NARROWING
   * ---------------
   */
  const randomNum = Math.random() > 0.5 ? 'hello' : [1, 2];
  if (typeof randomNum === 'string') {
    const transUpper = randomNum.toUpperCase();
    return transUpper;
  } else {
    return randomNum;
  }
};

console.log(playTwo());

/*
 * ===============
 *    EXTENDS
 * ===============
 */

interface Hero {
  hp: number;
  mp: number;
}

interface Warrior extends Hero {
  sword: string;
}

interface Mage extends Hero {
  staff: string;
}

const playThree = () => {
  const hero1: Warrior = {
    hp: 1000,
    mp: 500,
    sword: 'gladius',
  };
  console.log(hero1);

  const hero2: Mage = {
    hp: 500,
    mp: 1000,
    staff: 'staff of the zodiac',
  };

  console.log(hero2);
};

playThree();

/*
 * ===============
 *      UNION
 * ===============
 *
 *  vertical bar | <-- union sign
 */

type RaceCar = {
  name: string;
  topSpeed: number;
  team: string;
};

type CityCar = {
  name: string;
  space: string;
  topSpeed: 100;
};

// Union
type Car = RaceCar | CityCar;

function playFour() {
  // const logCarInfo = (car: RaceCar | CityCar) => {
  //   console.log(car)
  // }

  const car: RaceCar = {
    name: 'Formula 1',
    topSpeed: 200,
    team: 'RedBull',
  };
  const logCarInfo = (car: Car) => {
    console.log(car.name);

    switch (car.topSpeed) {
      case 200:
        console.log(car.team);
        break;
      default:
        console.log(car);
    }

    /*
     *  TYPE CASTING
     *  forcing typescipt to assign or cast a type to car
     */
    console.log((car as CityCar).space);
    console.log((<RaceCar>car).team);
  };
}

/*
@ -------------------------
@ INTERFACE TYPE NARROWING
@ -------------------------
*/

interface Champion {
  race: 'human' | 'elf' | 'orc';
}

interface Human extends Champion {
  race: 'human';
  plains: true;
}

interface Elf extends Champion {
  race: 'elf';
  forest: true;
}

/*
@ -------------------------
@    DECLARATION  MERGING
@ -------------------------
@ Refer to interface Champion above
*/

interface Champion {
  skills: [string, string];
}

type Archer = Human | Elf | { race: 'orc'; desert: true };

function playFive() {
  const getCharacterType = (champion: Archer): string => {
    if (champion.race === 'human') {
      console.log(champion.race);
      return champion.race;
    } else if (champion.race === 'elf') {
      console.log(champion.race);
      return champion.race;
    } else if (champion.race === 'orc') {
      console.log(champion.race);
      return champion.race;
    }
  };

  getCharacterType({
    race: 'human',
    plains: true,
    skills: ['farming', 'blacksmith'],
  });

  playFive();

  /*
@ -------------------------
@   NEVER USE CASE
@ -------------------------
@ 
*/

  type Drill = {
    withCharger: false;
  };

  type ImpactDrill = {
    withCharger: true;
  };

  type Grinder = {
    // withCharger: false
    rpm: 2000;
  };

  type PowerTools = Drill | ImpactDrill | Grinder;

  function playSix(tools: PowerTools) {
    switch (tools.withCharger) {
      case true:
        console.log('You got an impact drill');
        break;
      case false:
        console.log('You got a simple drill');
        break;
      default:
        // Developers wont be able to easily modify the code
        const _never: never = tools;
        return _never;
    }
  }

  playSix({ withCharger: true });

  /*
@--------------------------
@ SPECIFY GENERIC OBJECTS
@---------------------------
@
*/

  // const myUseGenericTypeFn = (someObj: {
  //   [key: string]: any;
  // }) => {

  const myUseGenericTypeFn = (someObj: {
    [key: string]: string | number | boolean;
  }) => {
    console.log(someObj);
  };
  myUseGenericTypeFn({
    genericKey1: true,
    genericKey2: 'Hello',
    genericKey3: 4,
  });
}

/*
@--------------------------
@ SPECIAL TYPE UNKNOWN
@---------------------------
@
*/

const babyToys = {
  buildingBlocks: 5,
  doll: true,
  toyCar: 'lambhorgini',
};
// any
const useUknownFn = (someObj: { [key: string]: unknown }) => {
  // console.log(someObj.doll.toUpperCase()); TypeError: someObj.doll.toUpperCase is not a function

  if (typeof someObj.doll === 'string') {
    console.log(`useUknownFn --> ${someObj.doll.toUpperCase()}`);
  }
};

useUknownFn(babyToys);
