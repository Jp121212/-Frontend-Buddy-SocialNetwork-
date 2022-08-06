
import "./sidebarLink.css";
import "./Sidebar.js";


function SidebarLink({ text, Icon, href}) {
  return(
    <div className="link">
        <Icon className="icon1"></Icon>
        <h1>{text}</h1>
       
    </div>
  );
}

export default SidebarLink;