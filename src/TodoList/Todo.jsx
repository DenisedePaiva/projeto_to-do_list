export default function Todo ({todo, index, completeTodo, removeTodo}){

    return(
        
        <div
            className="todo"
            style={{textDecoration: todo.isCompleted ? "line-through" : ""}}
        >
            {todo.text}
            <div>
                <button  className ="btt" onClick={() => completeTodo(index)}>Completo</button>
                <button  className ="botao"onClick={() => removeTodo(index)}>X</button>

            </div>

        </div>
    )


}