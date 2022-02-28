import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import { Camera } from "./camera";
import { Root, Preview, Footer, GlobalStyle } from "./styles";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function MainCam() {
  const [isCameraOpen, setIsCameraOpen] = useState(true);
  const [cardImage, setCardImage] = useState();
  let navigate = useNavigate();

  const routeChange1 = () => {
    let path1 = "/InventoryItem";
    navigate(path1);
  };
  const history = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    history("/InventoryItem");
  }

  return (
    <Fragment>
      <Root>
        {isCameraOpen && (
          <Camera
            onCapture={(blob) => setCardImage(blob)}
            onClear={() => setCardImage(undefined)}
          />
        )}

        {cardImage && (
          <div>
            <h2>Preview</h2>
            <Preview src={cardImage && URL.createObjectURL(cardImage)} />
            <Preview src={URL.createObjectURL(cardImage)} />
          </div>
        )}

        <Footer>
          <button onClick={handleSubmit}>Save and back to main page</button>
        </Footer>
      </Root>
      <GlobalStyle />
    </Fragment>
  );
}
