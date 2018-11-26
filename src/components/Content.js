import React, { Component } from 'react';
import './Content.css'


class Content extends Component {

  render() {
    return (
      <div>
        <h3 className="subHeader"> Hello WatchKit </h3>
          <p className="paragraph">Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.</p>
        <h5 className="comments"> 12 Comments  124 likes</h5>
        <div>
          <h3 className="subHeader"> Introduction to Swift </h3>
          <p className="paragraph">
          Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started.
          </p>
          <h5 className="comments"> 15 comments 45 likes </h5>
        </div>
      </div>
    )
  }
}

export default Content
