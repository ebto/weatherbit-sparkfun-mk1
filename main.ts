input.onButtonPressed(Button.A, function () {
    item += 1
})
let item = 0
weatherbit.startWeatherMonitoring()
basic.forever(function () {
    weatherbit.startWeatherMonitoring()
    if (item == 2) {
        basic.showString("Tmp: ")
        basic.showNumber(Math.idiv(weatherbit.temperature(), 100))
        basic.showString("C ")
    } else if (item == 1) {
        basic.showString("Hum: ")
        basic.showNumber(Math.idiv(weatherbit.humidity(), 1024))
        basic.showString("% ")
    } else if (item == 0) {
        basic.showString("Atm: ")
        basic.showNumber(weatherbit.pressure() * 0.00132265625)
        basic.showString("hPa")
    } else {
        item = 0
    }
})
