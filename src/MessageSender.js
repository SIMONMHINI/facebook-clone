import { Avatar, Button } from '@material-ui/core';
import React, { useState } from 'react';
import'./MessageSender.css';
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import VideocamIcon from "@material-ui/icons/Videocam"
import  InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function MessageSender() {
    const[input, setInput]=useState("");
    const[imageUrl, setImageUrl]=useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();

        // database stuff
        setImageUrl("");
        setInput("");
    };
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar />
                    <form>

                        <input 
                        value={input}
                        onChange={(e)=>setInput(e.target.value)}
                        className="messageSender__input"
                         placeholder={'what is on your mind'}/>
                        <input 
                        value={imageUrl}
                        onChange={(e)=>setImageUrl(e.target.value)}
                        placeholder={"input url (optional)"} />
                           
                        <Button  onClick={handleSubmit} type="submit" >
                            Hidden submit
                            </Button>
                        </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option ">
                <VideocamIcon style={{color:"red"}} />
                <h3> Live Video</h3>
                </div>
                <div className="messageSender__option ">
                <PhotoLibraryIcon style={{color:"green"}} />
                <h3> Photo/Video</h3>
                </div>
                <div className="messageSender__option ">
                <InsertEmoticonIcon style={{color:"orange"}} />
                <h3> Feeling/Activity</h3>
                </div>

            </div>
        </div>
    );
}

export default MessageSender;
