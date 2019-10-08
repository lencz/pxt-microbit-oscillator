
enum WaveShape {
    //% block="Sawtooth"
    Sawtooth,
    //% block="Sine"
    Sine,
    //% block="Square"
    Square,
    //% block="Sawtooth"
    Triangle
}

//% color=#1c1337 weight=0 icon="\uf1d1" block="Microbit Tryout"
namespace tryout {
    //% block="show|number %v"
    //% v.min=0 v.max= 42 v.defl=25
    export function showNumber(v: number, interval: number = 150): void {
        console.log("" + v)
    }

    //% block="Oscillator with waveshape %w, minimum value %min, maximum value %max, and frequency %freq / min"
    //% enumName="WaveShape"
    //% enumMemberName="waveshape"
    //% enumPromptHint="Shape"
    //% enumInitialMembers="Sawtooth, Triangle, Square, Sine"
    export function oscillator(w: WaveShape, min: number, max: number, freq: number): void {
        console.logValue("shape:", w)
        console.logValue("min:", min)
        console.logValue("max:", max)
        console.logValue("freq:", freq)
    }
}
