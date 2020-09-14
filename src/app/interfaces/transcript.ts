import { Script } from './script';

export interface Transcript extends Script {
    channel: number;
    timeFrom: number;
    timeTo: number;
}