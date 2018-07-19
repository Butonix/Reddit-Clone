import React, {Component} from 'react'
import Context from '../../../../provider'
import {
    Nav,
    NavItem,
    NavLink,
    Navbar,
    NavbarBrand,
    Button,
} from 'reactstrap'
import {
    withRouter
} from 'react-router'
import classnames from 'classnames'
import ProfilePosts from './ProfilePosts'
import ProfileComments from './ProfileComments'

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {profile: '', user: ''}
    }

    componentDidMount() {
        fetch(`/api/reddit/u/${this.props.username}/`)
        .then(data => data.json())
        .then((profile) => {
            this.setState({
                profile: profile,
                user: profile.user,
            })
            console.log(this.state)
        })
    }

    render() {
        return (
            <Context.Consumer>
                {context => {
                    return (
                        <React.Fragment>
                            <Navbar>
                                <NavbarBrand>{this.state.user.first_name} {this.state.user.last_name}'s Activity</NavbarBrand>
                                {context.loggedIn && 
                                    <Button
                                        color='danger'    
                                        onClick= {() => {
                                            this.props.history.push('edit/')
                                        }}
                                    >
                                        EDIT PROFILE
                                    </Button>
                                }
                            </Navbar>
                            <Nav tabs>
                                <NavItem>
                                    <NavLink 
                                        onClick={() => {context.toggleProfileTab('1')}}
                                        className={classnames({active: context.profileTab === '1'})}
                                    >
                                        Posts
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink 
                                        onClick={() => {context.toggleProfileTab('2')}}
                                        className={classnames({active: context.profileTab === '2'})}
                                    >
                                        Comments
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            {context.profileTab === '1' ?
                                <ProfilePosts username={this.props.username}/>
                                :
                                <ProfileComments username={this.props.username} />
                            }
                        </React.Fragment>
                    )
                }}
            </Context.Consumer>
        )
    }
}

export default withRouter(Profile)