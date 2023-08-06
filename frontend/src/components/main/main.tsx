import React, { MouseEventHandler, useState } from 'react';
import './main.scss';
import AppInput from '../input/input';
import AppButton from '../button/button';
import { onInputChangeHandler } from '../../models/interfaces';
import axios from 'axios';
import {isUri} from 'valid-url';

function AppMain() {
    const [url, setURL] = useState('');
    const [output, setOutput] = useState('');

    const validateURL = (url: string): boolean => {
        return Boolean(isUri(url));
    };

    const buttonClick: MouseEventHandler<HTMLButtonElement> = async (e) => {
        const is_valid_url = validateURL(url);
        if(!is_valid_url) {
            alert('Please enter a valid URL');
            return;
        }
        const body = {
            url
        };
        const response = await axios.post('http://localhost:3001/url/shorten', body);
        const short_url = response?.data?.url || '';
        setOutput(short_url);
    };
    const onInputChange: onInputChangeHandler = (value: string) => {
        setURL(value);
    };
    return (
        <div className='app-main-wrapper app-column'>
            <div className='app-row first-row'>
                <AppInput onChange={onInputChange}/>
                <AppButton onClick={buttonClick}/>
            </div>
            <div className='app-row'>
                {output && (<a href={output} target="_blank" rel="noopener noreferrer">{output}</a>)}
            </div>
        </div>
    );
}

export default AppMain;
