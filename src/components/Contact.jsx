import { Mail, Github, Linkedin, Download } from 'lucide-react';

// Contact Section
function Contact() {
    return (
        <section id="contact" className="py-24 bg-primary safe-container">
            {/* Animated background elements */}
            <div className="safe-background">
                <div className="absolute top-20 right-20 w-64 h-64 bg-purple opacity-5 rounded-full blur-3xl float transform-gpu"></div>
                <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent opacity-5 rounded-full blur-3xl float transform-gpu" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-green opacity-3 rounded-full blur-2xl pulse-accent transform-gpu"></div>
            </div>
            
            <div className="container mx-auto px-4 safe-content">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
                        Let's <span className="gradient-text">Connect</span>
                    </h2>
                    <p className="text-muted text-lg max-w-2xl mx-auto font-code">
                        {`// Ready to build something amazing together?`}
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    {/* Main Contact Card */}
                    <div className="liquid-glass p-8 hover-glow mb-12 text-center">
                        <p className="text-secondary leading-relaxed mb-8 text-lg">
                            I'm always interested in new opportunities and exciting projects. 
                            Let's connect and discuss how we can work together!
                        </p>
                        
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <a 
                                href="mailto:iankuyisien@gmail.com" 
                                className="group liquid-glass p-6 hover-glow text-center transition-all duration-300 hover:scale-105"
                            >
                                <div className="w-12 h-12 bg-glass rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-glass-hover transition-all">
                                    <Mail size={20} className="text-accent" />
                                </div>
                                <h4 className="font-semibold text-primary mb-1 text-sm">Email</h4>
                                <p className="text-xs font-code text-secondary group-hover:text-accent transition-colors">
                                    iankuyisien@gmail.com
                                </p>
                            </a>
                            
                            <a 
                                href="https://github.com/iankuys" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="group liquid-glass p-6 hover-glow text-center transition-all duration-300 hover:scale-105"
                            >
                                <div className="w-12 h-12 bg-glass rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-glass-hover transition-all">
                                    <Github size={20} className="text-accent" />
                                </div>
                                <h4 className="font-semibold text-primary mb-1 text-sm">GitHub</h4>
                                <p className="text-xs font-code text-secondary group-hover:text-accent transition-colors">
                                    github.com/iankuys
                                </p>
                            </a>
                            
                            <a 
                                href="https://linkedin.com/in/ian-ku-yi-sien" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="group liquid-glass p-6 hover-glow text-center transition-all duration-300 hover:scale-105"
                            >
                                <div className="w-12 h-12 bg-glass rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-glass-hover transition-all">
                                    <Linkedin size={20} className="text-accent" />
                                </div>
                                <h4 className="font-semibold text-primary mb-1 text-sm">LinkedIn</h4>
                                <p className="text-xs font-code text-secondary group-hover:text-accent transition-colors">
                                    ian-ku-yi-sien
                                </p>
                            </a>
                        </div>
                        
                        {/* Action buttons */}
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a 
                                href="mailto:iankuyisien@gmail.com"
                                className="btn-primary hover-lift hover-glow"
                            >
                                Send Email
                            </a>
                            <a 
                                href="/ianku/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                                style={{
                                    background: 'rgba(10, 10, 10, 0.9)',
                                    border: '1px solid rgba(0, 212, 255, 0.5)',
                                    boxShadow: '0 0 25px rgba(0, 212, 255, 0.6), 0 0 50px rgba(0, 212, 255, 0.4)',
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.border = '1px solid rgba(0, 212, 255, 0.7)';
                                    e.target.style.boxShadow = '0 0 35px rgba(0, 212, 255, 0.8), 0 0 70px rgba(0, 212, 255, 0.5)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.border = '1px solid rgba(0, 212, 255, 0.5)';
                                    e.target.style.boxShadow = '0 0 25px rgba(0, 212, 255, 0.6), 0 0 50px rgba(0, 212, 255, 0.4)';
                                }}
                            >
                                <Download size={20} />
                                <span>Download Resume</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;