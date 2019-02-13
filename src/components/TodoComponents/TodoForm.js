import React from 'react';


const TodoForm = props =>{
    return(
        <div>
            <form onSubmit = {props.submitForm}>
                <input
                    value={props.addingTask}
                    type="text"
                    name="addingTask"
                    placeholder="Input new task"
                    onChange={props.handleChanges}      
                />
                <button> Add Todo </button>

                <button className="clear-button" onClick={props.clearCompleted}>
                Clear Completed </button>
            </form>
        </div>
    );
}

export default ToDoForm;