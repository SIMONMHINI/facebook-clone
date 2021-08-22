import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
    return (
        <div className="storyReel">
           <Story
           image="https://static.toiimg.com/photo/msid-71772335/71772335.jpg?158044"
           profileSrc="https://live.staticflickr.com/4628/40266273232_509b1cd5b4_b.jpg" 
           
           title="Brian Odhis"
            />
            <Story
            image ="https://images-na.ssl-images-amazon.com/images/I/71RiQZ0J2SL._AC_SL1000_.jpg" 
              profileSrc= "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1Bu4iWw5zfTzn8uA_PedokWiLzkU5k9F4xg&usqp=CAU"
           title="Eunice Eunice"
             />
            <Story
            image="https://static.toiimg.com/photo/msid-71772335/71772335.jpg?158044"
           profileSrc="https://live.staticflickr.com/4628/40266273232_509b1cd5b4_b.jpg" 
            title="Rozeah Shebah"
             />
             <Story
             image ="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGOvxQJSRydK_W8GmsFJ9JDkz4E-opfuXDgA&usqp=CAU" 
             profileSrc= "https://www.psu.com/wp/wp-content/uploads/2020/07/PS5-5-4-1024x576.jpg"
             title="Nickey Seur"
              />
              
              <Story
              image="https://static.toiimg.com/photo/msid-71772335/71772335.jpg?158044"
             profileSrc="https://live.staticflickr.com/4628/40266273232_509b1cd5b4_b.jpg" 
              title="Niam Peij"
               />
            
        </div>
    )
}

export default StoryReel
