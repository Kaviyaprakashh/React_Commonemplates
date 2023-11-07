import React from "react";
import { Col, Row } from "react-bootstrap";
import classes from "./dashboard.module.css";

export default function Carts() {
  let cartlist = [
    {
      name: "Product1",
      key: 1,
      value: 1000,
    },
    {
      name: "Product1",
      key: 2,
      value: 2000,
    },
    {
      name: "Product1",
      key: 3,
      value: 34,
    },
    {
      name: "Product1",
      key: 4,
      value: 55,
    },
    {
      name: "Product1",
      key: 5,
      value: 6,
    },
    {
      name: "Product1",
      key: 6,
      value: 7,
    },
  ];
  return (
    <div>
      <Row>
        {cartlist?.map((ele: any, index: number) => {
          return (
            <Col sm={4} md={3} lg={3} xl={2} key={index} className="mb-3">
              <div className={classes.cart}>
                <h3 className={classes.cartheadr}>{ele?.value}</h3>
                <p className={classes.cartcount}>{ele?.name}</p>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
