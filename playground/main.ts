// interface PersonUserInfo {
//   (name: string, age: number): string;
// }

type PersonUserInfo = (name: string, age: number) => string;

// type Person = {
//   name: string;
//   age: number;
// };

interface Person {
  name: string;
  age: number;
}

export default function play() {
  const name = 'Jerome';
  const age = 42;
  // const name = true;
  // const age = false;

  const person: Person = {
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

  console.log(getUserInfo2(person));
  console.log(getUserInfo3(person));
  const getUserData = getUserInfo(name, age);

  return getUserData;
}