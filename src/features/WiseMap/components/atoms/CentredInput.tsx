import { Input, InputProps } from "@heroui/input"
import { NavbarContent } from "@heroui/navbar"
import { ChangeEvent, KeyboardEvent, ReactNode, useState } from "react"

interface CentredInputProps extends InputProps {
  placeholder?: string
  startContent: ReactNode
  query: string
  setQuery: (s: string) => void
  onKeyUp: (e: KeyboardEvent<HTMLInputElement>) => void
}

export const CentredInput = ({
  placeholder,
  startContent,
  onKeyUp,
  query,
  setQuery,
  ...inputProps
}: CentredInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  return (
    <NavbarContent
      as="section"
      className="flex mx-auto max-w-xl lg:w-3/6 w-[90%] h-14 bg-white rounded-full shadow-md"
      justify="center"
    >
      <Input
        classNames={{
          base: "h-10 w-10/12 border-0",
          mainWrapper: "h-full",
          input: "text-small",
          inputWrapper: "h-full font-normal text-default-500 bg-white shadow-none text-left",
        }}
        placeholder={placeholder}
        startContent={startContent}
        type="search"
        value={query}
        onChange={handleChange}
        onKeyUp={onKeyUp}
        {...inputProps}
      />
    </NavbarContent>
  )
}
