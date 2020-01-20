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

const MIN : number = 0;
const MAX : number = 1000;

//% color=#1ca7c1 weight=0 icon="\uf1d1" block="Oscillator"
namespace oscillator {

    export class Oscillator {
        timeOfLastTrigger: number;
        timeSinceLastTrigger: number;
        state: number;

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
                    return this.sawtoothWave(period);
                }
                case 1: {
                    return (1);
                }
                case 2: {
                    return (2);
                }
                case 3: {
                    return (3);
                }
                default: {
                    return (0);
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
            return (Math.map(this.timeSinceLastTrigger, 0, period, MIN, MAX))
        }
    }

    //% blockId="create_Oscillator" block="create oscillator"
    export function createOscillator(): Oscillator {
        return new Oscillator();
    }
}
