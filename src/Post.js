import React from 'react';
import { Avatar } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import RepeatIcon from '@material-ui/icons/Repeat';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import './Post.css';


function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}
) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src={avatar} />
            </div> 
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>{displayName} {" "}
                            <span className="post__headerSpecial">
                                {verified && <VerifiedUserIcon className="post__badge" />}@{username}</span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                         <p>{text}</p>
                    </div>
                    <img className="header__image"src={image} alt="gify-lets"/>
                    <div className="post__footer">
                        <ChatBubbleOutlineIcon fontSize="small"/>
                        <RepeatIcon fontSize="small" />
                        <FavoriteBorderIcon fontSize="small" />
                        <PublishIcon fontSize="small" />

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Post;