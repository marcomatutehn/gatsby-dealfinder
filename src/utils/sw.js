// show a notification after 15 seconds (the notification
// permission must be granted first)
setTimeout(() => {
    self.registration.showNotification("New prices in Diunsa Honduras")
    console.log("New Prices Notification")
}, 15000)

// register a custom navigation route
const customRoute = new workbox.routing.NavigationRoute(({ event }) => {
    console.log("Entro al Metodo de Navigation Route")
// ...
})
workbox.routing.registerRoute(customRoute)

//https://developers.google.com/web/fundamentals/codelabs/push-notifications
