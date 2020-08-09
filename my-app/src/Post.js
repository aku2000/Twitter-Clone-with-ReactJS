import React from 'react'
import "./Post.css"
import { Avatar } from "@material-ui/core"
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser"
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline"
import RepeatIcon from "@material-ui/icons/Repeat"
import FavouriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import PublishIcon from "@material-ui/icons/Publish"

function Post()
{
    // Avatar/dP
    // Display Name
    // UserName
    // Verified
    // Text
    // Image/gif
    // PASS ALL THESE AS PROPS
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQGnkfr6s-xTTg/profile-displayphoto-shrink_200_200/0?e=1601510400&v=beta&t=9hXdu8Q2YC3jHMYWhPMBGa9ya_FzCNDk5CTSfWH54b0" />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>Akansha Agarwal{" "}
                            <span className="post__headerSpecial">
                                <VerifiedUserIcon className="post__badge" /> @aku_2000
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>Bring out your Telescopes to explore Heavenly Bliss!!!</p>
                    </div>
                </div>
                <img src="https://media0.giphy.com/media/FWtVYDHIxgGgE/giphy.gif" alt="" />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontsize="small" />
                    <RepeatIcon fontsize="small" />
                    <FavouriteBorderIcon fontsize="small" />
                    <PublishIcon fontsize="small" />
                </div>
            </div>
        </div>
    );
}

export default Post
