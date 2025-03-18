import'dotenv/config.js';
import "../../config/database.js";
import Employee from '../Employee.js';

let employees = [
    { name: "Juan Pérez", post: "Gerente", salary: 5000 },
    { name: "María López", post: "Asistente", salary: 2500 },
    { name: "Carlos Gómez", post: "Desarrollador", salary: 4000 },
    { name: "Ana Martínez", post: "Diseñadora", salary: 3500 },
    { name: "Luis Rodríguez", post: "Contador", salary: 3000 },
    { name: "Sofía García", post: "Recursos Humanos", salary: 2800 },
    { name: "Pedro Sánchez", post: "Analista de Datos", salary: 4200 },
    { name: "Laura Fernández", post: "Marketing", salary: 3200 },
    { name: "Jorge Ramírez", post: "Ingeniero de Software", salary: 4500 },
    { name: "Mónica Díaz", post: "Ventas", salary: 2700 },
    { name: "Diego Torres", post: "Soporte Técnico", salary: 2600 },
    { name: "Elena Ruiz", post: "Administradora", salary: 2900 },
    { name: "Ricardo Vargas", post: "Consultor", salary: 3800 },
    { name: "Patricia Castro", post: "Directora de Proyectos", salary: 4800 },
    { name: "Fernando Herrera", post: "Analista Financiero", salary: 3700 }
];

Employee.insertMany(employees)