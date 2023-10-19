import { Request, Response } from "express";

export interface URLRequest extends Request {
    base_redirect_url?: string;
}

export interface URLResponse extends Response {
}