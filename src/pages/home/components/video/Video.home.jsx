import video from '@assets/home-video.mp4';
import './video.home.scss';

export const Video = () => {
  return (
    <section className="video">
      <video muted loop autoPlay>
        <source src={video} type="video/mp4" />
      </video>
    </section>
  );
};
