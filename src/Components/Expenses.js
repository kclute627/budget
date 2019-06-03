import React, { Component } from 'react';
import ReactSVG from 'react-svg'
import exit from '../assets/2.svg';




class Expenses extends Component {
    percentHandler =(num) => {
        if(this.props.plusAmount && this.props.plusAmount >= 1){
            let amount = parseInt(this.props.plusAmount)
            let percent = Math.floor((parseInt(num) / amount)*100);
            
            return `${percent}%`

        }
       
    }

    render(){

        const {expArr, remove, plusAmount, formatNumber, plus} = this.props;
        

        return(
            <div className = "expenses">
            <h1  className="expenses__header">Expenses</h1>
            {expArr.map((cur, i) => (
                <div 
                key={cur.key}
                className={i%2 !== 0 ? "expenses__data gray": "expenses__data"}>
                    <div className="expenses__data-description">{cur.description}</div>
                    
                    <div className="expenses__data-value">- {formatNumber(parseInt(cur.value).toFixed(2))}</div>
                    <div className="expenses__data-percent">{plusAmount ? this.percentHandler(cur.value) : null}</div>
                    <ReactSVG className="expenses__data-svg" src={exit} onClick= {()=>remove(cur.key, cur.positive)}/>              
                    

                </div>
                
            ))}

            </div>
            
          
        )
    }
}


export default Expenses;

