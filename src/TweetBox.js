import React from 'react'
import {Avatar, Button} from '@material-ui/core';
import './TweetBox.css';

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu_EJUCn6PVrfbR35BBPJOf57nCRXgo0AMb1chZE=s192-c-mo"
                    />
                    <input placeholder="What's happening?" type="text"/>
                </div>
                <input className="tweetBox__imageInput" src="https://sashitaghimire-2d83a.web.app/images/IG_Sashita.jpg" placeholder="Enter image Url" type="text"/>
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;
