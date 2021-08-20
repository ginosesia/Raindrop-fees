import React from 'react';
import { InputBox } from './components/Input-box/input-box.component';
import { FeeDisplay } from './components/fee-text/fee-text.component';
import { NavBar } from './components/nav-bar/nav-bar.component';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pensionValue: 0.0,
      pensionFee: 0.0
    };
  }

  componentDidUpdate() {
    fetch(`http://localhost:8000/calculate-fee/${this.state.pensionValue}`)
      .then(res => res.json())
      .then(value => this.setState({pensionFee: value.fee}));
  }

  handleChange = (e) => {
    this.setState({ pensionValue: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <NavBar/>
        <div className="fee_title">Enter your estimated pension below to calculate our fees.</div>
          <p className="symbol">£
            <InputBox
              placeholder='Pension Value'
              handleChange={this.handleChange}
            />
        </p>
        <FeeDisplay
          fee={this.state.pensionFee}
        />
      </div>
    );
  }
}

export default App;