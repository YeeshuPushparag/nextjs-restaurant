import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';


const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();

  return (
    <section id='intro'>

    <div className="app__video">
      <video
        ref={vidRef}
        src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/intro.mp4`}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
        </section>
  );
};

export default Intro;