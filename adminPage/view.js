const view = {
    currentComponent = null
}

console.log("sssssss")

view.showComponents = function(name) {
    view.currentComponent = name
    switch (name) {
        case 'adminAddRoom':
            {
                let app = document.getElementById('app')
                app.innerHTML = components.nav + components.addRoom

                let signOutBtn = document.getElementById('sign-out')
                signOutBtn.onclick = () => firebase.auth().signOut()

                let link1 = document.getElementById('booking')
                link1.onclick = bookingClickHandler

                let link2 = document.getElementById('users-edit')
                link2.onclick = usersEditClickHandler

                let link3 = document.getElementById('add-carrousels')
                link3.onclick = addCarrouselsClickHandler

                function bookingClickHandler() {
                    adminView.showComponents('adminBookingProcess')
                }

                function usersEditClickHandler() {
                    adminView.showComponents('users')
                }

                function addCarrouselsClickHandler() {
                    adminView.showComponents('adminCarrousels')
                }

            }
        case 'adminBookingProcess':
            {
                let app = document.getElementById('app')
                app.innerHTML = components.nav + components.bookingProcess

                let signOutBtn = document.getElementById('sign-out')
                signOutBtn.onclick = () => firebase.auth().signOut()
            }
        case 'users':
            {
                let app = document.getElementById('app')
                app.innerHTML = components.nav + components.users

                let signOutBtn = document.getElementById('sign-out')
                signOutBtn.onclick = () => firebase.auth().signOut()
            }
        case 'adminCarrousels':
            {
                let app = document.getElementById('app')
                app.innerHTML = components.nav + components.carrousels

                let signOutBtn = document.getElementById('sign-out')
                signOutBtn.onclick = () => firebase.auth().signOut()
            }
    }
}