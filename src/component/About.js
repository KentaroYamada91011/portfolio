import React from 'react'
import Card from './Card'
import BorderYellow from './BorderYellow'
import html from '../images/html.png';
import rails from '../images/rails.jpg';
import react from '../images/react.png';
import python from '../images/python.png';
import r from '../images/r.jpeg';
import './About.css';

class About extends React.Component {
  render(){
    return(
      <div  className="wrapper">
        <BorderYellow />
        <div className="about__main">
          <h1 className="about__title">YAMADA KENTARO</h1>
          <div className="about__container">
            <div className="about__container__head">CAREER</div>
            <div className="about__container__description">
              <table>
                <tr>
                  <td>Name</td>
                  <th>山田健太郎</th>
                </tr>
                <tr>
                  <td>University</td>
                  <th>横浜国立大学　理工学部</th>
                </tr>
                <tr>
                  <td>Birthday</td>
                  <th>1997/10/11</th>
                </tr>
              </table>
              <div className="about__container__lists">
                <li className="about__container__list">2016/03　桐朋高校卒業</li>
                <li className="about__container__list">2016/04　横浜国立大学　理工学部　化学生命系学科　入学</li>
                <li className="about__container__list">2018/11　プログラミングを始める(Ruby on rails)</li>
                <li className="about__container__list">2019/04　横浜国立大学　休学</li>
                <li className="about__container__list">2019/04~2019/12　株式会社huproにて web エンジニアとしてフルタイムでインターンシップを始める</li>
                <li className="about__container__list">2019/08　 チームラボ株式会社にてフロントエンド エンジニアとしてサマーインターンに参加</li>
                <li className="about__container__list">2019/12~現在　創業メンバーとして株式会社best path partners にジョイン</li>
                <li className="about__container__list">2020/6　価格感度分析ツール、Pricing Sprint をリリース。プロダクトをアーキテクト、DB設計の全て、バックエンド、フロントエンドの大部分を1人で担当し開発。</li>
              </div>
            </div>
          </div>
          <div className="about__container">
            <div className="about__container__head skill">SKILL</div>
            <div className="cards">
              <Card img={rails} title="Ruby" lead="RoR のフレームワークを用いて株式会社ヒュープロのフルタイムエンジニアインターンや、株式会社 Best path Partners にて使用。クライアント側からバックエンド側、API作成、Rspecを用いたテストなども経験。"/>
              <Card img={react} title="Javascript" lead="株式会社Best path Partners のコーポレートサイトをVue.js を用いて、プライシングに関するメディアをGatsby.js を用いて作成。また、ポートフォリオサイトもReact.js を用いて作成。"/>
              <Card img={python} title="python" lead="プライシングに関するスクレイピングや分析に使用。"/>
              <Card img={r} title="R言語" lead="プライシングに関する分析や可視化のために使用"/>
              <Card img={html} title="HTML/CSS" lead="基本的なHTML5、CSS、Sass(SCSS)については、業務において使用。"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default About;
