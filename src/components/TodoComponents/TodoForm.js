import React from 'react';


const TodoForm = props =>{
    return(
        <div>
            <form onSubmit = {props.submitForm}>
                <input
                   onChange={props.handleChanges} 
                    value={props.addingTask}
                    type="text"
                    name="addingTask"
                    placeholder="...todo"
                         
                />
                <button> Add Todo </button>

                <button className="clear-button" onClick={props.clearCompleted}>
                Clear Completed </button>
            </form>
        </div>
    );
}

export default TodoForm;