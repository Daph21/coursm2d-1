input.onButtonPressed(Button.A, function () {
    Angle += 100
})
input.onButtonPressed(Button.B, function () {
    Angle += -100
})
basic.showString("Servo-1")
let Angle = 1500
pins.servoSetPulse(AnalogPin.P0, Angle)
basic.forever(function () {
    basic.showNumber(Angle / 1000)
    pins.servoSetPulse(AnalogPin.P0, Angle)
    basic.pause(500)
})
