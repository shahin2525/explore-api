const user = {
  id: 41010,
  contact: 102453,
  profession: "student",
  friends: ["rakib", "sakib", "simul", "fikir"],

  bookList: {
    bangla: 2,
    english: 3,
    math: 5,
    physics: 1,
  },
};
const json = JSON.stringify(user);
const jsObject = JSON.parse(json);
console.log(jsObject);
