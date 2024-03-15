"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function TransitionPages() {
  const router = useRouter();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      router.push("/global-ask"); // Rediriger vers la page de destination après 5 secondes
    }, 3000);

    return () => clearTimeout(timeOut); // Nettoyer le timeout si le composant est démonté avant la fin du délai
  }, [router]);
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
