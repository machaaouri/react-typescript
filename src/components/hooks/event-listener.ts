import { useState, useRef, useEffect, useCallback } from 'react';

export const useEventListener = (eventName: string, handler:(x: number,y: number) => void , element = window) => {

    // Create a ref that stores handler
    const savedHandler = useRef(null);

    // Update ref.current value if handler changes.
    useEffect(() => {
        savedHandler.current = handler;
    },[handler]);

    useEffect(
        () => {

        // Make sure element supports addEventListener
        // On
        const isSupported = element && element.addEventListener;
        if (!isSupported) return;

        // Create event listener that calls handler function stored in ref
        const eventListener = (event): EventListener => savedHandler.current(event);

        // Add event listener
        element.addEventListener(eventName, eventListener);

        // Remove event listener on cleanup
        return () => {
            element.removeEventListener(eventName, eventListener);
        };


        },
        [eventName, element] // Re-run if eventName or element changes
    )

}