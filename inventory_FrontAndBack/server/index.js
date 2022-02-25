const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "abcd",
  database: "employeesystem",
});

// Inventory category
app.post("/createCategory", (req, res) => {
  console.log(req.body);
  const category = req.body.category;
  const date = req.body.date;
  const time = req.body.time;

  db.query(
    "INSERT INTO Inventory_category (inventory_category,date,time) VALUES (?,?,?)",
    [category, date, time],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

// getting item name
app.get("/getItem", (req, res) => {
  db.query("Select * from location", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// getting location names
app.get("/getLocation", (req, res) => {
  db.query("Select * from mylocation", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// getting inventory categories
app.get("/getCategories", (req, res) => {
  db.query("Select * from inventory_category", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// Inventory Item
// app.post("/createInventoryItem", (req, res) => {
//   console.log(req.body);
//   const item_name = req.body.item_name;
//   const location = req.body.location;
//   const quantity = req.body.quantity;
//   const description = req.body.description;

//   db.query(
//     "INSERT INTO item (quantity,description,item_name,location) VALUES (?,?,?,?)",
//     [quantity, description, , item_name, location],
//     (err, result) => {
//       if (err) {
//         console.log(req.body);
//         console.log(err);
//       } else {
//         res.send("Values inserted");
//       }
//     }
//   );
// });

app.post("/addmom", (req, res) => {
  const location_name = req.body.location_name;
  db.query(
    "INSERT INTO example (location_name) VALUES (?)",
    [location_name],

    (err, result) => {
      if (err) {
        console.log("haahah");
        console.log(err);
      } else {
        res.send("inserting in example table ");
      }
    }
  );
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
