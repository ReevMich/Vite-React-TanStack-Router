import { useEffect, useRef } from "react";

type SearchProps = {
  searching: boolean;
  q: string;
};

export function Search() {
  const searchRef = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();
  const { replace, push } = useRouter();
  const q = searchParams.get("q");

  useEffect(() => {
    if (!q) {
        // Set input q to empty string
        if (searchRef.current) {
            searchRef.current.value = q || "";
        }
    }
  }, [q])

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("q", term);
    } else {
      params.delete("q");
    }
    if (!q)
        replace(`/?${params.toString()}` as any);
    else
        push(`/?${params.toString()}` as any);
  };

  return (
    <>
      <input
        ref={searchRef}
        id="q"
        defaultValue={q || ""}
        // className={searching ? "searching" : ""}
        aria-label="Search contacts"
        placeholder="Search"
        type="search"
        className="w-full rounded-md mr-2"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <div
        id="search-spinner"
        aria-hidden
        // hidden={!searching}
      />
    </>
  );
}
