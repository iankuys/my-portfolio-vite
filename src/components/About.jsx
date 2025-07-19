import { useState, useEffect, useMemo } from 'react';

// About Section
function About() {
    const skills = useMemo(() => [
        { name: 'Python', level: 95 },
        { name: 'JavaScript/TypeScript', level: 90 },
        { name: 'React.js/Vue.js', level: 87 },
        { name: 'AWS Cloud Services', level: 90 },
        { name: 'Flask/FastAPI', level: 80 },
        { name: 'DevOps', level: 85 },
        { name: 'C++/C#', level: 75 },
        { name: 'SQL', level: 80 },
    ], []);

    const [animated, setAnimated] = useState({});

    // Animation for skill bars
    useEffect(() => {
        const handleSkillAnimation = () => {
            const skillSection = document.getElementById('skills-section');
            if (!skillSection) return;

            const position = skillSection.getBoundingClientRect();

            // If skills section is in view
            if (position.top < window.innerHeight && position.bottom >= 0) {
                // Animate each skill bar sequentially
                skills.forEach((skill, index) => {
                    setTimeout(() => {
                        setAnimated(prev => ({
                            ...prev,
                            [skill.name]: true
                        }));
                    }, index * 200); // Stagger effect
                });
            }
        };

        window.addEventListener('scroll', handleSkillAnimation);
        // Initial check
        handleSkillAnimation();

        return () => {
            window.removeEventListener('scroll', handleSkillAnimation);
        };
    }, [skills]);

    // Update the getSkillTier function to include shiny and pixelated styles
    const getSkillTier = (level) => {
        if (level >= 90) return { tier: 'S', style: 'shiny-pixelated s-tier' };
        if (level >= 80) return { tier: 'A', style: 'shiny-pixelated a-tier' };
        if (level >= 70) return { tier: 'B', style: 'shiny-pixelated' };
        return { tier: 'C-tier', style: 'text-gray-400' };
    };

    return (
        <section id="about" className="py-24 bg-primary safe-container">
            {/* Animated background elements */}
            <div className="safe-background">
                <div className="absolute top-20 left-20 w-64 h-64 bg-green opacity-5 rounded-full blur-3xl float transform-gpu"></div>
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple opacity-5 rounded-full blur-3xl float transform-gpu" style={{ animationDelay: '4s' }}></div>
                <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-accent opacity-3 rounded-full blur-2xl pulse-accent transform-gpu"></div>
            </div>
            
            {/* Grid pattern overlay */}
            <div className="safe-background opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="container mx-auto px-4 safe-content">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <p className="text-muted text-lg max-w-2xl mx-auto font-code">
                        {`// Passionate about creating digital solutions that make a difference`}
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 max-w-7xl mx-auto">
                    <div className="lg:w-1/2 reveal">
                        <div className="liquid-glass p-10 h-full hover-glow">
                            <div className="flex items-center mb-8">
                                <div className="w-1 h-8 bg-gradient-to-b from-accent to-green mr-4 rounded-full"></div>
                                <h3 className="text-2xl font-bold text-primary">Who I Am</h3>
                            </div>
                            <div className="space-y-6 text-secondary leading-relaxed text-lg">
                                <p className="transition-all duration-300 hover:text-primary">
                                    I'm a <span className="text-accent font-semibold">full-stack software engineer</span>, gamer 🎮, and future founder 🚀 with <span className="text-green font-semibold">2+ years of experience</span> building fast, intuitive web apps that actually get used.
                                </p>
                                <p className="transition-all duration-300 hover:text-primary">
                                    I thrive where <span className="text-purple font-semibold">clean code meets real-world impact</span>, constantly learning and deploying scalable cloud infrastructure ☁️ with <span className="text-accent font-semibold">AWS</span>. I love solving tough problems, especially ones at the intersection of UX, systems, and AI 🤖.
                                </p>
                                <p className="transition-all duration-300 hover:text-primary">
                                    Outside of work, I'm <span className="text-green font-semibold">top 1% in Counter Strike 2</span> 🧠, a die-hard basketball fan 🏀, and always down to connect with people who think big. Lately, I've been diving deep into <span className="text-purple font-semibold">AI workflows and prompt design</span> — shaping the future one experiment at a time.
                                </p>
                                <p className="text-accent font-semibold text-l mt-8 font-code">
                                    Let's build something worth talking about.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id="skills-section" className="lg:w-1/2 reveal">
                        <div className="liquid-glass p-10 h-full hover-glow">
                            <div className="flex items-center mb-8">
                                <div className="w-1 h-8 bg-gradient-to-b from-purple to-accent mr-4 rounded-full"></div>
                                <h3 className="text-2xl font-bold text-primary">Technical Skills</h3>
                            </div>
                            <div className="space-y-5">
                                {skills.map((skill, index) => {
                                    const { tier, style } = getSkillTier(skill.level);
                                    return (
                                        <div key={skill.name} className="transition-all duration-500 hover:scale-105">
                                            <div className="flex justify-between mb-2">
                                                <span className="font-semibold text-primary text-base">{skill.name}</span>
                                                <span className={`font-code text-xs bg-accent-soft px-2 py-1 rounded-full ${style}`}>
                                                    {tier}
                                                </span>
                                            </div>
                                            <div className="w-full bg-tertiary rounded-full h-2 overflow-hidden shadow-inner">
                                                <div
                                                    className="h-2 rounded-full transition-all duration-1500 ease-out shadow-lg"
                                                    style={{
                                                        width: animated[skill.name] ? `${skill.level}%` : '0%',
                                                        transitionDelay: `${index * 150}ms`,
                                                        background: 'linear-gradient(to right, #00d4ff, #a855f7, #10b981)',
                                                        boxShadow: '0 0 15px rgba(0, 212, 255, 0.4)'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            
                            {/* Certifications badge */}
                            <div className="mt-8 p-4 bg-glass rounded-xl border border-accent/20">
                                <div className="flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-accent font-bold text-base mb-1">🏆 Certified</div>
                                        <div className="text-secondary font-code text-sm">AWS Cloud Practitioner</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
