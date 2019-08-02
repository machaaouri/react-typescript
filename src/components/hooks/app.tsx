import * as React from 'react'
import { Counter } from '../counter';
import { ChatRecipientPicker } from './friend-list';

export const App = ()  => {
    return <div>
             <Counter />
             <ChatRecipientPicker />
          </div>
}