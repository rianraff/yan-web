export default function Header() {
    return (
        <nav className="bg-stone-50 border-b border-stone-900">
            <div className="mx-auto px-2 flex max-h-16 items-center text-stone-900 font-[var(--font-roboto-mono)]">
                <div className="mx-8 my-8">
                    <span className="text-black text-2xl font-bold">yan.</span>
                </div>
                <div className="mx-6 space-x-16 text-sm">
                    <a>Home</a>
                    <a>Projects</a>
                    <a>Playground</a>
                    <a>Blogs</a>
                    <a>Contact</a>
                </div>
                <div className="ml-auto text-sm mx-4">
                    <button className="border border-stone-900 px-4 py-1">Let&apos;s Connect</button>
                </div>
            </div>
        </nav>
    );
}
