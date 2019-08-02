import { useState } from "react";
import { useFriendStatus } from "./custom";
import * as React from "react";

const friendList = [
    { id: 0, name: 'Houssame' },
    { id: 1, name: 'Anass' },
    { id: 2, name: 'Rania' },
  ];


export const ChatRecipientPicker = () => {
    const [recipientID, setRecipientID] = useState(0);
    const isRecipientOnline = useFriendStatus(recipientID);
  
    return (
      <div>
        <Circle color={isRecipientOnline ? 'green' : 'red'} />
        <select
          value={recipientID}
          onChange={e => setRecipientID(Number(e.target.value))}
        >
          {friendList.map(friend => (
            <option key={friend.id} value={friend.id}>
              {friend.name}
            </option>
          ))}
        </select>
      </div>
    );
}

const Circle = (p: {color: 'green' | 'red'}) => {

    return (
        <svg height="15" width="15">
            <circle cx="6" cy="6" r="5" fill={p.color} />
        </svg> 
    )
  }