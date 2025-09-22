// Simple Footer Component
function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary border-t border-light py-8">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <p className="text-muted text-sm">
                        &copy; {currentYear} Ian Ku. Crafted with <span className="text-accent">❤</span> and lots of coffee.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;