import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
const Work = () => {
  const [dataa, setDataa] = useState([]);
  const [kaka, setKaka] = useState([]);
  const [bundle, setBundle] = useState([]);
  const [ok, setOk] = useState("");
  const [bye, setBye] = useState("");
  useEffect(async () => {
    const result = await axios("http://localhost:5000/getLocation");

    const x = result.data;

    const options = x.map((d) => ({
      label: d.loc_name,

      value: d.location_id,
    }));

    setDataa(options);
  }, []);

  const inserting = () => {
    axios
      .post("http://localhost:5000/addmom", {
        ok: dataa.value,
      })
      .then(() => {
        console.log("posting working");
        setBundle([
          ...bundle,
          {
            ok: dataa.value,
          },
        ]);
      });
    return <></>;
  };
  console.log(dataa);

  return (
    <>
      <Select options={dataa} value={kaka} onChange={setKaka} />
      <button onClick={inserting}>Post me</button>
    </>
  );
};

export default Work;
