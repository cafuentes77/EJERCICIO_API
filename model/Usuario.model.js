import { v4 as uuidv4 } from 'uuid';
import { createDataFile, getAllData} from '../utils/fileUtils.js';

export class Escuderia {
    #id
    #name
    #driver1
    #driver2

    constructor(name, driver1, driver2) {
        this.#id = uuidv4();
        this.#name = name;
        this.#driver1 = driver1;
        this.#driver2 = driver2;
        }
        
        get id() {
            return this.#id;
        }

        get name() {
            return this.#name
        }

        get driver1() {
            return this.#driver1
        }

        get driver2() {
            return this.#driver2
        }

        setname (name) {
            this.#name = newname
        }

        setdriver1 (driver1) {
            this.#driver1 = newdriver1
        }

        setdriver2 (driver2) {
            this.#driver2 = newdriver2
        }

        gettAllPropierties() {
            return {
                id: this.#id,
                name: this.#name,
                driver1: this.#driver1,
                driver2: this.#driver2
            }
        }

        static async crearEscuderia(data) {
            try {
                const {name, driver1, driver2} = data;
                const escuderia = new Escuderia(name, driver1, driver2);
                const escuderiaObject = escuderia.gettAllPropierties()

                await createDataFile(escuderiaObject, 'escuderias.json')
                return escuderiaObject
            }catch (error) {
                throw new Error('Error al crear la escuderia')
            }
        }
}


