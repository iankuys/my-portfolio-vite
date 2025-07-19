import { useState, useEffect, useRef } from 'react';

function Experience() {
    const [visibleItems, setVisibleItems] = useState([]);
    const experienceRefs = useRef([]);

    const experiences = [
        {
            title: "Software Engineer",
            company: "Ulendo Technologies",
            location: "Ann Arbor, Michigan",
            period: "April 2024 - June 2025",
            description: "Built a production-grade IoT dashboard in React.js with AWS Amplify to manage over 100+ manufacturing clients across North America. Developed a desktop app to optimize 3D print paths using Python (OpenCV, NumPy) and Electron.js, improving algorithm performance by 80% through OpenCV image-processing/image-downsampling techniques. Automated license delivery and deployment using GitHub Actions, Azure signing, AWS CloudFront, and EventBridge. Engineered ESP32 firmware with ESP-IDF (C++) to stream real-time thermal data over UART/I2C and deployed a resilient cloud pipeline using AWS IoT Core, Lambda, and SQS to handle thousands of device messages daily.",
            icon: <img src="/icons/ulendo.png" alt="Ulendo Technologies" className="w-full h-full object-contain" />,
            skills: ["React.js/Electron.js", "JavaScript", "Python", "AWS", "C++", "OpenCV", "ESP-IDF", "UART/I2C"]
        },
        {
            title: "Software Programmer",
            company: "UCI MIND",
            location: "Irvine, California",
            period: "November 2022 - March 2024",
            description: "Developed a Dockerized patient analytics dashboard with Vue.js and Flask, improving data processing time by 40%. Built a standalone R Shiny app for Alzheimer’s tissue tracking integrated with REDCap, enabling streamlined data queries for researchers. Created a full-stack video survey platform using Bootstrap, FastAPI, and Flask for remote cognitive studies. Handled DevOps using Apache2 load balancing, Hyper-V, and Ansible for maintenance automation.",
            icon: <img src="/icons/ucimind.jpg" alt="UCI MIND" className="w-full h-full object-contain" />,
            skills: ["Vue.js", "JavaScript", "Python", "R", "Flask", "FastAPI", "Docker", "Microsoft SQL"]
        },
        {
            title: "Software Developer - Meshing Intern",
            company: "Ansys, Inc",
            location: "Remote, USA",
            period: "June 2023 - September 2023",
            description: "Implemented a Python-based 3D meshing solution for an Apple PCB model using Ansys Mechanical API, reducing mesh generation time by 25%. Built C++ GUI tools and managed Git/Azure DevOps pipelines to support enterprise-scale releases. Improved simulation workflows by extending legacy features in C# and XML and stabilized internal builds through dependency restructuring.",
            icon: <img src="/icons/ansys.png" alt="Ansys Inc" className="w-full h-full object-contain" />,
            skills: ["Python", "C++", "C#", "Ansys Mechanical", "Git", "Azure DevOps"]
        },
        {
            title: "Full Stack Developer Researcher",
            company: "Kheradvar Research Group (KLAB)",
            location: "Irvine, California",
            period: "July 2022 - March 2023",
            description: "Built frontend features for a cardiac MRI segmentation platform using Vue.js and TypeScript. Engineered 2D/3D segmentation pipelines with OpenCV, PyVista, and AWS S3, improving visualization-rendering/image-processing. Delivered full-stack capabilities using FastAPI, optimized background geometry computations with Celery, and maintained schema control via Alembic.",
            icon: <img src="/icons/klab.png" alt="KLAB Research" className="w-full h-full object-contain" />,
            skills: ["Vue.js", "TypeScript", "Python", "AWS", "FastAPI", "OpenCV"]
        },
        {
            title: "Software Engineering Intern",
            company: "N2N Connect Berhad",
            location: "Kuala Lumpur, Malaysia",
            period: "August 2020 - October 2020",
            description: "Contributed to portfolio management software using C#, ASP.NET Core, and Entity Framework. Built a production-grade market data backend in PostgreSQL and automated data ingestion via Dockerized bash scripts. Streamlined FTP integration pipelines for live market feeds, improving sync reliability by over 50%, and denormalized tables to improve query performance for analytics and reporting.",
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
        <section id="experience" className="py-24 bg-secondary safe-container">
            {/* Contained animated background elements */}
            <div className="safe-background">
                <div className="absolute top-20 left-20 w-64 h-64 bg-accent opacity-5 rounded-full blur-3xl float transform-gpu"></div>
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple opacity-5 rounded-full blur-3xl float transform-gpu" style={{ animationDelay: '3s' }}></div>
                <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-green opacity-3 rounded-full blur-2xl pulse-accent transform-gpu"></div>
            </div>

            {/* Grid pattern overlay */}
            <div className="safe-background opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            <div className="container mx-auto px-4 safe-content">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="text-muted text-md max-w-2xl mx-auto font-code">
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
                                        <div className={`w-16 h-16 liquid-glass hover-glow flex items-center justify-center p-3 transition-all duration-500 ${visibleItems.includes(index) ? 'scale-100' : 'scale-0'
                                            }`}>
                                            {exp.icon}
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <div className={`liquid-glass p-8 hover-glow transition-all duration-700 ${visibleItems.includes(index)
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
                                                    <span className="bg-glass text-accent text-sm font-code px-4 py-2 rounded-full whitespace-nowrap border border-accent/20 hover:border-accent/40 transition-all">
                                                        {exp.period}
                                                    </span>
                                                </div>
                                            </div>

                                            <p className="text-secondary leading-relaxed mb-6 text-base">
                                                {exp.description}
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
                            <div className="text-3xl font-bold text-purple mb-2">15+</div>
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