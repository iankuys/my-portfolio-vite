import { useState, useEffect, useRef } from 'react';

// Minimal markdown parser for **bold** and [links](https://...)
function parseMarkdown(text) {
    // Helper to parse markdown links in a plain string and return React nodes
    function parseLinks(segment, keyPrefix = '') {
        const nodes = [];
        const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
        let lastIndex = 0;
        let match;

        while ((match = linkRegex.exec(segment)) !== null) {
            const [fullMatch, linkText, href] = match;
            if (match.index > lastIndex) {
                nodes.push(segment.slice(lastIndex, match.index));
            }
            nodes.push(
                <a
                    key={`${keyPrefix}link-${match.index}`}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-green hover:opacity-80"
                >
                    {linkText}
                </a>
            );
            lastIndex = match.index + fullMatch.length;
        }

        if (lastIndex < segment.length) {
            nodes.push(segment.slice(lastIndex));
        }

        return nodes;
    }

    // First split by bold regions so links inside bold remain bold
    const parts = text.split(/(\*\*[\s\S]*?\*\*)/);

    const result = parts.map((part, index) => {
        const isBold = part.startsWith('**') && part.endsWith('**');
        if (isBold) {
            const inner = part.slice(2, -2);
            const children = parseLinks(inner, `b-${index}-`);
            return (
                <strong key={`bold-${index}`} className="text-accent font-semibold">
                    {children}
                </strong>
            );
        }
        // Non-bold text: still parse links
        return parseLinks(part, `p-${index}-`);
    });

    // Flatten potential nested arrays
    return result.flat();
}

