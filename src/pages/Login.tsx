"use client"

import React from "react"
import { Input } from "@heroui/input"
import { Button } from "@heroui/button"
import { Link } from "@heroui/link"
import { Divider } from "@heroui/divider"
import { Form } from "@heroui/form"
import { Checkbox } from "@heroui/checkbox"
import { Icon } from "@iconify/react"

export const Login = () => {
  const [isVisible, setIsVisible] = React.useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log("handleSubmit")
  }

  return (
    <div className="flex h-full w-full items-center justify-center mt-10">
      <div className="flex w-full max-w-sm flex-col gap-4 rounded-large">
        <div className="flex flex-col items-center pb-6">
          <p className="text-xl font-medium">Влезте в акаунта сиk</p>
          {/* <p className="text-small text-default-500">
            Log in to your account to continue
          </p> */}
        </div>
        <Form
          className="flex flex-col gap-3"
          validationBehavior="native"
          onSubmit={handleSubmit}
        >
          <Input
            isRequired
            label="Email Address"
            name="email"
            placeholder="Въведете имейла си"
            type="email"
            variant="bordered"
          />
          <Input
            isRequired
            endContent={
              <button type="button" onClick={toggleVisibility}>
                {isVisible ? (
                  <Icon
                    className="pointer-events-none text-2xl text-default-400"
                    icon="solar:eye-closed-linear"
                  />
                ) : (
                  <Icon
                    className="pointer-events-none text-2xl text-default-400"
                    icon="solar:eye-bold"
                  />
                )}
              </button>
            }
            label="Password"
            name="password"
            placeholder="Въведете паролата си"
            type={isVisible ? "text" : "password"}
            variant="bordered"
          />
          <div className="flex w-full items-center justify-between px-1 py-2">
            <Checkbox name="remember" size="sm">
              Запомни ме
            </Checkbox>
            <Link className="text-default-500" href="#" size="sm">
              Забравихте паролата?
            </Link>
          </div>
          <Button className="w-full bg-[#EC442C] text-white" type="submit">
            Регистрирайте се
          </Button>
        </Form>
        <div className="flex items-center gap-4 py-2">
          <Divider className="flex-1" />
          <p className="shrink-0 text-tiny text-default-500">OR</p>
          <Divider className="flex-1" />
        </div>
        <div className="flex flex-col gap-2">
          <Button
            startContent={<Icon icon="flat-color-icons:google" width={24} />}
            variant="bordered"
          >
            Продължи с Google
          </Button>
        </div>
        <p className="text-center text-small">
          Трябва да създадете акаунт?&nbsp;
          <Link href="#" size="sm">
            Продължи
          </Link>
        </p>
      </div>
    </div>
  )
}
