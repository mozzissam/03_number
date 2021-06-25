let num = 0
input.onButtonPressed(Button.A, function () {
    num += 1
    basic.showNumber(num)
})
input.onButtonPressed(Button.AB, function () {
    num = 0
    basic.showNumber(num)
})
input.onButtonPressed(Button.B, function () {
    num += -1
    basic.showNumber(num)
})
