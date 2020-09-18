import React,{useState} from 'react'
import {Avatar, Button} from '@material-ui/core';
import './TweetBox.css';
import db from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e =>{
        e.preventDefault();

        db.collection('posts').add({
            displayName:'Sashita',
            username:'sashi',
            verified:true,
            text: tweetMessage,
            image:tweetImage,
            avatar:
            "https://lh3.googleusercontent.com/ogw/ADGmqu_EJUCn6PVrfbR35BBPJOf57nCRXgo0AMb1chZE=s192-c-mo"

        });

        setTweetMessage("");
        setTweetImage("");
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu_EJUCn6PVrfbR35BBPJOf57nCRXgo0AMb1chZE=s192-c-mo"
                    />
                    <input onChange={e => setTweetMessage(e.target.value)} value={tweetMessage} placeholder="What's happening?" type="text"/>
                </div>
                <input onChange={e=> setTweetImage(e.target.value)} value={tweetImage} className="tweetBox__imageInput" placeholder="Enter image Url" type="text"/>
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;
