import React from 'react'
import { Avatar } from "@material-ui/core"
import "./Post.css";
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
        </div>
    )
}

export default Post
