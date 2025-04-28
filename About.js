function About() {
    try {
        return (
            <section id="about" data-name="about" className="section-padding bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                        <div className="w-20 h-1 bg-white mx-auto"></div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <p className="text-lg text-gray-300">
                                An experienced videographer specializing in camera operations, film shoots, and video editing.
                                Leveraging years of experience to create compelling visual content and contribute to a dynamic
                                team of a company.
                            </p>
                            
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-bold mb-2">Skills</h3>
                                    <ul className="space-y-2 text-gray-300">
                                        <li><i className="fas fa-check-circle mr-2"></i>Adobe Premiere Pro</li>
                                        <li><i className="fas fa-check-circle mr-2"></i>After Effects</li>
                                        <li><i className="fas fa-check-circle mr-2"></i>Cinematography</li>
                                        <li><i className="fas fa-check-circle mr-2"></i>Video Editing</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold mb-2">Education</h3>
                                    <p className="text-gray-300">
                                        Masters in Communication Studies<br />
                                        <span className="text-sm">New Arts & Commerce College, Ahmednagar</span>
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex space-x-4">
                                <a href="mailto:Pankajnaik1496@gmail.com" className="text-white hover:text-gray-300">
                                    <i className="fas fa-envelope text-2xl"></i>
                                </a>
                                <a href="https://linkedin.com/in/pankaj-naikwade" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                                    <i className="fab fa-linkedin text-2xl"></i>
                                </a>
                            </div>
                        </div>
                        
                        <div className="relative">
                            <img
                                src="https://app.trickle.so/storage/public/images/usr_0c68a00998000001/51fc63dc-e014-484a-aa07-93c8915adaa6.jpeg"
                                alt="Pankaj Naikwade"
                                className="rounded-lg shadow-xl w-full object-cover aspect-[3/4]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('About component error:', error);
        reportError(error);
        return null;
    }
}
