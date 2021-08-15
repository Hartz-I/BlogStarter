import React, { Component } from "react";
import axiosInstance from "../../../axiosInstance";

// import { Link } from "react-router-dom";
//doing it programmatically in click listener

import "./Posts.css";
import Post from "../../../components/Post/Post";

class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    console.log(this.props);

    axiosInstance
      .get("/posts") //short cuz URL is set default
      //then executes after the request is finished
      .then((resnponse) => {
        const posts = resnponse.data.slice(0, 4); //to get relive from too many data
        const updatedPosts = posts.map((post) => {
          return {
            ...post,
            author: "Ahnaf", //can work with the data we get back
          };
        });

        //set state won't work outside cuz JS doesn't work while the data is fetched
        this.setState({ posts: updatedPosts });
        //console.log(resnponse); ///see what's inside
      })
      .catch((error) => {
        //handles error locally
        console.log(error);
        //global handling is in index.js
        //this.setState({ error: true });
      });
  }

  postSelectedHandler = (id) => {
    //access the functions in history : console log to se

    //going to the link with id
    this.props.history.push({ pathname: "/" + id });
    // this.props.history.push("/" + id );
  };

  render() {
    //using catch error we can render when error is made!
    let posts = <p>Something went wrong!!</p>;
    //map what the posts are
    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        return (
          // <Link to={"/" + post.id} key={post.id}>
          <Post
            title={post.title}
            author={post.author}
            clicked={() => {
              this.postSelectedHandler(post.id);
            }}
          />
          // </Link>
        );
      });
    }
    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;
