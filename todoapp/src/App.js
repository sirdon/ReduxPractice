import React, { Component } from 'react'
import Todos from './component/Todos'
import AddTodo from './component/AddTodo'
class App extends Component {
  state={
    todos:[
    {content:"make your bed",id:1},
    {content:"brush your teeth",id:2},
    {content:"check updates",id:3}
  ]}
  deleteTodo = (id) =>{
      let todos = this.state.todos.filter(todo=>{
        return todo.id!==id;
      })
      this.setState({
        todos
      })
  }
  addTodo = (data)=>{
    data.id = parseInt(this.state.todos.length)+2;
    console.log(typeof(this.state.todos.length));
    let todos = [...this.state.todos,data]
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
      <h1 className="center blue-text"> Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}></Todos>
        <AddTodo  addTodo={this.addTodo}></AddTodo>
      </div>
    )
  }
}

export default App

