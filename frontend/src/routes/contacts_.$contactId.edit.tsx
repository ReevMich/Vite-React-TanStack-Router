import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute('/contacts/$contactId/edit')({
    component: ContactsEditComponent,
})

function ContactsEditComponent() {
    return (
        <div className="p-2">
            <h3>Welcome to Edit Contacts!</h3>
        </div>
    )
}