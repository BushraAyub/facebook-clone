import React from 'react';
import "./Header.css";
import  SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import StorefrontIcon from '@material-ui/icons/Storefront';
import {Avatar, IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue} from "./StateProvider";



function Header() {
    const [{ user}, dispatch] = useStateValue();


    return (
        <div className="header">
            <div className="header__left">
            <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_kBS3U6LYkjC48GzxmxDwMINhp7apqkqTJw&usqp=CAU"   
            alt= "fblogo" />
            <div className="header__input">
                <SearchIcon />
            <input placeholder="Search Facebook" type="text" />
            </div>
            </div>
            <div className="header__center">
                <div className="header__option 
                header__option--active">
                    <HomeIcon fontSize="large" />
                </div>
            </div>

            {/* <div className="header__middle"> */}
                <div className="header__option">
                    <FlagIcon fontSize="large" />
                </div>
            {/* </div> */}
            {/* <div className="header__middle"> */}
                <div className="header__option">
                    <SubscriptionsIcon fontSize="large" />
                </div>
            {/* </div> */}
            {/* <div className="header__middle"> */}
                <div className="header__option">
                    <StorefrontIcon fontSize="large" />
                </div>
            {/* </div> */}
            {/* <div className="header__middle"> */}
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
            {/* </div> */}
   
            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>
                
                <IconButton>
                    <AddIcon/>
                </IconButton>

                <IconButton>
                    <ForumIcon/>
                </IconButton>

                <IconButton>
                    <NotificationsActiveIcon/>
                </IconButton>

                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>

                {/* <div className="header_info">
                    <ForumIcon fontSize="large"/>
                   
                </div>
                <div className="header_info">
                    <NotificationsActiveIcon fontSize="large"/>
                  
                </div>
                <div className="header_info">
                    <ExpandMoreIcon fontSize="large"/>
                </div> */}
            </div>


        </div>
    );
}

export default Header;
