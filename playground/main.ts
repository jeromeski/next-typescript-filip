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

  // narrowing
  const randomNum = Math.random() > 0.5 ? 'hello' : [1, 2];
  if (typeof randomNum === 'string') {
    const transUpper = randomNum.toUpperCase();
    return transUpper;
  } else {
    return randomNum;
  }
};

console.log(playTwo());

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
