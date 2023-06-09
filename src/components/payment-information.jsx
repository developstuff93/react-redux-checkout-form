import React from "react";
import { Field } from "redux-form";
import {
  isRequired,
  minLength,
  normalizeCardNumber,
  normalizeCVV,
  normalizeExpiration,
  validateExpiration,
} from "../helpers";
import Input from "./input";

const PaymentInformation = () => {
  return (
    <>
      <h4 className="mb-3">Payment Information</h4>
      <div className="row">
        <Field
          label="Name on card"
          id="cc-name"
          name="cc-name"
          autoComplete="cc-name"
          className="col-md-6 mb-3"
          validate={[isRequired]}
          component={Input}
        />
        <Field
          label="Credit card number"
          className="col-md-6 mb-3"
          id="cc-number"
          name="cc-number"
          autoComplete="cc-number"
          normalize={normalizeCardNumber}
          validate={[isRequired, minLength(10)]}
          component={Input}
        />
        <div className="row">
          <Field
            label="Expiration"
            id="cc-expiration"
            name="cc-expiration"
            autoComplete="cc-expiration"
            className="col-md-3 mb-3"
            normalize={normalizeExpiration}
            validate={[isRequired, validateExpiration]}
            component={Input}
          />
          <Field
            label="CVV"
            id="cc-cvv"
            name="cc-cvv"
            className="col-md-3 mb-3"
            autoComplete="cc-cvv"
            normalize={normalizeCVV}
            validate={[isRequired, minLength(3)]}
            component={Input}
          />
        </div>
      </div>
    </>
  );
};

export default PaymentInformation;
