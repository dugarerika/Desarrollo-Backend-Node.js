// MongoGeo
const meters = parseFloat(req.params.meters)
const longitud = parseFloat(req.params.longitud)
const latitude = parseFloat(req.params.latitude)

db.productos.find({
    ubicacion: {
        $nearSphere:{
            $geometry: {
                type: 'Point',
                coordinates : [longitud,latitude]
            },
            $maxDistance: meters
        }
    }
})