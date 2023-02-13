# Interrupts
def on_button_pressed_a():
    global stepCount, display_celebrate
    stepCount = 0
    display_celebrate = True

def on_button_pressed_b():
    basic.show_number(stepCount)
    basic.clear_screen()
    basic.pause(200)
    basic.show_number(calculate_distance(stepCount, 0.3))
    basic.show_string("m")
    basic.clear_screen()
    basic.pause(200)

def on_gesture_shake():
    global stepCount, time
    stepCount += 1
    time = input.running_time()

# Helper function
def calculate_distance(steps: number, stride: number):
    return steps * stride

# Main loop
def on_forever():
    global display_celebrate, time
    if stepCount == 20:
        if display_celebrate:
            basic.show_icon(IconNames.HAPPY)
            basic.pause(200)
            basic.show_string("Well Done")
            basic.clear_screen()
            display_celebrate = False
    if input.running_time() - time >= 60000:
        basic.show_string("MOVE!")
        time = input.running_time()
        basic.clear_screen()

# Set Interrupt Routines
input.on_button_pressed(Button.A, on_button_pressed_a)
input.on_button_pressed(Button.B, on_button_pressed_b)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

# Initial setup
display_celebrate = False
time = 0
stepCount = 0
stepCount = 0
time = input.running_time()
display_celebrate = True

basic.forever(on_forever)
