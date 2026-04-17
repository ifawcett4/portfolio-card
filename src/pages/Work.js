import React, { useState, useEffect } from "react";
import "../stylesheets/work.scss";
import SceneCanvas from "../components/ThreeScene";

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
      summary:
        "We built an immersive educational AR experience demo using VPS and Gaussian splats, featuring the Nydia statue at Saint Louis Art Museum for our submission to 8th Wall's Real World Impact Challenge. The experience transports users to a moment in time where they can step into and explore to experience the chaos of the eruption of Mt. Vesuvius with Nydia. We used VPS to anchor the AR content to the statue in real-time. We 3D modeled the imagined environment around Nydia in her story, and then to further push the realism we digitally photo-scanned the model and created a .ply Gaussian splat of it to capture a high level of detail. We then converted this .ply to an .spz to make it compatible with 8th Wall's Studio to bring it into our scene. The scene also features spatial audio, informational ui, and voiceover narration to fully engage the user. Nydia has won the VPS Grand Prize for 8th Wall's Real World Impact Challenge. This Prize is awarded to the entry that best integrates VPS technology to create an engaging, real-world AR experience that connects players with their surroundings in a new and interactive way.",
      roleSummary:
        "This was an indepdent personal project, Noah Ilbery and I collaborated on together. I acted as the developer for the project, working in Niantic Studio. We both developed the concept and creative directio together.",
      credits: "Noah Ilbery | 8th Wall | VIVERSE",
      gallery: [
        {
          image:
            "/project_assets/nydia/2dd8jm3vjc20jtbxypods1hf7s7kfmn7kdqt5gy0x8y1pncbil07fol4-540x960.jpg",
        },
        {
          image:
            "/project_assets/nydia/2q1s1fljg6ms73y3zbvhkbooyvxzu69tj0oc9amne1sokmqfikedn68x-540x960.jpg",
        },
        {
          image:
            "/project_assets/nydia/2tmaamr215tryukcgrzocq3x4icow7xoatmipkhjstm8yn62qu7racl0-540x960.jpg",
        },
        {
          image:
            "/project_assets/nydia/4sfdaimt4oxyhiqmk40c87im4hwzbi2qqhj0i6b4in503ixfqga3d7w1-540x960.gif",
        },
        { image: "https://youtu.be/s-_2jrnb2TY?si=wTj-a_6IHqv8pUSL" },
        { image: "https://youtu.be/zYneIDcUDuk?si=G8cLiRKsEDTJ4FgM" },
      ],
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
        { image: "/project_assets/stl_zoo/ESDQuizPreview.mp4" },
        { image: "/project_assets/stl_zoo/ESD_Sizzle.mp4" },
        { image: "/project_assets/stl_zoo/VID_195340509_110521_891.mp4" },
        //ESD filters
        { image: "/project_assets/stl_zoo/RedPanda.mp4" },
        { image: "/project_assets/stl_zoo/HornedGuan.mp4" },
        { image: "/project_assets/stl_zoo/ArmenianViper.mp4" },
        //EVENTS
        { image: "/project_assets/stl_zoo/preview_booAtZoo_02.mp4" },
        { image: "/project_assets/stl_zoo/preview_zootoberfest_03.mp4" },
        { image: "/project_assets/stl_zoo/WL_preview_02.mp4" },
      ],
    },
    {
      title: "Sesame Street Social Media Filters",
      image: "/project_assets/sesame_filters/elmocover-100.jpg",
      category: "AR Filters",
      toolsUsed: " Effect House | Spark AR ",
      credits: "Sesame Street | Paradowski Creative ",
      summary:
        "Sesame Street aimed to strengthen their social media presence and reconnect with their older audience who feel nostalgic about the beloved Sesame characters. To bring this vision to life, they partnered with us to create interactive filters for both Instagram and TikTok. Our first filter being a  This or That style quiz in which users can pick which character they would rather do certain activities with and reminisce about their favorite characters. Dancing Elmo features three separate popular Elmo songs each featuring a 3D dancing Elmo that users can interact with in their real life environment",
      roleSummary:
        "I was the sole AR developer for this project working in both Effect House and Spark AR. I created custom weighted logic to create a tier system for the priority order of characters in the quiz while ensuring results do not repeat. For the dancing characters I created custom shadows and the ability to switch between the different dances on Instagram.",
      gallery: [
        { image: "/project_assets/sesame_filters/2025-01-06-114956882.mp4" },
        { image: "/project_assets/sesame_filters/2025-01-06-115117627.mp4" },
        {
          image:
            "/project_assets/sesame_filters/dc821b9e2ea1ced326c223c238f6214f.mp4",
        },
        {
          image:
            "/project_assets/sesame_filters/Screen_Recording_20250106_121519_Instagram.mp4",
        },
        {
          image:
            "/project_assets/sesame_filters/8d7e11ad5eb2df514aededf6732aa5b8.mp4",
        },
        {
          image:
            "/project_assets/sesame_filters/8e7be810-3e56-41e8-8675-daaa6cbc1c71.mp4",
        },
      ],
    },
    {
      title: "United Soybean Board",
      image: "/project_assets/usb/SMM.jpg",
      cover: "https://player.vimeo.com/video/1082935571?h=2a5a18a617",
      category: "Web AR",
      toolsUsed: "8th Wall Cloud Editor ",
      credits: "United Soybean Board | Paradowski Creative ",
      summary:
        "For the United Soybean Board's booth at Commodity Classic 2024 we created a variety of technical activations to enhance their booth, including these two interactive AR experiences built into one site. In the Soy Much More Portal experience users can immerse themselves in a full 360 stylized world all about soy. The experience includes interactive and informational hotspots that can be tapped to learn more about all the different uses of soy. We also sent a postcard to attendees ahead of the event to build excitement for Commodity Classic. This postcard features the Soy Much More logo and additional 3D soy content that pops up out of the card and gives users a tastse of what they might see at the USB booth this year",
      roleSummary:
        "I was the sole developer for the AR filters and the website, including the portal and I was overall consultant for all AR work. I aided in testing and collaboration for the AR Mirror wall. I was also able to attend the event and act as a technical guide for our guests!",
      gallery: [
        {
          image:
            "/project_assets/usb/Screen_Recording_20240221_091008_Chrome.mp4",
        },
        {
          image:
            "/project_assets/usb/Screen_Recording_20240328_094726_Chrome.mp4",
        },
        {
          image:
            "/project_assets/usb/Screen_Recording_20240328_095015_Chrome.mp4",
        },
        ,
      ],
    },
    {
      title: "Adidas x Candace Parker",
      image: "/project_assets/adidas/Adidas_cover.png",
      cover: "/project_assets/adidas/adidas_case_study.mp4",
      category: "Web AR",
      summary:
        "For the launch of the Ace Collection, Adidas teamed up with Hovers Over Water to send stylized boxes of shoes and swag to celebrities, influencers, media, and Candace’s close circle.To bring Candace’s brand to life, we created immersive 3D WebAR scenes narrated by Candace, featuring key moments from her life and career all featuringwhat makes Ace unique, her story as a hooper, mom, and style icon.The experience included 2D video, interactive 3D scenes, and a custom basketball game that connected fans to Parker’s story and the meaning behind the shoes.What would’ve been a simple shoebox became an engaging, memorable way for Candace’s community and sneaker fans to connect with Ace.",
      roleSummary:
        "I was a junior developer for this project. I primarily focused on initial demos for the hoop shooter game, and buiding UI elements including CSS animations. I also got the opportunity to be featured in the case study video!",
      toolsUsed: "8th Wall ",
      gallery: [{ image: "/project_assets/adidas//adidas_other.mp4" }],
    },
    {
      title: "Escape Artist",
      image: "/project_assets/esc_art/meta-new-tab-image.jpg",
      cover: "https://vimeo.com/879963837?fl=pl&fe=sh",
      category: "Web VR",
      toolsUsed: "Wonderland Engine | JavaScript | Blender",
      summary:
        "Escape Artist is a web XR escape room featuring a narrative about the artist and the muse. In this game the user must solve a variety of puzzles to unlock and reveal new sections of the map until they win. Escape Artist is featured on the Browser home page of the Meta Quest 2 and was recognized as the People’s Voice Winner for Best Narrative Experience at the 2024 Webby Awards and the WebXR Awards’ Experience of the Year.",
      roleSummary:
        "I was a Junior Developer at the time, but I was given the opportunity to fully dive in and work on core feature development and overall concepting for this game. The main sections I had the privilege of working on were the piano key puzzle and the bookcase puzzle. I also contributed to the implementation of most of the UI. ",
      gallery: [
        {
          image: "/project_assets/esc_art/escape-artist_0001_Layer-30.png",
        },
        {
          image: "/project_assets/esc_art/meta_connect.png",
        },
        {
          image: "/project_assets/esc_art/escape-artist_0016_Layer-15.png",
        },
        {
          image: "/project_assets/esc_art/escape-artist_0028_Layer-3.png",
        },
        {
          image: "/project_assets/esc_art/escape-artist_0029_Layer-2.png",
        },
        {
          image: "/project_assets/esc_art/escape-artist_0030_Layer-1.png",
        },
      ],
    },
    {
      title: "Holiday Interactive Mirror",
      image: "/project_assets/holiday_mirror/bylanternlight-3d.png",
      cover: "/project_assets/holiday_mirror/20251207_193732_1.mp4",
      category: "Local AR",
      toolsUsed: "Unity",
      credits: "Paradowski Creative",
      summary:
        "For the company Holiday Party, I was asked if we could create an interactive mirror as a fun entertainment piece for the guests. Fitting with the winter woodland theme of the party, I paired with creatives and a 3D artist to bring this idea to life. The interaction works by using a ZED camera for body tracking paired with their Unity SDK to drive the behavior for those tracked movements. The key features of the experience include a proximity-triggered lantern that lights up when guests are near, a deer that turns its attention to users when they approach, and physics-based wobbly trees that interact with the guests’ movements.",
      roleSummary:
        "I was the only developer working in collaboration with a Creative Director and 3D Artist to create the content and build this project over a few weeks. Some of the logic references a previous AR mirror made by Paradowksi Creative as a reference and starting point. ",
      gallery: [
        {
          image: "/project_assets/holiday_mirror/devupdate_12_03.mp4",
        },
      ],
    },
    {
      title: "Augmented Reality Gallery",
      image: "/project_assets/ar_gallery/arcover-100.jpg",
      category: "Social AR Filters",
      summary:
        " This gallery features both my personal and client AR work made both individually with Paradowski Creative. Some projects featured were purely proof of concept for proposals only. I was the sole AR developer for each of the folliwng projects, often in collaboration with 3D Artists and Designers for asset development.",
      toolsUsed: " 8th Wall | Effect House | Lens Studio | Spark AR",
      gallery: [
        {
          image: "/project_assets/ar_gallery/grey_goos_catcher.mp4",
        },
        {
          image: "/project_assets/ar_gallery/zebra_cup.mp4",
        },
        {
          image: "/project_assets/ar_gallery/dancingSteve.mp4",
        },
        {
          image: "/project_assets/ar_gallery/dancing_cornelius.mp4",
        },
        {
          image: "/project_assets/ar_gallery/FOD_360.mp4",
        },
        {
          image: "/project_assets/ar_gallery/calavera.mp4",
        },
        {
          image: "/project_assets/ar_gallery/DrawToRevealPost.mp4",
        },
        {
          image: "/project_assets/ar_gallery/harvest_hayday.mp4",
        },
        {
          image: "/project_assets/ar_gallery/purina_dog_sizes.mp4",
        },
        {
          image: "/project_assets/ar_gallery/grey_goose.mp4",
        },
        {
          image: "/project_assets/ar_gallery/crop_collector.mp4",
        },
        {
          image: "/project_assets/ar_gallery/fireflies.mp4",
        },
      ],
    },
    {
      title: "Journey Of a Soybean",
      image: "/project_assets/usb_scrollsite/scrollsite_cover.png",
      cover: "/project_assets/usb_scrollsite/usb_scrollsite.mp4",
      category: "Web Development",
      toolsUsed: "HTML | CSS | JavaScript | React | Lottie",
      credits: "Paradowski Creative",
      summary:
        "The Journey of a Soybean is a scrollytelling style website and kiosk interaction that tells the story of the many pathways soybeans can take to end up in different forms for several different uses. This site was initially built to be featured on a kiosk and then also expanded as an evergreen website that the United Soybean Board uses for educational and informational purposes. The site featured scroll triggered animations as a user scrolls through the experience. ",
      roleSummary:
        "I operated as a creative in the initial concepting stage of this project, and then one of two main developers to build key features. A section I particularly enjoyed developing was the particle effect making upo the 85% on the food,feed, and fuel pages.",
      gallery: [
        { image: "/project_assets/usb_scrollsite/usb_scrollsite_01.mp4" },
        { image: "/project_assets/usb_scrollsite/usb_scrollsite_01.jpg" },
        { image: "/project_assets/usb_scrollsite/usb_scrollsite_02.jpg" },
        { image: "/project_assets/usb_scrollsite/usb_scrollsite_03.jpg" },
        { image: "/project_assets/usb_scrollsite/usb_scrollsite_04.jpg" },
        { image: "/project_assets/usb_scrollsite/usb_scrollsite_05.png" },
        { image: "/project_assets/usb_scrollsite/usb_scrollsite_06.jpg" },
        { image: "/project_assets/usb_scrollsite/usb_scrollsite_07.jpg" },
        { image: "/project_assets/usb_scrollsite/usb_scrollsite_00.jpg" },
      ],
    },

    {
      title: "Research & Development Projects",
      image: "/project_assets/RD/RD_Cover.jpg",
      summary:
        "A collection of research and development projects, exploring different technologies. These projects are not fully polished client work, but explorations and fun creations simply for the sake of learning.",
      subsections: [
        {
          subTitle: "AR Coloring Sheets ",
          subSummary:
            "I spent some time looking into creating an AR interactive coloring sheet experience. In this expereince, the user colors a specific coloring sheet, then they scan it with their phone to watch it come to life in 3D in web AR. The scan utilized 8th Wall image target scanning to read the coloring sheet as the base image target, then applied perspective correction to then pull out the drawing and apply it as the texture to the 3D model. ",
          subContent: "/project_assets/RD/ar_coloring.mp4",
        },
        {
          subTitle: "Good Chilld Bunting ",
          subSummary:
            "A fun R&D project to celebrate the Saint Louis Cardinals opening day. The purpose of this was to explore Snap's AR technology and experiment with pushing it into something more of an interactive kiosk game type of experience. The team consistened of just me and the developer and a 3D artist to build assets. We collaborated to imagine an AR powered baseball batting game, which became more of a bunting game. The pitcher is a 3D scan of one of our Creative Directors which was then rigged and animated. In this game the ball is pitched to one random zone and the hit point of the bat has to be aligned with that zone in time to qualify as a hit.",
          subContent: "/project_assets/RD/PC_Bunting_Demo.mp4",
        },
        {
          subTitle: "Godot Mini Games",
          subSummary:
            "As a way to begin learning Godot, I developed two potential mini games for a Kiosk display at a trade show event. The first game mechanic is a tap to plant the crops in all the correct plots without hitting any wrong spots before time runs out. In the second game, the user must tap bugs to keep them off their crops. ",
          subContent: "/project_assets/RD/FV_templates_0116.mp4",
        },
        {
          subTitle: "3D Interactive Scene",
          subSummary:
            "A Playcanvas experiment for an RFP to create a multi-platform information web experience. The interaction features a main intro scene with hotspot, and then two sub scenes featuring information about above and below ground technology. Each section features different 3D content, a 360 environment, and is functionaly for multiple device types and sizes.",
          subContent: "/project_assets/RD/vt4pro.mp4",
        },
      ],
    },

    {
      title: "Capstone: Interactive Projection",
      image: "/project_assets/capstone/room1le0027.jpg",
      cover: "https://youtu.be/XvG-k9Gkixg?si=dFY5xspmQGkq1Eru",
      category: "Interactive Exhibit",
      toolsUsed: " Kinect | Electron | Lottie | HTML | CSS | JavaScript ",
      summary:
        "Into the Deep is my Capstone project from my Interactive Design degree at Maryville University. While this is student work, and I have learned much since. We were prompted to design an app or experience for our capstone, and I wanted to push it even further and ended up creating a fully interactive projection experience. I utilized an Xbox Kinect for body tracking and then formed three different interactive scenes, each featuring a different core interaction and educational content about jellyfish. The idea is that this could exist as an exhibit at a science center, aquarium, or zoo as a form of edutainment. While I would go about this project entirely differently today, I wanted to keep this in my portfolio since I think it’s a fun example of where I started and where my interest in interactive technology really started",
      roleSummary:
        "As this was my Capstone project independently, concepted, designed, and developed all elements of this project. I also taught myself 3D modeling, node.js, and Electron just to bring this project to life. It was a great creative and learning experience.",
      gallery: [
        {
          image: "/project_assets/capstone/tourVideo.mp4",
        },
        {
          image: "/project_assets/capstone/20210219_132525.mp4",
        },
        {
          image: "/project_assets/capstone/20210219_141257.mp4",
        },
        {
          image: "/project_assets/capstone/room1i0088.jpg",
        },

        {
          image: "/project_assets/capstone/pics1_0000.jpg",
        },
      ],
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalLoading, setModalLoading] = useState(false);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalLoading(true);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
    setModalLoading(false);
  };

  const handleModalMediaReady = () => {
    setModalLoading(false);
  };

  useEffect(() => {
    if (!modalOpen) return;
    if (!selectedItem || !selectedItem.cover) {
      setModalLoading(false);
    }
  }, [modalOpen, selectedItem]);

  useEffect(() => {
    // Fade in grid items on scroll
    if (typeof window === "undefined") return;
    const items = document.querySelectorAll(".grid-item");
    if (!items || items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // When modal opens, observe the modal children inside the modal scroll root
    if (!modalOpen) return;
    const root = document.querySelector(".modal-content");
    if (!root) return;

    // Ensure modal itself animates in
    root.classList.add("is-visible");

    const targets = root.querySelectorAll(
      ".main-content > * , .project-gallery .gallery-media",
    );
    if (!targets || targets.length === 0) return;

    const modalObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            modalObserver.unobserve(entry.target);
          }
        });
      },
      { root: root, threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
    );

    targets.forEach((t) => modalObserver.observe(t));

    return () => modalObserver.disconnect();
  }, [modalOpen]);

  /* ==================================================================================================== */
  /* CONTENT */
  /* ==================================================================================================== */

  return (
    <div>
      <div className="work-page">
        {/* Video at the top */}
        <div className="video-container">
          {/* <video controls className="work-video">
          <source src="https://files.catbox.moe/uay7us.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        </div>

        {/* Grid with customizable items */}
        <div className="grid-container">
          {gridItems.map((item, index) => (
            <div
              key={index}
              className={`grid-item item-${index + 1}`}
              onClick={() => openModal(item)}
              style={{ transitionDelay: `${Math.min(300, index * 70)}ms` }}
            >
              <div className="grid-item-inner">
                <img
                  src={item.image}
                  alt={item.title}
                  className="grid-item-image"
                  loading="lazy"
                  decoding="async"
                />
                <div className="gradient"></div>
                <h3 className="grid-item-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ==================================================================================================== */}
      {/* MODAL */}
      {/* ==================================================================================================== */}

      {modalOpen && selectedItem && (
        <div className="modal-overlay">
          <div
            className={`modal-content ${modalLoading ? "is-loading" : "is-visible"}`}
          >
            {modalLoading && (
              <div className="modal-loading-overlay">
                <div className="modal-loading-spinner" />
              </div>
            )}
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
                      /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|shorts\/))([\w-]{11})/,
                    );
                    if (match && match[1]) videoId = match[1];
                    else if (coverUrl.includes("watch?v="))
                      videoId = coverUrl.split("watch?v=")[1].split("&")[0];
                    if (videoId) {
                      return (
                        <div className="modal-cover-embed">
                          <iframe
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1`}
                            title={selectedItem.title || "YouTube video"}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            onLoad={handleModalMediaReady}
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
                            src={`https://player.vimeo.com/video/${videoId}?autoplay=1&muted=1&playsinline=1`}
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            title={selectedItem.title || "Vimeo video"}
                            onLoad={handleModalMediaReady}
                          />
                        </div>
                      );
                    }
                  } else if (["mp4", "webm", "ogg"].includes(ext)) {
                    return (
                      <video
                        src={coverUrl}
                        controls
                        className="modal-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        onLoadedData={handleModalMediaReady}
                      />
                    );
                  } else {
                    return (
                      <img
                        src={coverUrl}
                        alt={selectedItem.title || "Project Cover"}
                        className="modal-cover"
                        loading="lazy"
                        decoding="async"
                        onLoad={handleModalMediaReady}
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
              {/* Credits ---------------------------------------------------------- */}
              {selectedItem.credits && (
                <p className="modal-credits">
                  <strong>Credits:</strong> {selectedItem.credits}
                </p>
              )}
              {/* Summary ---------------------------------------------------------- */}
              {selectedItem.summary && (
                <>
                  <h2 className="summary-title">Summary</h2>
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
              {/* Links ---------------------------------------------------------- */}
              {selectedItem.link &&
                Array.isArray(selectedItem.link) &&
                selectedItem.link.filter((l) => l && l.link_title && l.link_src)
                  .length > 0 && (
                  <div className="modal-links">
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
                            /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|shorts\/))([\w-]{11})/,
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
                                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1`}
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
                                  src={`https://player.vimeo.com/video/${videoId}?autoplay=1&muted=1&playsinline=1`}
                                  frameBorder="0"
                                  allow="autoplay; fullscreen; picture-in-picture"
                                  allowFullScreen
                                  title={`gallery-vimeo-${idx}`}
                                />
                              </div>
                            );
                          }
                        } else if (
                          ["mp4", "webm", "ogg", "mov"].includes(ext)
                        ) {
                          return (
                            <video
                              key={idx}
                              src={url}
                              controls
                              muted
                              autoPlay
                              loop
                              playsInline
                              allow="autoplay; fullscreen; picture-in-picture"
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
                              loading="lazy"
                              decoding="async"
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

              {/* subsections ---------------------------------------------------------- */}
              {selectedItem.subsections &&
                Array.isArray(selectedItem.subsections) &&
                selectedItem.subsections.length > 0 && (
                  <>
                    {selectedItem.subsections.map((subsection, idx) => {
                      const url = subsection.subContent;
                      if (!url) return null;
                      const ext = url.split(".").pop().toLowerCase();
                      // Check for YouTube or Vimeo URL
                      const isYouTube =
                        /youtu(be)?\.([a-z]+)/i.test(url) ||
                        url.includes("youtube.com");
                      const isVimeo = url.includes("vimeo.com");

                      let mediaElement;
                      if (isYouTube) {
                        // Extract YouTube video ID
                        let videoId = "";
                        const match = url.match(
                          /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|shorts\/))([\w-]{11})/,
                        );
                        if (match && match[1]) videoId = match[1];
                        else if (url.includes("watch?v="))
                          videoId = url.split("watch?v=")[1].split("&")[0];
                        if (videoId) {
                          mediaElement = (
                            <div className="subsection-media-embed">
                              <iframe
                                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1`}
                                title={`subsection-youtube-${idx}`}
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
                          mediaElement = (
                            <div className="subsection-media-embed">
                              <iframe
                                src={`https://player.vimeo.com/video/${videoId}?autoplay=1&muted=1&playsinline=1`}
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                title={`subsection-vimeo-${idx}`}
                              />
                            </div>
                          );
                        }
                      } else if (["mp4", "webm", "ogg", "mov"].includes(ext)) {
                        mediaElement = (
                          <video
                            src={url}
                            controls
                            muted
                            autoPlay
                            loop
                            playsInline
                            allow="autoplay; fullscreen; picture-in-picture"
                            className="subsection-media"
                            onLoadedMetadata={(e) => {
                              if (e.target.videoHeight > e.target.videoWidth) {
                                e.target.classList.add("vertical");
                              }
                            }}
                          />
                        );
                      } else {
                        mediaElement = (
                          <img
                            src={url}
                            alt={`subsection media ${idx + 1}`}
                            className="subsection-media"
                            loading="lazy"
                            decoding="async"
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

                      return (
                        <div key={idx} className="subsection">
                          {mediaElement}
                          <h2 className="summary-title">
                            {subsection.subTitle}
                          </h2>
                          <p className="modal-subsummary">
                            {subsection.subSummary}
                          </p>
                        </div>
                      );
                    })}
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
