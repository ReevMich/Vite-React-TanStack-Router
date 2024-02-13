import { Contact } from "@/lib/data";
import { createFileRoute } from "@tanstack/react-router"
import axios from 'axios';

export const Route = createFileRoute('/contacts/$contactId')({
    component: ContactsContactIdComponent,
    loader: ({ params: { contactId } }) => {
        return axios.get<Contact>(`http://localhost:3000/contact/${contactId}`).then(res => res.data);
    },
    errorComponent: ({ error }) => {
        //@ts-expect-error - unknown error type
        return <div>{error.message}</div>
    }
})

function ContactsContactIdComponent() {
    const contact = Route.useLoaderData()!;
    return (
        <div id="contact" className="flex max-w-2xl">
        <div>
            <img
                alt={`${contact.first} ${contact.last} avatar`}
                key={contact.avatar}
                src={contact.avatar}
                className="w-48 h-48 bg-[#c8c8c8] mr-8 rounded-xl object-cover"
            />
        </div>

        <div>
            <h1 className="text-3xl font-bold m-0 leading-tight flex gap-1 items-start">
                {contact.first || contact.last ? (
                    <>
                        {contact.first} {contact.last}
                    </>
                ) : (
                    <i>No Name</i>
                )}{" "}
                {/* <Favorite contact={contact} /> */}
            </h1>

            {contact.twitter ? (
                <p className="m-0">
                    <a
                        className="flex text-2xl no-underline text-[#3993ff]"
                        href={`https://twitter.com/${contact.twitter}`}
                    >
                        {contact.twitter}
                    </a>
                </p>
            ) : null}

            {contact.notes ? <p>{contact.notes}</p> : null}

            <div className="flex gap-2 my-4">
                {/* <Button asChild>
                    <Link href={`/contacts/${contact.id}/edit`}>Edit</Link>
                </Button>

               <DeleteContactForm contact={contact} /> */}
            </div>
        </div>
    </div>
    )
}