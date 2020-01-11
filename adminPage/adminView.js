const view = {
    currentComponent: null
}

view.showComponents = function(name) {
    view.showComponents = name
    switch (name) {
        case `Add new room`:
            {
                let app = document.getElementById(`app`)
                app.innerHTML = components.adminNav + components.adminAddNewRoom
            }
        case `Booking Process`:
            {
                let app = document.getElementById(`app`)
                app.innerHTML = components.adminNav + components.adminBookingProcess
            }
        case `Users`:
            {
                let app = document.getElementById(`app`)
                app.innerHTML = components.adminNav + components.adminUsers
            }
        case `Carrousel`:
            {
                let app = document.getElementById(`app`)
                app.innerHTML = components.adminNav + components.adminCarrousel
            }
    }
}