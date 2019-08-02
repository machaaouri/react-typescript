import * as React from 'react'
import { Counter, CounterReducer } from './counter';
import { ChatRecipientPicker } from './friend-list';

export const App = ()  => {
    return <div>
             <Counter />
             <ChatRecipientPicker />
             <CounterReducer />
          </div>
}