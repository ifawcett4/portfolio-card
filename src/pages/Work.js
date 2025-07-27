import React, { useState } from "react";
import "../stylesheets/work.scss";

const Work = () => {
  const gridItems = [
    {
      title: "Meso Mountain",
      image: "/project_assets/meso_mountain/TitleSequence_Full.jpg",
      cover: "https://youtu.be/Sp1QQ-kSMhs?si=vPTnnzAUOlCrBsMQ",
      category: "3D Web Game",
      toolsUsed: "8th Wall Studio | Illustrator | Blender",
      summary:
        "Meso Moutain is a 3D web platformer game built in 8th Wall's Niantic Studio. In this game you play as an adorable parasaur on a mission to find their lost eggs. Run, jump, and explore the beautiful Mesozoic island to find all your eggs and discover mysteries. Meso mountain placed second in the Forge The Future Game Jame hosted by 8th Wall and VIVERSE. The project was later ported to the VIVERSE platform. For this experience I was able to create a custom Third Person Character Controller and a custom Mobile Joystick controller for best user interaction and control.",
      roleSummary:
        "I was the lead developer and graphic designer for this project, creating the game mechanics and overall user experience. I worked in close collaboration with Noah Ilbery who was the 3D artist and creative partner for the entire game concept and details.",
      credits: "Noah Ilbery | 8th Wall | VIVERSE",
      link: [
        {
          link_title: "8th Wall Project Page",
          link_src: "https://www.8thwall.com/pixelfishcreative/dino-game",
        },
        {
          link_title: "Viverse Project Page",
          link_src: "https://www.8thwall.com/pixelfishcreative/dino--game",
        },
        {
          link_title: "Announcement Article",
          link_src:
            "https://www.8thwall.com/blog/post/192402948989/announcing-the-winners-forge-the-future-game-jam",
        },
      ],
      gallery: [
        { image: "/project_assets/meso_mountain/MesoMountain01.gif" },
        { image: "/project_assets/meso_mountain/MesoMountain02.gif" },
        { image: "/project_assets/meso_mountain/MesoMountain03.gif" },
        { image: "/project_assets/meso_mountain/MesoMountain04.gif" },
        { image: "/project_assets/meso_mountain/MesoMountain05.gif" },
      ],
    },
    {
      title: "Nydia The Blind Flower Girl",
      image: "/project_assets/nydia/Thumbnail2.png",
      cover: "https://youtu.be/hjyRgRD9OmU?si=8qvvpj_VIZ29Otxd",
      category: "AR VPS Experience",
      toolsUsed: "Blender | 8th Wall | Illustrator",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      roleSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      credits: "Noah Ilbery | 8th Wall | VIVERSE",
      gallery: [{ image: "https://youtu.be/s-_2jrnb2TY?si=wTj-a_6IHqv8pUSL" }],
    },
    {
      title: "Saint Louis Zoo AR Education",
      image: "/project_assets/stl_zoo/image.png",
      cover: "/project_assets/stl_zoo/unseenZoo_reel-1.mp4",
      category: "Web & Social AR",
      toolsUsed: "Blender | 8th Wall | Illustrator",

      credits: "Saint Louis Zoo | Paradowski Creative ",
      summary:
        "Three main categories of AR experiences for the Saint Louis Zoo are featured here. The first being the Unseen Zoo, an educational AR expreince showing the worlwide conservation efforts being made by the STL Zoo. The ones we don't often know about since they are not happening onsite, or in otherwords, the unseen work. The next educational activation we did was a series of AR filters on instagram each set up at different stations aroud the zoo for Endangered Specied Day. Each poster at each station featured a QR code that took you to an AR experience telling the user more about that species and their habitat. The final work featured here is the collection os instagram filters made for the exciting events at the zoo such as Boo at the Zoo, Zootoberbest, and Wild Lights.",
      roleSummary:
        "My role in each of these experiences was the sole AR developer working in both Lens Studio and Meta Spark. Additionally I assisted in overall concepting, creative direction, and client communication. I collaborated closely with 3D artists, graphics designers, and copywriters at Paradowski Creative throughout the entire process.",
      gallery: [
        //UNSEEN ZOO
        { image: "/project_assets/stl_zoo/penguins_reel-1.mp4" },
        { image: "/project_assets/stl_zoo/hellbender_reel-1.mp4" },
        { image: "/project_assets/stl_zoo/apes_reel-1.mp4" },
        // ENDANGERED SPECIES DAY
        { image: "/project_assets/stl_zoo/ESDQuizPreview.mov" },
        { image: "/project_assets/stl_zoo/ESD_Sizzle.mp4" },
        { image: "/project_assets/stl_zoo/VID_195340509_110521_891.mp4" },
        //ESD filters
        { image: "/project_assets/stl_zoo/RedPanda.mov" },
        { image: "/project_assets/stl_zoo/HornedGuan.mov" },
        { image: "/project_assets/stl_zoo/ArmenianViper.mov" },
        //EVENTS
        { image: "/project_assets/stl_zoo/preview_booAtZoo_02.mov" },
        { image: "/project_assets/stl_zoo/preview_zootoberfest.mov" },
        { image: "/project_assets/stl_zoo/WL_preview_02.mov" },
      ],
    },
    {
      title: "Sesame Street Social Media Filters",
      image: "https://picsum.photos/id/237/1920/1080",
      cover: "https://picsum.photos/id/237/1920/1080",
      category: "AR Filters",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      roleSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      toolsUsed: "Blender | 8th Wall | Illustrator",
      gallery: [
        { image: "https://picsum.photos/id/100/1920/1080" },
        { image: "https://picsum.photos/id/101/1920/1080" },
        { image: "https://picsum.photos/id/102/1920/1080" },
      ],
    },
    {
      title: "United Soybean Board",
      image: "/project_assets/usb/SMM.jpg",
      cover: "https://picsum.photos/id/237/1920/1080",
      category: "Web AR",
      summary:
        "For the United Soybean Board's booth at Commodity Classic 2024 Paradowski Creative created a variety of technical activations to enhance their booth, including these two interactive AR experiences built into one site.",
      roleSummary:
        "I was the sole developer for the AR filters and the website, including the portal and I was overall consultant for all AR work. I aided in testing and collaboration for the AR Mirror wall. I was also able to attend the event and act as a technical guide for our guests",
      toolsUsed: "Blender | 8th Wall | Illustrator",
      gallery: [
        { image: "https://picsum.photos/id/100/1920/1080" },
        { image: "https://picsum.photos/id/101/1920/1080" },
        { image: "https://picsum.photos/id/102/1920/1080" },
      ],
    },
    {
      title: "Adidas x Candace Parker",
      image: "https://picsum.photos/id/100/1920/1080",
      cover: "https://picsum.photos/id/237/1920/1080",
      category: "Web AR",
      summary:
        "For the launch of the Ace Collection, Adidas teamed up with Hovers Over Water to send stylized boxes of shoes and swag to celebrities, influencers, media, and Candace’s close circle.To bring Candace’s brand to life, we created immersive 3D WebAR scenes narrated by Candace, featuring key moments from her life and career all featuringwhat makes Ace unique, her story as a hooper, mom, and style icon.The experience included 2D video, interactive 3D scenes, and a custom basketball game that connected fans to Parker’s story and the meaning behind the shoes.What would’ve been a simple shoebox became an engaging, memorable way for Candace’s community and sneaker fans to connect with Ace.",
      roleSummary:
        "able to attend the event and act as a technical guide for our guests",
      toolsUsed: "8th Wall ",
      gallery: [
        { image: "https://picsum.photos/id/100/1920/1080" },
        { image: "https://picsum.photos/id/101/1920/1080" },
        { image: "https://picsum.photos/id/102/1920/1080" },
      ],
    },
    {
      title: "Augmented Reality Gallery",
      image: "https://picsum.photos/id/237/1920/1080",
      category: "Social AR Filters",
      summary:
        " This gallery features both my personal and client AR work made both individually with Paradowski Creative. I was the sole AR developer for each of the folliwng projects, often in collaboration with 3D Artists and Designers for asset developerment.",
      toolsUsed: " 8th Wall | Effect House | Lens Studio | Spark AR",
      gallery: [
        { image: "/project_assets/ar_gallery/2024-05-08-101949162.mp4" },
        { image: "/project_assets/ar_gallery/VID_191770109_163036_557.mp4" },
        { image: "/project_assets/ar_gallery/dancingSteve.mp4" },
        { image: "/project_assets/ar_gallery/DrawToRevealPost.mp4" },
        {
          image:
            "/project_assets/ar_gallery/Screen_Recording_20220901-131647_Instagram.mp4",
        },
        {
          image:
            "/project_assets/ar_gallery/Screen_Recording_20221010_142718_Instagram.mp4",
        },
        {
          image:
            "/project_assets/ar_gallery/Screen_Recording_20221122_095205_Chrome.mp4",
        },
        {
          image:
            "/project_assets/ar_gallery/Screen_Recording_20221207_165009_TikTok.mp4",
        },
        {
          image:
            "/project_assets/ar_gallery/Screen_Recording_20221207_165102_TikTok.mp4",
        },
        {
          image:
            "/project_assets/ar_gallery/Screen_Recording_20230104_101701_Snapchat.mp4",
        },
        {
          image:
            "/project_assets/ar_gallery/Screen_Recording_20230118_104449_Instagram.mp4",
        },
        {
          image:
            "/project_assets/ar_gallery/Screen_Recording_20240315_105239_TikTok.mp4",
        },
        {
          image:
            "/project_assets/ar_gallery/Screen_Recording_20240417_202413_Chrome.mp4",
        },
        {
          image:
            "/project_assets/ar_gallery/Screen_Recording_20241015_094447_Chrome.mp4",
        },
        { image: "/project_assets/ar_gallery/1000021723.mp4" },
      ],
    },
    {
      title: "Photography Gallery",
      image: "/project_assets/photography/DSC06889.jpg",
      category: "Photography",
      summary:
        " I enjoy photography as a hobbyist! Here's some of my favorites!",
      roleSummary: null,
      toolsUsed: null,
      gallery: [
        { image: "/project_assets/photography/DSC06889.jpg" },
        { image: "/project_assets/photography/DSC06896.jpg" },
        { image: "/project_assets/photography/DSC06903.jpg" },
        { image: "/project_assets/photography/DSC06919.jpg" },
        { image: "/project_assets/photography/DSC06945.jpg" },
        { image: "/project_assets/photography/DSC06952.jpg" },
        { image: "/project_assets/photography/DSC06958.jpg" },
        { image: "/project_assets/photography/DSC06967.jpg" },
        { image: "/project_assets/photography/DSC06978.jpg" },
        { image: "/project_assets/photography/DSC06981.jpg" },
        { image: "/project_assets/photography/DSC07026.jpg" },
        { image: "/project_assets/photography/DSC08290.jpg" },
        { image: "/project_assets/photography/DSC08312.jpg" },
        { image: "/project_assets/photography/DSC08334.jpg" },
        { image: "/project_assets/photography/DSC08348.jpg" },
        { image: "/project_assets/photography/DSC08364.jpg" },
        { image: "/project_assets/photography/DSC08404.jpg" },
        { image: "/project_assets/photography/DSC08412.jpg" },

        {
          image:
            "/project_assets/photography/20AD857C-6EC5-415F-A689-52D6D3F5DA91.jpeg",
        },
        {
          image:
            "/project_assets/photography/55FC59A8-ED31-4C77-9F6A-3C86FFE94D9C.jpeg",
        },
        { image: "/project_assets/photography/20230915_194606.jpg" },
        { image: "/project_assets/photography/flamingo.jpg" },
        // { image: "/project_assets/photography/IMG_0230.JPG" },
        { image: "/project_assets/photography/IMG_20181004_091416_635.jpg" },
        // { image: "/project_assets/photography/DSC06908.jpg" },
        // {
        //   image:
        //     "/project_assets/photography/17BE7FCC-B1E3-472B-B918-EB099614C007.jpeg",
        // },
      ],
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };

  {
    /* ==================================================================================================== */
  }
  {
    /* CONTENT */
  }
  {
    /* ==================================================================================================== */
  }

  return (
    <div className="work-page">
      {/* Video at the top */}
      <div className="video-container">
        <video controls className="work-video">
          <source src="https://files.catbox.moe/uay7us.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Grid with customizable items */}
      <div className="grid-container">
        {gridItems.map((item, index) => (
          <div
            key={index}
            className={`grid-item item-${index + 1}`}
            onClick={() => openModal(item)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="grid-item-image"
            />
            <h3 className="grid-item-title">{item.title}</h3>
          </div>
        ))}
      </div>

      {/* ==================================================================================================== */}
      {/* MODAL */}
      {/* ==================================================================================================== */}

      {modalOpen && selectedItem && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close-btn" onClick={closeModal}>
              ×
            </button>

            <div className="main-content">
              {/* Cover Media (image, video file, or video URL) ------------------------ */}
              {selectedItem.cover &&
                (() => {
                  const coverUrl = selectedItem.cover;
                  const ext = coverUrl.split(".").pop().toLowerCase();
                  // Check for YouTube or Vimeo URL
                  const isYouTube =
                    /youtu(be)?\.([a-z]+)/i.test(coverUrl) ||
                    coverUrl.includes("youtube.com");
                  const isVimeo = coverUrl.includes("vimeo.com");
                  if (isYouTube) {
                    // Extract YouTube video ID
                    let videoId = "";
                    const match = coverUrl.match(
                      /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|shorts\/))([\w-]{11})/
                    );
                    if (match && match[1]) videoId = match[1];
                    else if (coverUrl.includes("watch?v="))
                      videoId = coverUrl.split("watch?v=")[1].split("&")[0];
                    if (videoId) {
                      return (
                        <div className="modal-cover-embed">
                          <iframe
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title={selectedItem.title || "YouTube video"}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      );
                    }
                  } else if (isVimeo) {
                    // Extract Vimeo video ID
                    const match = coverUrl.match(/vimeo\.com\/(\d+)/);
                    const videoId = match && match[1] ? match[1] : "";
                    if (videoId) {
                      return (
                        <div className="modal-cover-embed">
                          <iframe
                            src={`https://player.vimeo.com/video/${videoId}`}
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            title={selectedItem.title || "Vimeo video"}
                          />
                        </div>
                      );
                    }
                  } else if (["mp4", "webm", "ogg"].includes(ext)) {
                    return (
                      <video src={coverUrl} controls className="modal-cover" />
                    );
                  } else {
                    // Default to image
                    return (
                      <img
                        src={coverUrl}
                        alt={selectedItem.title || "Project Cover"}
                        className="modal-cover"
                      />
                    );
                  }
                  return null;
                })()}
              {selectedItem.title && (
                <h2 className="modal-title">{selectedItem.title}</h2>
              )}
              {/* Category ----------------------------------------------------------*/}
              {selectedItem.category && (
                <p className="modal-category">
                  <strong>Category:</strong> {selectedItem.category}
                </p>
              )}
              {/* Tools Used ---------------------------------------------------------- */}
              {selectedItem.toolsUsed && (
                <p className="modal-tools">
                  <strong>Tools:</strong> {selectedItem.toolsUsed}
                </p>
              )}
              {/* Summary ---------------------------------------------------------- */}
              {selectedItem.summary && (
                <>
                  <h2>Summary</h2>
                  <p className="modal-summary">{selectedItem.summary}</p>
                </>
              )}
              {/* Role Summary ----------------------------------------------------------*/}
              {selectedItem.roleSummary && (
                <>
                  <h2>My Role</h2>
                  <p>{selectedItem.roleSummary}</p>
                </>
              )}
              {/* Credits ---------------------------------------------------------- */}
              {selectedItem.credits && (
                <p className="modal-credits">
                  <strong>Credits:</strong> {selectedItem.credits}
                </p>
              )}
              {/* Links ---------------------------------------------------------- */}
              {selectedItem.link &&
                Array.isArray(selectedItem.link) &&
                selectedItem.link.filter((l) => l && l.link_title && l.link_src)
                  .length > 0 && (
                  <div className="modal-links">
                    <h2>Links</h2>
                    <ul>
                      {selectedItem.link
                        .filter((l) => l && l.link_title && l.link_src)
                        .map((l, idx) => (
                          <li key={idx}>
                            <a
                              href={l.link_src}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {l.link_title}
                            </a>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
              {/* Gallery ---------------------------------------------------------- */}
              {selectedItem.gallery &&
                Array.isArray(selectedItem.gallery) &&
                selectedItem.gallery.length > 0 && (
                  <>
                    <div className="project-gallery">
                      {selectedItem.gallery.map((media, idx) => {
                        const url =
                          media && (media.image || media.video || media.gif);
                        if (!url) return null;
                        const ext = url.split(".").pop().toLowerCase();
                        // Check for YouTube or Vimeo URL
                        const isYouTube =
                          /youtu(be)?\.([a-z]+)/i.test(url) ||
                          url.includes("youtube.com");
                        const isVimeo = url.includes("vimeo.com");
                        if (isYouTube) {
                          // Extract YouTube video ID
                          let videoId = "";
                          const match = url.match(
                            /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|shorts\/))([\w-]{11})/
                          );
                          if (match && match[1]) videoId = match[1];
                          else if (url.includes("watch?v="))
                            videoId = url.split("watch?v=")[1].split("&")[0];
                          if (videoId) {
                            return (
                              <div
                                className="gallery-media gallery-media-embed"
                                key={idx}
                              >
                                <iframe
                                  src={`https://www.youtube.com/embed/${videoId}`}
                                  title={`gallery-youtube-${idx}`}
                                  frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                />
                              </div>
                            );
                          }
                        } else if (isVimeo) {
                          // Extract Vimeo video ID
                          const match = url.match(/vimeo\.com\/(\d+)/);
                          const videoId = match && match[1] ? match[1] : "";
                          if (videoId) {
                            return (
                              <div
                                className="gallery-media gallery-media-embed"
                                key={idx}
                              >
                                <iframe
                                  src={`https://player.vimeo.com/video/${videoId}`}
                                  frameBorder="0"
                                  allow="autoplay; fullscreen; picture-in-picture"
                                  allowFullScreen
                                  title={`gallery-vimeo-${idx}`}
                                />
                              </div>
                            );
                          }
                        } else if (["mp4", "webm", "ogg"].includes(ext)) {
                          return (
                            <video
                              key={idx}
                              src={url}
                              controls
                              className="gallery-media"
                              onLoadedMetadata={(e) => {
                                if (
                                  e.target.videoHeight > e.target.videoWidth
                                ) {
                                  e.target.classList.add("vertical");
                                }
                              }}
                            />
                          );
                        } else {
                          return (
                            <img
                              key={idx}
                              src={url}
                              alt={`gallery-${idx}`}
                              className={`gallery-media`}
                              onLoad={(e) => {
                                if (
                                  e.target.naturalHeight > e.target.naturalWidth
                                ) {
                                  e.target.classList.add("vertical");
                                }
                              }}
                            />
                          );
                        }
                        return null;
                      })}
                    </div>
                  </>
                )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;
