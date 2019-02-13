import React  from 'react';
import './App.css';
import TodoList from './components/TodoComponents/TodoList';
//import SearchComponent from './components/TodoComponents/SearchComponent';
let generateId = Date.now();
const TodoItems = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Gym',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Cooking',
    id: 1528817084358,
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
      searchText: ''
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
  clearCompleted = () =>{
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
    this.setState({ [event.target.name]: event.target.value });
    if (this.state.searchText.length > 0) {
      this.searchList(event.target.value);
    }
  };
  toggoleCompleted = todo =>{
    this.setState(preState =>{
      const updatedList = preState.list.map(todoItem => {
        if (todoItem.todo ===todo){
          todoItem.completed = !todoItem.completed;
        }
        return todoItem;
      });
      return{
        list : updatedList
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
