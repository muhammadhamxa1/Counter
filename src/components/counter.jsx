import React, { Component } from 'react';
 class Counter extends Component {
    componentDidUpdate(prevProps,prevState){
        console.log("prveprops",prevProps);
        console.log("prevstate",prevState);

    }
    componentWillUnmount(){
        console.log("Compent umount")
    }
     
     render() { 
         
         console.log("im in Counters");
         let classes= this.getBadge();
         let classesDecremnet=this.getProps();
         const {onIncrement,onDelete,onDecrement}=this.props
         return (
             <div className="row">
                 <div className="col-1">
                  <span className={classes}>{this.checkState()}</span>
                 </div>
                 <div className="col">
                    <button onClick={() => onIncrement(this.props.counter)} className="btn btn-outline-primary m-2">+</button>
                    <button onClick={()=> onDecrement(this.props.counter)} className={classesDecremnet}>-</button>
                    <button onClick={() => onDelete(this.props.counter.id)} className="btn btn-danger">Delete</button>
            </div>
         </div>
         );
     }
     checkState(){
         let {value} =this.props.counter;
         return value===0 ? 'Zero' : value;
    }
    getBadge()
    {
        let badge= "badge m-2 bg-";
        badge += this.props.counter.value===0 ? "warning" : "primary";
        return badge;
     }
     getProps(){
        let badge= "btn btn-warning m-2 ";
        badge += this.props.counter.value===0 ? "disabled" : "enabled";
        return badge;
     }
 }
  
 export default Counter;
