document.addEventListener("DOMContentLoaded", function () {
    const items = [
        {
            title: '"Grace in Motion"',
            meta: "Coach Kazuha | Ballet | Beginner–Intermediate",
            badgeClass: "badge-ballet",
            label: "Ballet",
            poster: "images/photos/ballet-bg.jfif",
            src: "videos/ballet-demo.mp4"
        },
        {
            title: '"Jetski"',
            meta: "Coach Aerhyll | Hip-Hop | Teen & Adult",
            badgeClass: "badge-hiphop",
            label: "Hip-Hop",
            poster: "images/photos/hiphop-bg.jfif",
            src: "videos/hiphop-demo.mp4"
        },
        {
            title: '“From Your Eyes”',
            meta: "Coach Minjun | Contemporary | All Levels",
            badgeClass: "badge-contemporary",
            label: "Contemporary",
            poster: "images/photos/contemporary-bg.jfif",
            src: "videos/contemporary-demo.mp4"
        },
        {
            title: '"Spotlight Combo"',
            meta: "Coach Kazuha | Jazz | Beginner–Intermediate",
            badgeClass: "badge-ballet",
            label: "Jazz",
            poster: "images/photos/ballet-bg.jfif",
            src: "videos/jazz-demo.mp4"
        },
        {
            title: '"Rhythm & Fire"',
            meta: "Coach Minjun | Latin Dance | Teens & Adults",
            badgeClass: "badge-contemporary",
            label: "Latin",
            poster: "images/photos/contemporary-bg.jfif",
            src: "videos/latin-demo.mp4"
        }
    ];

    const tabs = Array.from(document.querySelectorAll(".gallery-tabs .tab-pill"));
    const prevBtn = document.getElementById("prevCategory");
    const nextBtn = document.getElementById("nextCategory");

    const leftCard = document.getElementById("leftCard");
    const centerCard = document.getElementById("centerCard");
    const rightCard = document.getElementById("rightCard");

    if (!tabs.length || !leftCard || !centerCard || !rightCard) return;

    let activeIdx = 1;

    function setCardContent(card, data, isCenter) {
        const video = card.querySelector("video");
        const source = video.querySelector("source");
        const badge = card.querySelector(".media-badge");
        const title = card.querySelector(".video-title");
        const meta = card.querySelector(".video-meta");

        video.pause();
        video.poster = data.poster;
        source.src = data.src;
        video.load();

        badge.className = "media-badge " + data.badgeClass;
        badge.textContent = isCenter ? "Featured • " + data.label : data.label;
        title.textContent = data.title;
        meta.textContent = data.meta;
    }

    function renderCarousel(newIndex) {
        const len = items.length;
        activeIdx = ((newIndex % len) + len) % len;

        const leftIdx = (activeIdx - 1 + len) % len;
        const rightIdx = (activeIdx + 1) % len;

        setCardContent(leftCard, items[leftIdx], false);
        setCardContent(centerCard, items[activeIdx], true);
        setCardContent(rightCard, items[rightIdx], false);

        tabs.forEach((btn, i) => {
            btn.classList.toggle("active-tab", i === activeIdx);
        });
    }

    tabs.forEach((btn, i) => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            renderCarousel(i);
        });
    });

    if (prevBtn) {
        prevBtn.addEventListener("click", function (e) {
            e.preventDefault();
            renderCarousel(activeIdx - 1);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", function (e) {
            e.preventDefault();
            renderCarousel(activeIdx + 1);
        });
    }

    renderCarousel(activeIdx);
});
