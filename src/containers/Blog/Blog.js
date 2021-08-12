import React, { Component } from "react";
// import Post from "../../components/Post/Post";
// import FullPost from "../FullPost/FullPost";
// import NewPost from "../../components/NewPost/NewPost";
import { Route, Link } from "react-router-dom";

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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link
                  to={
                    //now page won't reload. just content will
                    {
                      //use dif property
                      pathname: "./new-post",
                      hash: "#submit",
                      search: "/quick-submit=true",
                    }
                  }
                >
                  New Post
                </Link>
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
