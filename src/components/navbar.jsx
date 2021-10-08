import React, { Component } from 'react';
class Navbar extends Component {
    render() { 
        console.log("Im in nvabar");
        let classes= this.getBadge();
        const {onReset,totalCounter}=this.props;
        return <div>
         
            <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand  h1">Counts
                <span className="badge rounded-pill bg-secondary "></span>
                <button type="button"  onClick={onReset} className="btn btn-info position-relative m-2">
                {this.getValue()}
                <span className={classes}>
                {totalCounter}
                </span>
                </button>
                </span>
                
            </div>
            </nav>
        </div>;
    }
    getValue()
    {
        return this.props.totalCounter===0 ? 'Zero' : 'Reset';
    }
    getBadge()
    {
        let badge= "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-";
        badge += this.props.totalCounter===0 ? "warning" : "primary";
        return badge;
     }
}
 
export default Navbar;
