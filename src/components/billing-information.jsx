import { Field } from "redux-form";
import { isEmail, isRequired, minLength, normalizeZipCode } from "../helpers";
import Input from "./input";

const BillingInformation = () => {
  return (
    <>
      <h4 className="mb-3">Billing Information</h4>
      <div className="row">
        <Field
          label="First name"
          className="col-md-6 mb-3"
          id="billing-firstName"
          name="billing-firstName"
          autoComplete="billing given-name"
          validate={[isRequired]}
          component={Input}
        />
        <Field
          label="Last name"
          className="col-md-6 mb-3"
          autoComplete="billing family-name"
          id="billing-lastName"
          name="billing-lastName"
          validate={[isRequired]}
          component={Input}
        />
      </div>
      <Field
        label="Username"
        className="mb-3"
        id="billing-username"
        name="billing-username"
        autoComplete="billing username"
        placeholder="Username"
        validate={[isRequired]}
        component={Input}
      />
      <Field
        label="Email"
        className="mb-3"
        type="email"
        id="billing-email"
        name="billing-email"
        autoComplete="billing email"
        isOptional
        placeholder="you@example.com"
        validate={[isEmail]}
        component={Input}
      />
      <Field
        label="Address Line 1"
        className="mb-3"
        autoComplete="billing address-line-1"
        id="billing-address-line1"
        name="billing-address-line1"
        placeholder="1234 Main St"
        validate={[isRequired]}
        component={Input}
      />
      <Field
        label="Address Line 2"
        className="mb-3"
        autoComplete="billing address-line-2"
        id="billing-address-line2"
        name="billing-address-line2"
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
          id="billing-country"
          name="billing-country"
          autoComplete="billing country"
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
          id="billing-state"
          name="billing-state"
          autoComplete="billing state"
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
          id="billing-zip"
          name="billing-zip"
          autoComplete="billing postal-code"
          normalize={normalizeZipCode}
          validate={[isRequired, minLength(5)]}
          component={Input}
        />
      </div>
    </>
  );
};

export default BillingInformation;
