import React, { Component } from 'react';

class LogInPage extends Component {
  constructor(props) {
    super(props);
    this.state = { amount: 0 };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ amount: event.target.value });
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.amount);
    event.preventDefault();
  }
  render() {
    return (
      <div className="container">
        <div className="col-lg-6 col-md-8" style={{ margin: 'auto' }}>
          <div className="checkout__order" style={{ borderRadius: '10px' }}>
            <h4 className="order__title" style={{ textAlign: 'center' }}>
              Log In
            </h4>
            <ul className="checkout__total__products">
              <div className="checkout__input">
                <div className="row">
                  <p>Name</p>
                  <input
                    type="text"
                    style={{
                      borderRadius: '10px',
                      background: '#f3f2ee',
                      color: '#000',
                    }}
                    placeholder="Name"
                    value={this.state.amount}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="checkout__input">
                <div className="row">
                  <p>Email</p>
                  <input
                    type="email"
                    style={{
                      borderRadius: '10px',
                      background: '#f3f2ee',
                      color: '#000',
                    }}
                    placeholder="Amount"
                    value={this.state.amount}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </ul>
            <button
              type="submit"
              className="site-btn"
              onClick={this.handleSubmit}
            >
              Log In
            </button>
            <button
              type="submit"
              className="site-btn"
              onClick={this.handleSubmit}
            >
              Sing In
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LogInPage;
