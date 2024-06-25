import "./chatList.css"
import {useState} from "react"

const ChatList = () => {
    const [addMode, setAddMode] = useState(false)
    return (
      <div className='chatList'>
        <div className="search">
          <div className = "searchBar">
            <img src="/search.png" alt="" />
            <input type="text" placeholder="Search" />
          </div>
          <img src= {addMode ? "/minus.png" : "/plus.png"} className="plus" alt=""
          onClick={() => setAddMode((prev) => !prev)} />
        </div>
        <div className="item">
          <img src="/cuteshishi.JPG" alt="" />
          <div className="text">
            <span>Tweety🩵</span>
            <p>你要起床沒???</p>
          </div>
        </div>
        <div className="item">
          <img src="/cuteshishi.JPG" alt="" />
          <div className="text">
            <span>Tweety🩵</span>
            <p>你要起床沒???</p>
          </div>
        </div>
        <div className="item">
          <img src="/cuteshishi.JPG" alt="" />
          <div className="text">
            <span>Tweety🩵</span>
            <p>你要起床沒???</p>
          </div>
        </div>
        <div className="item">
          <img src="/cuteshishi.JPG" alt="" />
          <div className="text">
            <span>Tweety🩵</span>
            <p>你要起床沒???</p>
          </div>
        </div>

      </div>
    )
  }
  
  export default ChatList