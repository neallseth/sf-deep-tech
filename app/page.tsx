import Image from "next/image";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function Home() {
  return (
    <WavyBackground className="max-w-screen h-dvh">
      <main className="flex h-dvh flex-col items-center justify-around p-4 sm:p-12 md:p-24 gap-24">
        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-semibold whitespace-nowrap">
          SF Deep Tech Week
        </h1>
        <div className="text-center">
          <h2 className="text-white">June 9 - 16</h2>
          <span className="text-white">2024</span>
        </div>
      </main>
    </WavyBackground>
  );
}
