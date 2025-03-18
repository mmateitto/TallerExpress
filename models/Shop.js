import { Schema, model } from "mongoose";
	let collection = "shops";

	let schema = Schema({
    		name: {
        		type: String,
        		required: true
    		},
    		address: {
        		type: String,
        		required: true
    		},
    		phoneNumber: {
        		type: Number,
       		 	required: true
    		}
		}, {
    		timestamps: true
		});

	let Shop = model(collection, schema);

	export default Shop;
