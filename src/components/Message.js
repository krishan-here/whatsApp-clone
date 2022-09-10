import React from 'react';
import {type} from '../constants/storage';
import './message.css';

function Message(props) {
    return (
        <div className='message' style={{textAlign: props.byYou ?'right': 'left'}}>
            {
                props.type === type.IMAGE? <img src={props.data} alt="" className={`${props.byYou && 'msg_bgcolor'} data`}/>:
                props.type === type.TEXT? <p className={`${props.byYou && 'msg_bgcolor'} data`}>{props.data}</p>: null
            }
        </div>
    );
}

export default Message;