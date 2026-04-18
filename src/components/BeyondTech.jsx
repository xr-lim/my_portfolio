import { useState } from "react";
import baking1 from "../assets/baking1.jpg";
import baking2 from "../assets/baking2.jpg";
import baking3 from "../assets/baking3.jpg";
import dance1 from "../assets/dance1.jpg";
import dance2 from "../assets/dance2.jpg";
import dance3 from "../assets/dance3.jpg";
import travel1 from "../assets/travel1.jpg";
import travel2 from "../assets/travel2.jpg";
import travel3 from "../assets/travel3.jpg";
import travel4 from "../assets/travel4.jpg";
import travel5 from "../assets/travel5.jpg";

const hobbies = [
    {
        title: "Dance",
        photos: [
            { id: "dance-1", title: "Dance Photo 1", src: dance1, note: "Add your first dance image here" },
            { id: "dance-2", title: "Dance Photo 2", src: dance2, note: "Add your second dance image here" },
            { id: "dance-3", title: "Dance Photo 3", src: dance3, note: "Add your third dance image here" },
        ],
    },
    {
        title: "Baking",
        photos: [
            { id: "baking-1", title: "Baking Photo 1", src: baking1, note: "Add your first baking image here" },
            { id: "baking-2", title: "Baking Photo 2", src: baking2, note: "Add your second baking image here" },
            { id: "baking-3", title: "Baking Photo 3", src: baking3, note: "Add your third baking image here" },
        ],
    },
    {
        title: "Travel",
        photos: [
            { id: "travel-1", title: "Travel Photo 1", src: travel1, note: "Add your first travel image here" },
            { id: "travel-2", title: "Travel Photo 2", src: travel2, note: "Add your second travel image here" },
            { id: "travel-3", title: "Travel Photo 3", src: travel3, note: "Add your third travel image here" },
            { id: "travel-4", title: "Travel Photo 4", src: travel4, note: "Add your fourth travel image here" },
            { id: "travel-5", title: "Travel Photo 5", src: travel5, note: "Add your fifth travel image here" },
        ],
    },
];

function ArrowLeftIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
                fill="currentColor"
                d="M14.78 5.72a.75.75 0 0 1 0 1.06L9.56 12l5.22 5.22a.75.75 0 1 1-1.06 1.06l-5.75-5.75a.75.75 0 0 1 0-1.06l5.75-5.75a.75.75 0 0 1 1.06 0Z"
            />
        </svg>
    );
}

function ArrowRightIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
                fill="currentColor"
                d="M9.22 5.72a.75.75 0 0 1 1.06 0l5.75 5.75a.75.75 0 0 1 0 1.06l-5.75 5.75a.75.75 0 1 1-1.06-1.06L14.44 12 9.22 6.78a.75.75 0 0 1 0-1.06Z"
            />
        </svg>
    );
}

function BeyondTech() {
    const [activeHobbyIndex, setActiveHobbyIndex] = useState(0);
    const [activePhotoIndexes, setActivePhotoIndexes] = useState(
        hobbies.map(() => 0)
    );
    const [isTransitioning, setIsTransitioning] = useState(false);

    const activeHobby = hobbies[activeHobbyIndex];

    const setFrontPhoto = (photoIndex) => {
        setActivePhotoIndexes((current) =>
            current.map((value, hobbyIndex) =>
                hobbyIndex === activeHobbyIndex ? photoIndex : value
            )
        );
    };

    const switchHobby = (newIndex) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setActiveHobbyIndex(newIndex);
            setTimeout(() => setIsTransitioning(false), 50);
        }, 300);
    };

    const showPreviousHobby = () => {
        const newIndex = activeHobbyIndex === 0 ? hobbies.length - 1 : activeHobbyIndex - 1;
        switchHobby(newIndex);
    };

    const showNextHobby = () => {
        const newIndex = activeHobbyIndex === hobbies.length - 1 ? 0 : activeHobbyIndex + 1;
        switchHobby(newIndex);
    };

    return (
        <section id="beyond-tech" className="beyond-tech-section">
            <div className="beyond-tech-header">
                <h1>Beyond Tech</h1>
                <p>
                    When I'm not coding, you'll find me exploring other creative outlets.
                    From the rhythm of dance to the art of baking and the thrill of discovering new places —
                    these are the passions that keep me inspired and balanced.
                </p>
            </div>

            {/* Hobby dots indicator */}
            <div className="hobby-dots">
                {hobbies.map((hobby, index) => (
                    <button
                        key={hobby.title}
                        type="button"
                        className={`hobby-dot ${index === activeHobbyIndex ? "is-active" : ""}`}
                        onClick={() => switchHobby(index)}
                        aria-label={`Show ${hobby.title}`}
                    />
                ))}
            </div>

            <div className="hobby-showcase">
                <button
                    type="button"
                    className="hobby-arrow"
                    onClick={showPreviousHobby}
                    aria-label="Show previous hobby"
                >
                    <ArrowLeftIcon />
                </button>

                <article className={`hobby-card hobby-card-single ${isTransitioning ? "is-exiting" : "is-entering"}`}>
                    <h2>{activeHobby.title}</h2>

                    <div className="hobby-photo-stage">
                        <div className="hobby-photo-stack">
                            {activeHobby.photos.map((photo, index) => {
                                const activePhotoIndex = activePhotoIndexes[activeHobbyIndex];
                                const isActive = index === activePhotoIndex;
                                const offsetOrder =
                                    (index - activePhotoIndex + activeHobby.photos.length) %
                                    activeHobby.photos.length;

                                const handleClick = isActive
                                    ? () => setFrontPhoto((activePhotoIndex + 1) % activeHobby.photos.length)
                                    : undefined;

                                return (
                                    <button
                                        key={photo.id}
                                        type="button"
                                        className={`hobby-photo-card ${isActive ? "is-active" : ""}`}
                                        style={{
                                            zIndex: activeHobby.photos.length - offsetOrder,
                                            transform: `translate(calc(-50% + ${offsetOrder * 16}px), calc(-50% + ${offsetOrder * 14}px)) rotate(${offsetOrder * 3 - 2}deg)`,
                                            pointerEvents: isActive ? "auto" : "none",
                                        }}
                                        onClick={handleClick}
                                        aria-label={isActive ? "Show next photo" : photo.title}
                                    >
                                        {photo.src ? (
                                            <img src={photo.src} alt={photo.title} />
                                        ) : (
                                            <div className="hobby-photo-placeholder">
                                                <span>{photo.title}</span>
                                                <small>{photo.note}</small>
                                            </div>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </article>

                <button
                    type="button"
                    className="hobby-arrow"
                    onClick={showNextHobby}
                    aria-label="Show next hobby"
                >
                    <ArrowRightIcon />
                </button>
            </div>
        </section>
    )
}

export default BeyondTech
