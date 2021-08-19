import React, { Component } from "react";
// import Post from "../../components/Post/Post";
// import FullPost from "../FullPost/FullPost";
// import NewPost from "../../components/NewPost/NewPost";

//use links instead of A for routing links
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
//Link doesn't have active class but NavLink does

import "./Blog.css";

import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
//import FullPost from "./FullPost/FullPost"; not needed as nested

import SideBar from "../../components/SideBar/SideBar";

// routing to index.js or app.js
//full post and new post can be containers cuz now they will be new pages each with own state
//redirecting here and  in new post

//guard is managed by state: also can be used in the ComponentDIdMount of the component we want to gaurd
class Blog extends Component {

  //guard
  state = {
    auth: false
  }

  render() {
    return (
      <div className="Blog">
        {null /* nav links */}
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts/" //should use /posts. but will keep it here
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
        <section>
          <SideBar />
        </section>
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
          { this.state.auth ? <Route //applied the guard. now it won't be rendered unless authenticated!
            path="/new-post"
            exact={true /**only for / not new-post */}
            //render={() => <NewPost />} shouln't use render to load component
            component={NewPost}
          /> : null} 
          <Route path="/posts/" component={Posts} />
          {/* <Route
            path="/:id" //this gives a flexible path //now for the error changing the name would work but we'll use a package
            exact
            component={FullPost} /*the link is in posts each post //going to nested route
          /> */}

          {/**redirecting */}
          {/* <Route path="/" component={Posts} /> */}
          <Redirect from = "/" to = "/posts" /** changes the url */ />
        </Switch>
      </div>
    );
  }
}

export default Blog;
