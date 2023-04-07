// import logo from './logo.svg';
import './App.css';
// import { Footer } from 'react-bootstrap/lib/Modal';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import React, { useState } from 'react'
import AddItem from './AddItem';


function App() {
  const [items , setItems] = useState( [
    {
      id:1,
      name:'carrot',
      checked: false
    },
    {
      id:2,
      name:'tomato',
      checked: false
    },
    {
      id:3,
      name:'potato',
      checked: false
    },
    {
      id:4,
      name:'apple',
      checked: false
    }
  ])

  const [newItem, setNewItem] = useState('')

  function setupAndSaveItem(newListItems){
    setItems(newListItems)
    localStorage.setItem('shoppinglist', JSON.stringify(newListItems));
  }
  
  function handleDelete(id){
    // console.log(id)
    const listItems = (items.filter((item)=> 
      id!== item.id
    ))
    setupAndSaveItem(listItems)
  }

 function handleCheck(id){
    const listItems = items.map((item) => item.id === id ? {...item, checked : !item.checked} : item)
    setupAndSaveItem(listItems)
 }

 const handleSubmit= (e)=>{
  e.preventDefault(); 
  //addItem
  addItem(newItem)
  setNewItem('')
}

const addItem =(newItem) => {
  const itemId = items.length ? items[items.length-1].id +1 : 1;
  const myNewItem = {id:itemId , name:newItem, checked : false};
  const listItems = [...items, myNewItem]
  setupAndSaveItem(listItems)

}

  return (
    <div className="App">
      <Header />
      <AddItem 
          newItem = {newItem}
          setNewItem ={setNewItem}
          handleSubmit={handleSubmit}  
      />
      <Content items = {items}
        handleCheck ={ handleCheck}
        handleDelete ={ handleDelete}
      />
      < Footer length = {items.length}/>
    </div>
  );
}

export default App;
