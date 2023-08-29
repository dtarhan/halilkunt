import React from "react";
import pt from "../../assets/pt.jpeg";

const About = () => {
  return (
    <div className="row m-5">
      <h1 style={{ color: "#28B219" }}> Hakkımda </h1>
      <div className="col-md-4">
        <img className="img-fluid rounded " src={pt} alt="" />
      </div>
      
      <div className="col-md-6">
        <div>
          <p>
          Kamu Yönetimi ve Biyolojialanlarında lisans derecelerine, zooloji alanında ise yüksek lisans ve doktora derecelerine sahibim. Akademik çalışmalarımda insan biyokimyası ve fizyolojisi, insan sağlığının iyileştirilmesi, tıbbi ve aromatik bitkiler yanısıra doçentlik alanım olarak öğrenci öz yeterliliği, motivasyonu ve öğrencilerde akademik başarıyı etkileyen faktörler ve bunların iyileştirilmesi, tutum ve başarının artırılması üzerine eğitim alanında çalışmalar gerçekleştirdim. Uluslararası indeksli dergilerde 30'dan fazla İngilizce makale yayınladım.
          </p>

          <p>
          Bugünlerde ise ICF profesyonel uzman koç olarak;yönetici ve takım koçluğu, eğitim koçluğu, sağlıklıyaşam, beslenme, kilo vermekonularında ise sağlık ve yaşam koçluğu yapıyorum.
          Akademisyen bir biyolog ve eğitmen olarak, daima odağım insan sağlığı, yaşamı, eğitimi olmuştur.  
          </p>

          <p>
          Her bireyin benzersiz olduğuna inanıyorum ve danışanlarımın bireysel ihtiyaçlarına uygun olarak özelleştirilmiş koçluk programları sunuyorum. Biyolojik ve genetik tipe uygun ve biyolojik saatle uyumlu nutrigenomik beslenme ve yaşam tarzı programları hazırlıyorum. Zihni ve bedeni bir bütün olarak değerlendiriyorum.
          Eğitim alanında da her bireyin öğrenme şekli farklı olduğundanmentorluktave koçlukta bireysel planlama yapılması gerektiğine inanıyorum. Her öğrencime özel bireysel eğitim ve sağlık programları hazırlıyorum.
          </p>

          <p>
          Sağlıklı yaşam, öğrencilerden CEO'lara kadar herkes için önemlidir. Öğrencilerde sadece bilgiye odaklanılırken, beyin ve onun çalışmasını düzenleyen mikrobiyota sağlığı, uyku, beslenme, egzersiz gibi sağlıklı yaşam tarzının unsurları ihmal edilmektedir. İlişki ve stres yönetimi gibi faktörler de genellikle göz ardı edilmektedir.
          Yöneticilerde de benzer bir durum söz konusudur. İşe odaklanırken, sağlıklı bir beden ve zihnin iş verimini artırabileceği gerçeği göz ardı edilir. İşe odaklanırken kendimizi ve yaşamı ihmal etme eğiliminde oluruz. Ancak, sağlığımızın bizi bir gün yarı yolda bırakabileceğini daima hatırlamamız gerekmektedir.
          </p>

          
        </div>
      </div>
      <div className="row m-5">
        
        <p> <b> 
          Danışmanlık hizmetlerim arasında bütüncül ve fonksiyonel eğitim danışmanlığı, sirkadiyen uyku,beslenme, egzersiz, mikrobiyota danışmanlığı, ilişki ve stres yönetimi, yönetici ve takım koçluğu, yönetici sağlık koçluğu gibi alanlar bulunmaktadır. Bu hizmetlerle size sağlıklı bir yaşam tarzı ve gelecek oluşturmanızda yardımcı olmaktayım.
          Ayrıca, kurumsal eğitimler de veriyorum. CEO'lar ve yöneticiler için sağlıklı yaşam tarzının iş verimine etkisi, çalışanlarda sağlık yönetiminin iş verimine etkisi ve öğrencilerde sağlığın iyileştirilmesi ile akademik başarı arasındaki ilişki gibi konularda eğitimler sunmaktayım.
          Sağlığınızı önemseyen bir danışman ve ICF profesyonel uzman koç olarak, size özgün ve kişiye özel bir yaklaşım sunmak için buradayım. Sağlıklı yaşam için doğru adımlar atmak ve hayatınızı dönüştürmek isterseniz, iletişime geçmekten memnuniyet duyarım.
          Unutmayın, sağlıklı bir yaşamın size ve iş verimine nasıl olumlu etkiler sağlayabileceğini keşfetmek için doğru zaman şimdi!
          </b>
          </p>
      </div>
    </div>
  );
};

export default About;
