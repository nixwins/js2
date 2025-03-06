//'https://dummyjson.com/todos'
//1. Task сделать запрос на получение данных и сохранить в переменную todos
//2. Task вывести данные в консоль
//3. вывести todos[i].tod через createElement в <ul><li>{{todo}}</li></ul>
//4. вывести todos[i].completed через createElement (li > span)
//5 вывести li> buttton по нажатию на которыц будет удаляться li и с массива todos

let todos = fetch('https://dummyjson.com/todos');

console.log(todos);

todos.then((res)=>{
      console.log(res);
      let result = res.json();
      return result;
}).then((resp)=>{
      console.log(resp);
      toDoRender(resp.todos)
})

let appEL = document.querySelector('#app');
let ulEl = document.createElement('ul');

appEL.append(ulEl);


function toDoRender (todos){
      todos.forEach( todo => {
            console.log(todo);
            renderLi(todo)
                 });
}

function renderLi (todo){
      let liEl = document.createElement('li')
      ulEl.appendChild(liEl);
      liEl.innerText = todo.todo
     renderSpan(liEl,todo.completed)
     btnCreate(liEl)

}

function renderSpan (liEl,status){
      let spanEl = document.createElement('span');
      liEl.appendChild(spanEl);
      spanEl.innerText = status
}

function btnCreate (liEl){
      let deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Delete";
      liEl.appendChild(deleteBtn);
      deleteBtn.onclick = ()=>{
        ulEl.removeChild(liEl);    
      }

}
