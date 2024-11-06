import fs from "fs";


const todosPath = "todos.json";


interface Todo {
    id: number,
    task:string
}

// get the todos if it exist
function getTodos(): Todo[]{

if(!fs.existsSync(todosPath)){
    
    return [];
}
const data = fs.readFileSync(todosPath);
return JSON.parse(data.toString()) as Todo[];

};


function listTodos(): void{};


// save as json file pass the todos and return nothing
function saveTodos(todos: Todo[]): void{
fs.writeFileSync(todosPath, JSON.stringify(todos))

};
function removeTodo(id:number):void{};

function addTodo(task:string): void{
    const todos: Todo[] = getTodos();

    // if there is no todos the id is 1, otherwise add the length id +1
const id= todos.length >0 ? todos[todos.length -1].id +1: 1;

todos.push({id, task})
};

function cli(): void{};
