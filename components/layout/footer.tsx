import Link from "next/link";
import Container from "./container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-slate-500">
              © 2026 Debjit Das. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/Das-Debjit"
              target="_blank"
              className="text-sm text-slate-500 transition-colors duration-300 hover:text-slate-900"
            >
              GitHub
            </Link>

            <Link
              href="https://www.linkedin.com/in/debjitdas82"
              target="_blank"
              className="text-sm text-slate-500 transition-colors duration-300 hover:text-slate-900"
            >
              LinkedIn
            </Link>

            <Link
              href="mailto:debjitdas1409@gmail.com"
              className="text-sm text-slate-500 transition-colors duration-300 hover:text-slate-900"
            >
              Email
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
