import React, { MouseEventHandler, useState } from 'react';
import './main.scss';
import AppInput from '../input/input';
import AppButton from '../button/button';
import { onInputChangeHandler } from '../../models/interfaces';
import axios from 'axios';
import {isUri} from 'valid-url';
import { ThumbUpOffAlt, Share, InsertEmoticon, VisibilityOutlined, MonetizationOnOutlined, MobileFriendly } from '@mui/icons-material';

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
            <div className='url-box'>
                <div className='app-row align-center'>
                    <h1>Paste the URL to be shortened</h1>
                </div>
                <div className='app-row second-row'>
                    <AppInput onChange={onInputChange}/>
                    <AppButton onClick={buttonClick}/>
                </div>
                <div className='app-row third-row'>
                        <p>URL shortener is a web service that converts long and complex website addresses into shorter, more user-friendly URLs, making it easier to share links.</p>
                </div>
                <div className='app-row'>
                    {output && (<a href={output} target="_blank" rel="noopener noreferrer">{output}</a>)}
                </div>
            </div>
            <div className='icons-box app-column'>
                <div className='app-row'>
                    <div className='container align-center'>
                        <ThumbUpOffAlt fontSize="large" style={{ fontSize: 'xxx-large', maxWidth: '100%', height: 'auto', verticalAlign: 'middle' }} />
                        <h3>Easy</h3>
                        <p className="icon-paragraph">Simplify long web addresses and Make your links shorter in seconds</p>
                    </div>
                    <div className='container align-center'>
                        <Share fontSize="large" style={{ fontSize: 'xxx-large', maxWidth: '100%', height: 'auto', verticalAlign: 'middle'}}/>
                        <h3>Share</h3>
                        <p className="icon-paragraph">Share links seamlessly, perfect for social media, emails, and text messages</p>
                    </div>
                    <div className='container align-center'>
                        <InsertEmoticon fontSize="large" style={{ fontSize: 'xxx-large', maxWidth: '100%', height: 'auto', verticalAlign: 'middle' }} />
                        <h3>User Friendly</h3>
                        <p className="icon-paragraph">Enhance navigation with user-friendly links and provide a better browsing experience</p>
                    </div>
                </div>
                <div className='app-row'>
                    <div className='container align-center'>
                        <VisibilityOutlined fontSize="large" style={{ fontSize: 'xxx-large', maxWidth: '100%', height: 'auto', verticalAlign: 'middle' }}/>
                        <h3>Aesthetics</h3>
                        <p className="icon-paragraph">Create cleaner, neater URLs and upgrade your link presentation</p>
                    </div>
                    <div className='container align-center'>
                        <MonetizationOnOutlined fontSize="large" style={{ fontSize: 'xxx-large', maxWidth: '100%', height: 'auto', verticalAlign: 'middle' }} />
                        <h3>Free</h3>
                        <p className="icon-paragraph">Start shortening links for free, no cost to start</p>
                    </div>
                    <div className='container align-center'>
                        <MobileFriendly style={{  fontSize: 'xxx-large', maxWidth: '100%', height: 'auto', verticalAlign: 'middle' }}/>
                        <h3>Mobile Friendly</h3>
                        <p className="icon-paragraph">Optimized for mobile apps and websites</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AppMain;
