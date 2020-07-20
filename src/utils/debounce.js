const debounce = (func, delay, context) => {
    let timeoutID = 0;

    return (...args) => {
        clearTimeout(timeoutID);

        timeoutID = setTimeout(
            func.bind(context, ...args),
            delay
        );
    };
};

export default debounce;
