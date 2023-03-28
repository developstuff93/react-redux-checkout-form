import React from "react";
import { useSelector } from "react-redux";
import CheckoutForm from "./containers/checkout-form";
import OrderSummery from "./components/order-summary";

function App() {
  const items = useSelector((state) => state.items);
  const handleSubmit = (values) => {
    const sameAddress = values["same-address"];
    const billing = {};
    const shipping = {};
    const payment = {};
    const products = {};

    Object.keys(values).forEach((key) => {
      if (key.startsWith("billing-")) {
        billing[key.replace("billing-", "")] = values[key];
      } else if (key.startsWith("shipping-")) {
        shipping[key.replace("shipping-", "")] = values[key];
      } else if (key.startsWith("cc-")) {
        payment[key] = values[key];
      }
    });
    Object.keys(items)
      .filter((key) => items[key])
      .forEach((key) => {
        products[key] = items[key];
      });

    const formData = {
      billing,
      shipping: sameAddress ? { ...billing } : shipping,
      payment,
      products,
    };

    console.log({ formData });
  };

  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container m-auto">
        <h2 className="text-center mb-3">Checkout Form</h2>
        <div className="row">
          <div className="col-md-4 order-md-2 mb-4">
            <OrderSummery />
          </div>
          <div className="col-md-8 order-md-1">
            <CheckoutForm onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
