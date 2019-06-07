import React, { Component } from 'react';
import posed from 'react-pose'
import './BorderYellow.css';

const props = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
}

const Border = posed.div(props)

class BorderYellow extends Component {
  constructor(props) {
    super(props);
  }

  state = { isUnVisible: false };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isUnVisible: !this.state.isUnVisible });
    }, 1000);
  }

  render() {
    return (
      <Border className={this.props.display ? "border border-visible" : "border"} pose={this.state.isUnVisible  ? 'hidden' : 'visible'} />
    );
  }
}

export default BorderYellow;
