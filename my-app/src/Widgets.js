import React from 'react'
import "./Widgets.css"
import
{
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search"
function Widgets()
{
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets__widgetsContainer">
                <h2>What's happening?</h2>

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="bretmanrock"
                    options={{ height: 400 }}
                />

                <TwitterTweetEmbed tweetId={"1139756642734448640"} />

                <TwitterShareButton
                    url={"https://facebook.com/bretmanrock"}
                    options={{ text: "#BretmanRock is amazing!!", via: "aku_2000" }}
                />
            </div>
        </div>
    )
}

export default Widgets
