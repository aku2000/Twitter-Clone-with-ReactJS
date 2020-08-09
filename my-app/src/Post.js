import React, { forwardRef } from 'react'
import "./Post.css"
import { Avatar } from "@material-ui/core"
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser"
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline"
import RepeatIcon from "@material-ui/icons/Repeat"
import FavouriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import PublishIcon from "@material-ui/icons/Publish"

const Post = forwardRef(
    ({ displayName, username, verified, text, image, avatar }, ref) =>
    {
        // Avatar/dP
        // Display Name
        // UserName
        // Verified
        // Text
        // Image/gif
        // PASS ALL THESE AS PROPS
        return (
            <div className="post" ref={ref}>
                <div className="post__avatar">
                    <Avatar src={avatar} />
                </div>
                <div className="post__body">
                    <div className="post__header">
                        <div className="post__headerText">
                            <h3>
                                {displayName}{" "}
                                <span className="post__headerSpecial">
                                    {verified && <VerifiedUserIcon className="post__badge" />} @{username}
                                </span>
                            </h3>
                        </div>
                        <div className="post__headerDescription">
                            <p>{text}</p>
                        </div>
                    </div>
                    <img src={image} alt="" />
                    <div className="post__footer">
                        <ChatBubbleOutlineIcon fontsize="small" />
                        <RepeatIcon fontsize="small" />
                        <FavouriteBorderIcon fontsize="small" />
                        <PublishIcon fontsize="small" />
                    </div>
                </div>
            </div>
        );
    });

export default Post
