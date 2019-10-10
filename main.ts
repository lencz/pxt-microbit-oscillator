enum WaveShape {
    //% block="Sawtooth"
    Sawtooth,
    //% block="Sine"
    Sine,
    //% block="Square"
    Square,
    //% block="Triangle"
    Triangle
}

//% color=#1ca7c1 weight=0 icon="\uf1d1" block="Oscillator"
namespace oscillator {

    let timeOfLastTrigger: number = 0
    let timeSinceLastTrigger: number = 0
    let state: number = 0

    //% block="log|number %v"
    //% v.min=0 v.max= 42 v.defl=25
    export function logNumber(v: number, interval: number = 150): void {
        console.logValue("Number", v)
    }

    //% block="Create wave %w with period of (ms) %period"
    //% enumName="WaveShape"
    //% enumMemberName="waveshape"
    //% enumPromptHint="Shape"
    //% enumInitialMembers="Sawtooth, Triangle, Square, Sine"
    //% period.defl=1000
    export function oscillator(w: WaveShape, period: number): number {
        switch (w) {
            case 0: {
                return (sawtoothWave(period))
                break;
            }
            case 1: {
                return (sinusWave(period))
                break;
            }
            case 2: {
                return (squareWave(period))
                break;
            }
            case 3: {
                return (triangleWave(period))
                break;
            }
            default: {
                return (0);
                break;
            }
        }
    }

    function sawtoothWave(period: number): number {
        let now: number
        now = input.runningTime()
        timeSinceLastTrigger = now - timeOfLastTrigger
        if (timeSinceLastTrigger >= period) {
            timeOfLastTrigger = now
            timeSinceLastTrigger = 0
        }
        return (Math.constrain(timeSinceLastTrigger, 0, period))
    }

    function sinusWave(period: number): number {
        let value: number
        let now: number
        now = input.runningTime()
        value = now / (1000 / (2 * Math.PI))
        return (Math.sin(value))
    }

    function squareWave(period: number): number {
        let now: number
        now = input.runningTime()
        timeSinceLastTrigger = now - timeOfLastTrigger
        if (timeSinceLastTrigger >= period / 2) {
            if (state) {
                state = 0;
            } else {
                state = 1;
            }
            timeOfLastTrigger = now
            timeSinceLastTrigger = 0
        }
        return (state)
    }

    function triangleWave(period: number): number {
        let now: number
        now = input.runningTime()
        timeSinceLastTrigger = now - timeOfLastTrigger
        if (timeSinceLastTrigger >= period / 2) {
            if (state) {
                state = 0;
            } else {
                state = 1;
            }
            timeOfLastTrigger = now
            timeSinceLastTrigger = 0
        }
        if (state) {
            return (Math.map(timeSinceLastTrigger, 0, period / 2, 0, 1000))
        } else {
            return (Math.map(timeSinceLastTrigger, 0, period / 2, 1000, 0))
        }
    }
}
