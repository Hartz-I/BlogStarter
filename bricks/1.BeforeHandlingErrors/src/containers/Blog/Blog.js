import React, { Component } from "react";
import axios from "axios";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
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
        console.log(resnponse); ///see what's inside
      });
  }

  postSelectedHandler = (id) => {
    this.setState({ selectedPostId: id });
  };

  render() {
    //map what the posts are
    const posts = this.state.posts.map((post) => {
      return (
        <Post
          title={post.title}
          key={post.id}
          author={post.author}
          clicked={() => {
            this.postSelectedHandler(post.id);
          }}
        />
      );
    });

    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
