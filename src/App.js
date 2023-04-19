import { useReducer } from 'react';
import Add from './components/Add';
import List from './components/List'
import './App.css';

const dummyData = [
  {
    id: 0, 
    name: 'Add your first to do',
    completed: false
  }
]

const itemReducer = (todos, action) => {
  switch(action.type) {
    
    //state updates here
    case 'addItem': {
      return [
        ...todos, 
        action.newItem
      ]
    }

    case 'delItem' : {
      return todos.filter(todo => todo.id != action.id);
    }

    case 'completeItem': {
      return todos.map((todo) => todo.id == action.id ? {...todo, completed: true} : todo )
    }

    case 'incompleteItem': {
      return todos.map((todo) => todo.id == action.id ? {...todo, completed: false} : todo )
    }

  }
}

function App() {

  const [todos, dispatch] = useReducer(itemReducer, dummyData);

  const handleAddItem = (item) => {
    dispatch({
      type: 'addItem', 
      newItem: item
    })
  }

  const deleteItem = (todoID) => {
    console.log('deleting')
    dispatch({
      type: 'delItem',
      id: todoID
    })
  }


  const completeItem = (todoID) => {
    dispatch({
      type: 'completeItem',
      id: todoID
    })
  }

  const incompleteItem = (todoID) => {
    dispatch({
      type: 'incompleteItem',
      id: todoID
    })
  }

  return (
    <div className="app w-25 m-auto">
      <h1 className='text-white mb-3 text-decoration-underline'>To do list</h1>
      <Add handleAddItem={handleAddItem}/>
      <List items={todos} handleDeleteItem={deleteItem} handleItemComplete={completeItem} handleItemIncomplete={incompleteItem}/>
    </div>
  );
}

export default App;
