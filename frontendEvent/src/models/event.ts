import mongoose from "mongoose";

interface Participant {
    user_id: number;
    rating: number;
}

interface Link {
    title: string;
    url: string;
}

interface EventType {
    type: string;
    enum: ["conférence", "concert", "réunion privée"];
}

export default class Event {
    title: string;
    description: string;
    start_date: Date;
    end_date: Date;
    location: string;
    image?: string;
    participants: Participant[];
    average_rating?: number;
    links?: Link[];
    type?: EventType;
    max_participants?: number;

    constructor(
        title: string,
        description: string,
        start_date: Date,
        end_date: Date,
        location: string,
        participants: Participant[],
        image?: string,
        links?: Link[],
        type?: EventType,
        max_participants?: number
    ) {
        this.title = title;
        this.description = description;
        this.start_date = start_date;
        this.end_date = end_date;
        this.location = location;
        this.participants = participants;
        this.image = image;
        this.links = links;
        this.type = type;
        this.max_participants = max_participants;
    }
}