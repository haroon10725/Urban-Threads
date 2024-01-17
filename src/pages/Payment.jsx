import React, { useState } from "react";
import GooglePayButton from "@google-pay/button-react";
// import "./payment.css";

const Payment = () => {
    const paymentRequest = {
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
            {
                type: "CARD",
                parameters: {
                    allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                    allowedCardNetworks: ["MASTERCARD", "VISA"]
                },
                tokenizationSpecification: {
                    type: "PAYMENT_GATEWAY",
                    parameters: {
                        gateway: "example"
                    }
                }
            }
        ],
        merchantInfo: {
            merchantId: "12345678901234567890",
            merchantName: "Demo Merchant"
        },
        transactionInfo: {
            totalPriceStatus: "FINAL",
            totalPriceLabel: "Total",
            totalPrice: "360.00",//should be set from cart
            currencyCode: "USD",
            countryCode: "US"
        }
    };
    const buttonSizeMode = "fill";
    const buttonWidth = 240;
    const buttonHeight = 40;

    return (
        <div>
            <div className="flex flex-col w-full lg:w-2/2 bg-yellow-50 border-2 border-amber-500 px-6 py-12 justify-between gap-20">
                <div className="text-center">
                    <h1 className="font-bold text-neutral-700 text-2xl">YOUR ORDER SUMMARY</h1>
                </div>
                <table className="bg-white text-sm text-neutral-700">
                    <tr className="border-2 border-pink-800">
                        <td className="p-3 flex justify-between">
                            <span>Subtotal</span> <span>PKR 400</span>
                        </td>
                    </tr>
                    <tr className="border-2 border-pink-800">
                        <td className="p-3 flex justify-between">
                            <span>Discount</span> <span>PKR 40</span>
                        </td>
                    </tr>
                    <tr className="bg-purple-100 text-indigo-800 border-2 border-pink-800 font-bold">
                        <td className="p-3 flex justify-between">
                            <span>Total</span> <span>PKR 360</span>
                        </td>
                    </tr>
                </table>
                <div className="flex flex-col gap-8 text-[0.65rem] text-neutral-700 text-center">
                    <div className="demo">
                        <GooglePayButton
                            environment="TEST"
                            buttonColor="black"
                            buttonType="buy"
                            buttonSizeMode={buttonSizeMode}
                            paymentRequest={paymentRequest}
                            onLoadPaymentData={paymentRequest => {
                                console.log("load payment data", paymentRequest);
                            }}
                            style={{ width: buttonWidth, height: buttonHeight }}
                        />
                    </div>
                </div>
                <div>
                    <ol className="flex flex-col gap-1">
                        <li><strong>Free Shipment:</strong> Enjoy complimentary shipping on all orders.</li>
                        <li><strong>Return Policy:</strong> Returns accepted within 36 days of delivery. Items must be unused and in original packaging.</li>
                        <li><strong>Exchange Policy:</strong> Exchange eligible items within 36 days. Product must be unused and in its original condition.</li>
                        <li><strong>Mediation Role:</strong> In cases where a return/exchange request is denied by any brand, we hold no liability for the decision made by the company.</li>
                    </ol>
                </div>
                <div>
                    <p><strong>Important Notice:</strong> This checkout is for project demonstration only. No actual payments will be processed; entered information is for dummy use. Personal data is stored securely in MongoDB, but we cannot guarantee absolute security. By proceeding, you agree that this platform is not for real transactions. We assume no liability for inaccuracies, interruptions, or any inconvenience caused. Your use of this platform signifies understanding and acceptance of these terms.</p>
                </div>
            </div>
        </div>
    );
}
export default Payment;
