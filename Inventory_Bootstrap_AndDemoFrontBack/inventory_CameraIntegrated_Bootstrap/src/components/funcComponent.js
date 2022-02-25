import { Form, Button, Table } from "react-bootstrap";
import { createRef } from "react";
import "./funcComponent.css";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import MainCam from "./mainCam";
import { AiFillCamera, AiOutlineCamera } from "react-icons/ai";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MainInventory from "./mainInventory";

export default function AddProduct(props) {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/";
    navigate(path);
  };
  const routeChange1 = () => {
    let path1 = "/mainCam";
    navigate(path1);
  };
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState();
  const [selectedItems, setSelectedItems] = useState();
  const [main, setMain] = useState({
    options: [
      { label: "Aebad ul quadir", value: "Aebad ul quadir" },
      { label: "yousuf", value: "yousuf" },
      { label: "daniyal", value: "daniyal" },
      { label: "abdullah", value: "abdullah" },
    ],
    items: [
      { label: "Aebad ul quadir", value: "Aebad ul quadir" },
      { label: "yousuf", value: "yousuf" },
      { label: "daniyal", value: "daniyal" },
      { label: "abdullah", value: "abdullah" },
    ],
  });
  const [locations, setLocations] = useState([]);
  let initialValue = [];
  const [products, setProduct] = useState(initialValue);
  const formData = createRef();
  const add = (event) => {
    event.preventDefault();

    const newProduct = {
      // inventory_category: formData.current.inventory_category.value,
      // date: formData.current.Mdate.value,
      // time: formData.current.Mtime.value,
      // product_name: formData.current.product_name.value,
      product_name: selectedItems.value,
      location: selected.value,
      qty: Number(formData.current.qty.value),
      description: formData.current.description.value,
    };
    // add a new product inside products array
    setProduct([...products, newProduct]);
  };

  const increQty = (event) => {
    const indexOfArray = event.target.value;
    products[indexOfArray].qty = products[indexOfArray].qty + 1;
    setProduct([...products]);
  };
  const decreQty = (event) => {
    const indexOfArray = event.target.value;
    products[indexOfArray].qty = products[indexOfArray].qty - 1;
    setProduct([...products]);
  };
  return (
    <div>
      <p>Inventory category: {props.inventoryCatogery}</p>
      <p>Date: {props.date}</p>
      <p>Time: {props.time}</p>
      <Form onSubmit={add} ref={formData}>
        <p
          style={{
            marginLeft: "3%",
            paddingLeft: "0%",
            justifyContent: "left",
            float: "right",
          }}
        >
          {" "}
          Items entered : {count}
        </p>

        {/* items */}
        <div className="flex-container">
          {/* <Form.Label style={{ textAlign: "left" }}>Quantity:</Form.Label>   */}
          <div className="f1">
            <div style={{ display: "flex", marginTop: "10px" }}>
              <p>Enter item:</p>
              <Select
                options={main.items}
                value={selectedItems}
                onChange={setSelectedItems}
              />
            </div>
          </div>

          {/* Location  */}
          <div>
            <div style={{ display: "flex", marginTop: "10px" }}>
              <p>Enter location:</p>
              <Select
                options={main.options}
                value={selected}
                onChange={setSelected}
              />
            </div>
          </div>
          <div className="f3">
            <p style={{ textAlign: "left" }}>Quantity </p>
            <Form.Control
              type="number"
              placeholder="How many: qty"
              name="qty"
            />
          </div>
        </div>

        <div style={{ textAlign: "left", marginTop: "13px" }}>
          <div style={{ fontSize: "20px" }}>
            {" "}
            1.{" "}
            <AiFillCamera
              style={{ fontSize: "30px", cursor: "pointer" }}
              onClick={routeChange1}
            />{" "}
            Barcode
          </div>
          <div style={{ fontSize: "20px" }}>
            {" "}
            2.{" "}
            <AiFillCamera
              style={{ fontSize: "30px", cursor: "pointer" }}
              onClick={routeChange1}
            />{" "}
            Manufacturer code
          </div>
          <div style={{ fontSize: "20px" }}>
            {" "}
            3.{" "}
            <AiFillCamera
              style={{ fontSize: "30px", cursor: "pointer" }}
              onClick={routeChange1}
            />{" "}
            Closeup picture of item
          </div>
          <div style={{ fontSize: "20px" }}>
            {" "}
            4.{" "}
            <AiFillCamera
              style={{ fontSize: "30px", cursor: "pointer" }}
              onClick={routeChange1}
            />{" "}
            Front side of item
          </div>
          <div style={{ fontSize: "20px" }}>
            {" "}
            5.{" "}
            <AiFillCamera
              style={{ fontSize: "30px", cursor: "pointer" }}
              onClick={routeChange1}
            />{" "}
            Back side of item
          </div>
        </div>
        <Form.Group controlId="formBasicDescription">
          <Form.Label>Description:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Description"
            name="description"
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={() => setCount(count + 1)}
          style={{ margin: "20px" }}
        >
          Add to inventory
        </Button>
        <Button
          variant="danger"
          type="submit"
          onClick={routeChange}
          style={{ margin: "20px" }}
        >
          Close & save inventory
        </Button>
      </Form>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Index</th>
            <th>Inventory Category</th>
            <th>Date</th>
            <th>Time</th>
            <th>Item Name</th>
            <th>Location</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index}</td>
                {/* <td>{item.inventory_category}</td>
                <td>{item.date}</td>
                <td>{item.time}</td> */}
                <td>{props.inventoryCatogery}</td>
                <td>{props.date}</td>
                <td>{props.time}</td>
                <td>{item.product_name}</td>
                <td>{item.location}</td>
                <td>{item.qty}</td>
                <td>{item.description}</td>
                <td>
                  <Button
                    variant="success"
                    onClick={(event) => increQty(event)}
                    value={index}
                  >
                    +
                  </Button>
                  <Button
                    variant="danger"
                    onClick={(event) => decreQty(event)}
                    value={index}
                  >
                    -
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
