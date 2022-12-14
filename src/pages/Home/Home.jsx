import React from 'react';
import './Home.scss';
import profile from '../../assets/profile.png';




function Home() {
  return (
    <div className="header ">
      <div className="header__image">
        <img src={profile} alt="" />
      </div>
      <div className="header__content">
        <h2>
          Witam ! <br /> mam na imię Piotr <br />
          zapraszam do zapoznania się z moim portfolio.
        </h2>
        <p>
          Jest to moje pierwsze portfolio. Swoją przygodę z front-end'em
          zacząłem w maju br. W dobie Covid-19 oraz pogarszającej się sytuacji
          na rynku , w którym byłem obecny co skutkowało utratą pracy,
          postanowiłem spróbować zmienić całkowicie obszar , w którym chciałbym
          się rozwijać. Mam nadzieję, że podjęta decyzja okaże się słuszna.
          <br />
          Na kolejnych stronach zamieściłem moje projekty i krótką informację o
          dotychaczasowym doświadczeniu zawodowym.
        </p>
      </div>

      <div className="header__content-people">
        <p>Miłego oglądania.. !!</p>
      </div>
    </div>
  );
}

export default Home;