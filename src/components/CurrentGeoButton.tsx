"use client";

import React from "react";
import { Button } from "@heroui/react";

import MapPointSVG from "@/svg/MapPointSVG.tsx";
import { RoundIconButton } from "./RoundIconButton";

export default function CurrentGeoButton({
  setLocation,
}: {
  setLocation: ({}: any) => void;
}) {
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          console.log(latitude, longitude);
          setLocation({ latitude, longitude });
        },

        (error) => {
          console.error("Error get user location: ", error);
        },
      );
    } else {
      console.log("Geolocation is not supported be this browser");
    }
  };

  return (
    <div className="fixed bottom-8 h-24 right-8 z-10">
      <RoundIconButton icon={<MapPointSVG />} />
    </div>
  );
}
