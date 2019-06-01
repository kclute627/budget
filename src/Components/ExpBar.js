import React from 'react';




const ExpBar = props => {
    

    return(
        <div className="exp__bar">
            <div className="exp__bar-name">
                expenses
            </div>
            <div className="exp__bar-total">
             - {props.total}
            </div>
            <div className="exp__bar-percent"> { !props.percentExp ?'-' : props.percentExp } </div>
        </div>
    )
}
export default ExpBar;