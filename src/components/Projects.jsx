import React, { useState, useEffect } from 'react';
import { Code, ExternalLink, ChevronLeft, ChevronRight, X } from 'lucide-react';

const projects = [
    {
        title: "Computer Vision Smart Curtains",
        description: "An automated, remote-controlled curtains project with web application and firmware developed for UC Irvine. Features computer vision capabilities for intelligent automation.",
        tech: ["Python", "Flask", "Raspberry Pi", "Computer Vision", "OpenCV", "JavaScript"],
        images: ["/projects/cv-curtains/cv-curtains-2.gif", "/projects/cv-curtains/cv-curtains.gif"],
        githubUrl: "https://github.com/iankuys/cv_automated_curtains",
        liveUrl: null,
        period: "Mar 2022 - Jun 2022"
    },
    {
        title: "Online Poker Game",
        description: "A real-time, turn-based online poker game built in C using GTK for a sleek and responsive frontend. Features multiplayer functionality through sockets for seamless online play.",
        tech: ["C", "GTK+", "Game Programming", "Git", "Sockets"],
        images: ["/projects/poker-game/poker-game.png", "/projects/poker-game/poker-game-2.png"],
        githubUrl: "https://github.com/AJSmyth/poker",
        liveUrl: null,
        period: "Mar 2022 - Jun 2022"
    },
    {
        title: "Space Hell Game",
        description: "A classic bullet hell shooter game set in deep space. Players face increasingly difficult waves of enemies and projectiles, testing reflexes and strategic skills through countless obstacles.",
        tech: ["C++", "SFML", "Game Development", "GitHub", "Microsoft Visual Studio Code"],
        images: ["/projects/space-hell/spacehell.gif", "/projects/space-hell/spacehell-2.png"],
        githubUrl: "https://github.com/iankuys/Space-Hell",
        liveUrl: null,
        period: "Jan 2021 - Mar 2021"
    }
];

