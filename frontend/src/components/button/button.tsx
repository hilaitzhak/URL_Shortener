import React from 'react';
import './button.scss';
import { AppButtonProps } from '../../models/interfaces';

function AppButton(props: AppButtonProps) {
    return (
        <div className='app-button-wrapper'>
            <button className='app-button' onClick={props.onClick}>Shorten URL</button>
        </div>
    );
}

export default AppButton;
