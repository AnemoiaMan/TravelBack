import React from 'react';
import './AccountTree.css';
import Old from './Old.jpg';
import Train from './train.jpg';



class AccountTree extends React.Component{

    constructor(props){
        super(props);
        this.imageSelector=this.imageSelector.bind(this);
    }

    imageSelector(){
        if(this.props.category ==='Surprises'){

            return 'https://upmostly.com/tutorials/react-onclick-event-handling-with-examples'
  
        }
        if(this.props.category ==='Danger'){
            return './Surprises.js';
        }
    }

    render(){
        return(
            <div className='Paintings'>
                <a href={this.imageSelector()}>
                <img src= {this.props.image} />
                <p>{this.props.category}</p>   
                </a>    
            </div>

        );
    }
    
}

export default AccountTree;