// import React from "react";
// import { useState, useEffect } from "react";
// import Dropdown from "react-dropdown";
// import "react-dropdown/style.css";
// import Select from "react-select";
// import { Table, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Axios from "axios";
// import "./InventoryItem.css";
// // imported yt
// import Async, { useAsync } from "react-select/async";

// export default function InventoryItem() {
//   const [quantity, setQuantity] = useState(0);
//   const [description, setDescription] = useState("");
//   const [location, setLocation] = useState([]);
//   const [itemname, setItemName] = useState("");
//   const [attend, setAttend] = useState([]);
//   const [work, setWork] = useState([]);
//   // imported yt
//   const [inputValue, setValue] = useState("");
//   const [selectedValue, setSelectedValue] = useState(null);
//   useEffect(async () => {
//     const result = await axios("http://localhost:5000/mylocation");
//     const x = result.data;

//     const options = x.map((d) => ({
//       label: d.loc_name,

//       value: d.location_id,
//     }));

//     setWork(options);
//   }, []);

//   const handleInputChange = (value) => {
//     setValue(value);
//   };
//   const handleChange = (value) => {
//     setSelectedValue(value);
//   };
//   const fetchData = () => {
//     return Axios.get("http://localhost:5000/getLocation").then((response) => {
//       const res = response.data.data;
//       return res;
//     });

//     //////////
//     const [itemList, setItemList] = useState([]);
//     const [data, setData] = useState([]);
//     const addItemDetails = () => {
//       Axios.post("http://localhost:5000/addmom", {
//         quantity: quantity,
//         description: description,
//         itemname: itemname,
//         location: location,
//       }).then(() => {
//         console.log("Success");
//         setItemList([
//           ...itemList,
//           {
//             quantity: quantity,
//             description: description,
//             itemname: itemname,
//             location: location,
//           },
//         ]);
//       });
//     };
//     const getLocation = () => {
//       Axios.get("http://localhost:5000/getLocation").then((response) => {
//         console.log(response);
//         // setEmployeeList(response.data);
//       });
//     };

//     useEffect(async () => {
//       const result = await Axios("http://localhost:5000/getLocation");
//       const x = result.data;
//       const options = x.map((d) => ({
//         label: d.location_name,
//         value: d.location_id,
//       }));
//       setLocation(options);
//     }, []);

//     return (
//       <div className="InventoryItem">
//         <div className="information">
//           <label>Item Name</label>
//           <input
//             type="text"
//             onChange={(event) => {
//               setItemName(event.target.value);
//             }}
//           />
//           <label>Quantity</label>
//           <input
//             type="number"
//             onChange={(event) => {
//               setQuantity(event.target.value);
//             }}
//           />
//           <label>Description</label>
//           <input
//             type="text"
//             onChange={(event) => {
//               setDescription(event.target.value);
//             }}
//           />

//           {/* Location  */}
//           <div>
//             <div>
//               <p>Enter location:</p>
//               {/* <input
//               type="text"
//               onChange={(event) => {
//                 setLocation(event.target.value);
//               }}
//             /> */}
//               <Select options={work} value={attend} onChange={setAttend} />
//             </div>
//           </div>

//           <button onClick={addItemDetails} style={{ margin: "10px" }}>
//             Add inventory
//           </button>

//           <Table striped bordered hover variant="dark">
//             <thead>
//               <tr>
//                 <th>Index</th>
//                 <th>Item Name</th>
//                 <th>Quantity</th>
//                 <th>Description</th>
//                 <th>Location</th>
//               </tr>
//             </thead>
//             <tbody>
//               {itemList.map((val, key) => {
//                 return (
//                   <tr key={key}>
//                     <td>{key}</td>
//                     <td>{val.itemname}</td>
//                     <td>{val.quantity}</td>
//                     <td>{val.description}</td>
//                     <td>{val.location}</td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </Table>

//           <Select options={dataOpt} value={data} onChange={setData} />

//           {/* <button onClick={getLocation}></button> */}
//         </div>
//       </div>
//     );
//   };
// }
