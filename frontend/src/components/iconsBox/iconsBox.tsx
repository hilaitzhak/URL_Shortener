import React from 'react';
import './iconsBox.scss';
import { ThumbUpOffAlt, Share, InsertEmoticon, VisibilityOutlined, MonetizationOnOutlined, MobileFriendly } from '@mui/icons-material';

function AppIconsBox() {
    return (
        <div className='app-icons-box-wrapper app-column'>
            <div className='app-icons-box'>
                <div className='app-icon-box'>
                    <div className='app-icon-box-front-side'>
                        <ThumbUpOffAlt style={{ fontSize: 'xxx-large', maxWidth: '100%', height: 'auto', verticalAlign: 'middle', color: 'black' }} />
                        <h3 className='app-icon-box-title'>Easy</h3>
                    </div>
                    <div className='app-icon-box-back-side'>
                        <p className="app-icon-box-para">Simplify long web addresses and Make your links shorter in seconds</p>
                    </div>
                </div>
                <div className='app-icon-box'>
                    <div className='app-icon-box-front-side'>
                        <Share style={{ fontSize: 'xxx-large', maxWidth: '100%', height: 'auto', verticalAlign: 'middle', color: 'black'}}/>
                        <h3 className='app-icon-box-title'>Share</h3>
                    </div>
                    <div className='app-icon-box-back-side'>
                        <p className="app-icon-box-para">Share links seamlessly, perfect for social media, emails, and text messages</p>
                    </div>
                </div>
                <div className='app-icon-box'>
                    <div className='app-icon-box-front-side'>
                        <InsertEmoticon style={{ fontSize: 'xxx-large', maxWidth: '100%', height: 'auto', verticalAlign: 'middle', color: 'black' }} />
                        <h3 className='app-icon-box-title'>User Friendly</h3>
                    </div>
                    <div className='app-icon-box-back-side'>
                        <p className="app-icon-box-para">Improve navigation with user-friendly links for a better browsing experience.</p>
                    </div>
                </div>
            </div>
            <div className='app-icons-box'>
                <div className='app-icon-box'>
                    <div className='app-icon-box-front-side'>
                        <VisibilityOutlined style={{ fontSize: 'xxx-large', maxWidth: '100%', height: 'auto', verticalAlign: 'middle', color: 'black' }}/>
                        <h3 className='app-icon-box-title'>Aesthetics</h3>
                    </div>
                    <div className='app-icon-box-back-side'>
                        <p className="app-icon-box-para">Clean and upgrade your URL presentation</p>
                    </div>
                </div>
                <div className='app-icon-box'>
                    <div className='app-icon-box-front-side'>
                        <MonetizationOnOutlined fontSize="large" style={{ fontSize: 'xxx-large', maxWidth: '100%', height: 'auto', verticalAlign: 'middle', color: 'black' }} />
                        <h3 className='app-icon-box-title'>Free</h3>
                    </div>
                    <div className='app-icon-box-back-side'>
                        <p className="app-icon-box-para">Start shortening links for free, no cost to start</p>
                    </div>
                </div>
                <div className='app-icon-box'>
                    <div className='app-icon-box-front-side'>
                        <MobileFriendly style={{ fontSize: 'xxx-large', maxWidth: '100%', height: 'auto', verticalAlign: 'middle', color: 'black' }}/>
                        <h3 className='app-icon-box-title'>Mobile Friendly</h3>
                    </div>
                    <div className='app-icon-box-back-side'>
                        <p className="app-icon-box-para">Optimized for mobile apps and websites</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppIconsBox;
// export {};
