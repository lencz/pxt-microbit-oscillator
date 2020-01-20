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
                    return 0
                }
                case 1: {
                    return 1
                }
                case 2: {
                    return 2
                }
                case 3: {
                    return 3
                }
                default: {
                    return 0
                }
            }
        }
    }
}
 