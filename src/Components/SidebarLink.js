
import "./sidebarLink.css";
import "./Sidebar.js";
import Link from '@mui/material/Link';

function SidebarLink({ text, Icon, href}) {
  return(
    <div className="link">
        
        <Icon className="icon1"></Icon>
        <h1><Link className="link" underline="none" color="black" href={href}>{text}</Link></h1>
       
    </div>
  );
}

export default SidebarLink;