import React from 'react'
import posed from 'react-pose'
import Animation from './Animation'
import BorderYellow from './BorderYellow'
import './Home.css';

const props = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
}
const Box = posed.div(props)

class Home extends React.Component {
  state = { isVisible: false };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 1000);
  }
  render(){
    return(
      <div  className="wrapper">
        <BorderYellow display="true"/>
        <div className="home__main">
          <Animation className="animation" />
          <div className="home__name">
            <Box className="name" pose={this.state.isVisible ? 'visible' : 'hidden'} >TANAKA KENTARO</Box>
            <div className="home__description">
              I am a Web Developer based in Tokyo.Born in Tokyo.I was in Yokohama National University.Engineer. Engineerring, Art, Design, Planning, Development
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Home;
