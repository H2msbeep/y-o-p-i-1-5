let European = 0
led.setBrightness(69)
let C1 = 24
let C2 = 0
let MugenLock = 0
music.playMelody("B A G A G F A C5 ", 120)
if (!(input.logoIsPressed())) {
    basic.showString("YOPI15")
    basic.showString("" + C1 + ":" + C2)
} else {
    led.plot(0, 0)
    basic.pause(500)
    led.unplot(0, 0)
}
basic.showNumber(C1)
while (!(input.logoIsPressed())) {
    if (input.buttonIsPressed(Button.A)) {
        if (C1 == 24) {
            C1 = 0
        }
        C1 += 1
        basic.clearScreen()
        basic.showString("" + (C1))
    }
    if (input.buttonIsPressed(Button.B)) {
        C1 += -1
        if (C1 == 0) {
            C1 = 24
        }
        basic.clearScreen()
        basic.showString("" + (C1))
    }
}
led.plot(0, 0)
basic.pause(500)
led.unplot(0, 0)
basic.showNumber(C2)
while (!(input.logoIsPressed())) {
    if (input.buttonIsPressed(Button.A)) {
        if (C2 == 59) {
            C2 = -1
        }
        C2 += 1
        basic.clearScreen()
        basic.showString("" + (C2))
    }
    if (input.buttonIsPressed(Button.B)) {
        C2 += -1
        if (C2 == -1) {
            C2 = 59
        }
        basic.clearScreen()
        basic.showString("" + (C2))
    }
}
let Mivar1 = input.runningTime()
MugenLock = 1
basic.clearScreen()
basic.showString("" + C1 + ":" + C2)
basic.forever(function () {
    if (MugenLock == 1) {
        if (input.logoIsPressed()) {
            European = Math.idiv(input.runningTime() - Mivar1, 60000)
            for (let index = 0; index < European; index++) {
                if (C2 == 59) {
                    C2 = -1
                    if (C1 == 24) {
                        C1 = 0
                    }
                    C1 += 1
                }
                C2 += 1
            }
            basic.showString("" + C1 + ":" + C2)
        }
    }
})
