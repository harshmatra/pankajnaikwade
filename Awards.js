function Awards() {
    try {
        return (
            <section id="awards" data-name="awards" className="section-padding">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Awards & Recognition</h2>
                        <div className="w-20 h-1 bg-white mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {AWARDS.map((award, index) => (
                            <div 
                                key={index}
                                data-name={`award-${index}`}
                                className="bg-gray-900 p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-transform duration-300"
                            >
                                <div className="flex items-center mb-4">
                                    <i className="fas fa-trophy text-yellow-500 text-2xl mr-4"></i>
                                    <h3 className="text-xl font-bold">{award.title}</h3>
                                </div>
                                <p className="text-gray-400 mb-2">{award.event}</p>
                                <p className="text-sm text-gray-500">{award.year}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Awards component error:', error);
        reportError(error);
        return null;
    }
}
