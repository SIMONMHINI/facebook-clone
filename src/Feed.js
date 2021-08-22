import React from 'react'
import'./Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';
function Feed() {
    return (
        <div className='feed'>
           <StoryReel/>
           <MessageSender/>
          <Post
          profilePic="https://images-na.ssl-images-amazon.com/images/I/71RiQZ0J2SL._AC_SL1000_.jpg"
          message="junice talie"
          timestamp="3.am"
          username="Phanice eve"
          image="https://images-na.ssl-images-amazon.com/images/I/71RiQZ0J2SL._AC_SL1000_.jpg"
          />
          <Post
          profilePic="https://live.staticflickr.com/4628/40266273232_509b1cd5b4_b.jpg"
          message="Rozzy Shebah"
          timestamp="3.am"
          username="ROzzea"
          image="https://live.staticflickr.com/4628/40266273232_509b1cd5b4_b.jpg"
          
          />
          
        </div>
    )
}

export default Feed
