function Portfolio() {
    try {
        const [selectedVideo, setSelectedVideo] = React.useState(null);

        React.useEffect(() => {
            // Load Instagram embed script
            const script = document.createElement('script');
            script.src = 'https://www.instagram.com/embed.js';
            script.async = true;
            document.body.appendChild(script);

            return () => {
                document.body.removeChild(script);
            };
        }, []);

        const getYouTubeId = (url) => {
            const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
            const match = url.match(regExp);
            return (match && match[2].length === 11) ? match[2] : null;
        };

        const VideoCard = ({ url, index }) => {
            const videoId = getYouTubeId(url);
            const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
            
            return (
                <div 
                    data-name={`video-card-${index}`}
                    className="video-card hover-scale"
                    onClick={() => setSelectedVideo(url)}
                >
                    <img 
                        src={thumbnailUrl}
                        alt={`Video thumbnail ${index + 1}`}
                        className="w-full h-48 object-cover"
                    />
                    <div className="video-overlay">
                        <i className="fas fa-play text-3xl"></i>
                    </div>
                </div>
            );
        };

        const FilmCard = ({ film }) => {
            return (
                <div data-name={`film-card-${film.title}`} className="bg-gray-900 rounded-lg overflow-hidden">
                    <div className="relative">
                        <img 
                            src={film.image} 
                            alt={film.title}
                            className="w-full h-64 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                    </div>
                    <div className="p-6">
                        <div className="mb-4">
                            <h3 className="text-2xl font-bold mb-2">{film.title}</h3>
                            <span className="text-sm text-gray-400">{film.type}</span>
                        </div>
                        <p className="text-gray-300 mb-4">{film.description}</p>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold mb-2">Credits</h4>
                                <div className="text-sm text-gray-400 space-y-1">
                                    {Object.entries(film.credits).map(([role, name]) => (
                                        <p key={role}>
                                            <span className="capitalize">{role}:</span> {name}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            {film.awards && (
                                <div>
                                    <h4 className="font-semibold mb-2">Awards & Recognition</h4>
                                    <ul className="text-sm text-gray-400 list-disc list-inside">
                                        {film.awards.map((award, index) => (
                                            <li key={index}>{award}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            );
        };

        const InstagramEmbed = ({ url }) => {
            const postUrl = url.replace('/reel/', '/p/');
            
            React.useEffect(() => {
                if (window.instgrm) {
                    window.instgrm.Embeds.process();
                }
            }, []);

            return (
                <div className="instagram-embed-container">
                    <blockquote
                        className="instagram-media"
                        data-instgrm-permalink={postUrl}
                        data-instgrm-version="14"
                        style={{
                            background: '#FFF',
                            border: '0',
                            borderRadius: '3px',
                            boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                            margin: '1px',
                            maxWidth: '540px',
                            minWidth: '326px',
                            padding: '0',
                            width: 'calc(100% - 2px)'
                        }}
                    >
                    </blockquote>
                </div>
            );
        };

        const ReelSection = ({ title, reels }) => (
            <div className="mb-12">
                <h4 className="text-xl font-semibold mb-6">{title}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reels.map((reel, index) => (
                        <div key={index} data-name={`reel-${index}`} className="w-full">
                            <InstagramEmbed url={reel} />
                        </div>
                    ))}
                </div>
            </div>
        );

        return (
            <section id="portfolio" data-name="portfolio" className="section-padding">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio</h2>
                        <div className="w-20 h-1 bg-white mx-auto"></div>
                    </div>

                    <div className="mb-16">
                        <h3 className="text-2xl font-bold mb-8">Featured Films</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            {FEATURED_FILMS.map((film, index) => (
                                <FilmCard key={index} film={film} />
                            ))}
                        </div>
                    </div>

                    <div className="mb-16">
                        <h3 className="text-2xl font-bold mb-8">YouTube Content</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {YOUTUBE_VIDEOS.map((video, index) => (
                                <VideoCard key={index} url={video} index={index} />
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-8">Instagram Reels</h3>
                        <ReelSection title="Informative Reels" reels={INSTAGRAM_REELS.informative} />
                        <ReelSection title="Cinematic Reels / Ads" reels={INSTAGRAM_REELS.cinematic} />
                        <ReelSection title="Medical Content" reels={INSTAGRAM_REELS.medical} />
                    </div>

                    {selectedVideo && (
                        <VideoModal
                            videoUrl={selectedVideo}
                            onClose={() => setSelectedVideo(null)}
                        />
                    )}
                </div>
            </section>
        );
    } catch (error) {
        console.error('Portfolio component error:', error);
        reportError(error);
        return null;
    }
}
