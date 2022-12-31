import {useState } from "react";
import Nav from "./components/Nav";
import Image from "./components/image";
import Dict from "./components/Dict";
import Footer from "./components/Footer";

import './styles/main.css'

function App() {
  // Variable Declaration
  const [word, setWord] = useState('Dictionary')
  const [val, setVal] = useState('')
  var data = []
  const [definition, setDef] = useState('')
  const [dictphonetic,setphon]= useState('')
  const [bool, setBool] = useState(false)


  //Search Functions

  var url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
  const getWorddata = async ()=>{
    const api = await fetch(url);
    data = await api.json()
    setphon(data[0].phonetic)
    setDef(data[0].meanings[0].definitions[0].definition)
  }
  function search(text){
    setWord(val)
    setBool(true)
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
      <button onClick={search}>Submit</button>
    </div>
    <div className="container">
      <Image id = {word} />
      <Dict  bool = {bool} word = {word} phonetic = {dictphonetic} def = {definition}/>
    </div>
    <Footer />
    </>
  );
}

export default App;