import React, { Component } from "react";
import axios from "axios";

//redirected if wanted
import { Redirect } from "react-router-dom";

import "./NewPost.css";

class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "Max",
    submitted: false
  };

  componentDidMount () {
    // gaurd
    // if unAuth => this.props.history.push('/')
  }

  postDataHandler = () => {
    const data = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author,
    };

    //as simple as that! sending/posting data to server
    axios.post("/posts", data).then((response) => {
      //console.log(response);
      // this.setState({submitted: true}) //this has a downside that the back button won't go back previous page

      //we can also redirect without changing the state

      this.props.history.push('/') //gives the same result!!
      //but to find exact behavior use this.props.history.replace
    });
  };

  render() {
    let redirect  = null

    //redirecting conditionaly
    if (this.state.submitted) {
      redirect = <Redirect to = '/' />
    }
    return (
      <div className="NewPost">
        {redirect}
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          //sending value into inputs
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={(event) => this.setState({ author: event.target.value })}
        >
          <option value="Max">Max</option>
          <option value="Manu">Manu</option>
        </select>
        <button onClick={this.postDataHandler}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
