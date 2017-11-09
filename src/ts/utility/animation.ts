const easeInOutQuad = (time: number, start: number, change: number, duration:number): number => {
    time /= duration / 2;

    if (time < 1) {
        return change / 2 * time * time + start;
    }

    time--;
    return -change / 2 * (time * (time - 2) - 1) + start;
};

export function animate(getValue: Function, setValue: Function, amount:number, duration: number = 400, easing: Function = easeInOutQuad, interval: number = 20) {
    if (!getValue || !setValue) return;

    const start = getValue();
    const diff = amount - start;

    let move = (time: number) => {
        time += interval;
        const newPosition = easing(time, start, diff, duration);
        setValue(newPosition);
        if (time < duration) {
            setTimeout(() => {
                move(time);
            }, interval);
        }
    };

    move(0);
}

export function scrollY(element: Element, amount: number, duration?: number, easing?: Function) {
    animate(() => element.scrollTop, (val: number) => { element.scrollTop = val; }, amount, duration, easing);
}