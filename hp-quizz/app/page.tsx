import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="title">Hp</h1>
      <div className="main-img">
        <Image
          src="/poudlard.svg"
          alt="chateau de poudlard"
          width={315}
          height={340}
        />
      </div>
      <button className="btn">
        <Link href="/transition-pages">Start</Link>
      </button>
    </main>
  );
}
