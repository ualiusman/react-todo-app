import React from "react";

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
        this.props.addTodoProps(this.state.title);
      };

      addTodoItem = title =>{
        console.log(title);
      }


    render(){
        return(
        <form onSubmit={this.handleSubmit}>
         <input
         type="text"
         placeholder="Add todo..."
         value={this.state.title}
         name="title"
         onChange={this.onChange}
         placeholder="Add Todo..." />
            <button>Submit</button>
        </form>

        );
    }
}

export default InputTodo