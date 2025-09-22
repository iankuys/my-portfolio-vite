import { Mail, Github, Linkedin, Download } from 'lucide-react';

// Contact Section
function Contact() {
    return (
        <section id="contact" className="py-24 bg-primary safe-container">
            {/* Subtle paper texture */}
            <div className="safe-background">
                <div className="absolute top-16 right-12 w-20 h-20 bg-accent opacity-[0.02] rounded-full wobble"></div>
                <div className="absolute bottom-20 left-16 w-28 h-28 bg-green opacity-[0.03] rounded-full" style={{ transform: 'rotate(-8deg)' }}></div>
                <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-amber opacity-[0.02] rounded-full" style={{ transform: 'rotate(12deg)' }}></div>
            </div>
            
            <div className="container mx-auto px-4 safe-content">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                        Let's <span className="gradient-text">Connect</span>
                    </h2>
                    <p className="text-muted text-sm max-w-2xl mx-auto font-code">
                        {`// Ready to build something amazing together?`}
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    {/* Main Contact Card */}
                    <div className="liquid-glass p-6 hover-sketch mb-10">
                        <p className="text-secondary leading-relaxed mb-6 text-sm text-left">
                            I'm always interested in new opportunities and exciting projects. 
                            Let's connect and discuss how we can work together!
                        </p>
                        
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <a 
                                href="mailto:iankuyisien@gmail.com" 
                                className="group liquid-glass p-6 hover-sketch text-center transition-all duration-300"
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
                                className="group liquid-glass p-6 hover-sketch text-center transition-all duration-300"
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
                                className="group liquid-glass p-6 hover-sketch text-center transition-all duration-300"
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
                                className="btn-primary hover-lift"
                            >
                                Send Email
                            </a>
                            <a 
                                href="/ianku/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary flex items-center justify-center gap-3"
                            >
                                <Download size={16} />
                                <span>download resume</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;