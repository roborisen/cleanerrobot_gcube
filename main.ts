gcube.waitFirstGcubeConnect()
gcube.waitAllGcubesConnect(3)
basic.forever(function () {
    if (input.acceleration(Dimension.Y) > 350) {
        basic.showArrow(ArrowNames.South)
        gcube.setAGcubeSpeed(1, -80)
        gcube.setAGcubeSpeed(2, 80)
    } else {
        if (input.acceleration(Dimension.Y) < -350) {
            basic.showArrow(ArrowNames.North)
            gcube.setAGcubeSpeed(1, 80)
            gcube.setAGcubeSpeed(2, -80)
        } else {
            if (input.acceleration(Dimension.X) < -350) {
                basic.showArrow(ArrowNames.West)
                gcube.setAGcubeSpeed(1, -60)
                gcube.setAGcubeSpeed(1, -60)
            } else {
                if (input.acceleration(Dimension.X) > 350) {
                    basic.showArrow(ArrowNames.East)
                    gcube.setAGcubeSpeed(1, 60)
                    gcube.setAGcubeSpeed(1, 60)
                } else {
                    gcube.stopAllGcubeMotor()
                    basic.clearScreen()
                }
            }
        }
    }
})
