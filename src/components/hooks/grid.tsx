import * as React from "react";
import { useHistory } from "./useHistory";


export const Grid = () => {

    const {state, set, undo, redo, clear, canUndo, canRedo} = useHistory([]);

    return(
        <div className="container">
            <div className="controls">
                <div className="title">👩‍🎨 Click squares to draw</div>
                <button onClick={()=>{undo()}} disabled={!canUndo}>
                Undo
                </button>
                <button onClick={()=>{redo()}} disabled={!canRedo}>
                Redo
                </button>
                <button onClick={()=>{clear()}}>Clear</button>
            </div>

            <div className="grid">
                {((blocks : JSX.Element[], i:number, len: number) => {
                // Generate a grid of blocks
                while (++i <= len) {
                    const index = i;
                    blocks.push(
                    <div
                        // Give block "active" class if true in state object
                        className={'block' + (state[index] ? ' active' : '')}
                        // Toggle boolean value of clicked block and merge into current state
                        onClick={() => {set({...state, [index]: !state[index]})}}
                        key={i}
                    />
                    );
                }
                return blocks;
                })([],0,200)}
            </div>
    </div>

    )
}