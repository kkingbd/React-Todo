import React  from 'react';
import './App.css';
import TodoList from './components/TodoComponents/TodoList';
let generateId = Date.now();
const TodoItems = [
  {
    task: 'Organize Garage',
    id: generateId,
    completed: true
  },
  {
    task: 'Bake Cookies',
    id: generateId+1,
    completed: false
  },
  {
    task: 'Gym',
    id: generateId+2,
    completed: true
  },
  {
    task: 'Cooking',
    id: generateId+3,
    completed: false
  }
];

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      list: TodoItems,
      shownList: TodoItems,
      addingTask: '',
      id: '',
      completed: '',
    };
  }

  submitForm = event =>{
    event.preventDefault();
    this.setState({
      list: [...this.state.list,
        { task : this.state.addingTask, id: generateId, completed: false}
      ],
      addingTask: ''
    });
  };
  clearCompleted = (e) =>{
    e.preventDefault()
    this.setState(preState =>{
      const clearedList = preState.list.filter(
        todoItem => !todoItem.completed
      );
      return {
        list:  clearedList
      };
    });
  }
  handleChanges = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
    if (this.state.completed.length > 0) {
      this.searchList(event.target.value);
    }
  };
  toggleCompleted = task => {
    this.setState(previousState => {
      const updatedList = previousState.list.map(toDoItem => {
        if (toDoItem.task === task) {
          toDoItem.completed = !toDoItem.completed;
        }
        return toDoItem;
      });
      return {
        list: updatedList
      };
    });
  };

  render() {
    return (
      <div className= 'container'>
        <h2>Welcome to your Todo App!</h2>
        <p> Your todo lists are below: </p>
        <TodoList
          list=  {this.state.list} 
          handleChanges={this.handleChanges}
          submitForm={this.submitForm}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}      
        />
      </div>
    );
  }
}  
export default App;
