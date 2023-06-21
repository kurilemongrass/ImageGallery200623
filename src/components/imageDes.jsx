import React from "react";
import "./imageDes.css";
import Images from "../data";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function ImageDes(props) {
  const imageList = Images;

  const [desDesDisplay, setDesDisplay] = React.useState(props.className);
  console.log(props.className);
  console.log(desDesDisplay);

  return (
    <div className={desDesDisplay}>
      {/* <div className="image--des--outer--box"> */}
      <div className="image--des--inner--box">
        <h1 className="image--des-title">{imageList[props.imageNo].title}</h1>
        <p className="image--des-year">{imageList[props.imageNo].year}</p>
        <p className="image--des-photographer">
          {imageList[props.imageNo].photographer}
        </p>
        <p className="image--des-description">
          {imageList[props.imageNo].description}
        </p>
      </div>
      {/* </div> */}
    </div>
  );
}

export default ImageDes;
