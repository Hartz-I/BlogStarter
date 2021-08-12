import React, { Component } from "react";
// import Post from "../../components/Post/Post";
// import FullPost from "../FullPost/FullPost";
// import NewPost from "../../components/NewPost/NewPost";
import { Route } from "react-router-dom";

import "./Blog.css";

import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";

// routing to index.js or app.js
//full post and new post can be containers cuz now they will be new pages each with own state

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        {null /* nav links */}
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/new-post">New Post</a>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route
          //if multiple route has same path 2nd one will show belo first one
          path="/"
          render={() => <h1>Home1</h1>}
        />
        <Route
          //if multiple route has same path 2nd one will show belo first one
          path="/"
          exact={true /**only for / not new-post }
          render={() => <h1>Home2</h1>}
        /> */}
        <Route path="/" exact component={Posts} />
        <Route
          path="/new-post"
          exact={true /**only for / not new-post */}
          //render={() => <NewPost />} shouln't use render to load component
          component={NewPost}
        />
      </div>
    );
  }
}

export default Blog;
