import React, { useContext, useState } from 'react'
import { CartContext } from '../contex/Cart'
import { Row, Col, ListGroup, Alert } from 'react-bootstrap'
import CartItemHeader from './CartItemHeader'
import CartItem from './CartItem'
import './carrito.css'
import { PayPalButtons } from '@paypal/react-paypal-js'

function Cart() {
  const {cart} = useContext(CartContext)
  const style = {"layout":"vertical"};
  const [isPaid, setIsPaid] = useState(false)
 
  const IVA = 0.19

  const handleCreateOrder = (data, actions) => {
    const order = actions.order.create({
        purchase_units: [
            {
                amount: {
                    value: (cart.amount * (1 + IVA)).toFixed(2),
                    currency_code: "COP"
                },
                description: "Compra de productos en Electric store",
                shipping_preference: "NO_SHIPPING"
            }
        ],
        merchant_name: "Electric Store"
        
    })

    console.log("order", order)

    return order

}

const handleCancelledPayment = (data, actions) => {
    console.log("data", data)
    console.log("actions", actions)

}

const handlePaidOrder = (data, actions) => {
    console.log("data", data)
    console.log("actions", actions)
    setIsPaid(true)
}
    return (
    <>
        <div className='contedorPrincipal'>
           {cart.items && cart.items.length > 0 ?
        (
            <>
                <Row>
                    <Col>
                        <ListGroup>
                            <ListGroup.Item>
                                <CartItemHeader/>
                            </ListGroup.Item>
                             {
                                cart.items.map(item => {
                                    return(
                                        <ListGroup.Item>
                                                <CartItem item = {item}/>
                                        </ListGroup.Item>
                                    )
                                })
                             }   
                        </ListGroup>
                    </Col>
                </Row>
                <Row>
                    <Col className='letrasPago'>
                    Productos:{cart.total}
                    
                    </Col>
                </Row>
                <Row>
                    <Col className='letrasPago'>
                        Subtotal: {cart.amount}
                    </Col>
                </Row>
                <Row>
                    <Col className='letrasPago'>
                             <span className='text-bold'> A pagar <sub>(Subtotal + IVA)</sub></span>: { cart.amount * (1 + IVA)}
                    </Col>
                </Row>
                <hr/>
                        
                        <Row>
                            <Col md={4} className='paypal'>
                                {!isPaid ? (
                                    <PayPalButtons
                                        // disabled={false}
                                        forceReRender={[style]}
                                        fundingSource={undefined}
                                        createOrder={handleCreateOrder}
                                        onApprove={ handlePaidOrder }
                                        onCancel={ handleCancelledPayment}
                                    />
                                    ): (
                                        <Alert variant='success'>Pago realizado</Alert>
                                    )
                                }
                                
                            </Col>
                        </Row>


            </>
        ):(
            <h1>No hay productos en el carrito</h1>
        )   
        } 
        </div>
    </>
  )
}

export default Cart