import {Component} from 'react'
import './index.css'

import Message from '../Message/index.js'
import Logout from '../Logout/index.js'
import Login from '../Login/index.js'

class Home extends Component {
  state = {isLogin: false}

  loginStatus = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state
    return (
      <div className="container">
        <div className="card">
          <Message isLogin={isLogin} />
          {isLogin ? (
            <Logout login={this.loginStatus} />
          ) : (
            <Login login={this.loginStatus} />
          )}
        </div>
      </div>
    )
  }
}
export default Home
