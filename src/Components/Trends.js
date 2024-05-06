import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PeopleIcon from '@mui/icons-material/People';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

export default function InsetDividers() {
  return (
   
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'black',
        color: 'white',
        borderRadius: '10px',
        padding: '10px',
        margin: '10px',
      }}
    >
      
      <ListItem>
        <ListItemAvatar>
            <SportsEsportsIcon />
        </ListItemAvatar>
    
            <p className='p10'>VideoGames </p><br></br>
            <p className='p11'>320k buddyNews</p> 
      </ListItem>
      <ListItem>
        <ListItemAvatar>
            <ShoppingCartIcon />
        </ListItemAvatar>
            <p className='p10'>Shopping </p><br></br>
            <p className='p11'>120.5k buddyNews</p> 
      </ListItem>
      <ListItem>
        <ListItemAvatar>
            <AttachMoneyIcon />
        </ListItemAvatar>
        <p className='p10'> Inflation </p><br></br>
        <p className='p11'>220.8k buddyNews</p> 
      </ListItem>
      <ListItem>
        <ListItemAvatar>
            <PeopleIcon />
        </ListItemAvatar>
        <p className='p10'> People </p><br></br>
        <p className='p11'>110.8k buddyNews</p> 
        
      </ListItem>
      <ListItem>
        <ListItemAvatar>
            <MonitorHeartIcon />
        </ListItemAvatar>
        <p className='p10'> Health </p><br></br>
        <p className='p11'>210.1k buddyNews</p> 
        
      </ListItem>
      <ListItem>
        <ListItemAvatar>
            <LocalFireDepartmentIcon />
        </ListItemAvatar>
        <p className='p10'> Hot </p><br></br>
        <p className='p11'>210.1k buddyNews</p> 
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          
            <WorkIcon />
          
        </ListItemAvatar>
        <p className='p10'> Work </p><br></br>
        <p className='p11'>310.5k buddyNews</p> 
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
            <SportsSoccerIcon/>
        </ListItemAvatar>
        <p className='p10'> Health </p><br></br>
        <p className='p11'>210.1k buddyNews</p> 
      </ListItem>
    </List>
  );
}