import "./userInfo.css"

const UserInfo = () => {
    return (
      <div className='userInfo'>
        <div className="user">
            <img src="./DSC08837.JPG" className="userPhoto" alt=""/>
            <h2>Jensen</h2>
        </div>
        <div className="functions">
            <img src="/more.png" alt = ""/>
            {/* <img src="/video.png" alt="" /> */}
            <img src="/edit.png" alt="" />
        </div>
      </div>
    )
  }
  
  export default UserInfo