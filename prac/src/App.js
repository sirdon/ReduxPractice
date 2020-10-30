import React, { Component } from 'react'

import './App.css';
import Even from './component/event';
import Fun from './component/Fun';
import AddForm from './component/AddForm';
class App extends Component {
  state={
    ninjas:[
      {name:"madan",age:26,color:"black",id:1},
      {name:"makhan",age:23,color:"green",id:2},
      {name:"murli",age:24,color:"red",id:3}
    ]
  }
  addData =(data)=>{
      data.id = parseInt(this.state.ninjas.length)+1;
     
      console.log(data);
      let dataList = [...this.state.ninjas,data];
      
      this.setState({
        ninjas:dataList
      })
  }
  deleteData =(id)=>{
      let dataList = this.state.ninjas.filter(ninja=>{
        return ninja.id!==id;
      })
      this.setState({
        ninjas:dataList
      })
  }
  render(){
    return (
      <div className="App">
        {/* <Even ninjas={this.state.ninjas}></Even> */}
        <Fun ninjas={this.state.ninjas} deleteData={this.deleteData}></Fun>
        <AddForm addData={this.addData}></AddForm>
      </div>
    );
  }
  
}

export default App;
