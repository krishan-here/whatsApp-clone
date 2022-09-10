import React, {useState} from 'react';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Sidebar.css';
import { Chat, DonutLarge, FilterList, MoreVert, Search } from '@material-ui/icons';
import ChatItem from './components/ChatItem';
import Options from './components/Options';

const chats = [
    {
        img: 'https://pps.whatsapp.net/v/t61.24694-24/157145201_2012791865547133_3180213693272072632_n.jpg?ccb=11-4&oh=01_AVzZ384fQXKPLLpykSyqvVkle1SkycD9-0POWBw1kYH0Ig&oe=62FAA925',
        name: 'Sonu kumar',
        time: '5:35 pm',
        latestMsg: 'thik hai',
        isLastFromYou: true
    },
    {
        img: 'https://pps.whatsapp.net/v/t61.24694-24/289835458_393077559549426_4607109766705573063_n.jpg?ccb=11-4&oh=01_AVz3PfDTrGp5ybxMBuTBy5NO2tD7e--xEfU6s8PuAGftIg&oe=62F85892',
        name: 'Lalit sir',
        time: 'Monday',
        latestMsg: 'anything else',
        isLastFromYou: false
    },
    {
        img: 'https://pps.whatsapp.net/v/t61.24694-24/291039906_1188053178657208_5112584514743344589_n.jpg?ccb=11-4&oh=01_AVyNKMTebOvNLjE9OrdK0unqWgSQUza_Pb3pGQ-2-EQxCA&oe=62F8478A',
        name: 'Mori maiya',
        time: 'Saturday',
        latestMsg: 'call kijiye',
        isLastFromYou: true
    },
    {
        img: 'https://pps.whatsapp.net/v/t61.24694-24/291039906_1188053178657208_5112584514743344589_n.jpg?ccb=11-4&oh=01_AVyNKMTebOvNLjE9OrdK0unqWgSQUza_Pb3pGQ-2-EQxCA&oe=62F8478A',
        name: 'Mori maiya',
        time: 'Saturday',
        latestMsg: 'call kijiye',
        isLastFromYou: true
    },
    {
        img: 'https://pps.whatsapp.net/v/t61.24694-24/291039906_1188053178657208_5112584514743344589_n.jpg?ccb=11-4&oh=01_AVyNKMTebOvNLjE9OrdK0unqWgSQUza_Pb3pGQ-2-EQxCA&oe=62F8478A',
        name: 'Mori maiya',
        time: 'Saturday',
        latestMsg: 'call kijiye',
        isLastFromYou: true
    },
    {
        img: 'https://pps.whatsapp.net/v/t61.24694-24/291039906_1188053178657208_5112584514743344589_n.jpg?ccb=11-4&oh=01_AVyNKMTebOvNLjE9OrdK0unqWgSQUza_Pb3pGQ-2-EQxCA&oe=62F8478A',
        name: 'Mori maiya',
        time: 'Saturday',
        latestMsg: 'call kijiye',
        isLastFromYou: true
    },
    {
        img: 'https://pps.whatsapp.net/v/t61.24694-24/164963967_827431844906857_5461355685872790442_n.jpg?ccb=11-4&oh=01_AVxkU-3HL2rvNooOy0IvI1eUkzMlqQxLrGj8g96d5HMePA&oe=62F9E9C8',
        name: 'Guruprit singh clg',
        time: 'Saturday',
        latestMsg: 'koi sa bhi dede',
        isLastFromYou: true
    },
    {
        img: 'https://pps.whatsapp.net/v/t61.24694-24/160612122_541586651021085_89268809723219664_n.jpg?ccb=11-4&oh=01_AVzQfu_ETSdgD-1ENfPuBzp9NYw11yfSrXwD__oshLxPug&oe=62F9C193',
        name: 'Garima mehta clg 1',
        time: 'Saturday',
        latestMsg: 'fine',
        isLastFromYou: false
    }
];

const useStyles = makeStyles((theme) => ({
    sizeAvatar: {
      height: theme.spacing(5),
      width: theme.spacing(5),
    },
  }));

function Sidebar(props) {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event?.currentTarget);
    };

    const lists=[
        {title: 'New group'},
        {title: 'Starred messages'},
        {title: 'Settings'},
        {title: 'Log out'},
    ];
    const classes = useStyles();
    return (
        <div className='sidebar'>
            <div className="sidebar_header">
                <Avatar className={`${classes.sizeAvatar} icon`} src='https://pps.whatsapp.net/v/t61.24694-24/289774044_1065626047718261_8065981027411441207_n.jpg?ccb=11-4&oh=01_AVwOCwXP-QHNaIGFvxAL7ESIWvmpzwzCsLECcMrKSLbhNA&oe=62FA4ABA' />
                <div className="sidebar_header_right">
                    <DonutLarge className='icon' />
                    <Chat className='icon' />
                    <MoreVert className='icon' onClick={handleClick} />
                </div>
            </div>

            <div className="sidebar_search">
                <div className="input_box">
                    <Search />
                    <input type="text" placeholder='search or start a new chat' />
                </div>
                <FilterList />
            </div>

            <div className="sidebar_chats">
                {
                    chats.map((chat, idx) => {
                        return <ChatItem 
                        key={idx}
                        name={chat.name} 
                        img={chat.img} 
                        latestMsg={chat.latestMsg} 
                        isLastFromYou={chat.isLastFromYou}
                        time={chat.time} />
                    })
                }
            </div>

            {anchorEl ? <Options items={lists} anchorEl={anchorEl} onClose={handleClick} />: null }
        </div>
    );
}

export default Sidebar;