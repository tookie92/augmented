import Image from "next/image";
import MonCanvas from "./_components/MonCanvas";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MonCanvas/>
    </main>
  );
}
