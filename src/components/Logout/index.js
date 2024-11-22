// Write your code here
import "./index.css"
const Logout = props => {
  const {login} = props
  return (
    <button className="login-button" onClick={login}>
      Logout
    </button>
  )
}

export default Logout
