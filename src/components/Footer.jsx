import { Code, Mail, User } from 'lucide-react';

// Footer Component
function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary border-t border-light py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <p className="text-xl font-semibold text-primary font-mono">Ian Ku<span className="text-accent">.</span></p>
                        <p className="text-muted">Software Engineer & Developer</p>
                    </div>

                    <div className="flex space-x-6">
                        <a 
                            href="https://github.com/iankuys" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="p-3 rounded-lg bg-accent-soft hover:bg-accent text-secondary hover:text-white transition-all duration-300 hover-lift"
                            aria-label="GitHub"
                        >
                            <Code size={20} />
                        </a>
                        <a 
                            href="https://linkedin.com/ian-ku-yi-sien" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="p-3 rounded-lg bg-accent-soft hover:bg-accent text-secondary hover:text-white transition-all duration-300 hover-lift"
                            aria-label="LinkedIn"
                        >
                            <User size={20} />
                        </a>
                        <a 
                            href="mailto:iankuyisien@gmail.com" 
                            className="p-3 rounded-lg bg-accent-soft hover:bg-accent text-secondary hover:text-white transition-all duration-300 hover-lift"
                            aria-label="Email"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className="mt-10 pt-8 border-t border-light text-center">
                    <p className="text-muted text-sm">
                        &copy; {currentYear} Ian Ku. Crafted with <span className="text-accent">❤</span> and lots of coffee.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;