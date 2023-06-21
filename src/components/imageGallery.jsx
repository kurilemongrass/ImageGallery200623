import "./imageGallery.css";
// import styled from "styled-components";
import Button from "@mui/material/Button";
import Images from "../data";
import React from "react";
import { useRef, useEffect, useState } from "react";
import ImageDes from "./imageDes";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import ImageList from "../../data";

function ImageGallery() {
  const ref = useRef(null);

  const imageList = Images;
  const imageListLength = imageList.length;
  const getImgUrl = (name) => new URL(`${name}`, import.meta.url).href;

  const [imageNo, setImageNo] = useState(0);

  function changeImage() {
    if (imageNo < imageListLength - 1) {
      setImageNo((prevState) => prevState + 1);
    } else {
      setImageNo(0);
    }
  }

  const [bgImageNo, setBgImageNo] = React.useState(0);

  function changeBgImage() {
    if (bgImageNo < imageListLength - 1) {
      setBgImageNo((prevState) => prevState + 1);
    } else {
      setBgImageNo(0);
    }
  }

  // const Mobile = useMediaQuery("(max-width:800px)");

  const [showDesState, setShowDes] = React.useState(false);
  const [hideDesState, setHideDes] = React.useState(false);

  useEffect(() => {
    if (showDesState) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showDesState]);

  const showDes = () => {
    setShowDes(true);
    setHideDes(true);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const hideDes = () => {
    setShowDes(false);
    setHideDes(false);
  };

  return (
    <div>
      <div className="image--gallery--wrap">
        <img
          class="image--gallery--bg"
          src={getImgUrl(imageList[imageNo].url)}
          alt="bgImage"
        ></img>
        <img
          src={getImgUrl(imageList[imageNo].url)}
          alt="first image"
          className="image--"
        />
        <div className="image--gallery--button">
          <Button
            variant="outlined"
            sx={{
              color: "#000000",
              margin: "1rem 1rem 0 0",
              border: 2,
              borderRadius: 0,
              ":hover": {
                borderColor: "#000000 !important",
                bgcolor: "#000000",
                color: "#ffffff",
                border: 2,
              },
            }}
            onClick={() => {
              showDes();
            }}
          >
            Description
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "#000000",
              margin: "1rem 0 0 1rem",
              border: 2,
              borderRadius: 0,
              ":hover": {
                borderColor: "#000000 !important",
                bgcolor: "#000000",
                color: "#ffffff",
                border: 2,
              },
            }}
            onClick={() => {
              changeImage();
              changeBgImage();
            }}
          >
            Next
          </Button>
        </div>
      </div>
      {showDesState && (
        <div ref={ref} className="image--des--wrap">
          <ImageDes imageNo={imageNo} />
          <div className="image--des--button">
            <Button
              variant="outlined"
              sx={{
                // color: Mobile ? "#ffffff" : "#000000",
                color: "#000000",
                border: 2,
                borderRadius: 0,
                ":hover": {
                  borderColor: "#000000 !important",
                  bgcolor: "#000000",
                  color: "#ffffff",
                  border: 2,
                },
              }}
              onClick={hideDes}
            >
              Collapse
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
