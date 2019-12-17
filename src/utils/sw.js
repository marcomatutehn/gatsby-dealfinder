// show a notification after 15 seconds (the notification
// permission must be granted first)
setTimeout(() => {
    self.registration.showNotification("Hello, world!")
    console.log("entro a las notificaciones")
}, 15000)

// register a custom navigation route
const customRoute = new workbox.routing.NavigationRoute(({ event }) => {
    console.log("Entro al otro metodo de las notificaciones")
// ...
})
workbox.routing.registerRoute(customRoute)
