const Skills = [
    { name: 'HTML/CSS', level: 90, category: 'frontend' },
    { name: 'JavaScript', level: 60, category: 'frontend' },
    { name: 'React', level: 80, category: 'frontend' },
    { name: 'Tailwind CSS', level: 85, category: 'frontend' },

    { name: 'Mobile Videography', level: 85, category: 'videographer' },
    { name: 'Video Editing', level: 80, category: 'videographer' },


];

export default function Example4() {
    return (
        <div 
        id="skills" 
        className="relative isolate bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
        <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20"
        />
        </div>
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold text-indigo-400 mb-8 text-center">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {Skills.map((skill, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                            <p className="text-gray-400 mb-4">Category: {skill.category}</p>
                            <div className="w-full bg-gray-700 rounded-full h-2.5">
                                <div
                                    className="bg-blue-600 h-2.5 rounded-full"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                            <div className="text-right text-gray-400 mt-2">{skill.level}%</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}