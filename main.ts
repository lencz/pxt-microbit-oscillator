//% color=78 weight=100 icon="\uf1d1" block="Microbit Tryout"
//% groups=['Tryout']

namespace Tryout {
    //% block="show|number %v" v.min = 0 v.max = 42 x.defl = 25
    export function thisIsATest(v: number, interval: number = 150): void {
        console.log("" + v)
    }
}
