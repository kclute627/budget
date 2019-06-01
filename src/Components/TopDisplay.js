import React, { Component } from 'react';
import IncomeBar from './IncomeBar';
import ExpBar from './ExpBar';

class TopDisplay extends Component {

    
   
  

    
    render(){
        

        const { date, amount, expPercent } = this.props
        return(
            <div className="container">
                <div className="topDisplay">
                    <div className="topDisplay__text-header">
                    Available Budget in {date}
                    </div>
                    <div className="topDisplay__amount">{amount}</div> 
                    <IncomeBar
                    total='0.00'/>
                    <ExpBar 
                    total = '0.00'
                    percentExp = {expPercent}/>  
                             
                </div>            
            </div>
        )
    }
}


export default TopDisplay;