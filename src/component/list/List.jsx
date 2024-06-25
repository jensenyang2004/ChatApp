import "./list.css"
import Chatlist from "./chatList/ChatList"
import UserInfo from "./userInfo/UserInfo"

const List = () => {
    return (
      <div className='list'>
        <UserInfo/>
        <Chatlist/>
      </div>
    )
  }
  
  export default List