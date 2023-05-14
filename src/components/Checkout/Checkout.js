import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";

import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from "../../services/firebase/firebaseConfig";

import CheckoutForm from '../CheckoutForm/CheckoutForm'

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, total, clearCart } = useContext(cartContext)

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.FromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock =[]
        }

    }

    if(loading) {
        return <h1>Se está generando su orden ...</h1>
    }

    if(orderId) {
        return <h1>El id de su orden es: {orderId}</h1>
    }

return (
    <div>
        <h1>Checkout</h1>
        <CheckoutForm onConfirm={createOrder}/>
    </div>
)
}

export default Checkout