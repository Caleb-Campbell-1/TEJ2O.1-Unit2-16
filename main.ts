/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: Caleb Campbell
 * Created on: Nov 2025
 * This program uses the Bluetooth distance sensor
*/

// setup
radio.setGroup(0)


basic.showIcon(IconNames.Happy)
// variables
let distanceToObject: number = 0


input.onButtonPressed(Button.A, function () {
    distanceToObject = 0
    basic.showIcon(IconNames.Triangle)
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters)

    basic.showNumber(distanceToObject)
    if ((distanceToObject) <= (20)) {
        radio.sendString ("Too close!")
        radio.onReceivedString(function (receivedString) {
            basic.clearScreen()
            basic.showString(receivedString)
            basic.showIcon(IconNames.Happy)})
    } else {
    basic.showIcon(IconNames.Heart)
}
    }) 