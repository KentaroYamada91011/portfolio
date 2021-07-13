import React from 'react'
import Card from './Card'
import BorderYellow from './BorderYellow'
import lively from '../images/lively.png';
import megurume from '../images/megurume.png';
import portfolio from '../images/portfolio.png';
import bpp from '../images/bpp.png';
import priceHack from '../images/price-hack.png';
import PricingSprint from '../images/pricing-sprint.png';
import GeekTen from '../images/geek-ten.png';
import fukuroo from '../images/fukuroo.png';

import './About.css';

class About extends React.Component {
  render(){
    return(
      <div className="wrapper">
        <BorderYellow />
        <div className="about__main">
          <h1 className="about__title"></h1>
          <div className="about__container">
            <div className="about__container__head skill">WORKS</div>
            <div className="cards">
              <Card img={GeekTen} title="技育展登壇" lead="技育展にて約200名の閲覧者の中、zoom で価格感度分析ツール、Pricing Sprint の開発についてオンラインで発表" link="https://d52p8wr5sfua7.cloudfront.net/user_attached_files/files/000/000/798/original/%E6%8A%80%E8%82%B2%E5%B1%95.pdf?Expires=1626227650&Signature=d9f7WVJBJNvRI1i5~NMNo-tZpLnfzSA3jclaOE19F-septGWiocP8BH0T1fXxzZr27~F1mwRF4V1phBQ3gOwOV3Q3FqThy3-qruoDsuKVugz9-i8beAMpJHj0eZaOfSw6hDKNBpbFPmUfFbgZ5-lapEuKrZOpwbfflrcpOHSHUFMUMTWPIhPekpUhc7ihifAEHelRJx-045cUuLlptgV0BWIiEvSsjicTIaYbca9fAShkwu6iG8-gBTRObyhCcnd-8yhH5e19WeoRgJyZKKBrl~m5eZ8MQ-z3p296RvjceGhY6L60V1Iax4pTHzYf8VruIRv~82XaNEVYazUdS-i9A__&Key-Pair-Id=APKAJ2LT4DF3EF2674EQ"/>
              <Card img={PricingSprint} title="価格感度分析ツールPricing Sprint" lead="Ruby on Rails でAPI、フロントエンドをReact.jsで実装。データ分析にはPythonをAWS Lambda上でデプロイ" link="https://prtimes.jp/main/html/rd/p/000000005.000056765.html"/>
              <Card img={priceHack} title="プライシングメディア" lead="Gatsby.js を使い、Wordpress をヘッドレス CMS のメディアを作成" link="https://price-hack.com/"/>
              <Card img={portfolio} title="portfolioサイト" lead="Reactを使い、こちらのポートフォリオサイトを作成" link="https://y-k-portfolio.herokuapp.com/"/>
              <Card img={bpp} title="コーポレートサイト" lead="Vueを使い、株式会社best path partners のコーポレートサイトを作成" link="https://best-path-partners.com/"/>
              <Card img={fukuroo} title="フクロー" lead="Rails のsolidus を用いてECサイトを作成"/>
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
