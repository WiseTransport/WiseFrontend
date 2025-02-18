import { Navbar, NavbarContent, Input } from "@heroui/react";

import SearchSVG from "@/svg/SearchSVG";
export default function App() {
  return (
    <Navbar className=" top-10 fixed bg-transparent" isBlurred={false}>
      <NavbarContent
        as="div"
        className="flex ml-3 mr-3 w-11/12 h-14 bg-white rounded-full max-w-sm shadow-md"
        justify="center"
      >
        <Input
          classNames={{
            base: "h-10 w-10/12 border-0",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-white shadow-none text-left pl-2",
          }}
          placeholder="Търси дестинация"
          size="sm"
          startContent={<SearchSVG classes="1" />}
          type="search"
        />
      </NavbarContent>
    </Navbar>
  );
}
export { App as Navbar };
