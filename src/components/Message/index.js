import './index.css'

const Message = props => {
  const {isLogin} = props
  let info = isLogin ? 'Welcome User' : 'Please Login'
  return <h1 className="heading"> {info}</h1>
}

export default Message
