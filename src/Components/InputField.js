import React, { Component, Fragment  } from 'react';
import ReactSVG from 'react-svg'
import TopDisplay from './TopDisplay';
import Check from '../assets/1.svg';
import exit from '../assets/2.svg';




class ImputField extends Component {

    state = {
        amount: '0.00',
        expPercent: null,
        description: '',
        dropDown: "+",
        value: '',
        plus: [],
        minus: [],

    }



    getDate = () => {        
        let month = new Date().getMonth();
        let year = new Date().getFullYear();
        const currentMonth = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${currentMonth[month]} ${year}:`
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    keyCreater = () => {

        return Math.random() * 1000;
    }

    submitHandler = () => {

        if (this.state.dropDown === '+'){

            let plus = [...this.state.plus, {
                key: this.keyCreater(),
                description: this.state.description,
                value: this.state.value,

            }]

            this.setState({
                plus,                
                value: '',
                description: '', 
            })
        }else {
            let minus = [...this.state.minus, {
                key: this.keyCreater(),
                description: this.state.description,
                value: this.state.value,

            }]

            this.setState({
                minus,
                value: '',
                description: '', 
            })

        }
    }



    render(){
        const {amount, expPercent, description, dropDown, value} = this.state;

        return(
            <Fragment>
                <TopDisplay
                date = {this.getDate()}
                amount = {amount}
                expPercent={expPercent}
                 />
            
            <div className="imputField">
                <form action="" className="imputField__form">
                    <select name="dropDown" id="" className= {dropDown === '+' ? "imputField__form-dropdown green": "imputField__form-dropdown red"} onChange={this.changeHandler}>
                        <option value="+" className="plus">+</option>
                        <option value="-" className="minus">-</option>
                    </select>
                    <input 
                    className={dropDown === '+' ? "imputField__form-input green" : "imputField__form-input red"}
                    type="text"
                    value={description}
                    placeholder="Add Description"
                    name='description'
                    onChange={this.changeHandler}
                    >
                    </input>
                    <input
                    type="number"
                    min='0'
                    name='value'
                    value={value}
                    placeholder= 'Value'
                    onChange={this.changeHandler}
                    className= {dropDown === '+'? "imputField__form-amount green": "imputField__form-amount red"}
                    >
                    </input>
                    <ReactSVG 
                    src={Check} 
                    className={dropDown === '+'? "check check-green": "check check-red"}
                    onClick={this.submitHandler}/>                     
                                
                </form> 
                            
            </div>
            </Fragment>
        )
    }
}


export default ImputField;