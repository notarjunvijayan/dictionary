import {useState } from "react";
import Nav from "./components/Nav";
import Image from "./components/image";
import Dict from "./components/Dict";

import './styles/main.css'

function App() {
  // Variable Declaration
  const [word, setWord] = useState('Dictionary')
  const [val, setVal] = useState('')
  var data = []
  const [definition, setDef] = useState('')
  const [dictphonetic,setphon]= useState('')
  //Search Functions

  var url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
  const getWorddata = async ()=>{
    const api = await fetch(url);
    data = await api.json()
    setphon(data[0].phonetic)
    setDef(data[0].meanings[0].definitions[0].definition)
    console.log(data)
  }
  function search(text){
    setWord(val)
    url = url + val
    getWorddata()
  }
  function textchange(event){
    setVal(event.target.value)
  }
  
  
  return (
    <>
    <Nav />
    <div className="input"> 
      <input type='text' placeholder="Enter Text to search" value={val} onChange={textchange}/>
      <button onClick={search}>Click Me</button>
    </div>
    <div className="container">
      <Image id = {word} />
      <Dict  word = {word} phonetic = {dictphonetic} def = {definition}/>
    </div>
    </>
  );
}

export default App;