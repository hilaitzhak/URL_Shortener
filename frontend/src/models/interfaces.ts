import { ChangeEventHandler, MouseEventHandler } from "react";

export interface AppButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export interface AppInputProps {
    onChange: onInputChangeHandler;
}

export type onInputChangeHandler = (value: string) => void;