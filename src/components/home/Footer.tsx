import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="border-t border-[--color-card-border] py-6 text-center text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} Bruce Chen. All rights reserved.</p>
      <div className="flex justify-center gap-6 mt-3 text-lg">
        <a
          href="mailto:yc5508@nyu.edu"
          className="hover:text-[--color-brand] transition"
          aria-label="Email"
        >
          <HiOutlineMail />
        </a>
        <a
          href="https://www.linkedin.com/in/brucechenyujun/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[--color-brand] transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/ChenYujunjks"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[--color-brand] transition"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}
