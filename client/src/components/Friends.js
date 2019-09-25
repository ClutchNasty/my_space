import React from 'react';
import { Header } from 'semantic-ui-react';
import axios from 'axios'

class Friends extends React.Component {
  state = { friends: [] }

  componentDidMount() {
    axios.get('/api/friends')
      .then(res => this.setState({ friends: res.data }))
    debugger
  }

  renderFriends = () => {
    const { friends, } = this.state
    return friends.map(friend => (
      <div>
        {friend.name}
        <img src={friend.avatar} style={{width: '10em', height: '10em'}}/>
      </div>
    ))

  }



  render() {

    return (
      <div>
        {this.renderFriends()}
      </div>
    )

  }

}


export default Friends;