function Experience() {
    const [visibleItems, setVisibleItems] = useState([]);
    const experienceRefs = useRef([]);

    const experiences = [
        {
            title: "Founding Engineer",
            company: "Archiboost AI",
            location: "San Francisco, California",
            period: "August 2025 - Present",
            description: "Built a **custom DAG-based multi-agent runtime** in TypeScript enabling real-time multi-step LLM workflows with **stateful context management, streaming tool execution, and checkpoint-based pause/resume**. Led design of modular AI reasoning pipelines combining tool orchestration, hybrid retrieval, **OCR/VLM-assisted document understanding**, structured extraction, and citation-grounded outputs. Architected production backend systems with **TypeScript, Postgres, GCS, and WebSockets** supporting collaborative document workflows and real-time agent/user interactions at **100K+ records**.",
            icon: <img src="/icons/stealth.jpeg" alt="Archiboost AI" className="w-full h-full object-contain" />,
            skills: ["TypeScript", "Multi-Agent", "LangGraph", "RAG", "Postgres", "GCS", "WebSockets", "OCR/VLM"]
        },
        {
            title: "Founder & Founding Engineer",
            company: "Inflow (Personal AI Startup)",
            location: "Remote, USA",
            period: "June 2025 - August 2025",
            description: "Built a **RAG system using Pinecone hybrid search** to classify emails, detect phishing, and generate context-aware replies. Architected backend with **FastAPI, PostgreSQL, Docker, and Temporal** to support async, multi-user workflows at scale. Built the frontend in **Next.js/TypeScript** with **WebSocket-driven inbox intelligence**, dashboards, and role-based access control.",
            icon: <img src="/icons/inflow.ico" alt="Inflow Startup" className="w-full h-full object-contain" />,
            skills: ["LangChain", "Pinecone", "FastAPI", "PostgreSQL", "Temporal", "Next.js", "TypeScript", "Docker"]
        },
        {
            title: "Software Engineer",
            company: "Ulendo Technologies",
            location: "Ann Arbor, Michigan",
            period: "April 2024 - June 2025",
            description: "Built the production desktop application **[Ulendo HC](https://www.ulendo.io/solutions/ulendo-hc-desktop)** for LPBF thermal modeling, used by **100+ manufacturing clients**. Developed 3D print path optimization using Python/OpenCV improving performance by **80%**. Automated licensing via **GitHub Actions** and AWS services. Engineered **ESP32 firmware** streaming real-time thermal data through a resilient cloud pipeline.",
            icon: <img src="/icons/ulendo.png" alt="Ulendo Technologies" className="w-full h-full object-contain" />,
            skills: ["React.js/Electron.js", "JavaScript", "Python", "AWS", "C++", "OpenCV", "ESP-IDF", "UART/I2C"]
        },
        {
            title: "Software Programmer",
            company: "UCI MIND",
            location: "Irvine, California",
            period: "November 2022 - March 2024",
            description: "Developed **Dockerized patient analytics dashboard** with Vue.js and Flask, improving data processing time by **40%**. Built standalone **R Shiny app for Alzheimer's tissue tracking** integrated with REDCap. Created full-stack video survey platform for **remote cognitive studies**. Handled DevOps using **Apache2 load balancing** and Ansible automation.",
            icon: <img src="/icons/ucimind.jpg" alt="UCI MIND" className="w-full h-full object-contain" />,
            skills: ["Vue.js", "JavaScript", "Python", "R", "Flask", "FastAPI", "Docker", "Microsoft SQL"]
        },
        {
            title: "Software Developer - Meshing Intern",
            company: "Ansys, Inc",
            location: "Remote, USA",
            period: "June 2023 - September 2023",
            description: "Implemented **Python-based 3D meshing solution** for **Apple PCB model** using Ansys Mechanical API, reducing mesh generation time by **25%**. Built **C++ GUI tools** and managed Git/Azure DevOps pipelines for **enterprise-scale releases**. Improved simulation workflows and stabilized internal builds through dependency restructuring.",
            icon: <img src="/icons/ansys.png" alt="Ansys Inc" className="w-full h-full object-contain" />,
            skills: ["Python", "C++", "C#", "Ansys Mechanical", "Git", "Azure DevOps"]
        },
        {
            title: "Full Stack Developer Researcher",
            company: "Kheradvar Research Group (KLAB)",
            location: "Irvine, California",
            period: "July 2022 - March 2023",
            description: "Built frontend features for **cardiac MRI segmentation platform** using Vue.js and TypeScript. Engineered **2D/3D segmentation pipelines** with OpenCV, PyVista, and AWS S3. Delivered full-stack capabilities using **FastAPI**, optimized background geometry computations with **Celery**, and maintained schema control via Alembic.",
            icon: <img src="/icons/klab.png" alt="KLAB Research" className="w-full h-full object-contain" />,
            skills: ["Vue.js", "TypeScript", "Python", "AWS", "FastAPI", "OpenCV"]
        },
        {
            title: "Software Engineering Intern",
            company: "N2N Connect Berhad",
            location: "Kuala Lumpur, Malaysia",
            period: "August 2020 - October 2020",
            description: "Contributed to **portfolio management software** using C#, ASP.NET Core, and Entity Framework. Built **production-grade market data backend** in PostgreSQL and automated data ingestion via **Dockerized bash scripts**. Streamlined FTP integration pipelines for live market feeds, improving sync reliability by **over 50%**.",
            icon: <img src="/icons/n2n.png" alt="N2N Connect" className="w-full h-full object-contain" />,
            skills: ["C#", "ASP.NET Core", "Entity Framework", "PostgreSQL", "Docker", "Bash"]
        }
    ];

    useEffect(() => {
        experienceRefs.current = experienceRefs.current.slice(0, experiences.length);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = experienceRefs.current.findIndex(ref => ref === entry.target);
                        if (index !== -1 && !visibleItems.includes(index)) {
                            setVisibleItems(prev => [...prev, index]);
                        }
                    }
                });
            },
            { threshold: 0.2 }
        );

        experienceRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            experienceRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, [experienceRefs, experiences.length, visibleItems]);

    return (
        <section id="experience" className="py-24 bg-alt safe-container">
            {/* Subtle paper texture */}
            <div className="safe-background">
                <div className="absolute top-20 left-16 w-28 h-28 bg-accent opacity-[0.02] rounded-full wobble"></div>
                <div className="absolute bottom-24 right-20 w-20 h-20 bg-green opacity-[0.03] rounded-full" style={{ transform: 'rotate(18deg)' }}></div>
                <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-amber opacity-[0.02] rounded-full" style={{ transform: 'rotate(-15deg)' }}></div>
            </div>

            <div className="container mx-auto px-4 safe-content">
                <div className="text-center mb-12">
                    <h2 className="section-header font-bold mb-6 text-primary">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="text-muted text-sm max-w-2xl mx-auto font-code">
                        {`// A journey through my professional growth and achievements`}
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Enhanced Timeline vertical line with gradient */}
                    <div className="absolute left-8 top-8 bottom-8 w-1 bg-gradient-to-b from-accent via-purple to-green opacity-30 hidden md:block rounded-full"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                ref={el => experienceRefs.current[index] = el}
                                className={`transition-all duration-700 transform ${visibleItems.includes(index)
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-8'
                                    }`}
                            >
                                <div className="flex flex-col md:flex-row gap-8">
                                    <div className="md:w-16 flex justify-center md:justify-start relative z-10">
                                        <div className={`w-16 h-16 liquid-glass hover-sketch flex items-center justify-center p-3 transition-all duration-500 ${visibleItems.includes(index) ? 'scale-100' : 'scale-0'
                                            }`}>
                                            {exp.icon}
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <div className={`liquid-glass p-8 hover-sketch transition-all duration-700 ${visibleItems.includes(index)
                                            ? 'opacity-100 translate-x-0'
                                            : 'opacity-0 -translate-x-6'
                                            }`}>
                                            <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-6">
                                                <div className="flex flex-col lg:items-start flex-1">
                                                    <h3 className="text-2xl font-bold text-primary mb-2 hover:text-accent transition-colors">
                                                        {exp.title}
                                                    </h3>
                                                    <h4 className="text-accent font-semibold mb-2 text-lg">
                                                        {exp.company}
                                                    </h4>
                                                </div>
                                                <div className='flex flex-col justify-center items-center lg:items-end gap-3'>
                                                    {exp.location && (
                                                        <p className="text-muted text-sm font-code flex items-center px-4 py-2">
                                                            <span className="text-purple mr-2">📍</span>
                                                            {exp.location}
                                                        </p>
                                                    )}
                                                    <span className="text-green text-sm font-code whitespace-nowrap">
                                                        {exp.period}
                                                    </span>
                                                </div>
                                            </div>

                                            <p className="text-secondary leading-relaxed mb-6 text-sm text-left">
                                                {parseMarkdown(exp.description)}
                                            </p>

                                            {exp.skills && (
                                                <div className="flex flex-wrap gap-3">
                                                    {exp.skills.map((skill, skillIndex) => (
                                                        <span
                                                            key={skillIndex}
                                                            className="text-xs font-medium px-3 py-2 rounded-full bg-accent-soft text-accent border border-accent/20 hover:border-accent/40 hover:scale-105 transition-all cursor-default"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Summary stats section */}
                    <div className="mt-16 grid md:grid-cols-3 gap-6">
                        <div className="liquid-glass p-6 text-center hover-glow">
                            <div className="text-3xl font-bold text-accent mb-2">3+</div>
                            <div className="text-muted font-code text-sm">Years Experience</div>
                        </div>
                        <div className="liquid-glass p-6 text-center hover-glow">
                            <div className="text-3xl font-bold text-purple mb-2">10+</div>
                            <div className="text-muted font-code text-sm">Technologies Mastered</div>
                        </div>
                        <div className="liquid-glass p-6 text-center hover-glow">
                            <div className="text-3xl font-bold text-green mb-2">10+</div>
                            <div className="text-muted font-code text-sm">Projects Delivered</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;