import { ReactElement, useState } from "react";
import "./carousel.styles.scss";

interface Image {
    source: string;
    alt: string;
    dimensions?: {
        width: number,
        height: number
    };
}

export default function Carousel (imgArray: Image[]): ReactElement {
    const [currentImage, cycleCurrentImage] = useState(imgArray[0]);
    const [isCycling, toggleIsCycling] = useState(true);

    async function countdownAndUpdate (timerMS: number) {
        return new Promise<void>(resolve => {
            setTimeout(() => {
                // figure out update logic
                cycleCurrentImage();
                resolve();
            }, timerMS);
        });
    }

    if (isCycling && currentImage !== imgArray[imgArray.length - 1]) {
        // return current img and increment after countdown
        return (
            <>
                <div>
                    <img 
                        src={currentImage.source}
                        alt={currentImage.alt}
                        width={currentImage.dimensions?.width}
                        height={currentImage.dimensions?.height}
                    />
                </div>
            </>
        );

    } else if (isCycling && currentImage === imgArray[imgArray.length - 1]) {
        // reset index to 0 after countdown and return img
        return (
            <>
                <div>
                    <img 
                        src={currentImage.source}
                        alt={currentImage.alt}
                        width={currentImage.dimensions?.width}
                        height={currentImage.dimensions?.height}
                    />
                </div>
            </>
        );
    } else {
        // return current image and await cycling to restart
        return (
            <>
                <div className="carousel">
                    <img 
                        src={currentImage.source}
                        alt={currentImage.alt}
                        width={currentImage.dimensions?.width}
                        height={currentImage.dimensions?.height}
                    />
                </div>
            </>
        );
    }


}