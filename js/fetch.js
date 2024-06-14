const getData = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayData(data));
};

const displayData = (users) => {
  const usersContainer = document.getElementById("user-container");
  for (const user of users) {
    console.log(user);

    // usersContainer.classList.add("users");
    const ul = document.createElement("ul");
    ul.classList.add("users");

    ul.innerHTML = `
    <h4>${user.name}</h4>
    <h3>${user.phone}</h3>
    <h3>${user.email}</h3>
    `;
    usersContainer.appendChild(ul);
  }
};

getData();
