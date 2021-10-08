import './App.css';
import React, { Component } from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  state ={
    counters :[
        { id: 1, value: 0 },
        { id: 2, value: 3 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
        { id: 5, value :12}
    ] 
};
constructor(){
  super();
    console.log("Constructr");
}
componentDidMount(){
  console.log("Hello compoenent");
}
deleteHandle = counterId => {
    const counters=this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters: counters});
    // console.log("im in delete",{counterId});
};
handleIncrement  = counter => {
    const counters = [...this.state.counters];
    const index=counters.indexOf(counter);
    counters[index]={...counter}
    counters[index].value++;
    // console.log(this.state.counters[0]);
    this.setState({counters});
 };
 handleDecrement =counter=> {
    const counters = [...this.state.counters];
    const index=counters.indexOf(counter);
    counters[index]={...counter}
    // counters[index].value++;
    // console.log(counters[index])
    if(counters[index].value > 0)
    {
        counters[index].value--;
        this.setState({counters});
    }
 };
handleReset =() =>{
    const counters = this.state.counters.map(c => {
        c.value=0;
        return c;
    });
    this.setState({counters})
};
render (){
  console.log("hello Render");
  return (
    <React.Fragment>
      <Navbar
       counters={this.counters}
       onReset={this.handleReset}
       totalCounter={this.state.counters.filter(c => c.value >0).length}
       />
      <main className="container">
       <Counters
        onDelete={this.deleteHandle}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        counters={this.state.counters}
       />
      </main>
    </React.Fragment>
  );
}}

export default App;
