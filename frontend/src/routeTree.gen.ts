/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as ContactsContactIdImport } from './routes/contacts.$contactId'
import { Route as ContactsContactIdEditImport } from './routes/contacts_.$contactId.edit'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ContactsContactIdRoute = ContactsContactIdImport.update({
  path: '/contacts/$contactId',
  getParentRoute: () => rootRoute,
} as any)

const ContactsContactIdEditRoute = ContactsContactIdEditImport.update({
  path: '/contacts/$contactId/edit',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/contacts/$contactId': {
      preLoaderRoute: typeof ContactsContactIdImport
      parentRoute: typeof rootRoute
    }
    '/contacts/$contactId/edit': {
      preLoaderRoute: typeof ContactsContactIdEditImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  ContactsContactIdRoute,
  ContactsContactIdEditRoute,
])

/* prettier-ignore-end */
