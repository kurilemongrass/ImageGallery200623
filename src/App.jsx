import "./App.css";
import "./font.css";
import { Helmet } from "react-helmet";
import Favicon from "./assets/favicon.png";
import ImageGallery from "./components/imageGallery.jsx";
// import ImageDes from "./components/imageDes";

function App() {
  return (
    <>
      <Helmet>
        <title>My Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="utf-8" />
        <link rel="shortcut icon" href={Favicon} />
      </Helmet>
      <ImageGallery />
    </>
  );
}

export default App;
