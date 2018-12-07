type EasingFunction = (time: number, start: number, change: number, duration:number) => number;

function easeInOutQuad(time: number, start: number, change: number, duration:number): number {
    time /= duration / 2;

    if (time < 1) {
        return change / 2 * time * time + start;
    }

    time--;
    return -change / 2 * (time * (time - 2) - 1) + start;
}

export function animate(getValue: Function, setValue: Function, amount:number, duration: number = 400, easing: EasingFunction = easeInOutQuad, interval: number = 20): Promise<void> {
    if (!getValue || !setValue) return Promise.reject('A getter and setter function must be specified.');

    const start = getValue();
    const diff = amount - start;

    return new Promise((resolve) => {
        let move = (time: number) => {
            time += interval;
            const newPosition = easing(time, start, diff, duration);
            setValue(newPosition);
            if (time < duration) {
                setTimeout(() => {
                    move(time);
                }, interval);
            } else {
                resolve();
            }
        };

        move(0);
    });
}

export function scrollY(element: Element, amount: number, duration?: number, easing?: EasingFunction) {
    return animate(() => element.scrollTop, (val: number) => { element.scrollTop = val; }, amount, duration, easing);
}