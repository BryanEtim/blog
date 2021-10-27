import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="home">
              <h1>UEFA Nations Blog</h1> 
               <div id="blog-by">By Bryan</div>
              <div className="post">
                  <Link to="/post/someid"><h3>England defeats Iceland!</h3></ Link>
                  <p>England finally came through after Sterling scored one goal 
                 at the very end!
                 </p>
              </div> 
            </div>
        )
    }
}
