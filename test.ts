a4_BE_CONVO.onButtonPressed(ButtonChoice.C, function () {
    a4_BE_CONVO.setMotorSpeed(100)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    a4_BE_CONVO.setRingColor(a4_BE_CONVO.Colors.Green)
    basic.pause(200)
    a4_BE_CONVO.setRingColor(a4_BE_CONVO.Colors.Blue)
    basic.pause(200)
    a4_BE_CONVO.setRingColor(a4_BE_CONVO.Colors.Red)
    basic.pause(200)
    a4_BE_CONVO.setRingColor(a4_BE_CONVO.Colors.White)
    basic.pause(200)
    a4_BE_CONVO.setRingColor(a4_BE_CONVO.Colors.Black)
    basic.pause(200)
})
a4_BE_CONVO.onButtonPressed(ButtonChoice.D, function () {
    a4_BE_CONVO.stopMotor()
})
a4_BE_CONVO.initModule()
a4_BE_CONVO.switchfunc(a4_BE_CONVO.FuncList.Color)
basic.forever(function () {
    a4_BE_CONVO.cameraImage()
    if (a4_BE_CONVO.colorCheck(a4_BE_CONVO.ColorLs.blue)) {
        a4_BE_CONVO.showUserText("Bleu !", 1)
    } else if (a4_BE_CONVO.colorCheck(a4_BE_CONVO.ColorLs.green)) {
        a4_BE_CONVO.showUserText("Vert !", 1)
    } else {
        a4_BE_CONVO.oledClear()
    }
    a4_BE_CONVO.setServoAngle(Math.map(a4_BE_CONVO.potentiometerValue(), 0, 100, 40, 160))
})

