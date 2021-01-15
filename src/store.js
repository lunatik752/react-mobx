import {action, observable, runInAction} from "mobx";

export class Task {
    id = Math.random()
    title = ''
    finished = false

    constructor(title) {
        this.title = title
    }
}

class Todolist {
    title = ''
    id = Math.random()
    @observable tasks = []

    constructor(title) {
        this.title = title
    }

    addTask(taskTitle) {
        let newTask = new Task(taskTitle)

        setTimeout(() => {
          runInAction(() => {
                this.tasks.push(newTask)
            })
        },1000)

    }

    getTasks() {
        return this.tasks
    }
}

class Store {
    @observable todoLists = []
}

let todolist1 = new Todolist('tech')
let todolist2 = new Todolist('hobbies')

todolist1.addTask( 'mobx')
todolist2.addTask('read')


export let store = new Store()
store.todoLists.push(todolist1)
store.todoLists.push(todolist2)


