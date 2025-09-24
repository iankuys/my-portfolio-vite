import { useState, useEffect, useRef } from 'react';


// Hero Section
function Hero({ isLoaded }) {
    const [particles, setParticles] = useState([]);
    const lastMousePos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const rect = document.getElementById('home')?.getBoundingClientRect();
            if (rect) {
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                // Calculate mouse velocity
                const dx = x - lastMousePos.current.x;
                const dy = y - lastMousePos.current.y;
                const velocity = Math.sqrt(dx * dx + dy * dy);


                // Only create particles when actually moving
                if (velocity > 2 && Math.random() < 0.2) {
                    const patterns = [];
                    const numShapes = 2 + Math.floor(Math.random() * 2);

                for (let i = 0; i < numShapes; i++) {
                    // Calculate cursor movement direction
                    const cursorAngle = Math.atan2(dy, dx); // Direction cursor is moving

                    // Create spread around cursor direction (not a full circle)
                    const spreadRange = Math.PI / 3; // 60 degrees total spread
                    const angleOffset = (i - (numShapes - 1) / 2) * (spreadRange / numShapes) + (Math.random() - 0.5) * 0.3;
                    const flightDirection = cursorAngle + angleOffset;

                    // Start very close to cursor position (small random offset)
                    const startOffset = Math.random() * 8;

                    // Calculate movement based on cursor direction + spread
                    const moveDistance = 50 + Math.random() * 30;
                    const moveX = Math.cos(flightDirection) * moveDistance;
                    const moveY = Math.sin(flightDirection) * moveDistance;

                    // Rotation angle matches flight direction
                    const rotationAngle = flightDirection * 180 / Math.PI;

                    patterns.push({
                        id: Date.now() + Math.random() + i,
                        createdAt: Date.now(), // Track creation time
                        x: x + Math.cos(flightDirection) * startOffset, // Start near cursor
                        y: y + Math.sin(flightDirection) * startOffset,
                        opacity: 0.8 + Math.random() * 0.2,
                        size: 12 + Math.random() * 8, // 12-20px (bigger)
                        delay: i * 50, // Stagger the launch slightly
                        // Each airplane flies outward in its burst direction
                        moveX: moveX,
                        moveY: moveY,
                        // Point airplane NOSE in the EXACT direction it's moving
                        flightAngle: rotationAngle
                    });
                }

                    setParticles(prev => [...prev, ...patterns]);
                }

                lastMousePos.current = { x, y };
            }
        };

        const heroSection = document.getElementById('home');
        if (heroSection) {
            heroSection.addEventListener('mousemove', handleMouseMove);
            return () => heroSection.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    useEffect(() => {
        // Clean up particles after their animation completes
        const interval = setInterval(() => {
            setParticles(prev => prev.filter(particle => {
                const age = Date.now() - particle.createdAt;
                return age < 1400; // Remove after 1400ms (1200ms animation + 200ms buffer)
            }));
        }, 100); // Check every 100ms

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="pt-32 pb-24 bg-primary safe-container relative overflow-hidden">
            
            {/* Polygon cursor effects */}
            <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
                {particles.map((particle) => (
                    <i
                        key={particle.id}
                        className="far fa-paper-plane absolute text-accent"
                        style={{
                            left: particle.x + 'px',
                            top: particle.y + 'px',
                            fontSize: particle.size + 'px',
                            opacity: particle.opacity,
                            animation: `moveAndFade 1200ms ease-in-out forwards`,
                            animationDelay: `${particle.delay || 0}ms`,
                            transformOrigin: 'center center',
                            '--move-x': `${particle.moveX}px`,
                            '--move-y': `${particle.moveY}px`,
                            '--flight-angle': `${particle.flightAngle}deg`
                        }}
                    />
                ))}
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