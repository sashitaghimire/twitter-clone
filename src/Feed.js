import React from 'react'
import './Feed.css';
import TweetBox from './TweetBox';

function Feed() {
    return (
        <div className="feed">
            {/* header */}
            <div className="feed__header">
                <h2>Home</h2>

            </div>
           

            {/* Tweet box */}
            <TweetBox />

            {/* post */}



        </div>
    )
}

export default Feed
