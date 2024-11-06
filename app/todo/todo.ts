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


function listTodos(): void{
    const todos: Todo[]=getTodos();

    todos.forEach(todo=>{
        console.log(`Todo: ${todo.id} ${todo.task}`);
    })
};


// save as json file pass the todos and return nothing
function saveTodos(todos: Todo[]): void{
fs.writeFileSync(todosPath, JSON.stringify(todos))
};

function removeTodo(id: number): void{

    const todos: Todo[] = getTodos();

    // get the index of the todos
    const index = todos.findIndex(function(todo){
        return todo.id === id;

    });

    if(index === -1){
        console.log(`Could not find todo with id ${id}`);
        return;
    }

    // take one item out with slice method
    const removedTodo = todos.splice(index,1)[0];
    console.log(`Removed todo ${removedTodo.id}: ${removedTodo.task}`)


}

function addTodo(task:string): void{
    const todos: Todo[] = getTodos();

    // if there is no todos the id is 1, otherwise add the length id +1
const id= todos.length >0 ? todos[todos.length -1].id +1: 1;

todos.push({id, task})
saveTodos(todos);
console.log(`Added todo ${id}:${task}`)
};

function cli(): void{

    const subcommand = process.argv[2];
    const options = process.argv.slice(3)
  

  switch (subcommand){
   case "--help":
        console.log("todo add TASK   add todo");
        console.log("todo done ID    complete a todo");
        console.log("todo list TASK  list todo");
        break;

    case "add":
        // only add a task if the command line involves more than one do nothing
        if(options.length === 1){
            addTodo(options[0])
        }
        else{
            console.log("Invalid options")
        }
        break;

    case "done":
        
          if(options.length === 1){
           const id = parseInt(options[0]);
           if(isNaN(id)){
            console.log(`Option must be a number for subcommand "Done"`)
           } else{
            removeTodo(id)
           }
        }
        else{
              console.log(`Option must be a number for subcommand "Done"`)
        }
        break;
    case "list":
        if(options.length=== 0){
            listTodos();

        }else{
           console.log(`Option must be a number for subcommand "List"`)  
        }
        break;
    default:
         console.log("Option must be a number for subcommand") 


}
  }



cli();
