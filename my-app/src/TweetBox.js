import { Button } from '@material-ui/core'
import React from 'react'
import "./TweetBox.css"
import { Avatar } from "@material-ui/core"


function TweetBox()
{
    return (
        //BEM CONVENTION: first letter small 
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQGnkfr6s-xTTg/profile-displayphoto-shrink_200_200/0?e=1601510400&v=beta&t=9hXdu8Q2YC3jHMYWhPMBGa9ya_FzCNDk5CTSfWH54b0" />
                    <input placeholder="What's Happening??" type="text" />
                </div>
                <input className="tweetBox__imageInput" placeholder="Optional: Enter Image URL" type="text" />
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    );

}

export default TweetBox
