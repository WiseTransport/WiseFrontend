import { Button } from "@heroui/button";
import { ReactElement } from "react";

export const RoundIconButton = (props: {className?: string, onPress?: any, icon: ReactElement}) => (
  <Button
        isIconOnly
        onPress={props.onPress}
        className={props.className + " bg-white rounded-full px-0 min-w-0 w-12 h-12 shadow-md p-1.5"}
      >
        { props.icon }
  </Button>
)