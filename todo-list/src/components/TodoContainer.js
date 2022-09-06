import React from 'react'
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from "./TodosList";
import {v4 as uuidv4} from 'uuid';
import { Route, Switch } from "react-router-dom"

import About from "../pages/About"
import NotMatch from "../pages/NotMatch"
import Navbar from './Navbar';

class TodoContainer extends React.Component{



    state ={
        todos:[]
    }

    handleChange = id => {
      this.setState(prevState => {
        return {
          todos: prevState.todos.map(todo => {
            if (todo.id === id) {
              return {
                ...todo,
                completed: !todo.completed,
              }
            }
            return todo
          }),
        }
      });

      localStorage.setItem("todoData", JSON.stringify(this.state.todos))
      };



      delTodo = id => {
        this.setState({
          todos: [
            ...this.state.todos.filter(todo => {
              return todo.id !== id;
            })
          ]
        });

        localStorage.setItem("todoData", JSON.stringify(this.state.todos))
      };


      addTodoItem = title =>{
        const newTodo = {
          id:uuidv4(),
          title:title,
          completed:false
        };
        this.setState({
          todos: [...this.state.todos, newTodo]
        });

        localStorage.setItem("todoData", JSON.stringify(this.state.todos))
      }


      setUpdate = (updateTitle, id) =>{
        this.setState({
          todos: this.state.todos.map(todo =>{
            if(todo.id == id){
              todo.title = updateTitle
            }
            return todo;
            
          }),
        });

        localStorage.setItem("todoData", JSON.stringify(this.state.todos))
      }


      componentDidMount(){
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)
        if (loadedTodos) {
          this.setState({
            todos: loadedTodos
          })
        }
      }


      componentDidUpdate(prevProps, prevState) {
        if(prevState.todos !== this.state.todos) {
          const temp = JSON.stringify(this.state.todos)
          localStorage.setItem("todos", temp)
        }
      }

    render(){
        return(

          <>
          <Navbar/>
          <Switch>
          <Route exact path="/">
            <React.Fragment>
              <div className="container">
                <div className="inner">
                <Header />
                <InputTodo addTodoProps={this.addTodoItem} />
                <TodosList todos={this.state.todos} 
                handleChangeProps={this.handleChange}
                deleteTodoProps={this.delTodo}
                setUpdate={this.setUpdate}
                />
                </div>
                </div>
           </React.Fragment>
           </Route>
           <Route path="/about">
            <About />
          </Route>
          <Route path="*">
            <NotMatch />
          </Route>
           </Switch>
           </>
        );
    }
}

export default TodoContainer