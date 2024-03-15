import Image from "next/image";

function GlobalAsk() {
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
      <form action="">
        <div className="flex absolute bottom-44 left-6">
          <div>
            <button className="py-2 px-4 text-4xl border solid w-40 my-2">
              Poudlard
            </button>
            <button className="py-2 px-4 text-4xl border solid w-40 my-2">
              Beauxbâtons
            </button>
          </div>
          <div>
            <button className="py-2 px-4 text-4xl border solid w-40 my-2">
              Durmstrang
            </button>
            <button className="py-2 px-4 text-4xl border solid w-40 my-2">
              Castelobruxo
            </button>
          </div>
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
      </form>
    </>
  );
}

export default GlobalAsk;
