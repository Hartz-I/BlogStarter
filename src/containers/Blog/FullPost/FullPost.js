import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPost: null,
  };

  componentDidMount() {
    console.log(this.props);
    this.loadData();
  }

  //if working with router if a same component needs to be reloaded one must use Compont did update
  componentDidUpdate() {
    //need this in both so created mathod
    this.loadData();
  }

  //have to correct id check everywhere to work

  loadData() {
    //first checking if we have id
    //passing the id in a different way. from match property. which gets the id from passing it in route
    if (this.props.match.params.id) {
      if (
        //then making sure only one req gets sent
        !this.state.loadedPost ||
        (this.state.loadedPost && //adding plus makes string a number
          this.state.loadedPost.id !== +this.props.match.params.id) //params id returns a string
      )
        //getting data based on id
        axios.get("/posts/" + this.props.match.params.id).then((response) => {
          //   console.log(response);

          this.setState({ loadedPost: response.data });
        });
    }
  }

  deletePostHandler = () => {
    //sending delete request is also easy
    axios.delete("/posts/" + this.props.match.params.id).then((response) => {
      console.log(response);
    });
  };

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;

    if (this.props.match.params.id) {
      post = <p style={{ textAlign: "center" }}>Loading...</p>;
    }

    //this shouldn't be id check cuz we wanna only load when loaded post is fetched
    if (this.state.loadedPost) {
      //console.log(this.state.loadedPost);
      //null treated as false and not null is true
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button className="Delete" onClick={this.deletePostHandler}>
              Delete
            </button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
