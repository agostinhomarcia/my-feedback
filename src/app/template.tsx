"use client";
import { VscFeedback } from "react-icons/vsc";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto bg-blue-950 h-fit">
      <header className="flex flex-col items-center justify-center p-4 bg-blue-900 text-white">
        <div className="flex items-center justify-center">
          <VscFeedback className="h-8 w-8 mr-2" />
          <h1 className="text-lg font-bold text-center">Feedback</h1>
        </div>
      </header>
      <div className="p-28">{children}</div>
    </div>
  );
}
