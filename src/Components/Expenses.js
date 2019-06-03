import React, { Component } from 'react';
import ReactSVG from 'react-svg'
import exit from '../assets/2.svg';




class Expenses extends Component {


    render(){

        const {expArr, remove} = this.props;


        return(
            <div className = "expenses">
            <h1 className="expenses__header">Expenses</h1>
            {expArr.map((cur, i) => (
                <div 
                key={cur.key}
                className={i%2 !== 0 ? "expenses__data gray": "expenses__data"}>
                    <div className="expenses__data-description">{cur.description}</div>
                    <div className="expenses__data-value">- {cur.value}</div>
                    <ReactSVG className="expenses__data-svg" src={exit} onClick= {()=>remove(cur.key, cur.positive)}/>              
                   

                </div>
                
            ))}

            </div>
            
          
        )
    }
}


export default Expenses;

