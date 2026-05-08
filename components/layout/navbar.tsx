import Container from "./container";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <Container>
        <div className="mt-6 flex items-center justify-between rounded-full border border-white/40 bg-white/70 px-6 py-4 shadow-[0_10px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl">
          <div>
            <p className="text-sm font-medium tracking-[0.2em] text-slate-900 uppercase">
              John Doe
            </p>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {["About", "Projects", "Blog", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-slate-600 transition-colors duration-300 hover:text-slate-900"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
