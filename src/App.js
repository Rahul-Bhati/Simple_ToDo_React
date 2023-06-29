import React, { useState } from "react";
import List from "./Components/list";

function App() {
  const [item,setItem] = useState();
  const [items, setItems] = useState([]);

  const updateItem = (e) => {
    setItem(e.target.value);
  }

  const updateItems = () => {
    setItems((oldItem) => {
      return [...oldItem, item] ;
    });
    setItem("") ;
  }

  const deleteItem = (id) => {
    // alert(`Are you sure you want to delete ${id}`);
    setItems((oldItem) => {
      return oldItem.filter((value, index) => {
        return index !== id 
      });
    });
  }

  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br/>
          <h1>ToDo List</h1>
          <br/>
          <input type='text' placeholder='add a item to the list' value={item} onChange={updateItem}/>
          <button onClick={updateItems}>+</button>

          <ol>
            {items.map((val , key) => {
              // return <li key={key} >{val}</li>
              return (<List key={key} itemVal={val} id={key} onSelect={deleteItem}/>)
            })}
          </ol>
        </div>
      </div>
      
    </>
  );
}

export default App;
