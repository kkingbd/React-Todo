import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
 
const TodoList = props =>{
    
    return(
        <div>
            <Todo list ={props.list} toggleCompleted={props.toggleCompleted} />
            <TodoForm 
                list={props.list}
                 handleChanges={props.handleChanges}
                 submitForm={props.submitForm}
                 addingTask={props.addingTask}
                 clearCompleted={props.clearCompleted}                  
            />
        </div>

    );
}
export default TodoList;