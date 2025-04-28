function Hero() {
    try {
        const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
        
        const images = [
            "https://app.trickle.so/storage/public/images/usr_0c68a00998000001/51fc63dc-e014-484a-aa07-93c8915adaa6.jpeg",
            "https://app.trickle.so/storage/public/images/usr_0c68a00998000001/199ba8b1-d21a-4de6-940b-1a3a611eeff7.jpeg",
            "https://app.trickle.so/storage/public/images/usr_0c68a00998000001/c7c5b3c7-6fcd-49e7-aba9-85cc0ba02f19.jpeg"
        ];

        React.useEffect(() => {
            const timer = setInterval(() => {
                setCurrentImageIndex((prevIndex) => 
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                );
            }, 5000);

            return () => clearInterval(timer);
        }, []);

        return (
            <div data-name="hero" className="relative h-screen flex items-center justify-center">
                <div className="absolute inset-0">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="absolute inset-0 transition-opacity duration-1000"
                            style={{
                                opacity: currentImageIndex === index ? 1 : 0,
                                zIndex: currentImageIndex === index ? 1 : 0
                            }}
                        >
                            <img
                                src={image}
                                alt={`Pankaj Naikwade ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                    <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
                </div>
                
                <div className="relative z-20 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 slide-up">
                        Pankaj Naikwade
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 slide-up">
                        Videographer & Video Editor
                    </p>
                    <div className="flex justify-center space-x-4 slide-up">
                        <a href="#portfolio" className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
                            View Work
                        </a>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                                currentImageIndex === index ? 'bg-white w-4' : 'bg-gray-400'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
        return null;
    }
}
