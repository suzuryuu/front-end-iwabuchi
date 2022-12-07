import React, { Component } from "react";
import "./App.css";
import Tweet from "./Tweet.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], user: "", text: "" };
    this.tweet = this.tweet.bind(this);
    this.userName = this.userName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <p class="title">DM</p>
          <a href="matchinguser.html"><button class="title2" type="submit">戻る</button></a>
        </header>
       
        <div className="tweet-main">
          <Tweet items={this.state.items} />
        </div>
        <div className="container">
        
          <form onSubmit={this.handleSubmit} autoComplete="off">
            
            <textarea
              onChange={this.userName}
              value={this.state.user}
              id="name"
              placeholder="name"
            />
            <br />
            <textarea
              id="tweet"
              onChange={this.tweet}
              value={this.state.text}
              placeholder="tweets"
            />
            <br />
            <button className="btn btn-success" type="submit">
              送信
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }

  tweet(event) {
    this.setState({ text: event.target.value });
  }

  userName(event) {
    this.setState({ user: event.target.value });
  }

  /*繋げる場所 データ格納 今の状態(更新すると内容は残らない)*/
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.user === "") {
      alert("ユーザ名の入力が必要です");
      return;
    } else if (this.state.text === "") {
      alert("tweetsの入力が必要です");
      return;
    }

    const newItem = {
      user: this.state.user,
      text: this.state.text,
    };

    this.setState((state) => ({
      items: state.items.concat(newItem),
      user: "",
      text: "",
    }));
  }
}

export default App;
