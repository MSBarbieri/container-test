import { app } from "./app";

app.listen({
    port: process.env.PORT ?? 3000,
    host: '0.0.0.0'
}).then(() => {
    console.log(`Server started on port: ${process.env.PORT ?? 3000}`)
})