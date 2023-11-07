import { useFormik } from "formik";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import classes from "./auth.module.css";
import {
  Commoninputs,
  CustomCheckbox,
  CustomDate,
  CustomNumber,
  CustomPassword,
  CustomSelect,
} from "../../Shared/antd/Commoninputs";
import Errortext from "../../Components/commoncomponents/Errortext";
import { Genders, Length, REGEX } from "../../SharedComponents/Constants";
import { Link, useNavigate } from "react-router-dom";
import { Registervalidation } from "../../Components/Validations/Authvalidations";
import { Number_Validation } from "../../SharedComponents/Methods";
interface SignupTypes {
  name: string;
  username: string;
  password: string;
  dob: string;
  age: number;
  state: string;
  city: string;
  gender: string;
  isuser: number;
}

export default function Signup() {
  let navigate = useNavigate();
  const { values, errors, touched, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      username: "",
      password: "",
      email: "",
      contact: "",
      dob: "",
      age: 0,
      state: "",
      city: "",
      gender: "",
      isuser: 1,
    },
    validationSchema: Registervalidation,
    onSubmit: (values) => {},
  });

  const handlechangeNumber = (event: any) => {
    if (Number_Validation(event.target.value)) {
      setFieldValue("contact", event.target.value);
    }
  };
  return (
    <div className={classes.authcontainer} style={{ maxWidth: "1000px" }}>
      <div>
        <h3 className={classes.authheader}>Register</h3>

        <div>
          <Row>
            <Col lg={4} md={6} sm={6}>
              <Form.Group className="mb-3">
                <Form.Label className={classes.labels}>Name</Form.Label>
                <Commoninputs
                  value={values?.name}
                  placeholder="Name"
                  onChange={(e) => setFieldValue("name", e.target.value)}
                  maxLength={Length.medium}
                />
                {errors.name && touched?.name && (
                  <Errortext msg={errors?.name} />
                )}
              </Form.Group>
            </Col>
            <Col lg={4} md={6} sm={6}>
              <Form.Group className="mb-3">
                <Form.Label className={classes.labels}>Username</Form.Label>
                <Commoninputs
                  value={values?.username}
                  placeholder="Username"
                  onChange={(e) => setFieldValue("username", e.target.value)}
                  maxLength={Length.medium}
                />
                {errors.username && touched?.username && (
                  <Errortext msg={errors?.username} />
                )}
              </Form.Group>
            </Col>{" "}
            <Col lg={4} md={6} sm={6}>
              <Form.Group className="mb-3">
                <Form.Label className={classes.labels}>Password</Form.Label>
                <CustomPassword
                  value={values?.password}
                  placeholder="Password"
                  onChange={(e) => setFieldValue("password", e.target.value)}
                  maxLength={Length.medium}
                />
                {errors.password && touched?.password && (
                  <Errortext msg={errors?.password} />
                )}
              </Form.Group>
            </Col>{" "}
            <Col lg={4} md={6} sm={6}>
              <Form.Group className="mb-3">
                <Form.Label className={classes.labels}>Email</Form.Label>
                <Commoninputs
                  value={values?.email}
                  placeholder="email"
                  onChange={(e) => setFieldValue("email", e.target.value)}
                  maxLength={Length.medium}
                />
                {errors.email && touched?.email && (
                  <Errortext msg={errors?.email} />
                )}
              </Form.Group>
            </Col>{" "}
            <Col lg={4} md={6} sm={6}>
              <Form.Group className="mb-3">
                <Form.Label className={classes.labels}>Contact</Form.Label>
                <Commoninputs
                  value={values?.contact}
                  placeholder="contact"
                  onChange={(e) => {
                    handlechangeNumber(e);
                  }}
                  maxLength={Length.contact}
                />
                {errors.contact && touched?.contact && (
                  <Errortext msg={errors?.contact} />
                )}
              </Form.Group>
            </Col>{" "}
            <Col lg={4} md={6} sm={6}>
              <Form.Group className="mb-3">
                <Form.Label className={classes.labels}>D.O.B</Form.Label>
                <CustomDate
                  value={values?.dob}
                  placeholder="D.O.B"
                  onChange={(e) => setFieldValue("dob", e)}
                  maxLength={Length.medium}
                  isFuture={true}
                />
                {errors.dob && touched?.dob && <Errortext msg={errors?.dob} />}
              </Form.Group>
            </Col>{" "}
            <Col lg={4} md={6} sm={6}>
              <Form.Group className="mb-3">
                <Form.Label className={classes.labels}>Age</Form.Label>
                <CustomNumber
                  numbervalue={values?.age}
                  placeholder="Age"
                  onChange={(e) => setFieldValue("age", e)}
                  min={"1"}
                  maxLength={Length.medium}
                />
                {errors.age && touched?.age && <Errortext msg={errors?.age} />}
              </Form.Group>
            </Col>{" "}
            <Col lg={4} md={6} sm={6}>
              <Form.Group className="mb-3">
                <Form.Label className={classes.labels}>State</Form.Label>
                <Commoninputs
                  value={values?.state}
                  placeholder="State"
                  onChange={(e) => setFieldValue("state", e.target.value)}
                  maxLength={Length.medium}
                />
                {errors.state && touched?.state && (
                  <Errortext msg={errors?.state} />
                )}
              </Form.Group>
            </Col>{" "}
            <Col lg={4} md={6} sm={6}>
              <Form.Group className="mb-3">
                <Form.Label className={classes.labels}>City</Form.Label>
                <Commoninputs
                  value={values?.city}
                  placeholder="City"
                  onChange={(e) => setFieldValue("city", e.target.value)}
                  maxLength={Length.medium}
                />
                {errors.city && touched?.city && (
                  <Errortext msg={errors?.city} />
                )}
              </Form.Group>
            </Col>{" "}
            <Col lg={4} md={6} sm={6}>
              <Form.Group className="mb-3">
                <Form.Label className={classes.labels}>Gender</Form.Label>
                <CustomSelect
                  options={Genders}
                  value={values?.gender}
                  placeholder="Gender"
                  onChange={(e) => setFieldValue("gender", e.value)}
                />
                {errors.gender && touched?.gender && (
                  <Errortext msg={errors?.gender} />
                )}
              </Form.Group>
            </Col>{" "}
            <Col lg={4} md={6} sm={6}>
              <Form.Group className="mb-3">
                <Form.Label className={classes.labels}>is User?</Form.Label>
                <br />
                <CustomCheckbox
                  checked={values?.isuser === 1 ? true : false}
                  onChange={(e) => {
                    setFieldValue("isuser", e.target.checked ? 1 : 0);
                  }}
                  name={"Yes"}
                />
                <CustomCheckbox
                  checked={values?.isuser === 0 ? true : false}
                  onChange={(e) =>
                    setFieldValue("isuser", e.target.checked ? 0 : 1)
                  }
                  name={"No"}
                />
                {errors.isuser && touched?.isuser && (
                  <Errortext msg={errors?.isuser} />
                )}
              </Form.Group>
            </Col>
            <Col sm={12}>
              <div className={classes.loginactionblock}>
                <button
                  type="button"
                  className={classes.authinbtn}
                  onClick={() => handleSubmit()}
                >
                  Signin
                </button>
                <p
                  onClick={() => navigate("/login")}
                  className={classes.reg_text}
                >
                  Back to login ?
                </p>
              </div>
            </Col>
            <Col sm={12}></Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
