import { useCallback } from 'react';

export function useScrollTo() {
    const scrollTo = useCallback((id, options = { behavior: 'smooth', block: 'start' }) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView(options);
        }
    }, []);

    return scrollTo;
}
