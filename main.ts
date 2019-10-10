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

//% color=#1ca7c1 weight=0 icon="\uf1d1" block="Microbit Tryout"
namespace tryout {

    let timeSinceLastTrigger: number = 0
    let state: boolean = false

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
        let value: number
        let now: number
        now = input.runningTime()
        //if()
        return (now)
    }
}
