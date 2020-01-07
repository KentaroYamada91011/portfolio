import React from 'react'
import Card from './Card'
import BorderYellow from './BorderYellow'
import html from '../images/html.png';
import rails from '../images/rails.jpg';
import react from '../images/react.png';
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
                <li className="about__container__list">2019/04~　株式会社huproにて web エンジニアとしてフルタイムでインターンシップを始める</li>
                <li className="about__container__list">2019/08　 チームラボ株式会社にてフロントエンド エンジニアとしてサマーインターンに参加</li>
                <li className="about__container__list">2019/12~　創業メンバーとして株式会社best path partners にジョイン</li>
              </div>
            </div>
          </div>
          <div className="about__container">
            <div className="about__container__head skill">SKILL</div>
            <div className="cards">
              <Card img={html} title="HTML/CSS" lead="基本的なHTML5、CSS、Sass(SCSS)については、業務において使用。"/>
              <Card img={rails} title="Ruby" lead="プログラミングコミュ二ティにてruby on railsを学んだ後、趣味プロダクトを作成。現在はインターン先にてruby on railsを用いた開発、API作成、Rspecを用いたテストの作成を行っている。"/>
              <Card img={react} title="Javascript" lead="インターン先にてフロントエンドエンジニアとして、Reactを用いて開発を行う。ポートフォリオサイトもReactを用いて作成。Vue をを用いてコーポレートサイトの作成なども行う"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default About;
