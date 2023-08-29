import React, { useState } from "react";
import s1 from "../../assets/s1.jpg";



export default function Saglikkoclugu() {

  
    const [displayStyle, setDisplayStyle] = useState('none');
  
    const handleClick = () => {
      setDisplayStyle(displayStyle === 'none' ? 'block' : 'none');
    };

  
  return (
    <>
      <div className="row m-5">
        <div className="col-md-6" >
        <div>
            <h1 style={{ color: "rgba(40, 178, 25,0.8)" }}> Sağlık Koçluğu Nedir? </h1>

            <p> 
            Kronik rahatsızlıkların temel sebebi hatalı yaşam tarzımızdır. Bu hatalı yaşam tarzımızı doğru davranışlarla değiştirdiğimizde hastalıklarımızda da doğal olarak bir iyileşme olur. Kendimizi eskisinden daha iyi hissederiz. Fazla kilolarımız, göbek, basen gitmeye başlar. Sabahları daha dinç ve enerjik uyanırız. Cildimiz daha gergin ve güzel olur. Kendimizi daha mutlu hissederiz. Çevremize ve hayata daha olumlu duygularla bakmaya başlarız. Ancak Sağlık koçluğu, bir tedavi süreci değildir. Yalnızca kalıcı sağlığınız için bir yaşam tarzı oluşturma sürecidir. Yaşamınızı bir sanat eserine dönüştürme sürecidir. Sağlık koçluğu ile “Yaşam, Tarzınız Olur.”
            </p>

            

        </div>    
          <div  id="health">
            
              
            

            
            
          </div>

        </div>

        <div className="col-md-6">
          <img className="img-fluid rounded shadow" src={s1} alt="" />
        </div>
      </div>
      <div className="row m-5">

         <h1 style={{ color: "rgba(40, 178, 25,0.8)" }}> Sağlıklı Yaşam Yöneticiler İçin Neden Önemlidir? </h1>
         <p> CEO'lar ve yöneticiler, şirketlerinin ve işyerlerinin başarısı için kritik öneme sahiptir ve bu nedenle sağlıklı bir yaşam sürdürmek ve iyi bir zihinsel sağlık durumuna sahip olmak, iş performansı üzerinde doğrudan bir etkiye sahiptir. Bir işletmenin başarısı, liderlerinin liderlik becerilerine, stratejik planlama ve yönetim yeteneklerine, takım yönetimine, işbirliği ve iletişim becerilerine ve daha pek çok faktöre bağlıdır. Ancak, liderlerin sağlıklı bir yaşam sürdürmesi ve iyi bir zihinsel sağlık durumuna sahip olması, bu becerileri kullanmalarına, daha verimli çalışmalarına ve daha etkili kararlar almalarına yardımcı olabilir.</p>
         <p> Bu nedenle, CEO'lar ve yöneticiler, sağlıklı bir yaşam sürdürmek ve iyi bir zihinsel sağlık durumuna sahip olmak için zaman ve kaynak ayırmalıdırlar. Bu, liderlerin iş performansını artırabilir, çalışanların motivasyonunu artırabilir ve işletmenin genel başarısına katkıda bulunabilir. </p>
         
         <h1 style={{ color: "rgba(40, 178, 25,0.8)" }}> Neden Sağlık Danışmanlığı Almalıyım?</h1>

         <p> Sağlık danışmanlığı, CEO'lar ve yöneticilerin sağlıklı bir yaşam tarzı benimsemelerine, stres yönetimi becerilerini geliştirmelerine ve zihinsel sağlıklarını korumalarına yardımcı olur.
          Ayrıca, sağlık sorunları ve stresli durumlar, CEO'lar ve yöneticilerin iş performansını ve hatta şirketlerinin performansını olumsuz yönde etkileyebilir. Bu nedenle, sağlık danışmanlığı, CEO'ların ve yöneticilerin sağlıklarını korumalarına, enerjilerini yüksek tutmalarına, stresle başa çıkmalarına ve daha iyi bir zihinsel sağlık durumu sağlamalarına yardımcıdır.
          Sonuç olarak, CEO'lar ve yöneticiler, iş performanslarını en üst düzeye çıkarmak için sağlıklı bir yaşam tarzı benimsemeli ve zihinsel sağlıklarını korumalıdır. Sağlık danışmanlığı, bu hedeflere ulaşmalarına yardımcı olarak işletmenin başarısına olumlu bir etki yapar.
          Sağlık danışmanlığının iş performansı üzerindeki etkilerine ilişkin yapılmış bilimsel araştırmalar, sağlıklı bir yaşam tarzı benimsemenin ve zihinsel sağlığı korumanın CEO'lar ve yöneticiler için önemli olduğunu göstermektedir.
         </p>
         <h1 style={{ color: "rgba(40, 178, 25,0.8)" }}> Sağlık Koçluğu Size Ne Kazandırır?</h1>

         <p>  <b> Zaman yönetimi:</b> Zaman yönetimi becerileri sayesinde, yöneticiler iş ve özel hayatlarını daha iyi dengede tutabilirler.
              <b> Stres yönetimi:</b> Yöneticilerin ve CEO'ların sıkı çalışma programları ve yoğun stres altında çalışmaları, stres seviyelerinin yükselmesine neden olabilir. Stres yönetimi, özellikle kalp hastalığı, depresyon, uyku bozuklukları ve diğer sağlık sorunlarına yol açabilecek kronik stresin azaltılmasına yardımcı olabilir.
              <b> Uyku kalitesi:</b> Uyku kalitesi, CEO ve yöneticilerin sağlığı üzerinde önemli bir etkiye sahiptir. Uyku kalitesini artırmak, stres seviyelerini azaltırken enerji seviyelerini, zihinsel performansı artırır ve kronik hastalıkların önlenmesine yardımcı olur. 
              <b> Sağlıklı beslenme:</b> Yoğun çalışma programları nedeniyle CEO ve yöneticilerin sağlıklı beslenme alışkanlıkları koruması zor olabilir. Sağlıklı beslenme alışkanlıkları, kilo kontrolü, enerji seviyelerinin artırılması ve kronik hastalıkların önlenmesine yardımcı olabilir. 
              <b> Fiziksel aktivite:</b> CEO ve yöneticilerin yoğun çalışma programları, seyahat etmek ve iş toplantılarına katılmak gibi nedenlerle fiziksel aktiviteleri kısıtlanabilir. Fiziksel aktivite, stres azaltmaya yardımcı olabilir, enerji seviyelerini artırabilir ve kronik hastalıkların önlenmesine yardımcı olabilir.
         </p>

         <h1 style={{ color: "rgba(40, 178, 25,0.8)" }}> Sağlık Koçluğu Süreci Nasıl Çalışır? </h1>
         <p> Ücretsiz tanışma seansı ile 15 dakikalık bir ön görüşme yapılır. Süreçte nasıl ilerleyeceğimiz ve sizin beklentilerinizi anlamaya yönelik ön planlamamızı gerçekleştirdikten sonra, haftada bir aralıklarla online veya yüz yüze görüşmelerimize başlıyoruz. 
	           Koçluk seansları 45 dakikadır. Ancak ilk seansta tanışma, geçmiş hastalık öyküsü, genetik öykü, vücut analizi, danışana en uygun programın planlaması yapıldığından dolayı daha uzun sürmektedir.   Genel seanslarda ise geçmiş haftanın değerlendirmesi ve diğer haftanın planlaması yapılır. Aynı zamanda bu seanslarda kilo kontrolü ve sağlıklı yaşama geçişte engellerin kaldırılması, motivasyonun korunmasına yönelik yaşam koçluğu desteği verilir.  
             Hiçbir başarı tesadüf değildir. Başarı profesyonel bir süreçtir. Sağlık danışmanlığı ile bireyin mevcut sağlığı ve yaşantısı yanı sıra geleceğine de dokunulmuş olur. Bu dokunuş bireyin yanı sıra ailesinin diğer fertlerini de olumlu yönde etkilemektedir. Birey özelinde tüm ailenin mutlu, huzurlu, bedenen, zihnen ve ruhen sağlıklı olması sağlanır.
         </p>
      </div>
    </>
  );

}