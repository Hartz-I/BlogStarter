import React, { Component } from "react";
import axiosInstance from "../../axiosInstance";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false,
  };

  componentDidMount() {
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
        //console.log(error);
        //global handling is in index.js
        this.setState({ error: true });
      });
  }

  postSelectedHandler = (id) => {
    this.setState({ selectedPostId: id });
  };

  render() {
    //using catch error we can render when error is made!
    let posts = <p>Something went wrong!!</p>;
    //map what the posts are
    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
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
    }

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
