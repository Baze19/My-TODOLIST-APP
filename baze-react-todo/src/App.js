
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todos from './component/Todos'
import './App.css';
import Header from './component/layout/Header'
import Addtodo from './component/Addtodo/Addtodo'
//import { v4 as uuid } from "uuid"
import About from './component/pages/About'
import axios from 'axios'
class App extends Component {
  state = {
    todos: []
    //life cycle event that then is a promise which have a response
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_ limit = 10').then(res =>
     this.setState({todos:res.data}))
  }


//toggle complete
markComplete = (id) => {
  //console.log(id) then we want tochange or toggle with the shape below
  this.setState({
    todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })
  })
}
//delTodo
delTodo = (id) => {
  axios.delete(`https://jsonplaceholder.typicode.com/todos/ ${id}`)
  .then(res =>this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  )
}
//ADDTODO

Addtodo = (title) => {
 /* const newTodo = {
    id: uuid(),
    title: title,
    completed: false
  }*/
  axios.post('https://jsonplaceholder.typicode.com/todos',{
    title:title,
    complete :false
  })
  .then(res =>this.setState({ todos: [...this.state.todos, res.data] }))
  
}
render() {
  return (
    <Router>
      <div className="App">
        <div className='container'>
          <Header />
          <Route exact
            path="/" render={props => (
              <React.Fragment>
                <Addtodo addTodo={this.Addtodo} />
                <Todos baze={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )} />
          <Route exact path='/about' component={About} />

        </div>
      </div>
    </Router>
  );

}
}


export default App;
