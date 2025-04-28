function VideoModal({ videoUrl, onClose }) {
    try {
        const getYouTubeEmbedUrl = (url) => {
            const videoId = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=))([\w\-]{10,12})\b/)[1];
            return `https://www.youtube.com/embed/${videoId}`;
        };

        React.useEffect(() => {
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = 'unset';
            };
        }, []);

        return (
            <div data-name="video-modal" className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="modal-backdrop" onClick={onClose}></div>
                <div className="relative z-50 w-full max-w-4xl p-4">
                    <button
                        onClick={onClose}
                        className="absolute -top-10 right-4 text-white hover:text-gray-300"
                    >
                        <i className="fas fa-times text-2xl"></i>
                    </button>
                    <div className="relative pt-[56.25%]">
                        <iframe
                            src={getYouTubeEmbedUrl(videoUrl)}
                            className="absolute top-0 left-0 w-full h-full"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('VideoModal component error:', error);
        reportError(error);
        return null;
    }
}
