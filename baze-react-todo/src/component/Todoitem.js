import React, { Component } from 'react'
import propTypes from 'prop-types'
export class Todoitem extends Component {
    getStyle = () => {
        return {
            background: 'darkgrey',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.abbey.completed ? 'line-through' : 'none'
        }
        /*  if (this.props.abbey.completed) {
              return { textDecoration: 'line-through' }
          }
          else {
              return { textDecoration: 'none' }
          }*/
    }
    /*
    markComplete = (e) => {
        console.log(this.props)
    }*/
    render() {
        //destructuring the props.abbey that is the array that was maped and shown below
        const{id,title}=this.props.abbey
        return (
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}></input>{''}
                {title}
                <button style = {stylebtn} onClick = {this.props.delTodo.bind(this,id)}>x</button>
            </div>
        )
    }

}
Todoitem.propTypes = {
    abbey: propTypes.object.isRequired,
    markComplete: propTypes.func.isRequired,
    delTodo:propTypes.func.isRequired
}
 const stylebtn = {
     background:'#ff0000',
     color: '#fff',
     padding:'5px 9px',
     cursor :'pointer',
     border : 'none',
     borderRadius:'50%',
     float:'right'
 }
export default Todoitem;