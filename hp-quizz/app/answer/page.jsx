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
          className="answer"
        />
        <p className="p-answer"> X point pour toi ! </p>
      </div>
    </>
  );
}

export default Answer;
