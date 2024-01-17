import React, { useState } from "react";
import GooglePayButton from "@google-pay/button-react";
import "./payment.css";

const GooglePay=()=> {
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
      totalPrice: "1.00",//should be set from cart
      currencyCode: "PKR",
      countryCode: "PK"
    }
  };

  const [buttonColor, setButtonColor] = useState("default");
  const [buttonType, setButtonType] = useState("buy");
  const [buttonSizeMode, setButtonSizeMode] = useState("static");
  const [buttonWidth, setButtonWidth] = useState(240);
  const [buttonHeight, setButtonHeight] = useState(40);

  const isTop = window === window.top;

  return (
    <div>
      <form className="top-bottom">
       
        <label className="control">
          <span>
            Button width <span className="value">({buttonWidth}px)</span>
          </span>
          <input
            type="range"
            min="160"
            max="800"
            value={buttonWidth}
            onChange={event => setButtonWidth(Number(event.target.value))}
            disabled={buttonSizeMode !== "fill"}
          />
        </label>
        <label className="control">
          <span>
            Button height <span className="value">({buttonHeight}px)</span>
          </span>
          <input
            type="range"
            min="40"
            max="100"
            value={buttonHeight}
            onChange={event => setButtonHeight(Number(event.target.value))}
            disabled={buttonSizeMode !== "fill"}
          />
        </label>
      </form>

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
  );
}
export default GooglePay;