import { ReactElement, useState } from "react";
import "./carousel.styles.scss";

export interface Image {
    source: string;
    alt: string;
    dimensions?: {
        width: string,
        height: string
    };
}

export function Carousel ({ imgArray }: any): ReactElement {
    const [currentImage, cycleCurrentImage] = useState(imgArray[0]);
    const [isCycling, toggleIsCycling] = useState(true);

    async function countdownAndUpdate (timerMS: number) {

        return new Promise<void>(resolve => {
            setTimeout(() => {
                cycleCurrentImage(imgArray[imgArray.indexOf(currentImage) + 1]);
                // resolve();
            }, timerMS);
        });
    }

    if (isCycling && currentImage !== imgArray[imgArray.length - 1]) {
        // return current img and increment after countdown
        countdownAndUpdate(5000);
        console.log("Normal cycling");
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
        setTimeout(() => {
            cycleCurrentImage(imgArray[0]);
        }, 5000);
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
        console.log("I shouldn't trigger");
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