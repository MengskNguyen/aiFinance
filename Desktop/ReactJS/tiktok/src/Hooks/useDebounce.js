import { useState, useEffect } from 'react';

function Debounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebounceValue(value), delay);
        // Clean up function
        return () => clearTimeout(handler);
        // eslint-disable-next-line
    }, [value]);

    return debounceValue;
}

export default Debounce;
