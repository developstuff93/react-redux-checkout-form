import { Field } from "redux-form";
import { isEmail, isRequired, minLength, normalizeZipCode } from "../helpers";
import Input from "./input";

const ShippingInformation = () => {
  return (
    <>
      <h4 className="mb-3">Shipping Information</h4>
      <div className="row">
        <Field
          label="First name"
          className="col-md-6 mb-3"
          id="shipping-firstName"
          name="shipping-firstName"
          autoComplete="shipping given-name"
          validate={[isRequired]}
          component={Input}
        />
        <Field
          label="Last name"
          className="col-md-6 mb-3"
          autoComplete="shipping family-name"
          id="shipping-lastName"
          name="shipping-lastName"
          validate={[isRequired]}
          component={Input}
        />
      </div>
      <Field
        label="Username"
        className="mb-3"
        id="shipping-username"
        name="shipping-username"
        autoComplete="shipping username"
        placeholder="Username"
        validate={[isRequired]}
        component={Input}
      />
      <Field
        label="Email"
        className="mb-3"
        type="email"
        id="shipping-email"
        name="shipping-email"
        autoComplete="shipping email"
        isOptional
        placeholder="you@example.com"
        validate={[isEmail]}
        component={Input}
      />
      <Field
        label="Address Line 1"
        className="mb-3"
        autoComplete="shipping address-line-1"
        id="shipping-address-line1"
        name="shipping-address-line1"
        placeholder="1234 Main St"
        validate={[isRequired]}
        component={Input}
      />
      <Field
        label="Address Line 2"
        className="mb-3"
        autoComplete="shipping address-line-2"
        id="shipping-address-line2"
        name="shipping-address-line2"
        placeholder="Apartment or suite"
        isOptional
        component={Input}
      />
      <div className="row">
        <Field
          type="select"
          label="Country"
          className="col-md-5 mb-3"
          inputClass="form-select d-block w-100"
          id="shipping-country"
          name="shipping-country"
          autoComplete="shipping country"
          validate={[isRequired]}
          component={Input}
        >
          <option value="">Choose...</option>
          <option value="US">United States</option>
        </Field>
        <Field
          type="select"
          label="State"
          className="col-md-4 mb-3"
          inputClass="form-select d-block w-100"
          id="shipping-state"
          name="shipping-state"
          autoComplete="shipping state"
          validate={[isRequired]}
          component={Input}
        >
          <option value="">Choose...</option>
          <option value="CA">California</option>
          <option value="NY">New York</option>
        </Field>
        <Field
          label="Zip"
          className="col-md-3 mb-3"
          id="shipping-zip"
          name="shipping-zip"
          autoComplete="shipping postal-code"
          normalize={normalizeZipCode}
          validate={[isRequired, minLength(5)]}
          component={Input}
        />
      </div>
    </>
  );
};

export default ShippingInformation;
