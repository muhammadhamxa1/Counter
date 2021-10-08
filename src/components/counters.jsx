import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
   
    render() { 
        console.log("im in counter");
        const {onDelete,onDecrement,onIncrement,counters}=this.props;
        return (
        <div>
            
            {counters.map(counter => (
             <Counter 
            key={counter.id} 
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter} 

            />))}
        </div>
        );
    }
}
 
export default Counters;