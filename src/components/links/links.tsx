"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Links() {
  const router = useRouter();

  const handleNavigateFeedbacks = () => {
    router.push("/feedbackList");
  };

  const handleNavigateCollaborators = () => {
    router.push("/collaboratorList");
  };

  return (
    <nav>
      <ul className="flex space-x-4 justify-center items-center">
        <li>
          <button
            onClick={handleNavigateFeedbacks}
            className="text-white hover:text-gray-300 px-4 py-2 rounded-lg  bg-blue-900 hover:bg-blue-800"
            style={{ width: "250px" }}
          >
            Feedbacks
          </button>
        </li>
        <li>
          <button
            onClick={handleNavigateCollaborators}
            className="text-white hover:text-gray-300 px-4 py-2 rounded-lg   bg-blue-900 hover:bg-blue-800"
            style={{ width: "250px" }}
          >
            Colaboradores
          </button>
        </li>
      </ul>
      <div className="flex justify-center items-center mt-24">
        <Image src="./feedback.svg" width={300} height={300} alt="feedback" />
      </div>
    </nav>
  );
}
