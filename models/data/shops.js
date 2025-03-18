import'dotenv/config.js';
import "../../config/database.js";
import Shop from '../Shop.js';

let shops = [
    {
        name: "Tienda A",
        address: "Calle Principal 123, Ciudad A",
        phoneNumber: 1234567890
    },
    {
        name: "Tienda B",
        address: "Avenida Central 456, Ciudad B",
        phoneNumber: 2345678901
    },
    {
        name: "Tienda C",
        address: "Boulevard Norte 789, Ciudad C",
        phoneNumber: 3456789012
    },
    {
        name: "Tienda D",
        address: "Plaza Sur 101, Ciudad D",
        phoneNumber: 4567890123
    },
    {
        name: "Tienda E",
        address: "Calle Este 202, Ciudad E",
        phoneNumber: 5678901234
    }
];

Shop.insertMany(shops)