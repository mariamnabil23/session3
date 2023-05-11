import { useState } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Guest from './components/Guest';
import List from './components/List';
import ProductList from './components/ProductList';

function App() {
  const [loggin , setloggin] = useState(false);
  // let element;
  // if(loggin){
  //   element = <h1>i'm loggedIn</h1>
  // }else{
  //   element = <h1>i'm not loggedIn</h1>
  // }
  //OR loggin? element = <h1>i'm loggedIn</h1> : element = <h1>i'm not loggedIn</h1>

  const[counter , setcounter] = useState(0);
  return (
    <div className="App">
      {/* <button onClick={()=>{
        setloggin(true)
      }}>click</button>
      {element} */}

      {/* <button onClick={()=>{
        setloggin(true)
      }}>login</button>
      {loggin? <Welcome name="mariam" /> : <Guest name="mariam" />}

      <List /> */}

      <ProductList />

      <button onClick={ ()=>{
        setcounter(counter +1)
      }}>click here</button>
    </div>
  );
}

export default App;
