import Map from "@/components/map";
import Buttons from "@/components/sidebar";
import BottomPanel from "@/components/bottom-panel";
import Button from "@/components/button";
import Navbar from "@/components/navbar";

export default function IndexPage() {
  return (
    <div className="h-full w-full">
      <Navbar />
      <Buttons />
      <Map />
      <Button />
      <BottomPanel />
    </div>
  );
}
