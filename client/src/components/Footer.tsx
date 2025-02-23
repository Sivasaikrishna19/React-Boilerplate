import { FaCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-10 text-gray-500 text-sm flex flex-col items-center">
      <p className="flex items-center">
        <FaCopyright className="mr-1" /> NSSK
      </p>
      <p>
        <a
          href="https://www.linkedin.com/in/nssk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline"
        >
          LinkedIn
        </a>{" "}
        |{" "}
        <a
          href="https://sivasaikrishna.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline"
        >
          Portfolio
        </a>
      </p>
    </footer>
  );
}
