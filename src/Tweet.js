import React from 'react';
import './App.css';

class Tweet extends React.Component {

  render() {

    return (
      <React.Fragment>
        <ul>
          {this.props.items.map((item, i) => (
            <li key={i}>
            <div className="tweet-bc">
              <div className="balloon6">
                <div className="faceicon">
                  <img src="user.jpg"/>
                    {item.user}
                </div>
                <div className="tweeting">
                  <div className="tweets">
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            </div>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default Tweet;