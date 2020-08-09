import React, { useState, useEffect } from 'react'
import TweetBox from './TweetBox'
import Post from './Post'
import './Feed.css'
import db from './Firebase'
import FlipMove from 'react-flip-move'
function Feed()
{
    //Adding hooks 
    const [posts, setPosts] = useState([]);

    //run any code inside when feed component loads only once
    useEffect(() =>
    {
        db.collection('posts').onSnapshot(snapshot => (    //snapshots is when db changes
            setPosts(snapshot.docs.map(doc => doc.data()))        //gives array of posts in database //loop thru all docs //,data gives access to all objects like avatar,image etc
        ))
    }, []);

    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            {/* TweetBox */}
            <TweetBox />

            {/* Posts*/}

            <FlipMove>
                {posts.map((post) => (

                    <Post

                        key={post.text}         //key should be document Id pulled from firebase but to save time as of now we use this
                        displayName={post.displayName}
                        username={post.username}
                        verified={post.verified}
                        text={post.text}
                        avatar={post.avatar}
                        image={post.image}
                    />

                ))}
            </FlipMove>
        </div>
    )
}

export default Feed
