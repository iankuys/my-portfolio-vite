import { useState, useEffect, useMemo } from 'react';
import { Mail, Github, Linkedin, Download } from 'lucide-react';

// About Section
function About() {
    const skills = useMemo(() => [
        { name: 'Python', icon: '🐍' },
        { name: 'JavaScript/TypeScript', icon: '⚡' },
        { name: 'React.js/Vue.js', icon: '⚛️' },
        { name: 'AWS Cloud Services', icon: '☁️' },
        { name: 'Flask/FastAPI', icon: '🔥' },
        { name: 'DevOps', icon: '🚀' },
        { name: 'C++/C#', icon: '🔧' },
        { name: 'SQL', icon: '🗄️' },
    ], []);

    // Simple fade-in animation for skills
    useEffect(() => {
        const skillSection = document.getElementById('skills-section');
        if (skillSection) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('animate-fade-in');
                        }
                    });
                },
                { threshold: 0.1 }
            );
            observer.observe(skillSection);
            return () => observer.disconnect();
        }
    }, []);

    return (
        <section id="about" className="py-24 bg-primary safe-container">
            {/* Subtle paper texture */}
            <div className="safe-background">
                <div className="absolute top-10 left-10 w-32 h-32 bg-accent opacity-[0.02] rounded-full wobble"></div>
                <div className="absolute bottom-32 right-16 w-24 h-24 bg-green opacity-[0.03] rounded-full" style={{ transform: 'rotate(15deg)' }}></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-amber opacity-[0.02] rounded-full" style={{ transform: 'rotate(-10deg)' }}></div>
            </div>

            <div className="container mx-auto px-4 safe-content">
                <div className="text-center mb-16">
                    <h2 className="section-header font-bold mb-6 text-primary">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <p className="text-muted text-sm max-w-2xl mx-auto font-code">
                        {`// Passionate about creating digital solutions that make a difference`}
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 max-w-7xl mx-auto">
                    <div className="lg:w-1/2 reveal">
                        <div className="liquid-glass p-8 h-full hover-sketch">
                            <div className="flex items-center mb-6">
                                <div className="w-1 h-6 bg-gradient-to-b from-accent to-green mr-3 rounded-full"></div>
                                <h3 className="text-xl font-bold text-primary">Who I Am</h3>
                            </div>
                            <div className="space-y-4 text-secondary leading-relaxed text-sm text-left">
                                <p className="transition-all duration-300 hover:text-primary">
                                    I'm a <span className="text-accent font-semibold">software engineer</span>, gamer 🎮, and future founder 🚀 with <span className="text-green font-semibold">3+ years of experience</span> building fast, intuitive software that ships and scales.
                                </p>
                                <p className="transition-all duration-300 hover:text-primary">
                                    I’ve thrived in fast-moving startups where ownership is everything. I'm relentlessly driven, always leveling up in new tech, and pushing to grow as both an engineer and future leader.
                                </p>
                                <p className="transition-all duration-300 hover:text-primary">
                                    Outside of work, I’m <span className="text-green font-semibold">top 1% in Counter-Strike 2</span> 🧠, an EDM head 🎧, and a dedicated gym rat 🏋️‍♂️.
                                </p>
                                <p className="transition-all duration-300 hover:text-primary">
                                    I love connecting with people who think big. Lately, I’ve been deep in <span className="text-purple font-semibold">AI workflows and prompt design</span>, shaping what’s next, one build at a time.
                                </p>
                                <p className="text-accent font-semibold text-sm mt-6 font-code">
                                    Let's build something that actually matters.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id="skills-section" className="lg:w-1/2 reveal">
                        <div className="liquid-glass p-8 h-full hover-sketch">
                            <div className="flex items-center mb-6">
                                <div className="w-1 h-6 bg-gradient-to-b from-purple to-accent mr-3 rounded-full"></div>
                                <h3 className="text-xl font-bold text-primary">Technical Skills</h3>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {skills.map((skill, index) => (
                                    <div key={skill.name} className="flex items-center gap-2 p-2 rounded-lg bg-glass border border-soft transition-all duration-300 hover:bg-glass-hover hover:border-accent">
                                        <span className="text-sm transition-transform duration-300 hover:scale-110">
                                            {skill.icon}
                                        </span>
                                        <span className="font-medium text-primary text-xs font-mono">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Certifications badge */}
                            <div className="mt-6 p-3 bg-glass rounded-lg border border-soft">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm">🏆</span>
                                    <div>
                                        <div className="text-accent font-semibold text-xs font-mono">Certified</div>
                                        <div className="text-secondary font-mono text-xs">AWS Cloud Practitioner</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Contact section - just icon buttons */}
                <div className="max-w-3xl mx-auto mt-12">
                    <div className="flex gap-4 justify-center">
                        <a
                            href="mailto:iankuyisien@gmail.com"
                            className="btn-primary p-3"
                            aria-label="Email"
                        >
                            <Mail size={20} />
                        </a>
                        <a
                            href="https://github.com/iankuys"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary p-3"
                            aria-label="GitHub"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://linkedin.com/in/ian-ku-yi-sien/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary p-3"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
