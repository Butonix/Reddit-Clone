import React, {Component} from 'react'
import Context from '../../../../../provider'
import {
     Jumbotron,
} from 'reactstrap'
import {
    Link,
    Redirect,
} from 'react-router-dom'

export default class Help extends Component {
    render() {
        return (
            <Context.Consumer>
                {context => {
                    return (
                        <React.Fragment>
                            <center><h1 className='display-1'>What is Reddit?</h1></center>
                            <Jumbotron>
                                Reddit is a place where users share their thoughts, opinions about topics.These topics can cover a
                                variety of topics including news, science, movies, video games,music, books, fitness and food.
                                <Link id='my-links' to='#' onClick={() => context.toggleSignupModal()}> Create your account now </Link>
                                and have fun!
                            </Jumbotron>
                            <hr />
                            <center><h1 className='display-1'>How to use Reddit?</h1></center>
                            <Jumbotron>
                                <p>
                                    Subscribe to your favourite subreddit to get feed directly from those. Visit
                                    <a href='/r/popular/'> Popular </a>
                                    or 
                                    <a href='/r/all/'> All </a>
                                    to get the feed from lastest and greatest subreddits.
                                </p>
                                <p>
                                    Upvote a post or comments to provide support to a post or comment. Downvote the same if the content
                                    doesn't seem right!
                                </p>
                                <p>
                                    The more upvotes your post or comment has, the more karma you will get.
                                </p>
                            </Jumbotron>
                            <hr />
                        </React.Fragment>
                    )}
                }
            </Context.Consumer>
        )
    }
}