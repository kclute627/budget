import React, { Component } from 'react';
import IncomeBar from './IncomeBar';
import ExpBar from './ExpBar';

class TopDisplay extends Component {

    
   
  

    
    render(){
        

        let { date, amount, expPercent, plusAmount, minusAmount, formatNumber } = this.props
        
        
        
        amount = parseFloat(amount).toFixed(2)


       

       


        console.log(amount, "amount in topdisplay")
        return(
            <div className="container">
                <div className="topDisplay">
                    <div className="topDisplay__text-header">
                    Available Budget in {date}
                    </div>
                    <div className="topDisplay__amount">{`$ ${formatNumber(amount)}`}</div> 
                    <IncomeBar
                    plusAmount={plusAmount}
                    total={amount}/>
                    <ExpBar 
                    minusAmount = {minusAmount}
                    
                    plusAmount = {plusAmount}/>  
                             
                </div>            
            </div>
        )
    }
}


export default TopDisplay;