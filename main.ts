//% color=#1c1337 weight=0 icon="\uf1d1" block="Microbit Tryout"

namespace tryout {
    //% block="show|number %v" v.min = 0 v.max = 42 x.defl = 25
    export function showNumber(v: number, interval: number = 150): void {
        console.log("" + v)
    }

    //% block="Oscillator %v" v.min = 0 v.max = 42 x.defl = 25
    export function secondFunction(v: number, interval: number = 150): void {
        console.log("" + v)
    }
}
