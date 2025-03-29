import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { ArrowBigLeft } from 'lucide-react';

// Replace with your Pixabay API key
const API_KEY = '49065990-53254d7a89b0f39670a9f6456';

// Define the categories you want to display - now with Anime
const categories = ['Nature', 'Technology', 'Animals', 'People', 'Travel', 'Anime'];

// Define some difficulty levels that ensure a clean grid
const difficulties = [
  { name: 'Facile', rows: 2, cols: 2 },
  { name: 'Moyen', rows: 4, cols: 4 },
  { name: 'Dur', rows: 6, cols: 6 },
  { name: 'Expert', rows: 8, cols: 8 },
];

function Jigsaw() {
  const [imagesByCategory, setImagesByCategory] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showDialog, setShowDialog] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const navigate = useNavigate();

  // Function to fetch images for a specific category
  const fetchImagesForCategory = async (category) => {
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
      category
    )}&image_type=photo&per_page=5&orientation=horizontal`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching images for ${category}`);
    }
    const data = await response.json();
    return data.hits;
  };

  useEffect(() => {
    const fetchAllCategories = async () => {
      try {
        setLoading(true);
        const results = {};
        for (const category of categories) {
          const images = await fetchImagesForCategory(category);
          results[category] = images;
        }
        setImagesByCategory(results);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllCategories();
  }, []);

  // Filter logic
  const displayedCategories =
    selectedCategory === 'All' ? categories : [selectedCategory];

  // Handle image click -> show difficulty modal
  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowDialog(true);
  };

  // Navigate to puzzle with chosen difficulty
  const handleDifficultySelect = (diff) => {
    if (!selectedImage) return;
    navigate('/canvas', {
      state: {
        image: selectedImage,
        rows: diff.rows,
        cols: diff.cols,
      },
    });
    setShowDialog(false);
  };

  const filterLandscapeImages = (images) => {
    return images.filter((img) => img.imageWidth > img.imageHeight);
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <>
      <Helmet>
        <title>Jigsaw Puzzle | Choisissez votre défi</title>
        <meta
          name="description"
          content="Explorez plusieurs catégories de puzzles et sélectionnez la difficulté pour un défi sur mesure."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Jigsaw Puzzle | Choisissez votre défi" />
        <meta
          property="og:description"
          content="Testez vos compétences de puzzle avec diverses catégories et niveaux de difficulté."
        />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <div className="min-vh-100 bg-light text-dark">
        <div
          className="position-absolute w-100 h-100"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23f0f0f0\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4zM0 0h60v60H0z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            opacity: 0.6,
            zIndex: -1,
          }}
        ></div>
        <div
          className="position-absolute w-100 h-100"
          style={{
            background:
              'linear-gradient(135deg, rgba(111,66,193,0.03) 0%, rgba(232,62,140,0.03) 100%)',
            zIndex: -1,
          }}
        ></div>

        <div className="container py-5 position-relative">
          <div className="position-absolute top-0 start-0 m-4 z-index-1">
            <button
              onClick={handleGoBack}
              className="btn btn-light shadow-sm d-flex align-items-center gap-2 rounded-pill"
              style={{
                transition: 'all 0.2s ease',
                borderColor: 'rgba(0,0,0,0.1)',
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <ArrowBigLeft />
              <span>Retour à la maison</span>
            </button>
          </div>

          <header className="mb-5 text-center pt-4">
            <div
              className="mb-3 mx-auto d-flex justify-content-center align-items-center"
              style={{ width: '70px', height: '70px' }}
            >
              <i
                className="bi bi-puzzle-fill"
                style={{
                  fontSize: '3rem',
                  background: 'linear-gradient(45deg, #6f42c1, #e83e8c)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              ></i>
            </div>
            <h1
              className="display-4 fw-bold mb-2"
              style={{
                background: 'linear-gradient(45deg, #6f42c1, #e83e8c)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Puzzle
            </h1>
            <p className="lead text-muted">Sélectionnez une image et défiez-vous avec nos puzzles interactifs</p>
            <div className="mx-auto mt-3 bg-white rounded-pill shadow-sm py-1 px-4 d-inline-flex align-items-center gap-2">
              <i className="bi bi-info-circle text-primary"></i>
              <span className="text-muted small">Choisissez votre niveau de difficulté après avoir sélectionné une image</span>
            </div>
          </header>

          {loading && (
            <div className="d-flex flex-column align-items-center justify-content-center py-5">
              <div className="position-relative" style={{ width: '4rem', height: '4rem' }}>
                <div
                  className="spinner-border text-primary position-absolute top-0 start-0"
                  role="status"
                  style={{
                    width: '4rem',
                    height: '4rem',
                    borderWidth: '0.2rem',
                    borderRightColor: 'transparent',
                    opacity: 0.7,
                    background: 'linear-gradient(45deg, #6f42c1, #e83e8c)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                ></div>
                <div
                  className="spinner-grow text-primary position-absolute top-50 start-50 translate-middle"
                  role="status"
                  style={{
                    width: '2rem',
                    height: '2rem',
                    background: 'linear-gradient(45deg, #6f42c1, #e83e8c)',
                    opacity: 0.5,
                  }}
                ></div>
              </div>
              <p className="mt-4 text-muted fs-5 fw-light">
                Chargement de vos puzzles...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-5">
              <div
                className="d-inline-flex align-items-center justify-content-center rounded-circle bg-danger bg-opacity-10 mb-3 shadow-sm"
                style={{ width: '6rem', height: '6rem' }}
              >
                <i className="bi bi-exclamation-circle fs-1 text-danger"></i>
              </div>
              <p className="text-danger fs-5 mt-3">Error: {error}</p>
              <button className="btn btn-outline-primary mt-3" onClick={() => window.location.reload()}>
                <i className="bi bi-arrow-clockwise me-2"></i>
                Réessayer
              </button>
            </div>
          )}

          {!loading && !error && (
            <>
              <div className="mb-5 d-flex flex-column flex-sm-row align-items-center justify-content-center gap-3">
                <div className="bg-white rounded-pill px-4 py-2 shadow-sm d-flex align-items-center gap-3 border border-light">
                  <span className="fs-6 mb-0 text-dark fw-medium">
                    <i className="bi bi-filter me-2 text-primary"></i>
                    Filtre:
                  </span>
                  <select
                    id="categoryFilter"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="form-select border-0 shadow-none pe-5"
                    style={{ width: 'auto', backgroundColor: 'transparent' }}
                  >
                    <option value="All">Toutes les catégories</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {displayedCategories.map((category) => {
                const landscapeImages = filterLandscapeImages(imagesByCategory[category] || []);
                return (
                  <div key={category} className="mb-5">
                    <div className="d-flex align-items-center mb-4">
                      <h2 className="fs-2 fw-bold mb-0 ps-3 border-start border-4 border-primary">
                        {category}
                      </h2>
                      <div className="ms-3 bg-white rounded-pill px-3 py-1 shadow-sm small text-muted">
                        {landscapeImages.length} puzzles
                      </div>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
                      {landscapeImages.map((image) => (
                        <div key={image.id} className="col">
                          <div
                            className="card h-100 shadow position-relative overflow-hidden rounded-4 border-0"
                            onClick={() => handleImageClick(image)}
                            style={{
                              cursor: 'pointer',
                              transition: 'all 0.3s ease',
                              backgroundColor: 'white',
                            }}
                            onMouseOver={(e) => {
                              e.currentTarget.style.transform = 'translateY(-5px)';
                              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
                              e.currentTarget.querySelector('.play-button').style.opacity = '1';
                              e.currentTarget.querySelector('.image-overlay').style.opacity = '1';
                            }}
                            onMouseOut={(e) => {
                              e.currentTarget.style.transform = 'translateY(0)';
                              e.currentTarget.style.boxShadow = '0 0.5rem 1rem rgba(0, 0, 0, 0.15)';
                              e.currentTarget.querySelector('.play-button').style.opacity = '0';
                              e.currentTarget.querySelector('.image-overlay').style.opacity = '0';
                            }}
                          >
                            <div
                              className="position-absolute top-50 start-50 translate-middle play-button bg-white rounded-circle d-flex align-items-center justify-content-center shadow opacity-0"
                              style={{
                                zIndex: 10,
                                transition: 'opacity 0.3s',
                                width: '3.5rem',
                                height: '3.5rem',
                              }}
                            >
                              <i
                                className="bi bi-puzzle-fill fs-4"
                                style={{
                                  background: 'linear-gradient(45deg, #6f42c1, #e83e8c)',
                                  WebkitBackgroundClip: 'text',
                                  WebkitTextFillColor: 'transparent',
                                }}
                              ></i>
                            </div>

                            <div
                              className="position-absolute inset-0 image-overlay opacity-0"
                              style={{
                                background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                                transition: 'opacity 0.3s',
                                height: '100%',
                                zIndex: 2,
                              }}
                            >
                              <div className="position-absolute bottom-0 p-3 w-100">
                                <p className="text-white fw-medium text-truncate mb-1">{image.tags}</p>
                                <p className="text-white-50 small m-0">by {image.user}</p>
                              </div>
                            </div>

                            <div style={{ aspectRatio: '16/9' }}>
                              <img
                                src={image.largeImageURL}
                                alt={image.tags}
                                className="card-img-top h-100 object-fit-cover"
                                style={{ transition: 'transform 0.7s ease-in-out' }}
                                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </>
          )}

          {showDialog && (
            <div
              className="modal fade show"
              tabIndex="-1"
              role="dialog"
              style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
            >
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content border-0 shadow-lg rounded-4">
                  <div className="modal-header border-bottom-0 pb-0">
                    <h5
                      className="modal-title fw-bold fs-4"
                      style={{
                        background: 'linear-gradient(45deg, #6f42c1, #e83e8c)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      Sélectionnez la difficulté
                    </h5>
                    <button type="button" className="btn-close" onClick={() => setShowDialog(false)}></button>
                  </div>
                  <div className="modal-body p-4">
                    {selectedImage && (
                      <div className="d-flex align-items-center mb-4">
                        <div
                          className="rounded-3 overflow-hidden me-3 shadow-sm"
                          style={{ width: '7rem', height: '4.5rem' }}
                        >
                          <img
                            src={selectedImage.largeImageURL}
                            alt={selectedImage.tags}
                            className="w-100 h-100 object-fit-cover"
                          />
                        </div>
                        <div>
                          <p className="fw-medium mb-1 fs-5">{selectedImage.tags}</p>
                          <p className="text-muted small mb-0">by {selectedImage.user}</p>
                        </div>
                      </div>
                    )}

                    <div className="d-grid gap-3">
                      {difficulties.map((diff, index) => (
                        <button
                          key={diff.name}
                          className="btn btn-lg position-relative overflow-hidden rounded-3 shadow-sm"
                          style={{
                            background:
                              index % 2 === 0
                                ? 'linear-gradient(45deg, #6f42c1, #e83e8c)'
                                : 'linear-gradient(45deg, #e83e8c, #6f42c1)',
                            border: 'none',
                            transition: 'all 0.3s',
                            height: '4rem',
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)';
                          }}
                          onClick={() => handleDifficultySelect(diff)}
                        >
                          <div className="position-absolute top-0 end-0 bottom-0 d-flex align-items-center pe-3">
                            <div
                              style={{
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(255,255,255,0.5)',
                                marginRight: '5px',
                              }}
                            ></div>
                            <div
                              style={{
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(255,255,255,0.5)',
                                marginRight: '5px',
                              }}
                            ></div>
                            <div
                              style={{
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(255,255,255,0.5)',
                              }}
                            ></div>
                          </div>

                          <div className="d-flex align-items-center justify-content-between px-3 h-100">
                            <span className="fs-5 text-white fw-medium">{diff.name}</span>
                            <span className="badge bg-white text-dark rounded-pill px-3 py-2 shadow-sm">
                              {diff.rows}×{diff.cols} = {diff.rows * diff.cols} pièces
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="modal-footer border-top-0">
                    <button
                      className="btn btn-outline-secondary w-100 rounded-3"
                      onClick={() => setShowDialog(false)}
                    >
                      Annuler
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Jigsaw;