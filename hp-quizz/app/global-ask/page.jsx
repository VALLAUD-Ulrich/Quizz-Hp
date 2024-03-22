import Image from "next/image";
import Link from "next/link";

function Harry() {
  return (
    <>
      <div>
        <Image
          src="/bandeau.svg"
          alt="bandeau"
          width={240}
          height={65}
          className="absolute top-10 left-20"
        />
      </div>
      <h1 className="absolute top-12 left-32 text-5xl "> Question 1 </h1>
      <div className="border-video">
        <video
          src="/video.mp4"
          autoPlay
          muted
          className="w-full h-full"
        ></video>
      </div>
      <div className="border-ask border solid w-11/12 p-2">
        <p className="text-3xl mx-auto text-center">
          Quel est le nom de l'école de sorcellerie où Harry Potter étudie ?
        </p>
      </div>
      <div className="global-ask flex flex-wrap justify-around">
        <button className="py-2 px-4 text-4xl border solid w-40 my-2">
          <Link href="/hermione-ask">Hermione</Link>
        </button>
        <button className="py-2 px-4 text-4xl border solid w-40 my-2">
          <Link href="/harry-ask">Harry</Link>
        </button>
        <button className="py-2 px-4 text-4xl border solid w-40 my-2">
          <Link href="/ron-ask">Ron</Link>
        </button>
      </div>
      <div>
        <Image
          src="/balai.png"
          alt="footer"
          width={240}
          height={65}
          className="absolute bottom-10 left-20 cursor-pointer"
        />
      </div>
    </>
  );
}

export default Harry;
