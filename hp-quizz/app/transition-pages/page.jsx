import Image from "next/image";

function TransitionPages() {
  return (
    <>
      <div className="transition-img">
        <Image
          src="/edwidge.png"
          alt="transition-pages"
          width={390}
          height={430}
        />
      </div>
      <div className="transition-text">
        <p className="text-5xl text-center text-white">Le Quizz va commencé</p>
        <p className="text-5xl text-center text-white">
          préparez vos baguettes <br />
          et vos chaudrons
        </p>
      </div>
    </>
  );
}

export default TransitionPages;
