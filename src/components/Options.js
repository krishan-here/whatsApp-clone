import React, {useState} from 'react';
import { Popover } from '@material-ui/core';
import _ from 'lodash';
import './options.css';

function Options(props) {
    const [anchorEl, setAnchorEl] = useState(props.anchorEl);

    const handleClose = () => {
        setAnchorEl(null);
        props.onClose(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
            >
            <div className='options'>
                <ul>
                {
                    props.items.map((item, idx) => {
                        return <li key={idx}>{_.capitalize(item.title)}</li>
                    })
                }
                </ul>
            </div>
            </Popover>
        </>

    );
}

export default Options;