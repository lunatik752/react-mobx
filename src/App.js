import React, {useState} from "react";
import {observer} from "mobx-react";
import {store} from "./store";


export function App(props)  {

    return (
        <div>
            {store.todoLists.map(tl => <TodoListView key={tl.id} todolist={tl}/>)}
        </div>
    );
}


const TodoListView = observer((props) =>  {

    const [taskTitle, setTaskTitle] = useState('')

    const onChangeHandle = (e) => {
        setTaskTitle(e.currentTarget.value)
    }

    const addTask = () => {
        // props.todolist.tasks.push(new Task(taskTitle))
        props.todolist.addTask(taskTitle)
        setTaskTitle('')

    }

    return (
        <div>
            <h1>{props.todolist.title}</h1>
            <input onChange={onChangeHandle} />
            <button onClick={addTask}>add task</button>
            <ul>
                {props.todolist.tasks.map(t => <li key={t.id}>{t.title}</li>)}
            </ul>
        </div>
    );
})
