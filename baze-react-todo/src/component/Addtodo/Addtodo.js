import React,{Component} from 'react'
import propTypes from 'prop-types'
export class Addtodo  extends Component {
    state={
        title:''
    }
    onSubmit = (e) =>{
        e.preventDefault()
        this.props.addTodo(this.state.title)
        this.setState({title:''})
    }
    onChange = (e) => this.setState({[e.target.name]: e.target.value})
   
    render() {
        return(
            <form onSubmit ={this.onSubmit} style ={{display:'flex'}}>
                <input 

                type="text"
                 name = "title" 
                 placeholder="Add todo 
                 ..."
                 style={{flex:'10', padding:'5px'}}
                     value = {this.state.title}
                     onChange={this.onChange}>
                 </input>
                 <input 
                 className="btn"
                 
                 type="submit"
                  value="submit"
                  style={{flex:'1'}}></input>
            </form>
        )
    }
    
    }
    //propTypes
    Addtodo.propTypes = {
        addTodo:propTypes.func.isRequired
}
 export default Addtodo;