import React, { MouseEventHandler, useState } from 'react';
import './urlBox.scss';
import AppInput from '../input/input';
import AppButton from '../button/button';
import { onInputChangeHandler } from '../../models/interfaces';
import axios from 'axios';
import {isUri} from 'valid-url';

function AppUrlBox() {
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
        <div className='app-url-box-wrapper app-column'>
            <div className='url-box'>
                <div className='app-url-box-title-wrapper'>
                    <h1 className='app-url-box-title'>Paste the URL to be shortened</h1>
                </div>
                <div className='app-url-box-input-button-wrapper'>
                    <AppInput onChange={onInputChange}/>
                    <AppButton onClick={buttonClick}/>
                </div>
                <div className='app-url-box-para-wrapper'>
                        <p className='app-url-box-para'>URL shortener is a web service that converts long and complex website addresses into shorter, more user-friendly URLs, making it easier to share links.</p>
                </div>
                <div className='app-row'>
                    {output && (<a href={output} target="_blank" rel="noopener noreferrer">{output}</a>)}
                </div>
            </div>
        </div>
    );
}

export default AppUrlBox;
