import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";

import { FcGoogle } from "react-icons/fc";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        router.push("/links");
        console.log("success", result);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log("Não foi possível fazer o login", error);
      });
  };

  return (
    <div className="m-4 sm:m-8 md:m-16 lg:m-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative">
          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-red-900 hover:bg-red-700 text-white shadow-md cursor-pointer"
          >
            {isLoading ? (
              <div className="w-6 h-6 border-t-2 border-white rounded-full animate-spin"></div>
            ) : (
              <>
                <FcGoogle size={32} />
                <span className="text-xl font-semibold">
                  Sign in with Google
                </span>
              </>
            )}
          </button>
        </div>
        <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-md p-6">
          {/* Conteúdo adicional aqui */}
        </div>
      </div>
    </div>
  );
}
