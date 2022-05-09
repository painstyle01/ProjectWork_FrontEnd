import React, { useState, useEffect } from 'react';
import Input from '@mui/material/Input'
import './order.css'
import FormControlLabel from '@mui/material/FormControlLabel'
import RadioGroup from '@mui/material/RadioGroup'
import Radio from '@mui/material/Radio'
import { grey } from '@mui/material/colors'

function Order(props){

    const sendInfo = () => {
       const name = document.getElementById('name').value
       const email = document.getElementById('email').value
       const phone = document.getElementById('phone').value
       const comment = document.getElementById('comment').value
       const shipping = document.querySelector('input[name="radio-buttons-group"]:checked').value;
       const adress = document.getElementById('adress').value

       if(name!==""&&email!==""&&adress!==""&&phone!==""){
           const order = {
           name: name,
           email: email,
           phone: phone,
           comment: comment,
           shipping: shipping,
           adress: adress
           }
           console.log(order)
       }
       else{
           alert("Будь ласка, заповніть усі необхідні поля")
       }
    }

    return(
        <div className="mainOrderContainer">
        <div className="OrderContainer">
            <h1 className="title">Оформлення замовлення:</h1>
            <div className="inputs">
                <Input id="name" placeholder="Ваше ім'я" color="secondary" className="inputField"/>
                <Input id="email" placeholder="Ваш E-mail" color="secondary" className="inputField"/>
                <Input id="phone" placeholder="Ваш номер телефону" color="secondary" className="inputField"/>
                <Input id="comment" placeholder="Коментар (необов'язково)" color="secondary" className="inputField"/>

                <h4 className="shippingTitle">Доставка</h4>

                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    defaultValue="NovaPoshta"
                    id="radio"
                >
                    <FormControlLabel value="NovaPoshta" control={<Radio  sx={{color: grey[50],'&.Mui-checked': {
                                                                            color: grey[50],},}}/>} label="Нова Пошта" />
                    <FormControlLabel value="UkrPoshta" control={<Radio sx={{color: grey[50],'&.Mui-checked': {
                                                                            color: grey[50],},}}/>} label="Укрпошта" />
                    <FormControlLabel value="self-pickup" control={<Radio sx={{color: grey[50],'&.Mui-checked': {
                                                                            color: grey[50],},}}/>} label="Самовивіз" />
                </RadioGroup>
                <Input id="adress" placeholder="Адреса доставки" color="secondary" className="inputField"/>
                <div className="sumbitButton" onClick={sendInfo}>Підтвердити Замовлення</div>
            </div>
        </div>
        </div>
    )
}


export default Order;