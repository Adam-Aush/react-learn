import React, {useState} from 'react'

import './CostForm.css'


const CostForm = (props) => {

         const [inputName, setInputName] = useState('')
         const [inputAmount, setInputAmount] = useState('')
         const [inputDate, setInputDate] = useState('')

         

    const nameChangeHandler = (event) => {
        setInputName(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setInputDate(event.target.value)
    }


    const submitHandler = (event) => {
        event.preventDefault()

        const costData = {
            description: inputName,
            amount: inputAmount,
            date: new Date (inputDate)
        }

        props.onSaveCostData(costData)
        setInputName('')
        setInputAmount('')
        setInputDate('')
    }
       

    return <form onSubmit={submitHandler}>

    <div className="new-cost__controls">
        <div className="new-cost__control">
            <label>название</label>
            <input type="text" value={inputName} onChange={nameChangeHandler}></input>
        </div>
        <div className="new-cost__control">
            <label>сумма</label>
            <input type="number" min='0.01' step='0.01' value={inputAmount} onChange={amountChangeHandler}></input>
        </div>
        <div className="new-cost__control">
            <label>дата</label>
            <input type="date" min='2019-01-01' step='2023-12-31' value={inputDate} onChange={dateChangeHandler}></input>
        </div>
        <div className="new-cost__actions">
            <button type="submit">добавить расход</button>
        </div>
     
    </div>
    </form>
}

export default CostForm