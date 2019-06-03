import React, { Component, Fragment  } from 'react';
import ReactSVG from 'react-svg'
import TopDisplay from './TopDisplay';
import Income from './Income';
import Expenses from './Expenses';
import Check from '../assets/1.svg';






class ImputField extends Component {

    state = {
        amount: 0,
        expPercent: null,
        description: '',
        dropDown: "+",
        value: '',
        plus: [],
        minus: [],
        plusAmount: 0,
        minusAmount: 0,

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

        if (this.state.value && this.state.description && this.state.dropDown === '+'){

            let plus = [...this.state.plus, {
                key: this.keyCreater(),
                description: this.state.description,
                value: this.state.value,
                positive: true,

            }]
            let amount = (parseFloat(this.state.amount) + parseFloat(this.state.value))
            let plusAmount = plus.reduce((a,cur)=> {
                return a+ parseInt(cur.value)
            }, 0)
            let a = amount.toFixed(2)
            plusAmount = parseInt(plusAmount).toFixed(2)

            console.log(amount, a)
            this.setState({
                amount: a,
                plusAmount,
                plus,                
                value: '',
                description: '', 
            })

            
            
        }else if(this.state.value && this.state.description && this.state.dropDown === '-') {
            let minus = [...this.state.minus, {
                key: this.keyCreater(),
                description: this.state.description,
                value: this.state.value,
                positive: false,

            }]

            let amount = (parseFloat(this.state.amount) - parseFloat(this.state.value))
            
            let a = amount.toFixed(2)

            let minusAmount = minus.reduce((a,cur) => {
                return a + parseInt(cur.value)
            },0)

            minusAmount = parseInt(minusAmount).toFixed(2)

            this.setState({
                amount: a,
                minusAmount,

                minus,
                value: '',
                description: '', 
            })

        }

       
        
        
    }



    removeIncomeHandler = (id, positive) => {        
        
        if(positive){
            const arr = [...this.state.plus];
            const newArr = arr.filter(cur => {
                return cur.key !== id;
            })    
            let plusAmount = newArr.reduce((a, cur) => {
                return a + parseInt(cur.value)
            }, 0)

            let minus = this.state.minus.reduce((a,cur)=>{
                return a + parseInt(cur.value);
            },0)
            let amount = plusAmount - minus;
            amount = amount.toFixed(2)
            plusAmount = parseInt(plusAmount).toFixed(2)

            this.setState({
                plus: newArr,
                amount,
                plusAmount, 
            })
        }else if(!positive){
            const arr = [...this.state.minus];
            const newArr = arr.filter(cur => {
                return cur.key !== id;
            })    
            let minusAmount = newArr.reduce((a, cur) => {
                return  a + parseInt(cur.value)
            }, 0)

            let income = this.state.plus.reduce((a, cur) => {
                return a + parseInt(cur.value)
            }, 0)

            minusAmount = parseInt(minusAmount).toFixed(2)
            
           
        
            let amount = (income - minusAmount).toFixed(2)
            this.setState({
                minus: newArr,
                amount,
                minusAmount,
            })

        }
        
        
       
       
    }

    formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    }

    


    render(){
        const {amount, expPercent, description, dropDown, value, plus, minus, plusAmount, minusAmount} = this.state;

       
        

        return(
            <Fragment>
                <TopDisplay
                date = {this.getDate()}
                plusAmount = {plusAmount}
                minusAmount= {minusAmount}
                amount = {amount}
                expPercent={expPercent}
                formatNumber ={this.formatNumber}
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
            <div className="bottomContainer">
                <Income
                 incomeArr = {plus}
                 remove = {this.removeIncomeHandler}
                 formatNumber = {this.formatNumber}
                 />
                <Expenses
                expArr = {minus}
                remove = {this.removeIncomeHandler}
                plusAmount = {plusAmount}
                formatNumber = {this.formatNumber}
                incomeArr = {plus}

                 />
            </div>
            </Fragment>
        )
    }
}


export default ImputField;