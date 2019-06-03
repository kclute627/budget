import React from 'react';





const IncomeBar = props => {


    return(
        <div className="income__bar">
            <div className="income__bar-name">
                Income
            </div>
            <div className="income__bar-total">
             + {props.plusAmount}
            </div>
        </div>
    )
}
export default IncomeBar