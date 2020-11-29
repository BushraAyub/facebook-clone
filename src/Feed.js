import React, {useState, useEffect} from 'react';
// import {useEffect} from 'react-dom';
import "./Feed.css";
import MessageSender from './MessageSender';
import StoryReel from "./StoryReel";
import Post from "./Post";
import db from "./firebase";
// import firebase from "./firebase";



function Feed() {
const [posts, setPosts] = useState([]);

useEffect(() => {
    db.collection("posts")
    .orderBy("timestamp", "desc")
    .onSnapshot((snapshot) => 
        setPosts(snapshot.docs.map((doc) => ({id: doc.id,
        data: doc.data() })))

    );
}, []);

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
    
          
          {posts.map((post) => (  
              <Post
                  key={post.id}
                  image={post.data.image}
                  message={post.data.message}
                  profilePic={post.data.profilePic}
                  timestamp={post.data.timestamp}
                  username={post.data.username}
            />
              
          ))}

        </div>
    );
}

export default Feed;



//image="https://i.pinimg.com/originals/44/ce/2c/44ce2cfa6267fde44790205135a78051.jpg"


        {/* <Post 
            profilePic="https://i.pinimg.com/originals/90/a1/c6/90a1c6d988b7cc10ef0ad8775e77bc03.jpg"
            message="WOW this works!"
            timestamp="This ia a timestamp"
            username="bushra ayub"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT58aw_0fynaWJR2XWzJ-EObKMzCynkP_vzfw&usqp=CAU"
            />
             <Post 
            profilePic="https://i.pinimg.com/originals/90/a1/c6/90a1c6d988b7cc10ef0ad8775e77bc03.jpg"
            message="WOW this works!"
            timestamp="This ia a timestamp"
            username="bushra ayub"
            
            /> */}