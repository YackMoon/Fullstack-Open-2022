const Notification = ({ message }) => {
    if (message === null) return null
    return (
      <div className={`notification notification--${message.type}`}>
        {message.text}
      </div>
    )
  }
  
export default Notification