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
import { MylocalStorage } from './useLocalStorage';
import { OnClickOutside } from './useOnClickOutside';
import { Countries } from './useDebounce';
import { Auth } from './useAuth';

export const App = ()  => {
    return <div>
             <Auth />
             <Countries />
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
             <MylocalStorage />
             <OnClickOutside />
             
          </div>
}