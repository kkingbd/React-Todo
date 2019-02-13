import React, { Fragment } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
//import SearchComponent from './SearchComponent';


// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
 
const TodoList = props =>{
    return(
        <Fragment>
            <Todo list ={props.list} toggleCompleted={props.toggleCompleted} />
            <TodoForm 
                list={props.list}
                handleChanges={props.handleChanges}
                submitForm={props.submitForm}
                addingTask={props.addingTask}
                clearCompleted={props.clearCompleted}   
            />
        </Fragment>

    );
}

export default TodoList;