import { CorsOptions } from "cors";
// console.log(process.argv)

export const corsConfig: CorsOptions = {
    origin: function(origin, callback) {
        console.log(origin)
        const whiteList = [process.env.FRONTEND_URL]

        if ( process.argv[2] === '--api' ) {
            whiteList.push(undefined)
        }

        if ( whiteList.includes(origin) ) {
            // console.log("Permitir la conexion")
            callback(null, true)
        } else {
            callback(new Error('Error de CORS'))
        }
    }
}