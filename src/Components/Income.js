import React, { Component } from 'react';
import ReactSVG from 'react-svg'
import exit from '../assets/2.svg';




class Income extends Component {

       


    render(){
        const{incomeArr, remove, formatNumber} = this.props;

        
        
        return(
            <div className = "income">
            <h1 className="income__header">Income</h1>
            {incomeArr.map((cur, i) => (
                <div 
                key={cur.key}
                className={ i%2 !== 0 ? "income__data gray": "income__data"}>
                    <div className="income__data-description">{cur.description}</div>
                    <div className="income__data-value">+ {formatNumber(parseInt(cur.value).toFixed(2))}</div>
                    <ReactSVG className="income__data-svg" src={exit} onClick= {()=>remove(cur.key, cur.positive)}/>              
                   

                </div>
                
            ))}

            </div>
        )
    }
}


export default Income;







