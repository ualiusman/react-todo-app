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


    render(){
        return(
        <form>
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