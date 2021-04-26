input.onButtonPressed(Button.A, function () {
    if (ABlock == 1) {
        led.stopAnimation()
        MugenLock += 1
        if (MugenLock == 8) {
            MugenLock = 1
        }
        if (MugenLock == 1) {
            Gamen_list[0] = "M"
        } else if (MugenLock == 2) {
            Gamen_list[0] = "C"
        } else if (MugenLock == 3) {
            Gamen_list[0] = "T"
        } else if (MugenLock == 4) {
            Gamen_list[0] = "D"
        } else if (MugenLock == 5) {
            Gamen_list[0] = "S"
        } else if (MugenLock == 6) {
            Gamen_list[0] = "K"
        } else {
            Gamen_list[0] = "R"
        }
        basic.showString("" + (Gamen_list[0]))
    } else if (ABlock == 2) {
        Hito += -1
        if (Hito == -1) {
            Hito = 56
        }
        basic.showString("" + (text_list[Hito]))
    }
})
input.onSound(DetectedSound.Loud, function () {
    if (MugenLock == 5) {
        music.playTone(988, music.beat(BeatFraction.Half))
        music.playTone(988, music.beat(BeatFraction.Half))
    }
})
input.onButtonPressed(Button.AB, function () {
    if (ABlock == 2) {
        オリオンをなぞる[軽くテンションMAX] = text_list[Hito]
        軽くテンションMAX += 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (ABlock == 1) {
        led.stopAnimation()
        MugenLock += -1
        if (MugenLock == 0) {
            MugenLock = 7
        }
        if (MugenLock == 1) {
            Gamen_list[0] = "M"
        } else if (MugenLock == 2) {
            Gamen_list[0] = "C"
        } else if (MugenLock == 3) {
            Gamen_list[0] = "T"
        } else if (MugenLock == 4) {
            Gamen_list[0] = "D"
        } else if (MugenLock == 5) {
            Gamen_list[0] = "S"
        } else if (MugenLock == 6) {
            Gamen_list[0] = "K"
        } else {
            Gamen_list[0] = "R"
        }
        basic.showString("" + (Gamen_list[0]))
    } else if (ABlock == 2) {
        Hito += 1
        if (Hito == 57) {
            Hito = 0
        }
        basic.showString("" + (text_list[Hito]))
    }
})
input.onGesture(Gesture.Shake, function () {
    if (MugenLock == 4) {
        basic.clearScreen()
        basic.showNumber(randint(1, 6))
        basic.pause(500)
        basic.showString(".")
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (MugenLock == 1) {
        basic.showString("" + (Gamen_list[0]))
        if (JikanLock == 0) {
            basic.clearScreen()
            ABlock = 0
            basic.showString("Set the clock")
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
            Mivar1 = input.runningTime()
            JikanLock = 1
            basic.clearScreen()
            ABlock = 1
        }
        European = Math.idiv(input.runningTime() - Mivar1, 60000)
        for (let index = 0; index < European - American; index++) {
            if (C2 == 59) {
                C2 = -1
                if (C1 == 24) {
                    C1 = 0
                }
                C1 += 1
            }
            C2 += 1
        }
        American = European
        basic.showString("" + C1 + ":" + C2 + "Clock")
    } else if (MugenLock == 2) {
        basic.clearScreen()
        basic.showString("" + input.compassHeading() + "Compass" + input.compassHeading())
        basic.showString("" + (Gamen_list[0]))
    } else if (MugenLock == 3) {
        basic.clearScreen()
        basic.showString("" + input.temperature() + "Celsius" + input.temperature())
        basic.showString("" + (Gamen_list[0]))
    } else if (MugenLock == 6) {
        Switch += 1
        if (Switch == 2) {
            Switch = 0
            ABlock = 1
            basic.showString("K")
        } else {
            basic.clearScreen()
            ABlock = 2
            basic.showString("" + (text_list[0]))
        }
    } else if (MugenLock == 7) {
        basic.clearScreen()
        Hito = 0
        for (let index = 0; index < オリオンをなぞる.length; index++) {
            basic.showString("" + (オリオンをなぞる[Hito]))
            Hito += 1
        }
        Hito = 0
        basic.showString(".")
        basic.showString("" + (Gamen_list[0]))
    }
})
let Switch = 0
let American = 0
let European = 0
let Mivar1 = 0
let JikanLock = 0
let 軽くテンションMAX = 0
let Hito = 0
let ABlock = 0
let text_list: string[] = []
let オリオンをなぞる: string[] = []
let Gamen_list: string[] = []
let MugenLock = 0
let C2 = 0
let C1 = 0
led.setBrightness(69)
C1 = 24
C2 = 0
MugenLock = 1
Gamen_list = ["M"]
オリオンをなぞる = [""]
text_list = ["E", "T", "I", "A", "N", "M", "S", "U", "R", "W", "D", "K", "G", "O", "H", "V", "F", "#", "L", "#", "P", "J", "B", "X", "C", "Y", "Z", "Q", "#", "I", "5", "4", "#", "3", "?", "_", ".", "2", ",", ":", "+", ";", "*", "%", "#", "1", "6", "=", "/", "#", "#", "#", "#", "8", "7", "9", "0"]
basic.showString("" + (Gamen_list[0]))
ABlock = 1
