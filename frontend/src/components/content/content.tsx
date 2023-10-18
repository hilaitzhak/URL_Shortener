import React from 'react';
import './content.scss';
import AppUrlBox from '../urlBox/urlBox';
import AppIconsBox from '../iconsBox/iconsBox';

function AppContent() {
    return (
        <div className='app-content-wrapper align-center'>
            <AppUrlBox/>
            <AppIconsBox/>
        </div>
    );
}

export default AppContent;
