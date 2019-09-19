import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Body from './components/Body.js';
import Counter from './components/Counter.js';
import ImageSlider from './components/ImageSlider.js';

class App extends React.Component {
  state = {
    visible: true
  }

  handleHide = () => {
    this.setState({
      visible: !this.state.visible,
      whichComponentToShow: "ImageSlider"
    })
  }

  showCounter = () => {
    this.setState({
      whichComponentToShow: "Counter"
    })
  }


  render() {
    const buttonText = this.state.visible ? "HIDE" : "SHOW"
    let slider = this.state.visible ? <ImageSlider /> : <Counter initialCount={5} />

    if (this.state.whichComponentToShow === "ImageSlider") {
      return (
        <div>
          <ImageSlider />
          <button onClick={() => {
            this.setState({ whichComponentToShow: "Counter" });
          }}
          > Show Counter</button>
        </div>
      )
    } else if (this.state.whichComponentToShow === "Counter") {
      return (
        <div>
          <Counter />
          <button onClick={() => {
            this.setState({ whichComponentToShow: "Header" })
          }}>
            Show Header
          </button>
        </div>
      )
    } else if (this.state.whichComponentToShow === "Header") {
      return (
        <div>
          <Header />
          <button onClick={() => {
            this.setState({ whichComponentToShow: "ImageSlider" })
          }}>
            Show ImageSlider
          </button>
        </div>
      )
    }

    return (
      <div className="App">
        <Body />
        <Counter initialCount={5} />
        {slider}
        <button onClick={this.handleHide}>{buttonText}</button>
      </div>
    );
  }
}

export default App;
