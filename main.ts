//  Interrupts
//  Helper function
function calculate_distance(steps: number, stride: number): number {
    return steps * stride
}

//  Main loop
//  Set Interrupt Routines
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    stepCount = 0
    display_celebrate = true
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.showNumber(stepCount)
    basic.clearScreen()
    basic.pause(200)
    basic.showNumber(calculate_distance(stepCount, 0.3))
    basic.showString("m")
    basic.clearScreen()
    basic.pause(200)
})
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    
    stepCount += 1
    time = input.runningTime()
})
//  Initial setup
let display_celebrate = false
let time = 0
let stepCount = 0
stepCount = 0
time = input.runningTime()
display_celebrate = true
basic.forever(function on_forever() {
    
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
