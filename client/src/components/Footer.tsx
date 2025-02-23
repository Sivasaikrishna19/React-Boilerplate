import { FaCopyright, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-10 text-gray-500 text-sm flex flex-col items-center">
      <p className="flex items-center">
        <FaCopyright className="mr-1" /> NSSK
      </p>
      <p className="flex space-x-4 mt-2">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/nssk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-500 flex items-center space-x-1"
        >
          <FaLinkedin className="text-xl" />
          <span>LinkedIn</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/nssk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-500 flex items-center space-x-1"
        >
          <FaGithub className="text-xl" />
          <span>GitHub</span>
        </a>

        {/* Portfolio */}
        <a
          href="https://sivasaikrishna.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:text-green-500 flex items-center space-x-1"
        >
          <FaGlobe className="text-xl" />
          <span>Portfolio</span>
        </a>
      </p>
    </footer>
  );
}
