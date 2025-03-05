// function User(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// // function constructor

// const todo = {
//   title: "Buy milk",
//   description: "Buy 2% milk",
//   completed: false,
// };

// function createTodo(title, description, completed) {
//   return {
//     title: title,
//     description: description,
//     completed: completed,
//   };
// }

// for (let i = 0; i < 10; i++) {
//   //   const todo = createTodo(i, i + 2, true);
//   //   console.log(todo);
//   const user = new User("John" + i, "Doe" + i);
//   console.log(user);
// }

// function Slider(settings) {
//   this.sliderId = settings.id;
//   this.borderColor = settings.borderColor;
//   this.__count = 0;
//   const sliderEl = document.querySelector("#" + this.sliderId);

//   sliderEl.innerHTML = `
//    <div class="slider-item" style="border: 1px solid ${this.borderColor}">
//       <img src="https://picsum.photos/200/300" alt="slider-item">
//    </div>
//    `;

//   const btnNextEl = document.createElement("button");
//   btnNextEl.innerHTML = "Next";
//   sliderEl.appendChild(btnNextEl);

//   const nextClick = () => {
//     console.log("clicked on next ", this.sliderId);
//   };

//   btnNextEl.onclick = nextClick;
// }

// const obj = {
//   id: "slider2",
// };

// const obj2 = Object.create({});
// obj2.color = "red";
// console.log(obj2);

// const obj3 = new Object();
// obj3.color = "blue";
// console.log(obj3);

// const date = new Date();
// const date2 = new Date();
// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getMonth());
// const isAdmin = false;

// function pfoo(res, rej) {
//   //   res(1);
//   if (isAdmin) {
//     res(1);
//   } else {
//     rej("some big error");
//   }
// }

// //state 1. pending 2.fulfilled 3.rejected
// const p1 = new Promise(pfoo);

// console.log(p1);

// p1.then(function (d) {
//   console.log("data", d);
// }).catch(function (e) {
//   console.log("error", e);
// });

// const res = fetch("https://dummyjson.com/todos");

// console.log(res);

// res
//   .then(function (d) {
//     console.log("data", d);
//     const jsonData = d.json();
//     jsonData.then(function (dt) {
//       console.log("json data", dt);
//     });
//     console.log("json data", jsonData);
//   })
//   .catch(function (e) {
//     console.log("error", e);
//   });

const res2 = fetch("https://dummyjson.com/todos");
console.log(res2);

const jsonProm = res2.then((data) => {
  console.log("data", data);
  const jsonData = data.json();
  return jsonData;
});

console.log("jsonProm", jsonProm);

jsonProm.then((data) => {
  console.log("data mu", data);
  data.todos.forEach((todo) => {
    document.body.innerHTML += `<div>${todo.todo}</div>`;
  });
});

// const user = {
//   name: "John",
//   age: 20,
//   city: "New York",
// };
// const userToJson = JSON.stringify(user);

// console.log(userToJson);
