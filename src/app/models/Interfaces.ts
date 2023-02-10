import { string } from "yup"

export interface Activity {
    id: string,
    title: string,
    date: string, //por ahi es date
    description: string,
    category: string,
    city: string,
    venue: string,
    image: string,
    hostUsername: string,

    isCancelled?: boolean,
    isGoing?: boolean,
    isHost?: boolean,
    host?: Profile,

    attendees: Profile[],
}


export interface FormValues {
    email: string,
    password: string,
    displayName?: string,
    userName?: string       //userNNNName xq asi es la propr del ASP.net User = userName[mayuscula]
}

export interface User {
    username: string,       //userNNNName xq asi es la propr del ASP.net User = userName[mayuscula]
    displayName: string,
    token: string,
    image?: string,
}
export interface ServerError {
    err: string,
}

export interface LiveChatComment {
    id: string,
    createdAt: Date,
    body: string,
    username: string,
    displayName: string,
    image: string,
}


    //PROFILE
export interface Profile {
    username: string,
    displayName: string,
    image?: string,
    bio?: string,
    photos?: Photo[],
    followersCount?: number,
    followingsCount?: number,
    following?: boolean,
    // events: Activity[],
    events: UserEvent[],
}
export interface Photo {
    id: string,
    url: string,
    isMain: boolean,
}
export class Profile implements Profile{
    constructor(user: User){
        this.username = user.username;
        this.displayName = user.displayName;
        this.image = user.image;
    }
}
export interface UserEvent {
    id: string,
    title: string,
    category: string,
    date: Date,
    date2: string,
}