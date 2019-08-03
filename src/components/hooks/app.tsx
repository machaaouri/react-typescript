import * as React from 'react'
import { Counter, CounterReducer } from './counter';
import { ChatRecipientPicker } from './friend-list';
import { TextInputWithFocusButton } from './ref';
import { Mouse } from './mouse';
import { KeyPresed } from './key';

export const App = ()  => {
    return <div>
             <Mouse />
             <Counter />
             <ChatRecipientPicker />
             <CounterReducer />
             <TextInputWithFocusButton />
             <KeyPresed />
          </div>
}