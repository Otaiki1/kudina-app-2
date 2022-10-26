
// Bootstrap CSS
import "../styles/custom.scss";
// Bootstrap Bundle JS
// import "bootstrap/dist/js/bootstrap.bundle.min";
//Bootstrap Icon
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect } from "react";


function MyApp({Component, pageProps}) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
     <div className="vw-md-50 vh-100 mx-md-auto border bg-secondary">
        <Component {...pageProps}/>
    </div>
  );
}

export default MyApp;
