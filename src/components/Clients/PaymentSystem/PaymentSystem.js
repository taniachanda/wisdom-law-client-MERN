import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SplitCardForm from "./SplitCardForm";

const stripePromise = loadStripe(
  "pk_test_51IhvZhIQe1y4mWl5BL1Of83BdspPIepFpXPuDbXP3EN2Akq2jFSjBQuxhLmfLH6UGctW28gu05CmVFXoprhv7gCQ00TaoQUS3N"
);

const PaymentSystem = ({ handlePayment }) => {
  return (
    <Elements stripe={stripePromise}>
      <SplitCardForm handlePayment={handlePayment}></SplitCardForm>
    </Elements>
  );
};

export default PaymentSystem;
