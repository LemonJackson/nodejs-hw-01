import { PATH_DB } from '../constants/contacts.js';
import fs from "fs/promises";

export const removeAllContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);
        contacts.splice(0, contacts.length);
        await fs.writeFile(PATH_DB, JSON.stringify(contacts));
    } catch (err) {
        console.log(error);
    }
};

removeAllContacts();
