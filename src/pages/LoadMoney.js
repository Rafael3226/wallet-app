import React from 'react';

class LoadMoney extends React.Component {
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
              Your order
            </h4>
            <ul className="checkout__total__products">
              <div className="checkout__input">
                <div className="row">
                  <input
                    type="number"
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
            <ul className="checkout__total__all">
              <li>
                Total <span>{`${this.state.amount} $`}</span>
              </li>
            </ul>
            <button
              type="submit"
              className="site-btn"
              onClick={this.handleSubmit}
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoadMoney;
