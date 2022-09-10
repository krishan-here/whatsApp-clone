import React from 'react';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {DoneAll} from '@material-ui/icons';
import './chatItem.css';

const useStyles = makeStyles((theme) => ({
    sizeAvatar: {
      height: theme.spacing(6),
      width: theme.spacing(6),
    },
  }));

function ChatItem(props){
    const classes = useStyles();
    
    return (
        <div className='chat_item'>
            <Avatar src={props.img} className={classes.sizeAvatar} />
            <div className="user_chat">
                <div className="chat_user_info">
                    <p className='user_name'>{props.name}</p>
                    <p className="user_lasttime">{props.time}</p>
                </div>
                <div className="last_msg">
                {props.isLastFromYou ? <DoneAll fontSize='small' className='done_sign'/>: null}
                <span>{props.latestMsg}</span>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default ChatItem;