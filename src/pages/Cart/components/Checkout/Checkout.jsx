import InputCommonV1 from "@components/InputCommonV1/InputCommonV1";
import { useForm } from "react-hook-form";
import styles from "./styles.module.scss";
import cls from "classnames";
import { useEffect, useState } from "react";
import axios from "axios";

const CN_BASE = "https://countriesnow.space/api/v0.1";
function Checkout() {
  const [countries, setCountries] = useState([]);
  const { container, leftBody, rightBody, row2Column, row, title, coupon } =
    styles;
  const dataOptions = [
    { value: "1", label: "option 1" },
    { value: "2", label: "option 2" },
    { value: "3", label: "option 3" },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log("Errors:", errors);
  console.log("Countries:", countries.data);
  useEffect(() => {
    axios.get(`${CN_BASE}/countries/iso`).then((respone) =>
      setCountries(
        respone.data.data.map((country) => ({
          value: country.name,
          label: country.name,
        }))
      )
    );
  }, []);

  return (
    <div className={container}>
      <div className={leftBody}>
        <p className={coupon}>
          Have a coupon? <span>Click here to enter</span>
        </p>

        <p className={title}>BILLING DETAILS</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={cls(row, row2Column)}>
            <InputCommonV1
              label="First Name"
              type="text"
              placeholder="First Name"
              isRequired={true}
              register={register("firstName", { required: true })}
            />
            {errors.name && <span>This field is required</span>}

            <InputCommonV1
              label="Last Name"
              type="text"
              placeholder="Last Name"
              isRequired={true}
              register={register("lastName", { required: true })}
            />
            {errors.name && <span>This field is required</span>}
          </div>
          <div className={row}>
            <InputCommonV1
              label="Company Name (optional)"
              type="text"
              placeholder="Company Name"
              register={register("companyName")}
            />
          </div>
          <div className={row}>
            <InputCommonV1
              label="Country/Region"
              type="select"
              dataOptions={countries}
              isRequired={true}
              register={register("country", { required: true })}
            />
            {errors.option && <span>This field is required</span>}
          </div>
          <div className={row}>
            <InputCommonV1
              label="Street address"
              type="text"
              placeholder="House number and street name"
              isRequired={true}
              register={register("street", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className={row}>
            <InputCommonV1
              label="Apartment, suite, unit etc. (optional)"
              type="text"
              placeholder="Apartment, suite, unit etc. (optional)"
              isShowLabel={false}
              register={register("apartment")}
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className={row}>
            <InputCommonV1
              label="Town/City"
              type="text"
              isRequired={true}
              register={register("city", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className={row}>
            <InputCommonV1
              label="State"
              type="select"
              dataOptions={dataOptions}
              isRequired={true}
              register={register("state", { required: true })}
            />
            {errors.option && <span>This field is required</span>}
          </div>
          <div className={row}>
            <InputCommonV1
              label="Phone"
              type="text"
              isRequired={true}
              register={register("phone", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className={row}>
            <InputCommonV1
              label="ZIP Code"
              type="text"
              isRequired={true}
              register={register("zipCode", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className={row}>
            <InputCommonV1
              label="Email address"
              placeholder={"Email address"}
              type="text"
              isRequired={true}
              register={register("email", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <p>ADDITIONAL INFORMATION</p>
          <div className={row}>
            <InputCommonV1
              label="Oder notes (optional)"
              placeholder={
                "Notes about your order, e.g. special notes for delivery"
              }
              type="text"
              register={register("note")}
            />
            {errors.email && <span>This field is required</span>}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>

      <div className={rightBody}></div>
    </div>
  );
}

export default Checkout;
