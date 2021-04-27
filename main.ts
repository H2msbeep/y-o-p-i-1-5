input.onButtonPressed(Button.A, function () {
    if (ABlock == 1) {
        led.stopAnimation()
        MugenLock += 1
        if (MugenLock == 9) {
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
        } else if (MugenLock == 7) {
            Gamen_list[0] = "R"
        } else {
            Gamen_list[0] = "A"
        }
        basic.showString("" + (Gamen_list[0]))
    } else if (ABlock == 2) {
        Hito += -1
        if (Hito == -1) {
            Hito = 56
        }
        basic.showString("" + (text_list[Hito]))
    } else if (ABlock == 3) {
        let list: number[] = []
        list[Hito] = 1
        Hito += 1
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
            MugenLock = 8
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
        } else if (MugenLock == 7) {
            Gamen_list[0] = "R"
        } else {
            Gamen_list[0] = "A"
        }
        basic.showString("" + (Gamen_list[0]))
    } else if (ABlock == 2) {
        Hito += 1
        if (Hito == 57) {
            Hito = 0
        }
        basic.showString("" + (text_list[Hito]))
    } else if (ABlock == 3) {
        Risu[Hito] = 2
        Hito += 1
        if (Risu[0] == 2) {
        	
        }
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
    } else if (MugenLock == 8) {
        basic.clearScreen()
        ABlock = 1
        Hito = 0
        while (!(input.logoIsPressed())) {
            if (input.buttonIsPressed(Button.A)) {
                Risu[Hito] = 1
                Hito += 1
            }
            if (input.buttonIsPressed(Button.B)) {
                Risu[Hito] = 2
                Hito += 1
            }
            if (Risu[0] == 1) {
                basic.showString("E")
                オリオンをなぞる[0] = "E"
                if (Risu[1] == 1) {
                    basic.showString("I")
                    オリオンをなぞる[0] = "I"
                    if (Risu[2] == 1) {
                        basic.showString("S")
                        オリオンをなぞる[0] = "S"
                        if (Risu[3] == 1) {
                            basic.showString("H")
                            オリオンをなぞる[0] = "H"
                            if (Risu[4] == 1) {
                                basic.showString("5")
                                オリオンをなぞる[0] = "5"
                            } else if (Risu[4] == 2) {
                                basic.showString("4")
                                オリオンをなぞる[0] = "4"
                            }
                        } else if (Risu[3] == 2) {
                            basic.showString("V")
                            オリオンをなぞる[0] = "V"
                            if (Risu[4] == 1) {
                                basic.showString("$")
                                オリオンをなぞる[0] = "$"
                            } else if (Risu[4] == 2) {
                                basic.showString("3")
                                オリオンをなぞる[0] = "3"
                            }
                        }
                    } else if (Risu[2] == 2) {
                        basic.showString("U")
                        オリオンをなぞる[0] = "U"
                        if (Risu[3] == 1) {
                            basic.showString("F")
                            オリオンをなぞる[0] = "F"
                        } else if (Risu[3] == 2) {
                            basic.showString("#")
                            オリオンをなぞる[0] = "#"
                        }
                    }
                } else if (Risu[1] == 2) {
                    basic.showString("A")
                    オリオンをなぞる[0] = "A"
                }
            } else if (Risu[0] == 2) {
                basic.showString("T")
                オリオンをなぞる[0] = "T"
            }
        }
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
let Risu: number[] = []
let Gamen_list: string[] = []
let MugenLock = 0
let C2 = 0
let C1 = 0
led.setBrightness(69)
C1 = 24
C2 = 0
MugenLock = 1
Gamen_list = ["M"]
Risu = [0]
オリオンをなぞる = [""]
text_list = ["E", "T", "I", "A", "N", "M", "S", "U", "R", "W", "D", "K", "G", "O", "H", "V", "F", "#", "L", "#", "P", "J", "B", "X", "C", "Y", "Z", "Q", "#", "#", "5", "4", "#", "3", "?", "_", ".", "2", ",", ":", "+", ";", "*", "%", "#", "1", "6", "=", "/", "#", "#", "#", "#", "8", "7", "9", "0"]
basic.showString("" + (Gamen_list[0]))
ABlock = 1