function Projects() {
    const [expandedProject, setExpandedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [cardImageIndexes, setCardImageIndexes] = useState({});
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [transitioningCard, setTransitioningCard] = useState(null);
    const [preloadedImages, setPreloadedImages] = useState(new Set());

    const openGallery = (projectIndex) => {
        setExpandedProject(projectIndex);
        setCurrentImageIndex(cardImageIndexes[projectIndex] || 0);
    };

    const closeGallery = () => {
        setExpandedProject(null);
        setCurrentImageIndex(0);
    };

    const nextImage = () => {
        if (expandedProject !== null) {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentImageIndex((prev) =>
                    (prev + 1) % projects[expandedProject].images.length
                );
                setIsTransitioning(false);
            }, 150);
        }
    };

    const prevImage = () => {
        if (expandedProject !== null) {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentImageIndex((prev) =>
                    prev === 0 ? projects[expandedProject].images.length - 1 : prev - 1
                );
                setIsTransitioning(false);
            }, 150);
        }
    };

    const nextCardImage = (projectIndex, e) => {
        e.stopPropagation();
        if (transitioningCard === projectIndex) return; // Prevent multiple clicks
        
        setTransitioningCard(projectIndex);
        
        setTimeout(() => {
            setCardImageIndexes(prev => ({
                ...prev,
                [projectIndex]: ((prev[projectIndex] || 0) + 1) % projects[projectIndex].images.length
            }));
            setTransitioningCard(null);
        }, 250);
    };

    const prevCardImage = (projectIndex, e) => {
        e.stopPropagation();
        if (transitioningCard === projectIndex) return; // Prevent multiple clicks
        
        setTransitioningCard(projectIndex);
        
        setTimeout(() => {
            setCardImageIndexes(prev => ({
                ...prev,
                [projectIndex]: (prev[projectIndex] || 0) === 0 ?
                    projects[projectIndex].images.length - 1 :
                    (prev[projectIndex] || 0) - 1
            }));
            setTransitioningCard(null);
        }, 250);
    };

    const getCurrentCardImage = (projectIndex) => {
        return cardImageIndexes[projectIndex] || 0;
    };

    const [hoveredProject, setHoveredProject] = useState(null);

    // Preload all project images for smooth transitions
    useEffect(() => {
        const preloadImages = () => {
            const allImages = projects.flatMap(project => project.images);
            let loadedCount = 0;
            
            allImages.forEach(imageSrc => {
                if (!imageSrc.includes('/api/placeholder')) {
                    const img = new Image();
                    img.onload = () => {
                        loadedCount++;
                        setPreloadedImages(prev => new Set([...prev, imageSrc]));
                        console.log(`Loaded image: ${imageSrc} (${loadedCount}/${allImages.length})`);
                    };
                    img.onerror = () => {
                        console.error(`Failed to load image: ${imageSrc}`);
                    };
                    img.src = imageSrc;
                }
            });
        };

        preloadImages();
    }, []);

    return (
        <section id="projects" className="py-20 bg-secondary safe-container">
            {/* Background decoration */}
            <div className="safe-background">
                <div className="absolute top-10 right-20 w-64 h-64 bg-purple opacity-5 rounded-full blur-3xl transform-gpu float" style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}></div>
                <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent opacity-5 rounded-full blur-3xl transform-gpu float" style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}></div>
            </div>
            
            <div className="container mx-auto px-4 safe-content">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-primary">
                    My <span className="gradient-text">Projects</span>
                </h2>
                <p className="text-center text-muted mb-12 font-code text-md">
                    {`// Building innovative solutions with modern tech`}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto justify-items-center">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="liquid-glass hover-glow transition-all duration-500 ease-out flex flex-col h-full w-full overflow-hidden"
                            style={{
                                transform: hoveredProject === index ? 'scale(1.02)' : 'scale(1)',
                                minHeight: '700px',
                                maxWidth: '380px'
                            }}
                            onMouseEnter={() => setHoveredProject(index)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            {/* Image Container with glass effect */}
                            <div
                                className="relative overflow-hidden bg-glass"
                                onClick={() => openGallery(index)}
                                style={{
                                    position: 'relative',
                                    height: '300px',
                                    cursor: 'pointer'
                                }}
                            >
                                {/* Image or Placeholder */}
                                {project.images[getCurrentCardImage(index)].includes('/api/placeholder') ? (
                                    <div className="w-full h-full bg-gradient-to-br from-accent to-purple flex items-center justify-center">
                                        <div className="text-primary text-2xl font-bold opacity-60 font-code">
                                            {project.title.split(' ').map(word => word[0]).join('').substring(0, 3)}
                                        </div>
                                    </div>
                                ) : (
                                    <img
                                        src={project.images[getCurrentCardImage(index)]}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-all duration-300 ease-in-out"
                                        style={{ 
                                            opacity: transitioningCard === index ? 0.3 : 1,
                                            transform: transitioningCard === index 
                                                ? 'scale(0.95)' 
                                                : hoveredProject === index ? 'scale(1.1)' : 'scale(1)',
                                            filter: transitioningCard === index ? 'blur(1px)' : 'blur(0px)'
                                        }}
                                        onLoad={() => console.log(`Image loaded: ${project.images[getCurrentCardImage(index)]}`)}
                                    />
                                )}

                                {/* Hover Overlay */}
                                <div
                                    className="absolute transition-opacity duration-300"
                                    style={{
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
                                        opacity: hoveredProject === index ? 0.3 : 0,
                                        zIndex: 5
                                    }}
                                />

                                {/* Carousel Navigation Buttons */}
                                {project.images.length > 1 && (
                                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 40 }}>
                                        <button
                                            onClick={(e) => prevCardImage(index, e)}
                                            className="absolute backdrop-blur-md text-white rounded-full p-3 transition-all"
                                            style={{
                                                left: '8px',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                zIndex: 50,
                                                backgroundColor: 'rgba(0,0,0,0.3)'
                                            }}
                                            onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(75,85,99,0.8)'}
                                            onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(0,0,0,0.3)'}
                                        >
                                            <ChevronLeft size={20} />
                                        </button>
                                        <button
                                            onClick={(e) => nextCardImage(index, e)}
                                            className="absolute backdrop-blur-md text-white rounded-full p-3 transition-all"
                                            style={{
                                                right: '8px',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                zIndex: 50,
                                                backgroundColor: 'rgba(0,0,0,0.3)'
                                            }}
                                            onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(75,85,99,0.8)'}
                                            onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(0,0,0,0.3)'}
                                        >
                                            <ChevronRight size={20} />
                                        </button>
                                    </div>
                                )}

                                {/* Image Counter */}
                                {project.images.length > 1 && (
                                    <div
                                        className="absolute text-white backdrop-blur-md text-sm px-4 py-2 rounded-full font-bold"
                                        style={{
                                            bottom: '12px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            zIndex: 60,
                                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                                        }}
                                    >
                                        {getCurrentCardImage(index) + 1} / {project.images.length}
                                    </div>
                                )}

                                {/* Gallery hint for single images */}
                                {hoveredProject === index && project.images.length === 1 && (
                                    <div
                                        className="absolute flex items-center justify-center"
                                        style={{
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            zIndex: 10
                                        }}
                                    >
                                        <div className="text-white text-sm font-medium px-3 py-1 rounded"
                                            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                                            Click to view gallery
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Project Details with dark theme */}
                            <div className="p-6 bg-glass" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                <div className="mb-2">
                                    <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                                    <p className="text-accent text-sm font-code">{project.period}</p>
                                </div>
                                <p className="text-secondary mb-4 leading-relaxed" style={{ flexGrow: 1 }}>{project.description}</p>

                                <div className="mb-4 flex flex-wrap gap-2">
                                    {project.tech.map(tech => (
                                        <span
                                            key={tech}
                                            className="text-xs font-medium px-3 py-1 rounded-full bg-accent-soft text-accent border border-accent/20 hover:border-accent/40 transition-all"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-6" style={{ marginTop: 'auto' }}>
                                    <a
                                        href={project.githubUrl}
                                        className="flex items-center text-secondary hover:text-accent transition-all duration-300 hover:translate-x-1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Code size={16} className="mr-3" />
                                        <span className="font-medium">View Code</span>
                                    </a>
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            className="flex items-center text-secondary hover:text-purple transition-all duration-300 hover:translate-x-1"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink size={16} className="mr-3" />
                                            <span className="font-medium">Live Demo</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Gallery Modal */}
                {expandedProject !== null && (
                    <div className="fixed flex items-center justify-center p-4"
                        style={{
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0,0,0,0.9)',
                            zIndex: 9999
                        }}>
                        <div className="relative w-full" style={{ maxWidth: '56rem' }}>
                            <button
                                onClick={closeGallery}
                                className="absolute text-white rounded-full p-2 transition-all"
                                style={{
                                    top: '16px',
                                    right: '16px',
                                    zIndex: 10,
                                    backgroundColor: 'rgba(0,0,0,0.5)'
                                }}
                                onMouseEnter={(e) => e.target.style.color = '#d1d5db'}
                                onMouseLeave={(e) => e.target.style.color = 'white'}
                            >
                                <X size={24} />
                            </button>

                            <div className="relative">
                                {projects[expandedProject].images[currentImageIndex].includes('/api/placeholder') ? (
                                    <div className="w-full rounded-lg flex items-center justify-center"
                                        style={{
                                            height: '24rem',
                                            background: 'linear-gradient(to bottom right, #3b82f6, #8b5cf6)'
                                        }}>
                                        <div className="text-white font-bold opacity-30" style={{ fontSize: '3.75rem' }}>
                                            {projects[expandedProject].title.split(' ').map(word => word[0]).join('').substring(0, 3)}
                                        </div>
                                    </div>
                                ) : (
                                    <img
                                        src={projects[expandedProject].images[currentImageIndex]}
                                        alt={`${projects[expandedProject].title} screenshot ${currentImageIndex + 1}`}
                                        className="w-full rounded-lg transition-all duration-300"
                                        style={{
                                            height: 'auto',
                                            maxHeight: '24rem',
                                            objectFit: 'contain',
                                            opacity: isTransitioning ? 0.3 : 1,
                                            transform: isTransitioning ? 'scale(0.95)' : 'scale(1)'
                                        }}
                                    />
                                )}

                                {projects[expandedProject].images.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute text-white rounded-full p-2 transition-all"
                                            style={{
                                                left: '16px',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                backgroundColor: 'rgba(0,0,0,0.5)'
                                            }}
                                            onMouseEnter={(e) => e.target.style.color = '#d1d5db'}
                                            onMouseLeave={(e) => e.target.style.color = 'white'}
                                        >
                                            <ChevronLeft size={24} />
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute text-white rounded-full p-2 transition-all"
                                            style={{
                                                right: '16px',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                backgroundColor: 'rgba(0,0,0,0.5)'
                                            }}
                                            onMouseEnter={(e) => e.target.style.color = '#d1d5db'}
                                            onMouseLeave={(e) => e.target.style.color = 'white'}
                                        >
                                            <ChevronRight size={24} />
                                        </button>
                                    </>
                                )}
                            </div>

                            <div style={{ marginTop: '1.5rem' }} className="text-white flex flex-col items-center justify-center">
                                <h3 className="text-2xl font-bold mb-2">{projects[expandedProject].title}</h3>
                                <p className="mb-4" style={{ color: '#d1d5db' }}>{projects[expandedProject].description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {projects[expandedProject].tech.map(tech => (
                                        <span
                                            key={tech}
                                            className="text-xs font-medium text-white px-3 py-1 rounded-full"
                                            style={{ backgroundColor: '#2563eb' }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="text-center text-sm" style={{ color: '#9ca3af' }}>
                                    Photo {currentImageIndex + 1} of {projects[expandedProject].images.length}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="text-center" style={{ marginTop: '3rem' }}>
                    <p className="text-muted mb-6 font-code text-sm">
                        {`// Want to see more of my work?`}
                    </p>
                    <a
                        href="https://github.com/iankuys"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary hover-lift hover-glow inline-flex items-center"
                    >
                        <Code size={18} className="mr-2" />
                        <span>View All Projects on GitHub</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Projects;