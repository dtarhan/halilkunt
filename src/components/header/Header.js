import React from "react";
import { Link } from "react-router-dom";
import "./head.css";
import Logo from "../../assets/HK-logo-Koyu.png";

export default function Header() {
  return (
    <>
      <div>
        <nav className="navbar d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center">
          <div>
               <Link to="/"> 
                 <img src={Logo} alt="" width="70"  />
              </Link> 
            </div>

            <div>
              <ul>
                <li>
                  <Link to="/">
                    
                    <span style={{ color: "#28B219" }}> Anasayfa </span>
                  </Link>
                </li>
                <li>
                  <Link to="/saglik-rehberi">
                    
                    <span style={{ color: "#28B219" }}> Sağlık Koçluğu </span>
                  </Link>
                </li>

                <li>
                  <Link to="/beslenme-rehberi">
                    
                    <span style={{ color: "#28B219" }}> Beslenme Danışmanlığı </span>
                  </Link>
                </li>
                
                <li>
                  <Link to="/egitim-rehberi">
                    
                    <span style={{ color: "#28B219" }}> Eğitim ve Öğrenci Koçluğu </span>
                  </Link>
                </li>
                <li>
                  <Link to="/yasam">
                    
                    <span style={{ color: "#28B219" }}> Yaşam Koçluğu </span>
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    
                    <span style={{ color: "#28B219" }}> Hakkımda</span>
                  </Link>
                </li>
                <li>
                  <Link to="/iletisim">
                    
                    <span style={{ color: "#28B219" }}> İletişim </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
