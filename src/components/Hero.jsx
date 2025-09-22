// Hero Section
function Hero({ isLoaded }) {
    return (
        <section id="home" className="pt-32 pb-24 bg-primary safe-container">
            
            {/* Twinkling effect overlay */}
            <div className="absolute inset-0 opacity-30" style={{
                background: `
                    radial-gradient(circle at 10% 20%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)
                `,
                animation: 'twinkle 4s ease-in-out infinite alternate'
            }}></div>
            
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center safe-content">
                <div className={`flex flex-col md:w-1/2 mb-12 md:mb-0 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="mb-6">
                        <span className="font-code text-sm tracking-wide pulse-accent">
                            $ whoami
                        </span>
                    </div>
                    <h1 className={`text-5xl md:text-7xl font-bold mb-6 text-primary leading-tight w-fit mx-auto ${isLoaded ? 'typewriter' : 'opacity-0'}`}>
                        Ian Ku<span className="gradient-text">.</span>
                    </h1>
                    <h2 className={`text-xl md:text-2xl text-secondary mb-8 leading-relaxed ${isLoaded ? 'opacity-100 delay-200' : 'opacity-0'}`}>
                        <span className="font-medium text-accent">Software & DevOps Engineer</span>
                    </h2>
                    <p className={`text-sm text-muted mb-8 leading-relaxed text-left ${isLoaded ? 'opacity-100 delay-400' : 'opacity-0'}`}>
                        I craft <span className="text-accent font-medium">exceptional digital experiences</span> with clean, efficient code.
                        Passionate about building <span className="text-green font-medium">scalable</span> and <span className="text-green font-medium">fault tolerant</span> solutions. Comfortable with taking <span className="text-purple font-medium">ownership</span> of projects from 0 to 1, and <span className="text-purple font-medium">managing customer relations</span>.
                    </p>
                    <div className={`flex flex-col md:flex-row gap-3 justify-start ${isLoaded ? 'opacity-100 delay-600' : 'opacity-0'}`}>
                        <a
                            href="/ianku/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary hover-lift text-center"
                        >
                            View My Resume
                        </a>
                        <a
                            href="#projects"
                            className="btn-secondary hover-lift text-center"
                        >
                            View My Work
                        </a>
                    </div>
                </div>
                <div className={`md:w-1/2 flex justify-center ${isLoaded ? 'paper-drop paper-drop-delay-1' : 'opacity-0'}`}>
                    <div className="relative">
                        <div className="w-72 h-72 overflow-hidden relative border-4 border-accent" style={{ 
                            borderRadius: '48% 52% 54% 46% / 45% 47% 53% 55%',
                            transform: 'rotate(-2deg)'
                        }}>
                            <img 
                                src="/ianku/Ian_KU_hs.jpg" 
                                alt="Ian Ku" 
                                className="w-full h-full object-cover"
                                style={{ transform: 'rotate(2deg) scale(1.1)' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;