// import logo from './logo.svg';
import './App.css';
// import { Footer } from 'react-bootstrap/lib/Modal';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import React, { useEffect, useState } from 'react'
import AddItem from './AddItem';
import SearchItem from './SearchItem';


function App() {
  const [items , setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || []);
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')

  useEffect(()=> {
    localStorage.setItem('shoppinglist', JSON.stringify(items));
  }, [items])

  function handleDelete(id){
    // console.log(id)
    const listItems = (items.filter((item)=> 
      id!== item.id
    ))
    setItems(listItems)
  }

 function handleCheck(id){
    const listItems = items.map((item) => item.id === id ? {...item, checked : !item.checked} : item)
    setItems(listItems)
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
  setItems(listItems)

}

  return (
    <div className="App">
      <Header />
      <AddItem 
          newItem = {newItem}
          setNewItem ={setNewItem}
          handleSubmit={handleSubmit}  
      />
      <SearchItem 
          search ={search}
          setSearch ={setSearch}
      />
      <Content 
        items ={items.filter(item => ((item.name).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck ={ handleCheck}
        handleDelete ={ handleDelete}
      />
      < Footer length = {items.length}/>
    </div>
  );
}

export default App;
