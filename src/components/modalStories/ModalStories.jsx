import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "./ModalStories.css";

const ModalStories = ({ stories, isOpen, closeModal, index }) => {
  const [start, setStart] = useState(false);

  useEffect(() => {
    setStart(index);
  }, [index]);

  return (
    <div className={`${isOpen ? "open" : ""}  ModalStories`}>
      <div className="modal-close" onClick={() => closeModal()}>
        X
      </div>
      <Swiper initialSlide={index} spaceBetween={0}>
        {stories &&
          stories.map((storyUser) => (
            <SwiperSlide key={storyUser.id}>
              <div className="user-profile">
                <div className="user-img">
                  <img src={storyUser?.userImage} alt="" />
                </div>
                <div className="username">
                  <p>{storyUser?.username} </p>
                </div>
              </div>
              <Swiper
                modules={[Pagination]}
                pagination={{
                  type: "progressbar",
                }}
              >
                {storyUser?.stories?.map((story) => (
                  <SwiperSlide key={story?.id}>
                    {story?.type === "image" ? (
                      <img src={story?.src}></img>
                    ) : (
                      <video
                        src={story?.src}
                        playsInline
                        muted
                        autoPlay
                        loop
                      ></video>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default ModalStories;
