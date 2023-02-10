import { HubConnection, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { makeAutoObservable, runInAction } from "mobx";
import { LiveChatComment } from "../models/Interfaces";
import { store } from "./store";

export default class LiveCommentStore {
    comments: LiveChatComment[] = [];
    hubConnection: HubConnection | null = null;

    constructor(){
        makeAutoObservable(this);
    }


    createHubConnection = (activityId: string) => {
        if(store.activityStore.selectedACT){
            this.hubConnection = new HubConnectionBuilder()
            // .withUrl(process.env.REACT_APP_CHAT_URL + '?activityId=' + activityId, {
            .withUrl("http://localhost:5001/livechat?activityId=" + activityId, {
                accessTokenFactory: () => store.userStore.user?.token!
            })
            .withAutomaticReconnect()
            .configureLogging(LogLevel.Information)
            .build();

        this.hubConnection.start().catch(error => console.log('Error establishing the connection: ', error));

        this.hubConnection.on('LoadLIVEComments', (comments: LiveChatComment[]) => {
            runInAction(() => {
                comments.forEach(comment => {
                    // comment.createdAt = new Date(comment.createdAt + 'Z');
                    comment.createdAt = new Date(comment.createdAt);
                })
                this.comments = comments
            });
        })

        this.hubConnection.on('RecibirComment', (comment: LiveChatComment) => {
            runInAction(() => {
                comment.createdAt = new Date(comment.createdAt);
                this.comments.unshift(comment)
            });
        })
    }
}

stopHubConnection = () => {
    this.hubConnection?.stop().catch(error => console.log('Error stopping connection: ', error));
}

clearComments = () => {
    this.comments = [];
    this.stopHubConnection();
}

addComment = async (values: any) => {
    values.activityId = store.activityStore.selectedACT?.id;
    try {
        await this.hubConnection?.invoke('SendComment', values); //IGUAL al metodo en la api "chathub.c#"
    } catch (error) {
        console.log(error);
    }
}
}