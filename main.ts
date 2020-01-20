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

const MIN: number = 0;
const MAX: number = 1000;

//% color=#1ca7c1 weight=0 icon="\uf1d1" block="Oscillator"
namespace oscillator {

    export class Oscillator {
        timeOfLastTrigger: number;
        state: number;

        constructor() {
            this.timeOfLastTrigger = 0
        }

        //% blockId="produce_sample"
        //% block="oscillator %osc produce %w wave with period of (ms) %period"
        //% enumName="WaveShape"
        //% enumMemberName="waveshape"
        //% enumPromptHint="Shape"
        //% enumInitialMembers="Sawtooth, Triangle, Square, Sine"
        //% period.defl=1000
        public oscillate(w: WaveShape, period: number): number {
            switch (w) {
                case 0: {
                    return this.sawtoothWave(period)
                }
                case 1: {
                    return this.sinusWave(period)
                }
                case 2: {
                    return this.squareWave(period)
                }
                case 3: {
                    return this.triangleWave(period)
                }
                default: {
                    return (0)
                }
            }
        }

        sawtoothWave(period: number): number {
            let now: number
            let timeSinceLastTrigger: number
            now = input.runningTime()
            timeSinceLastTrigger = now - this.timeOfLastTrigger
            if (timeSinceLastTrigger >= period) {
                this.timeOfLastTrigger = now
                timeSinceLastTrigger = 0
            }
            return Math.map(timeSinceLastTrigger, 0, period, MIN, MAX)
        }

        sinusWave(period: number): number {
            let now: number
            let value: number
            now = input.runningTime()
            value = (now / period) * 2 * Math.PI
            return Math.map(Math.sin(value), -1, 1, MIN, MAX)
        }

        squareWave(period: number): number {
            let now: number
            let timeSinceLastTrigger: number
            now = input.runningTime()
            timeSinceLastTrigger = now - this.timeOfLastTrigger
            if (timeSinceLastTrigger >= period / 2) {
                if (this.state) {
                    this.state = 0;
                } else {
                    this.state = 1;
                }
                this.timeOfLastTrigger = now
                timeSinceLastTrigger = 0
            }
            return this.state ? MAX : MIN
        }

        triangleWave(period: number): number {
            let now: number
            let timeSinceLastTrigger: number
            now = input.runningTime()
            timeSinceLastTrigger = now - this.timeOfLastTrigger
            if (timeSinceLastTrigger >= period / 2) {
                if (this.state) {
                    this.state = 0;
                } else {
                    this.state = 1;
                }
                this.timeOfLastTrigger = now
                timeSinceLastTrigger = 0
            }
            if (this.state) {
                return (Math.map(timeSinceLastTrigger, 0, period / 2, MIN, MAX))
            } else {
                return (Math.map(timeSinceLastTrigger, 0, period / 2, MAX, MIN))
            }
        }
    }

    //% blockId="create_Oscillator" block="create oscillator"
    export function createOscillator(): Oscillator {
        return new Oscillator();
    }
} 