import {connect} from 'mongoose';

(async () => {
    try {
        const db = await connect('mongodb+srv://Facundo-Roman:Espectacular2785@proyecto1.hwjkxpu.mongodb.net/test');
        console.log('DB connected to', db.connection.name)
    } catch (error) {
        console.error(error);
    }
})();