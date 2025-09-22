// Hero Section
function Hero({ isLoaded }) {
    return (
        <section id="home" className="pt-32 pb-24 bg-primary safe-container">
            {/* Floating Geometric Background */}
            <div className="safe-background">
                {/* Floating shapes - subtle and minimal */}
                <div className="absolute top-20 left-12 w-3 h-3 bg-accent opacity-[0.06] rounded-full float-slow"></div>
                <div className="absolute top-32 right-16 w-2 h-6 bg-accent opacity-[0.04] float-slower" style={{ borderRadius: '50%' }}></div>
                <div className="absolute bottom-40 left-1/4 w-4 h-2 bg-accent opacity-[0.05] float-slow" style={{ borderRadius: '40% 60%' }}></div>
                <div className="absolute top-1/2 right-20 w-2 h-2 bg-accent opacity-[0.04] float-slower" style={{ borderRadius: '30% 70% 70% 30%' }}></div>
                <div className="absolute bottom-32 right-1/3 w-5 h-1 bg-accent opacity-[0.03] float-slow" style={{ borderRadius: '50%' }}></div>
                <div className="absolute top-1/3 left-1/3 w-1 h-4 bg-accent opacity-[0.05] float-slower" style={{ borderRadius: '50%' }}></div>
                
                {/* More subtle floating shapes */}
                <div className="absolute top-40 right-1/4 w-2 h-2 bg-amber opacity-[0.04] rounded-full float-slow" style={{ borderRadius: '60% 40%' }}></div>
                <div className="absolute bottom-20 left-16 w-3 h-1 bg-accent opacity-[0.05] float-slower" style={{ borderRadius: '50%' }}></div>
                <div className="absolute top-60 left-1/2 w-1 h-3 bg-amber opacity-[0.03] float-slow" style={{ borderRadius: '40%' }}></div>
                <div className="absolute bottom-60 right-12 w-4 h-1 bg-accent opacity-[0.04] float-slower" style={{ borderRadius: '30% 70%' }}></div>
            </div>
            
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