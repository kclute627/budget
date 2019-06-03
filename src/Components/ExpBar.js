import React from 'react';




const ExpBar = props => {
    
    const percent = Math.floor((parseInt(props.minusAmount) / parseInt(props.plusAmount))*100)

    return(
        <div className="exp__bar">
            <div className="exp__bar-name">
                expenses
            </div>
            <div className="exp__bar-total">
             - {props.minusAmount}
            </div>
            <div className="exp__bar-percent"> { !props.plusAmount || props.plusAmount < 1 ?'-' : `${percent}%` } </div>
        </div>
    )
}
export default ExpBar;