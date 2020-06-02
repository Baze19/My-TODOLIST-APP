import React, { Component } from 'react';
import Todoitem from './Todoitem'
import propTypes from 'prop-types'
class Todos extends Component {
 /* markComplete = () => {
    console.log('hello world')
  }*/
  render() {
    /*
    console.log(this.props.baze)
    return (
      <div>
        <h1>Todos</h1>

      </div>
    );*/
    return this.props.baze.map((todo) =>

      <Todoitem key={todo.id} abbey={todo} markComplete={this.props.markComplete} delTodo ={this.props.delTodo} />)
  }
  //props

}
Todos.propTypes = {
  baze: propTypes.array.isRequired,
  markComplete: propTypes.func.isRequired,
  delTodo: propTypes.func.isRequired,
}



export default Todos;
