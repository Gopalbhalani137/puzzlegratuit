import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { JigsawPuzzle } from 'react-jigsaw-puzzle';
import { Helmet } from 'react-helmet';
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css';
import { ArrowBigLeft } from 'lucide-react';

const PuzzleCanvas = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { image, rows, cols } = location.state || {};
    const [showCongrats, setShowCongrats] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [timerActive, setTimerActive] = useState(true);
    const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
    useEffect(() => {
        let interval = null;
        if (timerActive) {
            interval = setInterval(() => {
                setElapsedTime((prevTime) => prevTime + 1);
            }, 1000);
        }
        return () => {
            clearInterval(interval);
        };
    }, [timerActive]);
    useEffect(() => {
  if (image?.largeImageURL) {
    const img = new Image();
    img.onload = () => {
      setImageDimensions({ width: img.width, height: img.height });
    };
    img.src = image.largeImageURL;
  }
}, [image]);
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handlePuzzleSolved = () => {
        setTimerActive(false);
        setShowCongrats(true);
    };

    const handleGoBackToGallery = () => {
        navigate('/jigsaw');
    };

    const handleGoHome = () => {
        navigate('/');
    };

    const handleCloseModal = () => {
        setShowCongrats(false);
    };

    const handlePlayAgain = () => {
        setElapsedTime(0);
        setTimerActive(true);
        setShowCongrats(false);
        window.location.reload();
    };

    const customStyles = {
        '--jigsaw-puzzle-bg': '#f8f9fa',
        '--jigsaw-puzzle-border': '2px solid rgba(0, 0, 0, 0.05)',
        '--jigsaw-puzzle-piece-bg': 'transparent',
        '--jigsaw-puzzle-piece-hover-bg': 'rgba(111, 66, 193, 0.1)',
        '--jigsaw-puzzle-piece-border': '1px solid rgba(0, 0, 0, 0.1)',
        '--jigsaw-puzzle-piece-selected-border': '2px solid rgba(111, 66, 193, 0.5)',
    };

    const puzzleTitle = `${rows}×${cols}${image?.user ? ` by ${image.user}` : ''} Jigsaw Puzzle`;
    const hasMissingData = !image || !rows || !cols;

    return (
        <>
            <Helmet>
                <title>{puzzleTitle} | Interactive Online Jigsaw Puzzle Game</title>
                <meta
                    name="description"
                    content={`Play this ${rows}×${cols} piece jigsaw puzzle online. Challenge yourself with our interactive puzzle game featuring beautiful imagery from ${image?.user}.`}
                />
                <meta
                    name="keywords"
                    content={`jigsaw puzzle, online puzzle, interactive game, ${rows}×${cols} puzzle, ${image?.user}, puzzle game`}
                />
                <meta property="og:title" content={`${puzzleTitle} | Interactive Online Jigsaw Puzzle Game`} />
                <meta
                    property="og:description"
                    content={`Play this ${rows}×${cols} piece jigsaw puzzle online. Challenge yourself with our interactive puzzle game featuring beautiful imagery from ${image?.user}.`}
                />
                <meta property="og:image" content={image?.largeImageURL} />
                <meta property="og:type" content="game" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${puzzleTitle} | Interactive Online Jigsaw Puzzle Game`} />
                <meta
                    name="twitter:description"
                    content={`Play this ${rows}×${cols} piece jigsaw puzzle online. Challenge yourself with our interactive puzzle game.`}
                />
                <meta name="twitter:image" content={image?.largeImageURL} />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`/puzzle-canvas?difficulty=${rows}x${cols}`} />
                <script type="application/ld+json">
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Game',
                        name: `${puzzleTitle} | Interactive Online Jigsaw Puzzle Game`,
                        description: `Play this ${rows}×${cols} piece jigsaw puzzle online. Challenge yourself with our interactive puzzle game.`,
                        image: image?.largeImageURL,
                        author: {
                            '@type': 'Person',
                            name: image?.user,
                        },
                        numberOfPlayers: {
                            '@type': 'QuantitativeValue',
                            minValue: 1,
                            maxValue: 1,
                        },
                        gameItem: {
                            '@type': 'Thing',
                            name: 'Jigsaw Puzzle Pieces',
                            description: `${rows * cols} jigsaw puzzle pieces`,
                        },
                    })}
                </script>
            </Helmet>

            {hasMissingData ? (
                <div className="min-vh-100 bg-light d-flex flex-column align-items-center justify-content-center">
                    <div className="text-center p-5 bg-white rounded-4 shadow border border-light-subtle max-w-md">
                        <i
                            className="bi bi-exclamation-circle"
                            style={{
                                fontSize: '3rem',
                                background: 'linear-gradient(45deg, #ff6b6b, #ff8787)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        ></i>
                        <h2 className="fs-3 fw-bold my-3 text-danger">Missing puzzle data</h2>
                        <p className="mb-4 text-muted">
                            Please select an image and difficulty level from the gallery.
                        </p>
                        <button
                            onClick={() => navigate('/jigsaw')}
                            className="btn btn-primary px-4 py-2 rounded-pill shadow-sm"
                            style={{
                                background: 'linear-gradient(45deg, #6f42c1, #e83e8c)',
                                border: 'none',
                            }}
                        >
                            <i className="bi bi-grid-3x3-gap-fill me-2"></i>
                            Back to Gallery
                        </button>
                    </div>
                </div>
            ) : (
                <div className="min-vh-100 bg-light text-dark">
                    <div
                        className="position-absolute w-100 h-100"
                        style={{
                            backgroundImage:
                                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f0f0f0' fill-opacity='1'%3E%3Cpath d='M36 34c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4zM0 0h60v60H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                            opacity: 0.6,
                            zIndex: -1,
                        }}
                    ></div>
                    <div
                        className="position-absolute w-100 h-100"
                        style={{
                            background: 'linear-gradient(135deg, rgba(111,66,193,0.03) 0%, rgba(232,62,140,0.03) 100%)',
                            zIndex: -1,
                        }}
                    ></div>
                    <div className="container py-4 position-relative">
                        <header className="mb-4 text-center">
                            <h1
                                className="fs-2 fw-bold mb-2"
                                style={{
                                    background: 'linear-gradient(45deg, #6f42c1, #e83e8c)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                <i className="bi bi-puzzle-fill me-2"></i>
                                Puzzle Canvas
                            </h1>
                            <p className="text-muted d-flex align-items-center justify-content-center gap-2">
                                <span className="badge bg-white border text-dark shadow-sm px-3 py-2 rounded-pill">
                                    <i className="bi bi-grid-3x3 me-1 text-primary"></i>
                                    Difficulty: {rows}×{cols} = {rows * cols} pieces
                                </span>
                            </p>
                        </header>
                        <div
                            className="bg-white p-3 p-md-4 rounded-4 shadow-sm border border-light-subtle mb-4 mx-auto"
                            style={{ maxWidth: '1000px' }}
                        >
                            <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
                                <div className="d-flex align-items-center gap-2 mb-3 mb-md-0">
                                    <div className="btn-group shadow-sm">
                                        <button
                                            onClick={handleGoBackToGallery}
                                            className="btn btn-light d-flex align-items-center gap-1 border-light"
                                        >
                                            <ArrowBigLeft/>
                                            Gallery
                                        </button>
                                        <button
                                            onClick={handleGoHome}
                                            className="btn btn-light d-flex align-items-center gap-1 border-light"
                                        >
                                            <ArrowBigLeft/>
                                            Home
                                        </button>
                                    </div>

                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <div className="d-flex gap-3">
                                        <div className="bg-light rounded-pill px-3 py-1 shadow-sm border d-flex align-items-center">
                                            <i className="bi bi-clock me-1 text-primary"></i>
                                            <span className="text-dark">{formatTime(elapsedTime)}</span>
                                        </div>
                                       
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <span className="badge bg-white shadow-sm px-2 py-1 text-muted rounded-pill border">
                                            <i className="bi bi-person me-1"></i>
                                            {image.user}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div
  className="position-relative w-100 bg-light rounded-4 border border-light-subtle overflow-hidden shadow-sm"
  style={{ 
    maxWidth: '1000px',
    height: imageDimensions.width ? `${Math.min(600, (imageDimensions.height / imageDimensions.width) * 1000)}px` : 'auto',
    ...customStyles 
  }}
>
                                <JigsawPuzzle
                                    imageSrc={image.largeImageURL}
                                    rows={rows}
                                    columns={cols}
                                    onSolved={handlePuzzleSolved}
                                    className="w-100 h-100"
                                />
                                <div className="position-absolute bottom-0 end-0 m-3">
                                    <button
                                        className="btn btn-sm btn-light shadow-sm rounded-circle"
                                        style={{ width: '40px', height: '40px' }}
                                        onClick={() =>
                                            alert('Preview functionality would be implemented with the actual puzzle library!')
                                        }
                                        aria-label="Show puzzle preview"
                                    >
                                        <i className="bi bi-eye"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {showCongrats && (
                        <>
                            <div className="modal-backdrop fade show"></div>
                            <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
                                        <div className="modal-header border-bottom-0 bg-primary bg-gradient text-white">
                                            <h5 className="modal-title">
                                                <i className="bi bi-trophy-fill me-2"></i>
                                                Congratulations!
                                            </h5>
                                            <button type="button" className="btn-close btn-close-white" aria-label="Close" onClick={handleCloseModal}></button>
                                        </div>
                                        <div className="modal-body text-center p-5">
                                            <div className="display-1 mb-3" style={{ color: '#FFD700' }}>
                                                <i className="bi bi-stars"></i>
                                            </div>
                                            <h2 className="fs-3 fw-bold mb-3">Puzzle Completed!</h2>
                                            <p className="text-muted mb-4">You've successfully completed the puzzle.</p>
                                            <div className="d-flex justify-content-center flex-wrap gap-3 mb-3">
                                                <div className="bg-light rounded-4 px-4 py-3 text-center">
                                                    <div className="fs-4 text-primary">
                                                        <i className="bi bi-clock"></i>
                                                    </div>
                                                    <div className="fw-bold">{formatTime(elapsedTime)}</div>
                                                    <div className="small text-muted">Time</div>
                                                </div>

                                                <div className="bg-light rounded-4 px-4 py-3 text-center">
                                                    <div className="fs-4 text-success">
                                                        <i className="bi bi-grid-3x3"></i>
                                                    </div>
                                                    <div className="fw-bold">{rows * cols}</div>
                                                    <div className="small text-muted">Pieces</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer border-top-0 bg-light justify-content-center gap-2 p-3">
                                            <button
                                                type="button"
                                                className="btn btn-outline-secondary px-4 rounded-pill"
                                                onClick={handleGoBackToGallery}
                                            >
                                                <i className="bi bi-grid-3x3-gap-fill me-2"></i>
                                                Gallery
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-primary px-4 rounded-pill"
                                                style={{
                                                    background: 'linear-gradient(45deg, #6f42c1, #e83e8c)',
                                                    border: 'none',
                                                }}
                                                onClick={handlePlayAgain}
                                            >
                                                <i className="bi bi-arrow-repeat me-2"></i>
                                                Play Again
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            )}
        </>
    );
};

export default PuzzleCanvas;    