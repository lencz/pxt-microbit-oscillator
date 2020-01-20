# pxt-microbit-oscillator

Oscillator library for Microbit.

## Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)


### oscillator-oscillator-oscillate

Produces a new sample from an oscillator,
inputs are the variable of the oscillator,
the type of waveform and the period.

* oscillator: a variable containing an oscillator
* waveform: sine, sawtooth, square, triangle
* period: period in milliseconds

Returns a number between 0 and 1000. 