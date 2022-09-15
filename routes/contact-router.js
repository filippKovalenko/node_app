import express from "express";
import getContacts from "../controllers/contact-controller.js";
const routerContact = express.Router();

routerContact.get("/contacts", getContacts);

export default routerContact;
