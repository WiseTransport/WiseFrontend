import { Button, ButtonProps } from "@heroui/button"
import { forwardRef, ReactElement } from "react"

type RoundIconButtonProps = ButtonProps & {
  icon: ReactElement
}

export const RoundIconButton = forwardRef<HTMLButtonElement, RoundIconButtonProps>(
  (
    props: {
      className?: string
      onPress?: any
      icon: ReactElement
    },
    ref,
  ) => (
    <Button
      isIconOnly
      onPress={props.onPress}
      className={props.className + " bg-white rounded-full px-0 min-w-0 w-12 h-12 shadow-md p-1.5"}
      ref={ref}
    >
      {props.icon}
    </Button>
  ),
)
