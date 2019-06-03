import React, { Component } from 'react';
import IncomeBar from './IncomeBar';
import ExpBar from './ExpBar';

class TopDisplay extends Component {

    
   
  

    
    render(){
        

        const { date, amount, expPercent, plusAmount, minusAmount } = this.props
        return(
            <div className="container">
                <div className="topDisplay">
                    <div className="topDisplay__text-header">
                    Available Budget in {date}
                    </div>
                    <div className="topDisplay__amount">{amount}</div> 
                    <IncomeBar
                    plusAmount={plusAmount}
                    total={amount}/>
                    <ExpBar 
                    minusAmount = {minusAmount}
                    percentExp = {expPercent}/>  
                             
                </div>            
            </div>
        )
    }
}


export default TopDisplay;