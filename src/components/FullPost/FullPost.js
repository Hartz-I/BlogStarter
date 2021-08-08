import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPost: null,
  };

  componentDidUpdate() {
    //first checking if we have id
    if (this.props.id) {
      if (
        //then making sure only one req gets sent
        !this.state.loadedPost ||
        (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)
      )
        //getting data based on id
        axios
          .get("https://jsonplaceholder.typicode.com/posts/" + this.props.id)
          .then((response) => {
            //   console.log(response);

            this.setState({ loadedPost: response.data });
          });
    }
  }

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;

    if (this.props.id) {
      post = <p style={{ textAlign: "center" }}>Loading...</p>;
    }

    if (this.state.loadedPost) {
      console.log(this.state.loadedPost);
      //null treated as false and not null is true
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button className="Delete">Delete</button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
