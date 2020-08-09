import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import "./TweetBox.css"
import { Avatar } from "@material-ui/core"
import db from './Firebase'

function TweetBox()
{
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) =>
    {
        e.preventDefault(); //stops refresh

        db.collection('posts').add({
            displayName: 'Akansha Agarwal',
            username: 'aku_2000',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://media-exp1.licdn.com/dms/image/C5603AQGnkfr6s-xTTg/profile-displayphoto-shrink_200_200/0?e=1601510400&v=beta&t=9hXdu8Q2YC3jHMYWhPMBGa9ya_FzCNDk5CTSfWH54b0"

        });

        setTweetMessage("");
        setTweetImage("");
    }



    return (
        //BEM CONVENTION: first letter small 
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQGnkfr6s-xTTg/profile-displayphoto-shrink_200_200/0?e=1601510400&v=beta&t=9hXdu8Q2YC3jHMYWhPMBGa9ya_FzCNDk5CTSfWH54b0" />
                    <input
                        //adding React hooks
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's Happening??"
                        type="text"
                    />
                </div>
                <input
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter Image URL"
                    type="text"
                />
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    );

}

export default TweetBox
