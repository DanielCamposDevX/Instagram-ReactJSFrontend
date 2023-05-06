import Stories from "./Stories"
import Posts from "./Posts"
import Sidebar from "./SideBar"

export default function Body(){
    return(
    <div class="corpo">
      <div class="esquerda">
        <Stories />
        <Posts />
      </div>
      <Sidebar />
    </div>)
    }