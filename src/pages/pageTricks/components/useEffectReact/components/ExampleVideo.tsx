import { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { PrismCode } from "../../../../../common/components";

export const ExampleVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlay, setIsPlay] = useState(false);

  const handleClick = () => {
    if (!videoRef?.current) {
      return;
    }

    const video = videoRef.current;

    if (isPlay) {
      video.pause();
      setIsPlay(!isPlay);
      return;
    }

    video.play();
    setIsPlay(!isPlay);
  };

  const handleClickPause = () => {
    if (!videoRef?.current) {
      return;
    }

    const video = videoRef.current;
    video.pause();
  };

  /**
   * Ref video https://pixabay.com/videos/record-record-player-vinyl-65390/
   */

  return (
    <>
      <h3 className="mb-4">
        Example <span className="text-muted">video</span>
      </h3>
      <div className="mb-4">
        <video ref={videoRef} width="400" onClick={handleClick}>
          <source src="/assets/videos/music.mp4" type="video/mp4" />
          Your browser does not support HTML video.
        </video>

        <div className="mt-2">
          <Button variant="primary" onClick={handleClick}>
            {isPlay ? "Pause" : "Play"}
          </Button>
        </div>
      </div>
    </>
  );
};
