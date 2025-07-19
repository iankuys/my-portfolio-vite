// Hero Section
function Hero({ isLoaded }) {
    return (
        <section id="home" className="pt-32 pb-24 bg-primary safe-container">
            {/* Starfield Background */}
            <div className="safe-background">
                {/* Random colored stars - Layer 1 */}
                <div className="absolute inset-0" style={{
                    background: `
                        radial-gradient(1px 1px at 23px 67px, rgba(0, 212, 255, 0.9), transparent),
                        radial-gradient(2px 2px at 89px 34px, rgba(168, 85, 247, 0.7), transparent),
                        radial-gradient(1px 1px at 156px 91px, rgba(16, 185, 129, 0.8), transparent),
                        radial-gradient(2px 2px at 234px 12px, rgba(0, 212, 255, 0.6), transparent),
                        radial-gradient(1px 1px at 312px 78px, rgba(168, 85, 247, 0.9), transparent),
                        radial-gradient(1px 1px at 378px 45px, rgba(16, 185, 129, 0.5), transparent),
                        radial-gradient(2px 2px at 445px 89px, rgba(0, 212, 255, 0.8), transparent),
                        radial-gradient(1px 1px at 67px 123px, rgba(168, 85, 247, 0.4), transparent),
                        radial-gradient(2px 2px at 189px 156px, rgba(16, 185, 129, 0.7), transparent),
                        radial-gradient(1px 1px at 298px 134px, rgba(0, 212, 255, 0.5), transparent),
                        radial-gradient(1px 1px at 423px 167px, rgba(168, 85, 247, 0.6), transparent),
                        radial-gradient(2px 2px at 134px 189px, rgba(16, 185, 129, 0.9), transparent)
                    `,
                    backgroundSize: '500px 200px',
                    animation: 'starfield 28s linear infinite'
                }}></div>
                
                {/* Random white stars - Layer 2 */}
                <div className="absolute inset-0" style={{
                    background: `
                        radial-gradient(1px 1px at 43px 28px, rgba(255, 255, 255, 0.8), transparent),
                        radial-gradient(1px 1px at 127px 73px, rgba(255, 255, 255, 0.4), transparent),
                        radial-gradient(1px 1px at 198px 39px, rgba(255, 255, 255, 0.9), transparent),
                        radial-gradient(1px 1px at 267px 84px, rgba(255, 255, 255, 0.3), transparent),
                        radial-gradient(1px 1px at 334px 17px, rgba(255, 255, 255, 0.7), transparent),
                        radial-gradient(1px 1px at 89px 156px, rgba(255, 255, 255, 0.5), transparent),
                        radial-gradient(1px 1px at 456px 123px, rgba(255, 255, 255, 0.6), transparent),
                        radial-gradient(1px 1px at 178px 178px, rgba(255, 255, 255, 0.8), transparent),
                        radial-gradient(1px 1px at 356px 189px, rgba(255, 255, 255, 0.4), transparent),
                        radial-gradient(1px 1px at 67px 234px, rgba(255, 255, 255, 0.9), transparent),
                        radial-gradient(1px 1px at 289px 267px, rgba(255, 255, 255, 0.5), transparent),
                        radial-gradient(1px 1px at 423px 245px, rgba(255, 255, 255, 0.7), transparent)
                    `,
                    backgroundSize: '480px 180px',
                    animation: 'starfield-fast 16s linear infinite'
                }}></div>
                
                {/* Scattered bright stars - Layer 3 */}
                <div className="absolute inset-0" style={{
                    background: `
                        radial-gradient(3px 3px at 78px 56px, rgba(0, 212, 255, 0.9), transparent),
                        radial-gradient(2px 2px at 234px 123px, rgba(168, 85, 247, 0.8), transparent),
                        radial-gradient(3px 3px at 389px 89px, rgba(16, 185, 129, 0.9), transparent),
                        radial-gradient(2px 2px at 156px 234px, rgba(255, 255, 255, 0.9), transparent),
                        radial-gradient(3px 3px at 445px 178px, rgba(0, 212, 255, 0.8), transparent),
                        radial-gradient(2px 2px at 67px 289px, rgba(168, 85, 247, 0.7), transparent)
                    `,
                    backgroundSize: '520px 320px',
                    animation: 'starfield-slow 42s linear infinite'
                }}></div>
                
                {/* Tiny scattered dots - Layer 4 */}
                <div className="absolute inset-0" style={{
                    background: `
                        radial-gradient(0.5px 0.5px at 34px 67px, rgba(255, 255, 255, 0.6), transparent),
                        radial-gradient(0.5px 0.5px at 145px 23px, rgba(255, 255, 255, 0.4), transparent),
                        radial-gradient(0.5px 0.5px at 267px 156px, rgba(255, 255, 255, 0.7), transparent),
                        radial-gradient(0.5px 0.5px at 356px 89px, rgba(255, 255, 255, 0.3), transparent),
                        radial-gradient(0.5px 0.5px at 123px 234px, rgba(255, 255, 255, 0.5), transparent),
                        radial-gradient(0.5px 0.5px at 445px 45px, rgba(255, 255, 255, 0.8), transparent),
                        radial-gradient(0.5px 0.5px at 89px 178px, rgba(255, 255, 255, 0.4), transparent),
                        radial-gradient(0.5px 0.5px at 298px 267px, rgba(255, 255, 255, 0.6), transparent),
                        radial-gradient(0.5px 0.5px at 423px 134px, rgba(255, 255, 255, 0.5), transparent),
                        radial-gradient(0.5px 0.5px at 178px 89px, rgba(255, 255, 255, 0.7), transparent)
                    `,
                    backgroundSize: '460px 300px',
                    animation: 'starfield-micro 12s linear infinite'
                }}></div>
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
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary leading-tight">
                        Ian Ku<span className="gradient-text">.</span>
                    </h1>
                    <h2 className={`text-xl md:text-2xl text-secondary mb-8 leading-relaxed ${isLoaded ? 'opacity-100 delay-200' : 'opacity-0'}`}>
                        <span className="font-medium text-accent">Software Engineer</span> & <span className="font-medium text-purple">DevOps Engineer</span>
                    </h2>
                    <p className={`text-lg text-muted mb-10 leading-relaxed ${isLoaded ? 'opacity-100 delay-400' : 'opacity-0'}`}>
                        I craft <span className="text-accent font-medium">exceptional digital experiences</span> with clean, efficient code.
                        Passionate about building <span className="text-green font-medium">scalable solutions</span> and beautiful user interfaces.
                    </p>
                    <div className={`flex flex-col md:flex-row gap-4 justify-start md:justify-center ${isLoaded ? 'opacity-100 delay-600' : 'opacity-0'}`}>
                        <a
                            href="#contact"
                            className="btn-primary hover-lift hover-glow text-center"
                        >
                            Let's Connect
                        </a>
                        <a
                            href="#projects"
                            className="btn-secondary hover-lift hover-glass text-center"
                        >
                            View My Work
                        </a>
                    </div>
                </div>
                <div className={`md:w-1/2 flex justify-center ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="relative">
                        <div className="w-72 h-72 liquid-glass hover-glow float overflow-hidden">
                            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-accent to-purple-light flex items-center justify-center p-2">
                                <img src="/ianku/Ian_KU_hs.jpg" alt="Ian Ku" className="w-full h-full object-cover rounded-xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;