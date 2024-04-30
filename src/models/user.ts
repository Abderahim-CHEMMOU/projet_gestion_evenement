import mongoose from "mongoose";
import Joi from "joi";

const userSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  age: Number,
  email: String,
  password: String,
  created_at: { type: Date, default: Date.now } // Ajout du champ created_at avec une valeur par défaut
});

export const User = mongoose.model("User", userSchema);

export const userJoiSchema = Joi.object({
  nom: Joi.string().required(),
  prenom: Joi.string().required(),
  age: Joi.number().integer().min(0),
  email: Joi.string().required(),
  password: Joi.string().required(),
  created_at: Joi.date().default(new Date()) // Ajout du champ created_at avec une valeur par défaut
});
