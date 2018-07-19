import React, {Component} from 'react';
import {
    withRouter
} from 'react-router'
import {
    Card,
    CardBody,
    CardHeader,
    CardText,
    Table,
    Button,
    InputGroup,
} from 'reactstrap'
import Context from '../../../../../provider'

class CommentTemplate extends Component { 
    constructor(props) {
        super(props)
        this.state = {
            upvoted: false,
            downvoted: false,
            votes: this.props.votes,
        }
    }

    toggleUpvote() {
        this.setState(prev => ({
                upvoted: !prev.upvoted,
                downvoted: false,
                votes : (!prev.upvoted) ? prev.votes + (prev.downvoted ? 2 : 1) : prev.votes - (prev.downvoted ? 2 : 1),
            })
        )
    }

    toggleDownvote() {
        this.setState(prev => ({
                downvoted: !prev.downvoted,
                upvoted: false,
                votes : (!prev.downvoted) ? prev.votes - (prev.upvoted ? 2 : 1) : prev.votes + (prev.upvoted ? 2 : 1),
            })
        )
    }

    render() {
        return (
            <Context.Consumer>
                {context => {
                    return (
                        <Table borderless>
                            <tbody>
                                <tr>
                                    {this.props.can_vote &&  
                                        <td className='fixed-width'>
                                            <InputGroup>
                                                <Button 
                                                    color={this.state.upvoted ? 'success' : 'light'} 
                                                    onClick={() => this.toggleUpvote()}
                                                >
                                                    <i className="fa fa-arrow-up" aria-hidden="true"></i>
                                                </Button>
                                                <Button 
                                                    color={this.state.downvoted ? 'success' : 'light'}
                                                    onClick={() => this.toggleDownvote()}
                                                >
                                                    <i className="fa fa-arrow-down" aria-hidden="true"></i>
                                                </Button>
                                            </InputGroup>
                                        </td>
                                    }
                                    <td rowSpan='2'>
                                        <Card 
                                            className={this.props.clickable ? 'cursor-on-hover': ''}
                                            onClick={() => {
                                                this.props.history.push(`/r/${this.props.subreddit}/post/${this.props.postid}/`)
                                            }}
                                        >
                                            <CardHeader>
                                                {this.props.userlink && 
                                                    <a
                                                        className='black-text black-text-on-hover cursor-on-hover'
                                                        href='/'
                                                        onClick={(event) => {
                                                            event.stopPropagation()
                                                            event.preventDefault()
                                                            this.props.history.push(`/u/${this.props.username}/`)
                                                        }}
                                                    >
                                                        {this.props.username}
                                                    </a>
                                                }
                                                {this.props.subredditlink &&
                                                    <a
                                                        className='cursor-on-hover'
                                                        href='/'
                                                        onClick={(event) => {
                                                            event.stopPropagation()
                                                            event.preventDefault()
                                                            this.props.history.push(`/r/${this.props.subreddit}/`)
                                                        }}
                                                    >
                                                        r/{this.props.subreddit}
                                                    </a>
                                                }
                                                <small className='text-muted'>  {this.state.votes} vote(s)</small>
                                            </CardHeader>
                                            <CardBody>
                                                <CardText>{this.props.content}</CardText>
                                            </CardBody>
                                        </Card>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    )
                }}
            </Context.Consumer>
        )
    }
}

export default withRouter(CommentTemplate)