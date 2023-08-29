import React, { useState } from "react";
import p3 from "../../assets/p3.jpg";
import s3 from "../../assets/s3.jpg";
import { Link } from "react-router-dom";

export default function Beslenmedanismanligi() {

    const [displayStyle, setDisplayStyle] = useState('none');
  
    const handleClick = () => {
      setDisplayStyle(displayStyle === 'none' ? 'block' : 'none');
    };
  return (
    <>  
      <div className="row m-5">
      
          <div  className="col-md-6">
          <button onClick={handleClick}  className="btn btn-lg btn-outline-secondary"> <span style={{ color: "#28B219" }}> Beslenme Rehberi </span> </button>
            <ul style={{display:displayStyle, listStyle:"none"}}>
              <li>
                <span style={{ color: "rgba(40, 178, 25,0.8)" }}> <h2> Hastalıklarda diyet </h2>  </span>
              </li>
              <li>
                <span style={{ color: "rgba(40, 178, 25,0.8)" }}>
                 
                   <h2> Kas Geliştirme Diyeti </h2>
                </span>
              </li>
              <li>
                <span style={{ color: "rgba(40, 178, 25,0.8)" }}> <h2> Çocuklarda Beslenme </h2> </span>
              </li>
              <li>
                <span style={{ color: "rgba(40, 178, 25,0.8)" }}> <h2> Detox Diyetleri </h2>  </span>
              </li>
              <li>
                <span style={{ color: "rgba(40, 178, 25,0.8)" }}> <h2> Mevsimsel Beslenme </h2>  </span>
              </li>
            </ul>

            <Link to="/beslenme-details"> <button className="btn btn-lg btn-secondary" style={{ color: "rgba(40, 178, 25,0.9)"}}>  Diyet Seçimi </button> </Link>
          
        
      </div>
      <div className="col-md-6">
        <img className="img-fluid rounded " src={p3} alt="" />
      </div>
      </div>
      <div className="row m-5">
        <div className="col-md-6">
          <img className="img-fluid rounded shadow" src={s3} alt="" />
        </div>

        <div className="col-md-6">
          <div>
            <button onClick={handleClick}  className="btn btn-lg btn-outline-secondary" style={{ color: "#28B219" }}>Kilo Vermek</button>

            <ul style={{display:displayStyle, listStyle:"none"}}>
                <li>
                  <span style={{ color: "rgba(40, 178, 25,0.8)" }}>
                    <h2> Diyet Türleri </h2>
                  </span>
                </li>
                <li>
                  <span style={{ color: "rgba(40, 178, 25,0.8)" }}>
                    <h2> Uyurken Zayıflama Diyeti </h2>
                  </span>
                </li>
                <li>
                  <span style={{ color: "rgba(40, 178, 25,0.8)" }}>
                    <h2> Kilo Verme İpuçları</h2>
                  </span>
                </li>
              </ul>

              <Link to="/kilo-verme-details"> <button className="btn btn-lg btn-secondary" style={{ color: "rgba(40, 178, 25,0.9)"}}>  Ayrıntılı Bilgi </button> </Link>
           
            
          </div>
        </div>
      </div>

    </>
   
  )
}
