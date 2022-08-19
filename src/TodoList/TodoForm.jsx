import React, { useState } from 'react'

export default function TodoForm({ addTodo }) {

    const [value, setValue] = useState("")

    const handleSubmit = (event) => {

        event.preventDefault()

        if (!value)
            return

        addTodo(value)
        setValue("")
    }

    return (

        <form onSubmit={handleSubmit}>

            <input
                type="text"
                className="input"
                placeholder="escreva aqui as tarefas"
                value={value}
                onChange={
                    (e) => {
                        setValue(e.target.value)
                    }
                }

            />

            <button className="bnt">Enviar</button>

        </form>
    )

}