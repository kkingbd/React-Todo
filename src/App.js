import React  from 'react';
import './App.css';
import ToDoList from './components/TodoComponents/TodoList';
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
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state ={};
  }
  submitForm(e){
    e.preventDefault();
  }
  render() {
    return (
      <div class= 'container'>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}  

export default App;
