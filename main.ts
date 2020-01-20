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

    export class Oscillator {
        timeOfLastTrigger: number
        timeSinceLastTrigger: number
        state: number

        constructor() {
            this.timeOfLastTrigger = 0
            this.timeSinceLastTrigger = 0
            this.state = 0
        }

        //% block="oscillate %w wave with period of (ms) %period"
        //% enumName="WaveShape"
        //% enumMemberName="waveshape"
        //% enumPromptHint="Shape"
        //% enumInitialMembers="Sawtooth, Triangle, Square, Sine"
        //% period.defl=1000
        public oscillate(w: WaveShape, period: number): number {
            switch (w) {
                case 0: {
                    return (this.sawtoothWave(period))
                    break;
                }
                case 1: {
                    return (this.sinusWave(period))
                    break;
                }
                case 2: {
                    return (this.squareWave(period))
                    break;
                }
                case 3: {
                    return (this.triangleWave(period))
                    break;
                }
                default: {
                    return (0);
                    break;
                }
            }
        }

        sawtoothWave(period: number): number {
            let now: number
            now = input.runningTime()
            this.timeSinceLastTrigger = now - this.timeOfLastTrigger
            if (this.timeSinceLastTrigger >= period) {
                this.timeOfLastTrigger = now
                this.timeSinceLastTrigger = 0
            }
            return (Math.constrain(this.timeSinceLastTrigger, 0, period))
        }

        sinusWave(period: number): number {
            let value: number
            let now: number
            now = input.runningTime()
            value = now / (1000 / (2 * Math.PI))
            return (Math.sin(value))
        }

        squareWave(period: number): number {
            let now: number
            now = input.runningTime()
            this.timeSinceLastTrigger = now - this.timeOfLastTrigger
            if (this.timeSinceLastTrigger >= period / 2) {
                if (this.state) {
                    this.state = 0;
                } else {
                    this.state = 1;
                }
                this.timeOfLastTrigger = now
                this.timeSinceLastTrigger = 0
            }
            return (this.state)
        }

        triangleWave(period: number): number {
            let now: number
            now = input.runningTime()
            this.timeSinceLastTrigger = now - this.timeOfLastTrigger
            if (this.timeSinceLastTrigger >= period / 2) {
                if (this.state) {
                    this.state = 0;
                } else {
                    this.state = 1;
                }
                this.timeOfLastTrigger = now
                this.timeSinceLastTrigger = 0
            }
            if (this.state) {
                return (Math.map(this.timeSinceLastTrigger, 0, period / 2, 0, 1000))
            } else {
                return (Math.map(this.timeSinceLastTrigger, 0, period / 2, 1000, 0))
            }
        }
    }
}
