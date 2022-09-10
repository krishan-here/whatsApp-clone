import React, {useState} from 'react';
import { Avatar } from '@material-ui/core';
import { AttachFileOutlined, MicOutlined, MoodBadOutlined, MoreVert, Search } from '@material-ui/icons';
import './chat.css';
import Options from './components/Options';
import Message from './components/Message';

function Chat(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event?.currentTarget);
    };

    const lists=[
        {title: 'contact info'},
        {title: 'setting'},
        {title: 'theme'},
        {title: 'about'},
    ];
    const msgs=[
        {type: 'text', data: 'hey there!', byYou: true},
        {type: 'text', data: 'hey aman!', byYou: false},
        {type: 'text', data: 'Nice to meet you', byYou: true},
        {type: 'text', data: 'same bro', byYou: false},
        {type: 'text', data: 'okay bye', byYou: true},
        {type: 'text', data: 'hey there!', byYou: true},
        {type: 'text', data: 'hey aman!', byYou: false},
        {type: 'text', data: 'hey aman!', byYou: false},
        {type: 'text', data: 'hey aman!', byYou: false},
        {type: 'text', data: 'hey aman!', byYou: false},
        {type: 'text', data: 'Nice to meet you', byYou: true},
        {type: 'text', data: 'same bro', byYou: false},
        {type: 'text', data: 'okay bye', byYou: true},
        {type: 'text', data: 'hey there!', byYou: true},
        {type: 'text', data: 'hey aman!', byYou: false},
        {type: 'text', data: 'Nice to meet you', byYou: true},
        {type: 'text', data: 'same bro', byYou: false},
        {type: 'text', data: 'okay bye', byYou: true},
        {type: 'text', data: 'hey there!', byYou: true},
        {type: 'text', data: 'hey aman!', byYou: false},
        {type: 'text', data: 'Nice to meet you', byYou: true},
        {type: 'text', data: 'same bro', byYou: false},
        {type: 'text', data: 'okay bye', byYou: true},
        {type: 'text', data: 'hey there!', byYou: true},
        {type: 'text', data: 'hey aman!', byYou: false},
        {type: 'text', data: 'Nice to meet you', byYou: true},
        {type: 'text', data: 'same bro', byYou: false},
        {type: 'text', data: 'okay bye', byYou: true},
    ]
    
    return (
        <div className='chat'>
            <div className="chat_header">
                <div className="user_info">
                    <Avatar />
                    <p>Krishan</p>
                </div>
                <div className="chat_options">
                    <Search className='icon' />
                    <MoreVert className='icon' onClick={handleClick}/>
                </div>
            </div>
            <div className="chat_msg_section">
                {/* msg section */}
                {
                    msgs.map((msg, idx)=>{
                        return(
                            <div className='single_msg'>
                                { ((idx >0 && msgs[idx-1].byYou !== msg.byYou) || idx === 0) && <span key={idx} className={`msg_arrow ${msg.byYou ? 'msg_arrow_right': ''}`}></span>}
                                <Message 
                                key={idx} 
                                type={msg.type} 
                                data={msg.data} 
                                byYou={msg.byYou}/>
                            </div>
                    )}
                    )
                }
            </div>
            <div className="msg_inbox_section">
                <MoodBadOutlined className='icon' />
                <AttachFileOutlined className='icon' />
                <input type="text" placeholder='Type a message'/>
                <MicOutlined className='icon' />
            </div>

            {anchorEl ? <Options items={lists} anchorEl={anchorEl} onClose={handleClick} />: null }
        </div>
    );
}

export default Chat;