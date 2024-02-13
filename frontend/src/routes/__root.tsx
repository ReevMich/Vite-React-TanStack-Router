import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { QueryClient } from "@tanstack/react-query";
import { getContactsQueryOptions } from "@/lib/data";
import Sidebar from "@/components/sidebar";

export const Route = createRootRouteWithContext<{
    queryClient: QueryClient
}>()({
  validateSearch: (search) => search,
  loader: ( {context: { queryClient } }) => 
     queryClient.ensureQueryData(getContactsQueryOptions()),
  component: RootRoute,
});

function RootRoute() {
    const contacts = Route.useLoaderData();
    return(
    <>
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <Sidebar contacts={contacts} />
      </div>
      <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-indigo-600 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
        {/* <button type="button" className="-m-2.5 p-2.5 text-indigo-200 lg:hidden" onClick={() => setSidebarOpen(true)}>
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button> */}
        <div className="flex-1 text-sm font-semibold leading-6 text-white">
          Dashboard
        </div>
        <a href="#">
          <span className="sr-only">Your profile</span>
          <img
            className="h-8 w-8 rounded-full bg-indigo-700"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </a>
      </div>

      <main className="py-10 lg:pl-72">
        <div className="px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
      <TanStackRouterDevtools />
    </>
  )}