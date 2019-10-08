//% color=#1c1337 weight=0 icon="\uf1d1" block="Microbit Tryout"

namespace tryout {
    //% block="show|number %v"
    export function showNumber(v: number, interval: number = 150): void {
        console.log("" + v)
    }

    //% block="Oscillator %v"
    //% enumName="Waveshape"
    //% enumMemberName="waveshape"
    //% enumPromptHint="Shape"
    //% enumInitialMembers="Sawtooth, Triangle, Square, Sine"
    export function secondFunction(v: number): void {
        console.log("" + v)
    }
}
