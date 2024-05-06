import "./sidebar.css";
import SidebarLink from "./SidebarLink";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from '@mui/material/Link';
import image from '../Assets/buddyfont.png';



function Sidebar(){
    
  return(
    <div className="sidebar">
        <img src={image} className="icon" alt="hi5 Icon" />
        <SidebarLink text="Home" Icon={HomeOutlinedIcon} href="/Home"/>
        <SidebarLink text="Personalize" Icon={ColorLensOutlinedIcon}/>
        <SidebarLink text="Notifications" Icon={NotificationsNoneIcon} />
        <SidebarLink text="Messages" Icon={MailOutlineIcon}/>
        <SidebarLink text="Profile" Icon={PermIdentityIcon} href="/profile"/>
        <SidebarLink  text="Logout" Icon={LogoutIcon} href="/"/>
        
       
        <button className="b1">Say Hi</button>
    </div>
  );
}
export default Sidebar;