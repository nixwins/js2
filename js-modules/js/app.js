import { sliderInit } from "./slider.js";
import { modalInit, myAlert } from "./modal.js";

sliderInit();
modalInit();

const btnEl = document.querySelector("#btn");

btnEl.onclick = myAlert;

const user = {
  name: "John",
  age: 20,
  city: "New York",
  country: "USA",
  doLogin: function () {
    console.log("Login");
  },
};

// const { name } = user; // destructuring const name = user.name
// const name = user.name;
// const age = user.age;

const { name, age, country } = user;
const doLogin = user.doLogin;
// const {id, name} = route.query
doLogin();
console.log(age, name, country);

const fullName = "John Doe";
const password = "123456";
const person = { fullName, password }; // {fullName: fullName, password: password}

console.log(person);
