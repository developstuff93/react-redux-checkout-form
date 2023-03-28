import React from "react";
import { useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import BillingInformation from "../components/billing-information";
import Input from "../components/input";
import PaymentInformation from "../components/payment-information";
import ShippingInformation from "../components/shipping-information";

const CheckoutForm = ({ handleSubmit, submitting }) => {
  const sameAddress = useSelector(
    (state) => state.form?.checkout?.values?.["same-address"]
  );
  return (
    <form onSubmit={handleSubmit}>
      <BillingInformation />
      <hr className="mb-4" />
      <Field
        label="Shipping address is the same as my billing address"
        type="checkbox"
        id="same-address"
        name="same-address"
        className="form-check mb-4"
        labelClass="form-check-label"
        component={Input}
      />
      {!sameAddress && <ShippingInformation />}
      <hr className="mb-4" />
      <PaymentInformation />
      <button
        className="btn btn-primary btn-lg btn-block"
        type="submit"
        disabled={submitting}
      >
        Continue to checkout
      </button>
    </form>
  );
};

const createReduxForm = reduxForm({ form: "checkout" });

export default createReduxForm(CheckoutForm);
