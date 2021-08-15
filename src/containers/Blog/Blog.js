import React, { Component } from "react";
// import Post from "../../components/Post/Post";
// import FullPost from "../FullPost/FullPost";
// import NewPost from "../../components/NewPost/NewPost";

//use links instead of A for routing links
import { Route, NavLink, Switch } from "react-router-dom";
//Link doesn't have active class but NavLink does

import "./Blog.css";

import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
//import FullPost from "./FullPost/FullPost"; not needed as nested

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
                <NavLink
                  to="/" //should use /posts. but will keep it here
                  exact /** need exact to be active only when is clicked */
                  //activeClassName to set active class manually
                  //activeStyle property to inline style
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={
                    //now page won't reload. just content will
                    {
                      //use dif property
                      pathname: "/new-post", //always gives a absolute path
                      //pathname: this.props.match.url + "./new-post", //gives a relative path
                      hash: "#submit",
                      search: "/quick-submit=true",
                    }
                  }
                >
                  New Post
                </NavLink>
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
        <Switch /** it on let's to load one of them */>
          <Route
            path="/new-post"
            exact={true /**only for / not new-post */}
            //render={() => <NewPost />} shouln't use render to load component
            component={NewPost}
          />
          <Route path="/" component={Posts} />
          {/* <Route
            path="/:id" //this gives a flexible path //now for the error changing the name would work but we'll use a package
            exact
            component={FullPost} /*the link is in posts each post //going to nested route
          /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
