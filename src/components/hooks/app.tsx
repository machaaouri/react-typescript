import * as React from 'react'
import { Counter, CounterReducer } from './counter';
import { ChatRecipientPicker } from './friend-list';
import { TextInputWithFocusButton } from './ref';
import { Mouse } from './mouse';
import { KeyPresed } from './key';
import { Grid } from './grid';
import { Memo } from './useMemo';
import { Previous } from './usePrevious';
import { WindowSize } from './useWindowSize';
import { Hover } from './useHover';

export const App = ()  => {
    return <div>
             <Mouse />
             <Counter />
             <ChatRecipientPicker />
             <CounterReducer />
             <TextInputWithFocusButton />
             <KeyPresed />
             <Grid />
             <Memo />
             <Previous />
             <WindowSize />
             <Hover />
          </div>
}