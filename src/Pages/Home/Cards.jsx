import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

function Cards() {
    const navigate = useNavigate();
    const [puzzleImages, setPuzzleImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch superhero images from Pixabay
        const fetchImages = async () => {
            setLoading(true);
            try {
                // Replace YOUR_API_KEY with your actual Pixabay API key
                const response = await fetch(
                    `https://pixabay.com/api/?key=49065990-53254d7a89b0f39670a9f6456&q=superhero&image_type=photo&orientation=horizontal&per_page=24&safesearch=true`
                );
                
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                
                const data = await response.json();
                
                // Filter to ensure we get landscape images with good aspect ratios
                const landscapeImages = data.hits.filter(img => {
                    const aspectRatio = img.imageWidth / img.imageHeight;
                    return aspectRatio >= 1.3; // Only true landscape images
                });
                
                // Take the first 8 images or whatever is available
                const selectedImages = landscapeImages.slice(0, 8);
                
                setPuzzleImages(selectedImages);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching images:", err);
                setError("Failed to load images. Please try again later.");
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    // Function to handle clicking on an image
    const handleImageClick = (image) => {
        // Default puzzle size - you could make this selectable in the UI
        const rows = 3;
        const cols = 4;
        
        // Create an object structure that matches what PuzzleCanvas expects
        const puzzleImage = {
            id: image.id,
            largeImageURL: image.largeImageURL,
            user: image.user,
            tags: image.tags
        };
        
        // Navigate to puzzle canvas with the selected image and settings
        navigate("canvas", {
            state: {
                image: puzzleImage,
                rows: rows,
                cols: cols
            }
        });
    };

    return (
        <>
            <Helmet>
                <title>Explorer | Galerie de Puzzles Superhéros</title>
                <meta
                    name="description"
                    content="Découvrez une variété d'images de superhéros pour vos puzzles préférés."
                />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Explorer | Galerie de Puzzles Superhéros" />
                <meta
                    property="og:description"
                    content="Parcourez notre galerie d'images de superhéros prêtes à être explorées dans vos puzzles."
                />
                <link rel="canonical" href={window.location.href} />
            </Helmet>

            <div className="mt-5">
                <div className="container">
                    <div className="text-center mb-4">
                        <h2 className="mb-3">Explorer</h2>
                    </div>
                    
                    {loading ? (
                        <div className="text-center py-5">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <p className="mt-3">Chargement des images...</p>
                        </div>
                    ) : error ? (
                        <div className="alert alert-danger text-center" role="alert">
                            {error}
                        </div>
                    ) : (
                        <div className="row g-4">
                            {puzzleImages.length > 0 ? (
                                puzzleImages.map((image) => (
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={image.id}>
                                        <div className="card h-100 shadow-sm transition-all hover-shadow hover-translate-y-n10">
                                            <div className="card-img-top position-relative overflow-hidden" style={{ height: "200px" }}>
                                                <a 
                                                    href="#" 
                                                    className="d-block h-100"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handleImageClick(image);
                                                    }}
                                                >
                                                    <img
                                                        src={image.webformatURL}
                                                        alt={image.tags}
                                                        className="w-100 h-100 object-fit-cover transition-transform"
                                                        style={{ transition: "transform 0.3s ease" }}
                                                        onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                                                        onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                                                    />
                                                </a>
                                            </div>
                                            <div className="card-body d-flex flex-column">
                                                <h5 className="card-title text-truncate">
                                                    <a 
                                                        className="text-decoration-none text-dark fw-bold"
                                                        href="#"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleImageClick(image);
                                                        }}
                                                    >
                                                        {image.tags.split(',')[0]}
                                                    </a>
                                                </h5>
                                                <div className="mt-auto d-flex justify-content-between align-items-center">
                                                    <button 
                                                        className="btn btn-outline-primary btn-sm rounded-pill opacity-0"
                                                        style={{ transition: "opacity 0.3s ease" }}
                                                        onClick={() => handleImageClick(image)}
                                                        onMouseOver={(e) => e.currentTarget.classList.replace("opacity-0", "opacity-100")}
                                                        onMouseOut={(e) => e.currentTarget.classList.replace("opacity-100", "opacity-0")}
                                                    >
                                                        Jouer
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-12 text-center py-5">
                                    <p>Aucune image de superhéros trouvée. Essayez une autre recherche.</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Add this CSS to enhance hover effects */}
            <style jsx>{`
                
            `}</style>
        </>
    );
}

export default Cards;