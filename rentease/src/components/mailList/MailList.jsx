import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
        <h1 className="mailTitle">Save Time, Save Money!</h1>
        <span className="mailDesc">Sign Up and we'll send the best deals to you</span>
        <div className="mailInputContainer">
            <input type="email" name="" id="" placeholder="Your Email" />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList