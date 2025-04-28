function Navbar() {
    try {
        const [isOpen, setIsOpen] = React.useState(false);

        return (
            <nav data-name="navbar" className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <a href="#" className="text-white font-bold text-xl">Pankaj Naikwade</a>
                        </div>
                        
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                                <a href="#portfolio" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Portfolio</a>
                                <a href="#experience" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Experience</a>
                                <a href="#awards" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Awards</a>
                            </div>
                        </div>
                        
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                            >
                                <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
                            </button>
                        </div>
                    </div>
                </div>

                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a href="#about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
                            <a href="#portfolio" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Portfolio</a>
                            <a href="#experience" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Experience</a>
                            <a href="#awards" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Awards</a>
                        </div>
                    </div>
                )}
            </nav>
        );
    } catch (error) {
        console.error('Navbar component error:', error);
        reportError(error);
        return null;
    }
}
