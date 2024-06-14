const array = [10, 20, 22, 11, 25];

const [a, b, ...d] = array;
// console.log(a, b, d);

const object = {
  name: "rakik",
  id: "aa41",
  age: 25,
  isSingle: true,
  contact: 12455656,
  profession: "student",
};

// const { name, age, ...rest } = object;
const { name, age, ...rest } = object;
console.log(rest);

// console.log(newObjct);
const friends = [
  {
    name: "rakik",
    id: "aa41",
    age: 25,
    isSingle: true,
    contact: 12455656,
    profession: "student",
  },
  {
    name: "rabi",
    id: "aa41",
    age: 30,
    isSingle: false,
    contact: 12455656,
    profession: "student",
  },
  {
    name: "saki",
    id: "aa41",
    age: 35,
    isSingle: false,
    contact: 12455656,
    profession: "student",
  },
  {
    name: "semul",
    id: "aa41",
    age: 45,
    isSingle: true,
    contact: 12455656,
    profession: "student",
  },
];
const friendNames = friends.filter((f) => f.age > 30);
// console.log(friendNames);
