import React, { useState } from 'react';
import "../App.css";

function HandlerDemo() {

    const [name, setName] = useState("");
    const [qty, setQty] = useState(0);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    function handleInput(event) {
        setName(event.target.value);
    }

    function handleNumber(event) {
        setQty(event.target.value)
    }

    function handleComment(event) {
        setComment(event.target.value);
    }

    function handlePayment(event) {
        setPayment(event.target.value)
    }

    function handleShipping(event) {
        setShipping(event.target.value);
    }

  return (
    <div className='handlerdemo-container'>
        <input type="text" value={name} onChange={handleInput}></input>
        <p>Product Name: {name}</p>
        <input type="number" value={qty} onChange={handleNumber}></input>
        <p>Quantity: {qty}</p>
        <textarea type="text" value={comment} onChange={handleComment} placeholder='Enter delivery instructions'/>
        <p>Comments: {comment}</p>
        <select value={payment} onChange={handlePayment}>
            <option value="">Select any payment method</option>
            <option>Card</option>
            <option>UPI</option>
            <option>Pay on Delivery</option>
        </select>
        <p>Mode of Payment: {payment}</p>
        <label><input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShipping}></input>Pick Up</label>
        <br/>
        <label><input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShipping}></input>Delivery</label>
        <p>Mode of Shipping: {shipping}</p>
    </div>
  )
}

export default HandlerDemo