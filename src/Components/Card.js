import React, { Component } from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch(
      'https://my-json-server.typicode.com/james-delivery/frontend-challenge/establishments'
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
        // console.log(json);
      });
  }

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="Card">
          <ul className="Card-list">
            {' '}
            {items.map((item) => (
              <Link
                key={Math.random()}
                to={(location) => `${item.name}`}
                className="Card-link"
              >
                <li
                  // onClick={this.handleClick}
                  className="Card-item"
                  key={item.id}
                >
                  <img
                    alt="Subway Logo"
                    className="Card-image"
                    src={require('../Images/sub.png')}
                  />
                  <div className="Card-data">
                    <p className="Card-item-title">
                      {item.name}
                      <span className="Card-item-title-id"></span>
                    </p>
                    <p className="Card-item-address">{item.address}</p>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default Card;
