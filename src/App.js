import React from 'react';
import './App.css';
import Listitem from './Listitem';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash); 

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items: [],
      currentitem: {
        text: "",
        key: ''
      }
    }
    this.handelinput = this.handelinput.bind(this);
    this.additem = this.additem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  };


  handelinput(e){
    this.setState({
        currentitem:{
          text: e.target.value,
          key: Date.now()
        }
    })
  };


  additem(){
    const newItem = this.state.currentitem;
    if(newItem.text !== ''){
      const newitems = [...this.state.items, newItem];
      this.setState({
        items: newitems,
        currentitem:{
          text: '',
          key: ''
        }
      })
    }
  };

  deleteItem(key){
    const filteredItems = this.state.items.filter(item => item.key !==key);
    this.setState({
      items: filteredItems
    })
  };

  setUpdate(value, key){
      const items = this.state.items;
      items.map(item=>{
        if(item.key===key){
          item.text = value;
        }
      })
      this.setState({
        items: items 
      })
  }
  render(){
    return(
        <div className="App">
        <header>
          <div id="to-do-form">
            <input type="text" placeholder="Add an item" value={this.state.currentitem.text} onChange = {this.handelinput}/>
            <button onClick={this.additem}>Add</button>
          </div>
        </header>
        <Listitem items = {this.state.items} deleteItem = {this.deleteItem} setUpdate = {this.setUpdate}/>
        </div>     
    );
  }
}
export default App;