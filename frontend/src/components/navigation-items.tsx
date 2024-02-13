import { cn } from "@/lib/utils";
import { Contact } from "@prisma/client";
import { Link } from "@tanstack/react-router";

interface NavigationItemsProps {
    items: Contact[];
}

export default function NavigationItems({ items }: NavigationItemsProps) {
  return (
    <>
     {items.length ? (
              <ul>
                {items.map((contact) => (
                  <li key={contact.id}>
                    <Link
                      to={`/contacts/$contactId`}
                      params={ {contactId: String(contact.id) }}
                      activeProps={{
                        className: "bg-indigo-700 text-white",
                      }}
                      className={
                        cn(
                          'text-indigo-200 hover:text-white hover:bg-indigo-700',
                          'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                        )
                    }
                    >
                      {contact.first || contact.last ? (
                        <>
                          {contact.first} {contact.last}
                        </>
                      ) : (
                        <i>No Name</i>
                      )}{" "}
                      {contact.favorite === "true" ? (
                        <span>★</span>
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p>
                <i>No contacts</i>
              </p>
            )}
    </>
  );
}