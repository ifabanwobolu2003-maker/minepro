const projects = [
    {
        id: 1,
        title: "Elites 2025 Recap video",
        description: "A video of Elite 2025 memories.",
        image: "/projects/project8.png.jpeg",
        tags: ["CapCut", "Videography"],
        demoUrl:"https://www.instagram.com/reel/DS8COyxDRyE/?igsh=Y2pwMjhjdnhyMmo2"
    },
    {
        id: 2,
        title: "Lola brand",
        description: "An anticipation for the unveiling of Lola's brand.",
        image: "/projects/project2.png.jpeg",
        tags: ["CapCut", "Videography"],
        demoUrl:"https://www.instagram.com/reel/DQSLabMiN0Z/?igsh=NnpzZWU1d3BieHpj"
    },
    {
        id: 3,
        title: "Tife Recap of 2025",
        description: "A video of tife 2025 memories.",
        image: "/projects/project3.png.jpeg",
        tags: ["CapCut", "Videography"],
        demoUrl:"https://vt.tiktok.com/ZS5B92CuC/"
    },
    {
        id: 4,
        title: "FaceBook Login",
        description: "Recreation of Facebook login.",
        image: "/projects/project4.png.jpeg",
        tags: ["HTML", "CSS"],
        demoUrl:"http://127.0.0.1:5500/faceb.html"
    },
    {
        id: 5,
        title: "Instsgram Login",
        description: "Recreation of Instagram login.",
        image: "/projects/project5.png.jpeg",
        tags: ["HTML", "CSS"],
        demoUrl:"http://127.0.0.1:5500/RECREATION3.html"
    },
    {
        id: 6,
        title: "Google Website Clone",
        description: "A recreation of Google's website.",
        image: "/projects/project6.png.jpeg",
        tags: ["HTML", "CSS"],
        demoUrl:"http://127.0.0.1:5500/goog.html"
    },
    {
        id: 7,
        title: "Apple Website Clone",
        description: "A recreation of Apple's website.",
        image: "/projects/project7.png.jpeg",
        tags: ["HTML", "CSS"],
        demoUrl:"http://127.0.0.1:5500/apple.html"
    },
    {
        id: 8,
        title: "THUB GADGET",
        description: "A website for THUB GADGET.",
        image: "/projects/project9.png.jpeg",
        tags: ["React", "Tailwind CSS"],
        demoUrl:"https://thub-e-commerce.netlify.app/"
    }


];

export default function Example3 () {
    return (
    <div 
        id="projects"
        className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 ">
        <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
            <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            />
        </div>
        <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-112 sm:ml-16 sm:translate-x-0"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
        
        <div 
        className="bg-gray-900 py-20">
            <h2 className="text-5xl font-bold text-indigo-400 mb-8 text-center">Projects</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Featured <span className="text-primary "> Projects </span>
            </h3>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto px-4 text-3xl font-semibold text-gray-400">
            Here are some of my recent projects that showcase my skills in mobile videography and frontend development.
            </p>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => ( 
                    <div key={project.id} className=" group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <h3 className="text-xl font-semibold mb-1 text-white">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4 text-white">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag, index) => (
                                <span key={index} className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300">
                            View Demo
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
}