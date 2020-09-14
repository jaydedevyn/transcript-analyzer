import { Agent } from "http";

export interface Call {
    id: string;
    startTime: string;
    agent: Agent;
}