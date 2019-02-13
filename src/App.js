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

  render() {
    return (
      <div className= 'container'>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}  

export default App;
