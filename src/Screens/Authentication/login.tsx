import React from "react";
import classes from "./auth.module.css";
import { Col, Form, Row } from "react-bootstrap";
import { Commoninputs, CustomPassword } from "../../Shared/antd/Commoninputs";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { Loginvalidation } from "../../Components/Validations/Authvalidations";
import Errortext from "../../Components/commoncomponents/Errortext";
import { DecryptToken, EncryptData } from "../../SharedComponents/Methods";
import { setCookie } from "../../Storage/Cookies";
import { useNavigate } from "react-router";
import { Length } from "../../SharedComponents/Constants";
import { Link } from "react-router-dom";
interface logintypes {
  username: string;
  password: string;
}
export default function Login() {
  let navigate = useNavigate();
  const handleLogin = (values: logintypes) => {
    toast.success("successfully login!");
    setCookie("authdata", EncryptData(JSON.stringify(values)));
    navigate("/dashboard");
  };
  const { values, errors, touched, setFieldValue, resetForm, handleSubmit } =
    useFormik({
      initialValues: { username: "", password: "" },
      validationSchema: Loginvalidation,
      onSubmit: (values) => {
        handleLogin(values);
      },
    });

  return (
    <div className={classes.authcontainer} style={{ maxWidth: "600px" }}>
      <div className={classes.login}>
        <h3 className={classes.authheader}>Login</h3>
        <Row>
          <Col sm={12}>
            <Form.Group className="mb-2">
              <Form.Label className={classes.labels}>Username</Form.Label>
              <Commoninputs
                value={values?.username}
                placeholder="Userame"
                onChange={(e) => setFieldValue("username", e.target.value)}
                maxLength={Length.medium}
              />
              {errors.username && touched?.username && (
                <Errortext msg={errors?.username} />
              )}
            </Form.Group>
          </Col>
          <Col sm={12} className="mb-2">
            <Form.Group>
              <Form.Label className={classes.labels}>Password</Form.Label>
              <CustomPassword
                maxLength={Length.medium}
                value={values?.password}
                placeholder="Password"
                onChange={(e) => setFieldValue("password", e.target.value)}
              />
              {errors.password && touched?.password && (
                <Errortext msg={errors?.password} />
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
                Login
              </button>
              <p className={classes.reg_text}>Forgot Password?</p>
            </div>
          </Col>
          <Col sm={12}>
            <p className={classes.reg_text}>
              Not Registered ?
              <Link to={"/signup"} className={classes.register_link}>
                Create an Account
              </Link>
            </p>
          </Col>
        </Row>
      </div>
      {/* <div></div> */}
    </div>
  );
}
