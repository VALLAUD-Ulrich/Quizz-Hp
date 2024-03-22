import Image from "next/image";

function Answer() {
  return (
    <>
      <div>
        <Image
          src="/trophe.png"
          alt="trophé"
          width={240}
          height={65}
          className="border-2 border-solid border-white blur-2xl"
        />
        <p> X point pour toi ! </p>
      </div>
    </>
  );
}

export default Answer;
