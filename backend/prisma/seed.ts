import { contactsData } from "../lib/data";
import { db } from "../lib/prisma";

const load = async () => {
  await db.contact.deleteMany({});
  await db.contact.createMany({
    data: contactsData
  });
  
}

load()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e)
    await db.$disconnect();
    process.exit(1);
  });