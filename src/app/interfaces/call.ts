import { Script } from './script';
import { Transcript } from './transcript';

export interface Call {
    id: string;
    startTime: string;
    customer: string;
    agent: string;
    duration: number;
}

export interface CallDetail extends Call {
    script: Script[];
    transcript: Transcript[];
}