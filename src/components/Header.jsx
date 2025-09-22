// Header Component
function Header({ activeSection, isMenuOpen, setIsMenuOpen }) {
    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' }
    ];

    return (
        <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-md border-b border-light z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-xl font-semibold text-primary">
                    <a href="#home" className="font-mono">Ian Ku<span className="text-accent">.</span></a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-secondary hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className={`w-6 h-0.5 bg-current mb-1.5 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-current mb-1.5 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center">
                    <ul className="flex space-x-8">
                        {navLinks.map(link => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors hover:text-accent relative ${
                                        activeSection === link.href.slice(1) 
                                            ? 'text-accent' 
                                            : 'text-secondary hover:text-primary'
                                    }`}
                                >
                                    {link.name}
                                    {activeSection === link.href.slice(1) && (
                                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent rounded-full"></span>
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>
                    
                    {/* Resume Button */}
                    <a
                        href="/ianku/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-8 btn-secondary text-xs"
                    >
                        resume
                    </a>
                </nav>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <nav className="md:hidden bg-primary/95 backdrop-blur-md border-t border-light">
                    <ul className="flex flex-col py-4">
                        {navLinks.map(link => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className={`block px-4 py-3 text-sm font-medium transition-colors ${
                                        activeSection === link.href.slice(1) 
                                            ? 'text-accent bg-accent-soft' 
                                            : 'text-secondary hover:text-primary hover:bg-accent-soft'
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                        <li className="px-4 py-2">
                            <a
                                href="/ianku/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary block text-center text-xs"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                resume
                            </a>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}

export default Header;