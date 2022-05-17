import React from 'react';
import Input from '@mui/material/Input'
import './order.css'
import FormControlLabel from '@mui/material/FormControlLabel'
import RadioGroup from '@mui/material/RadioGroup'
import Radio from '@mui/material/Radio'

function Order(props){

    const sendInfo = () => {
       const name = document.getElementById('name').value
       const email = document.getElementById('email').value
       const phone = document.getElementById('phone').value
       const comment = document.getElementById('comment').value
       const shipping = document.querySelector('input[name="radio-buttons-group"]:checked').value;
       const adress = document.getElementById('adress').value
       const products = JSON.parse(localStorage.getItem('Cart'))
       let cost = 0;
       let productsText = "";
       products.map((e)=>{
           productsText += " " + e.chosenProduct.name + " у кількості '" + e.count + "', "
           cost += e.chosenProduct.price * e.count
       })


       if(name!==""&&email!==""&&adress!==""&&phone!==""){
           const order = 
           `
           Користувач на ім'я ${name} зробив замовлення на товар: 
           ${productsText}
           Інформація щодо замовника:
           email: ${email}
           Номер телефону: ${phone}
           Спосіб доставки: ${shipping}
           Адреса доставки: ${adress}
           Комантар до замовлення: ${comment}

           Сума замовлення: ${cost} грн
           `
            const requestOptions = {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "to_email": "emma12022002@gmail.com", "order": order })
            };

            fetch('https://frankos-museum-backend.azurewebsites.net/api/donate', requestOptions)
                .then(response => {if (response.status == 200) {
                    alert("Замовлення успішно відправлено")
                    return response.text();
                } else {throw new Error();}})
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
                    <FormControlLabel value="NovaPoshta" control={<Radio/>} label="Нова Пошта" />
                    <FormControlLabel value="UkrPoshta" control={<Radio/>} label="Укрпошта" />
                    <FormControlLabel value="self-pickup" control={<Radio/>} label="Самовивіз" />
                </RadioGroup>


                <Input id="adress" placeholder="Адреса доставки" className="inputField"/>
                <div className="sumbitButton" onClick={sendInfo}>Підтвердити Замовлення</div>
            </div>
        </div>
        </div>
    )
}


export default Order;