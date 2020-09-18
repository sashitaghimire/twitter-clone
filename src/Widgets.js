import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
            <TwitterTweetEmbed  tweetId={"1286236856833568768"}/>

            <TwitterTimelineEmbed
          sourceType="profile"
          screenName="quotesandstatu"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://www.facebook.com/Quotes-and-Status-101346664999176/"}
          options={{  text: "#Quotesandstatus is awesome", via: "quotesandstatus"  }}
        />
      </div>
    </div>
  );
}
    
export default Widgets;
