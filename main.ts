input.onButtonPressed(Button.A, function () {
    stepCount = 0
    display_celebrate = true
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(stepCount)
    basic.clearScreen()
    basic.pause(200)
    basic.showNumber(calculate_distance(stepCount, 0.3))
    basic.showString("m")
    basic.clearScreen()
    basic.pause(200)
})
input.onGesture(Gesture.Shake, function () {
    stepCount += 1
    time = input.runningTime()
})
function calculate_distance (steps: number, stride: number) {
    return steps * stride
}
let display_celebrate = false
let time = 0
let stepCount = 0
stepCount = 0
time = input.runningTime()
display_celebrate = true
basic.forever(function () {
    if (stepCount == 20) {
        if (display_celebrate) {
            basic.showIcon(IconNames.Happy)
            basic.pause(200)
            basic.showString("Well Done")
            basic.clearScreen()
            display_celebrate = false
        }
    }
    if (input.runningTime() - time >= 60000) {
        basic.showString("MOVE!")
        time = input.runningTime()
        basic.clearScreen()
    }
})
