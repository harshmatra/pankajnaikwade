function App() {
    try {
        return (
            <div data-name="app">
                <Navbar />
                <Hero />
                <About />
                <Portfolio />
                <Experience />
                <Awards />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
