import Image from "next/image";
import { TmShop } from "./ExAllCo";


export default function Home() {
  return (

    <main className="w-full flex min-h-screen flex-col items-center justify-between  bg-red-500">
      <TmShop />
    </main>
  );
}
