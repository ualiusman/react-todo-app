import React from "react";
import { FaPlusCircle } from "react-icons/fa"
class InputTodo extends React.Component{

    state = {
        title: "",
      }
      onChange = e => {
        this.setState({
          [e.target.name]: e.target.value,
        })
      }

      handleSubmit = e => {
        e.preventDefault();
        if(this.state.title.trim()){
        this.props.addTodoProps(this.state.title);
        this.setState({
          title: ""
        });
      }else{
        alert('Please write item');
      }

      };




    render(){
        return(
        <form onSubmit={this.handleSubmit} className="form-container">
         <input
         type="text"
         placeholder="Add todo..."
         className="input-text"
         value={this.state.title}
         name="title"
         onChange={this.onChange}
         placeholder="Add Todo..." />
            <button className="input-submit">
            <FaPlusCircle />
            </button>
        </form>

        );
    }
}

export default InputTodo