function Experience() {
    try {
        return (
            <section id="experience" data-name="experience" className="section-padding bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
                        <div className="w-20 h-1 bg-white mx-auto"></div>
                    </div>

                    <div className="space-y-12">
                        {EXPERIENCE.map((job, index) => (
                            <div key={index} data-name={`experience-${index}`} className="bg-black p-6 rounded-lg shadow-lg">
                                <div className="flex flex-wrap justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold">{job.company}</h3>
                                        <p className="text-gray-400">{job.role}</p>
                                    </div>
                                    {job.location && (
                                        <div className="text-gray-400">
                                            <span>{job.location}</span>
                                        </div>
                                    )}
                                </div>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {job.achievements.map((achievement, i) => (
                                        <li key={i}>{achievement}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Experience component error:', error);
        reportError(error);
        return null;
    }
}
