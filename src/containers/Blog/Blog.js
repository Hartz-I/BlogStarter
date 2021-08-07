import React, { Component } from "react";
import axios from "axios";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      //then executes after the request is finished
      .then((resnponse) => {
        //set state won't work outside cuz JS doesn't work while the data is fetched
        this.setState({ posts: resnponse.data });
        console.log(resnponse); ///see what's inside
      });
  }

  render() {
    const posts = this.state.posts.map((post) => {
      return <Post title={post.title} key={post.id} />;
    });
    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
