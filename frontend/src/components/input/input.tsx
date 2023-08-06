import React, { ChangeEventHandler } from 'react';
import './input.scss';
import { AppInputProps } from '../../models/interfaces';

function AppInput(props: AppInputProps) {

    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const value = e.target.value;
        props.onChange(value);
    };

    return (
        <div className='app-input-wrapper app-column'>
            <input className='app-input' onChange={onChange}/>
        </div>
    );
}

export default AppInput;
