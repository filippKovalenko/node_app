import Contact from "../models/contact.js";
import createPath from "../helpers/creare-path.js";

const handleError = (res,err) => {
    console.log(err);
    res.render(createPath("error"), { title: "Error" });
}

const getContacts = (req, res) => {
  const title = "Contacts";
  Contact.find()
    .then((contacts) => res.render(createPath("contacts"), { contacts, title }))
    .catch((err) => handleError(res,err))
};

export default getContacts;
