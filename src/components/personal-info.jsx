import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import PhoneInput from "react-phone-input-2";

const PersonalInfo = () => {
  const PersonalInfoSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, "Name is too short")
      .max(100, "Name is too long")
      .required("Name is required"),
    emailAddress: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
      phoneNumber: Yup.string()
      .required('Phone number is required')
      .matches(/^\+?[0-9]{10}$/, 'Phone number must be 10 digits')
     
  });

  return (
    <div className=" border pl-28 border-red-500 w-full h-full items-start p-5">
      <div className=" w-[70%] flex flex-col py-10 space-y-10">
        <div className="space-y-5">
          <h1 className=" text-4xl font-semibold text-MarineBlue">
            Personal info
          </h1>
          <p className="p-2 text-xl text-CoolGray">
            Please provide your name, email address, and phone number.
          </p>
        </div>
      </div>
      <div className=" pr-60  border border-blue-900 ">
        <Formik
          onSubmit={(values) => {
            console.log(values);
          }}
          initialValues={{
            name: "",
            emailAddress: "",
            phoneNumber: "",
          }}
          validationSchema={PersonalInfoSchema}
        >
          {({ errors, values }) => {
            return (
              <Form className="sm:py-8 space-y-5">
                <div className="flex flex-col md:space-y-5">
                  <label className=" flex justify-between text-sm font-bold text-MarineBlue">
                    Name{" "}
                    {errors.name && (
                      <span className="text-xs font-bold text-StrawberryRed">
                        {errors.name}
                      </span>
                    )}
                  </label>
                  <Field
                    id="name"
                    name="name"
                    placeholder="eg. Stephen King "
                    as="input"
                    className=" py-3 px-2 border border-gray-400 rounded-md text-sm"
                  />
                </div>
                <div className="flex flex-col space-y-5">
                  <label className=" flex justify-between text-sm font-bold text-MarineBlue">
                    Email Address
                    {errors.emailAddress && (
                      <span className="text-xs font-bold text-StrawberryRed">
                        {errors.emailAddress}
                      </span>
                    )}
                  </label>
                  <Field
                    id="emailAddress"
                    name="emailAddress"
                    placeholder="eg. stephenking@gmail.com"
                    as="input"
                    className="py-3 px-2 border border-gray-400 rounded-md text-sm"
                  />
                </div>
                <div className="flex flex-col space-y-5">
                  <label className="flex justify-between text-sm font-bold text-MarineBlue">
                    Phone Number
                    {errors.phoneNumber && (
                      <span className="text-xs font-bold text-StrawberryRed">
                        {errors.phoneNumber}
                      </span>
                    )}
                  </label>
                  <Field
                    name="phoneNumber"
                    id="phoneNumber"
                    type="number"
                    min="0"
                    placeholder="eg. 0507111876"
                    className="py-3 px-2 border border-gray-400 rounded-md text-sm"
                  />
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default PersonalInfo;
