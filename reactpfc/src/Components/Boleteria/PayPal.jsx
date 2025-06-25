import React, { useEffect, useState } from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"
import '../../Components/Boleteria/PayPal.css'
import { FaPaypal } from 'react-icons/fa'
import GetTipoDeCambio from '../../Services/TipoDeCambio'

const Paypal = ({valor}) => {

    const [tipoCambio,setTipoCambio]= useState([])

        useEffect(() => {
            async function fetchTipoCambio() {
                const dato = await GetTipoDeCambio()
                setTipoCambio(dato)
            };
           fetchTipoCambio()
        }, [])

    const tipoCambioRed = Math.round(tipoCambio?.dolar?.venta?.valor)   
    const totalDolares = Math.round(valor/tipoCambioRed)

    
    const initianlOptions = { //Cuenta de PAYPAL
        clientId: "Ac4TeHzANPWZEg8tCohWUbptM3_YdeZ5S_4gdwhaC31KLg4oaUtIG23GYh2CvRiwh6pTR8BSfMBLGh8x",
        currency: "USD",
        intent: "capture"
    }


    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        currency_code: "USD",
                        value: totalDolares
                    }
                }
            ]
        })
    }

    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            alert("Pago Completado: " + details.payer.name.given_name)
        })
    }

    const onCancel = () => {
        alert("Pago Cancelado");
    }

    return (
        
        <div className="paypal-wrapper">
            <div className="paypal-card">
                <h2 className="paypal-title"><FaPaypal className="paypal-icon" /> Pago con PayPal</h2>

               {/*  <div className="paypal-summary">
                    <p><strong>Producto:</strong> Entrada Estadio</p>
                </div><br /> */}

                <PayPalScriptProvider options={initianlOptions}>
                    <PayPalButtons 
                        style={{
                            layout: "horizontal",
                            color: "blue",
                            shape: "rect",
                            label: "paypal",
                            height: 45
                        }}
                        createOrder={createOrder}
                        onApprove={onApprove}
                        onCancel={onCancel}
                    />
                </PayPalScriptProvider>
            </div>
        </div>
    )
}

export default Paypal