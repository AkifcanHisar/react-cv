import logo from './logo.svg';
import './App.css';
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function App() {
  return (
    <div className="App">
      <div className='leftSide'>
        <div className="cv-photo">
          <img src={"https://media.licdn.com/dms/image/v2/D4D03AQGEqT_G_Hrgaw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1703879536426?e=2147483647&v=beta&t=X6fj69vDWrAOup6RUrskq_A_jPZ7GC2A8dbgmHEvDrk"} alt="CV Fotoğrafı" className="rounded-photo" />
        </div>
        <div className="about-me">
          <h2 className='title'>Hakkımda</h2>
          <p className='description'>
          Yazılım destek uzmanı olarak, sorumluluk sahibi ve hedef odaklı biriyim.Aldığım ekstra eğitimler ve gittiğim yazılım okulundan sonra , yazılımsektöründe kariyerime başladım ve o zamandan beri müşterilerin veprogramların sorunlarını çözmek için çalışıyorum. Sürekli olarak yeni teknolojiler öğrenmeye açığım ve gelişmeleri takip ediyorum.Aynı zamanda, hedefim bir proje yöneticisi olmaktır. Çalıştığım şirketlere katkıdabulunmak için yeni fikirler ortaya koyarak ve iş süreçlerini geliştirerek sürekli birşekilde kendimi geliştirmeye çalışıyorum. İş arkadaşlarımla ve müşterilerimleetkili bir şekilde iletişim kurabilirim ve bir takım çalışması içinde çalışmaktankeyif alırım. Amacım, her zaman işimin en iyisini yapmak ve dahil olduğum şirketedeğer katmak için çalışmaktır.
          </p>
        </div>
        <div className="social-links">
          <h2 className='title'>Sosyal Medya</h2>
          <div className="socialIcons">
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin/>
              <p>Linkedin</p>
            </a>
            <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
              <FaTwitter/>
              <p>Twitter</p>
            </a>
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
              <FaGithub/>
              <p>GitHub</p>
            </a>
          </div>
        </div>
        <div className="references">
          <h2 className='title'>Referanslar</h2>
          <div className="reference-item">
            <h3 className='description'>Emre ALTUN</h3>
            <p className='description'>Yazılım Geliştirme Müdürü, TLS Lojistik</p>
            <p className='description'>Tel: +90 (555) 123 45 67</p>
            <p className='description'>E-posta: Emre.altun@tlslojistik.com</p>
          </div>
          <div className="reference-item">
            <h3 className='description'>Fatih KAYA</h3>
            <p className='description'>Kıdemli Yazılımcı, TLS Lojistik</p>
            <p className='description'>Tel: +90 (532) 987 65 43</p>
            <p className='description'>E-posta: fatih.kaya@tlslojistik.com</p>
          </div>
        </div>
        <div className="hobbies">
          <h2 className='title'>Hobiler</h2>
          <div className="hobby-items">
            <div className="hobby-item">
              <i className="fas fa-book"></i>
              <p className='description'>Kitap Okumak</p>
            </div>
            <div className="hobby-item">
              <i className="fas fa-hiking"></i>
              <p className='description'>Doğa Yürüyüşü</p>
            </div>
            <div className="hobby-item">
              <i className="fas fa-camera"></i>
              <p className='description'>Fotoğrafçılık</p>
            </div>
            <div className="hobby-item">
              <i className="fas fa-chess"></i>
              <p className='description'>Satranç</p>
            </div>
            <div className="hobby-item">
              <i className="fas fa-music"></i>
              <p className='description'>Müzik Dinlemek</p>
            </div>
          </div>
        </div>
      </div>
      <div className='rightSide'>
        <div className='headerSection'>
         <div className='headerLeftSide'>
            <div className='name'>
              Akif Can Hisar
            </div> 
            <div className='job'>
            Yazılım Destek Uzmanı
            </div>
          </div> 
          <div className='headerRightSide'>
            <div className='contact-info'>
              <div className='contact-item'>
                <p className=''>İstanbul, Türkiye</p>
              </div>
              <div className='contact-item middle'>
                <p className=''>akiifcaann@gmail.com</p>
              </div>
              <div className='contact-item'>
                <p className=''>+90 505 142 97 14</p>
              </div>
            </div>
          </div>
        </div>
        <div className='experienceSection'>
          <h2 className='contentTitle'>Deneyimler</h2>
          <div className='experienceItem'>
            <h3 className='contentDescription'>Yazılım Destek Uzmanı,TLS Lojistik</h3>
            <div className='stepBar'></div>
            <p className='contentDescription'>2022 - Devam Ediyor</p>
          </div>
        </div>
        <div className='educationSection'>
          <h2 className='contentTitle'>Eğitim</h2>
          <div className='experienceItem'>
            <h3 className='contentDescription'>Bilgisayar Programcılığı,Kapadokya Üniversitesi</h3>
            <div className='stepBar'></div>
            <p className='contentDescription'>2023 - 2025</p>
          </div>
          <div className='experienceItem'>
            <h3 className='contentDescription'>Lise, Cevizli İmam Hatip Lisesi</h3>
            <div className='stepBar'></div>
            <p className='contentDescription'>2014 - 2018</p>
          </div>
        </div>
        <div className='skillsSection'>
          <h2 className='contentTitle'>Yetenekler</h2>
          <div className='experienceItem'>
            <h3 className='contentDescription'>Programlama Dilleri</h3>
            <div className='stepBar'></div>
            <p className='contentDescription'>C#, Python, Java</p>
          </div>
          <div className='experienceItem'>
            <h3 className='contentDescription'>Web Teknolojileri</h3>
            <div className='stepBar'></div>
            <p className='contentDescription'>React, Node.js, HTML5, CSS3</p>
          </div>
          <div className='experienceItem'>
            <h3 className='contentDescription'>Veritabanları</h3>
            <div className='stepBar'></div>
            <p className='contentDescription'>MsSQLMySQL, MongoDB, PostgreSQL</p>
          </div>
          <div className='experienceItem'>
            <h3 className='contentDescription'>Araçlar</h3>
            <div className='stepBar'></div>
            <p className='contentDescription'>Git, Docker, VS Code</p>
          </div>
        </div>
        <div className='languagesSection'>
          <h2 className='contentTitle'>Yabancı Diller</h2>
          <div className='experienceItem'>
            <h3 className='contentDescription'>İngilizce</h3>
            <div className='stepBar'></div>
            <p className='contentDescription'>İleri Seviye</p>
          </div>
          <div className='experienceItem'>
            <h3 className='contentDescription'>Türkçe</h3>
            <div className='stepBar'></div>
            <p className='contentDescription'>Ana dil</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
