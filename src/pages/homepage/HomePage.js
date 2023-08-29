import React from "react";
import p4 from "../../assets/p4.jpg";

export default function HomePage() {
  return (
    <>
      <div  className="row m-5">
        <div className="col-md-6">
          <img className="img-fluid rounded shadow" src={p4} alt="" />
        </div>

        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div>

            <h3 style={{ color: "rgba(40, 178, 25,0.8)" }}> <strong> Yaşam Koçluğu Nedir? Neden Koçluk Almalıyım? Kimler Koçluk Alabilir? Koçluk Süreci Nasıl Çalışır</strong>  </h3>

            <h3 style={{ color: "rgba(40, 178, 25,0.8)" }}> <strong> Eğitim ve Kariyer Koçluğu Nedir? Neden Eğitim Koçluğu Almalıyım? Koçluk Size Ne Kazandırır?</strong>  </h3>

            <h3 style={{ color: "rgba(40, 178, 25,0.8)"  }}> <strong> Sağlık Koçluğu Nedir? </strong>  </h3>

            <h5 style={{ color: "rgba(40, 178, 25,0.8)" }}><b> Egzersiz ne zaman yapılmalı? </b>  </h5>

            <h5 style={{ color: "rgba(40, 178, 25,0.8)" }}> <b> Sabah Aç karna Spor Neden Yapılmaz?</b></h5>

            
            <h1 style={{ color: "rgba(40, 178, 25,0.8)"  }}> <b> Bütün bunları öğrenmek istiyorsanız siteyi takip ediniz</b> </h1>
          </div> 
        </div>
      </div>
    </>
  );
}
