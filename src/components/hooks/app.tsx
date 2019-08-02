import * as React from 'react'
import { Counter, CounterReducer } from './counter';
import { ChatRecipientPicker } from './friend-list';
import { TextInputWithFocusButton } from './ref';

export const App = ()  => {
    return <div>
             <Counter />
             <ChatRecipientPicker />
             <CounterReducer />
             <TextInputWithFocusButton />
          </div>
}