import React from 'react'
import Card from './Card'
import BorderYellow from './BorderYellow'
import lively from '../images/lively.png';
import megurume from '../images/megurume.png';
import portfolio from '../images/portfolio.png';
import bpp from '../images/bpp.png';
import fukuroo from '../images/fukuroo.png';

import './About.css';

class About extends React.Component {
  render(){
    return(
      <div  className="wrapper">
        <BorderYellow />
        <div className="about__main">
          <h1 className="about__title"></h1>
          <div className="about__container">
            <div className="about__container__head skill">WORKS</div>
            <div className="cards">
              <Card img={portfolio} title="portfolioサイト" lead="Reactを使い、こちらのポートフォリオサイトを作成"/>
              <Card img={bpp} title="コーポレートサイト" lead="Vueを使い、コーポレートサイトを作成"/>
              <Card img={fukuroo} title="フクロー" lead="Rails のsolidus を用いてECサイトを作成2020/2にリリース予定"/>
              <Card img={megurume} title="Megurume" lead="Nuxt.jsとWordpress Rest Apiを使い、github上にある'nuepress'を参照に作成"/>
              <Card img={lively} title="lively" lead="ruby on railsを使い、プログラミングをして初めて作ったWebサイト。フォロー機能、カレンダー機能などを搭載"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default About;
