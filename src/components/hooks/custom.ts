import {useState, useEffect} from 'react'
import { finished } from 'stream';

export const useFriendStatus = (friendID: number) => {

    const [isOnline, setIsOnline] =  useState(null);

    useEffect(() => {

        function handleStatusChange(status: boolean) {
            setIsOnline(status)
        }

        ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);

        return () => {
            ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
        }
        
    },[friendID])

    return isOnline;
}


// Status

const fiendStatus = [true, false, true];


const ChatAPI = {

        subscribeToFriendStatus (friendID: number, handleStatusChange: (status: boolean) => void){
            console.log("Subscribing for: " + friendID +  " status: " +  fiendStatus[friendID]);
            handleStatusChange(fiendStatus[friendID]);
        },

        unsubscribeFromFriendStatus(friendID: number, handleStatusChange: (status) => void) {
            console.log("Unsubscribing from: " + friendID);
        }
}
