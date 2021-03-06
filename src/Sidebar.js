
import React from 'react';
import'./SidebarRow';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagIcon from"@material-ui/icons/EmojiFlags";
import PeopleIcon from"@material-ui/icons/People";
import ChatIcon from"@material-ui/icons/Chat";
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import {ExpandMoreOutlined} from "@material-ui/icons/ExpandMoreOutlined";
import {useStateValue} from "./StateProvider";
function Sidebar() {
    const [{user}, dispatch]=useStateValue();
    return (
        <div className="sidebar">
            <SidebarRow  src={user.photoURL}title={user.displayName}/>
            <SidebarRow  Icon={LocalHospitalIcon} title="COVID-19 Information Center" />
            <SidebarRow Icon={EmojiFlagIcon} title="Pages"/>
            <SidebarRow  Icon={PeopleIcon} title="Friends"/>
            <SidebarRow Icon={ChatIcon} title="Mesenger" />
            <SidebarRow Icon={StorefrontIcon} title="Market"/>
            <SidebarRow  Icon={VideoLibraryIcon} title="videos"/>
            <SidebarRow Icon={ExpandMoreOutlined} title="More"/>
        </div>
    )
}

export default Sidebar
