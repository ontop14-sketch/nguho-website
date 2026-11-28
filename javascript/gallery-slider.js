document.addEventListener("DOMContentLoaded", () => {
    const videosByStyle = [
        {
            key: "ballet",
            title: '"Grace in Motion"',
            subtitle: "Coach Kazuha | Ballet | Beginner–Intermediate",
            badgeClass: "badge-ballet",
            badgeText: "Ballet",
            poster: "images/photos/ballet-bg.jfif",
            src: "videos/ballet-demo.mp4"
        },
        {
            key: "hiphop",
            title: '"Jetski"',
            subtitle: "Coach Aerhyll Omit | Hip-Hop | Teen & Adult",
            badgeClass: "badge-hiphop",
            badgeText: "Hip-Hop",
            poster: "images/photos/hiphop-bg.jfif",
            src: "videos/hiphop-demo.mp4"
        },
        {
            key: "contemporary",
            title: '“From Your Eyes”',
            subtitle: "Coach Minjun | Contemporary | All Levels",
            badgeClass: "badge-contemporary",
            badgeText: "Contemporary",
            poster: "images/photos/contemporary-bg.jfif",
            src: "videos/contemporary-demo.mp4"
        },
        {
            key: "jazz",
            title: '"Spotlight Combo"',
            subtitle: "Coach Kazuha | Jazz | Beginner–Intermediate",
            badgeClass: "badge-ballet",
            badgeText: "Jazz",
            poster: "images/photos/ballet-bg.jfif",
            src: "videos/jazz-demo.mp4"
        },
        {
            key: "latin",
            title: '"Rhythm & Fire"',
            subtitle: "Coach Minjun | Latin Dance | Teens & Adults",
            badgeClass: "badge-contemporary",
            badgeText: "Latin",
            poster: "images/photos/contemporary-bg.jfif",
            src: "videos/latin-demo.mp4"
        }
    ];

    const tabs = Array.from(document.querySelectorAll(".tab-pill"));
    const prevBtn = document.getElementById("prevCategory");
    const nextBtn = document.getElementById("nextCategory");

    const leftCard = document.getElementById("leftCard");
    const centerCard = document.getElementById("centerCard");
    const rightCard = document.getElementById("rightCard");

    let currentIndex = 1; // Starts on Hip-Hop

    function renderCard(cardElement, item, isFeatured) {
        const video = cardElement.querySelector("video");
        const source = video.querySelector("source");
        const badge = cardElement.querySelector(".media-badge");
        const title = cardElement.querySelector("h3");
        const subtitle = cardElement.querySelector("p");

        video.pause();
        video.setAttribute("poster", item.poster);
        source.setAttribute("src", item.src);
        video.load();

        badge.className = `media-badge ${item.badgeClass}`;
        badge.textContent = isFeatured ? `Featured • ${item.badgeText}` : item.badgeText;
        title.textContent = item.title;
        subtitle.textContent = item.subtitle;
    }

    function updateGallery(index) {
        const total = videosByStyle.length;
        currentIndex = (index + total) % total;

        const leftIndex = (currentIndex - 1 + total) % total;
        const rightIndex = (currentIndex + 1) % total;

        renderCard(leftCard, videosByStyle[leftIndex], false);
        renderCard(centerCard, videosByStyle[currentIndex], true);
        renderCard(rightCard, videosByStyle[rightIndex], false);

        tabs.forEach((tab, idx) => {
            tab.classList.toggle("active-tab", idx === currentIndex);
            tab.setAttribute("aria-selected", idx === currentIndex ? "true" : "false");
        });
    }

    tabs.forEach((tab, idx) => {
        tab.addEventListener("click", () => updateGallery(idx));
    });

    prevBtn.addEventListener("click", () => updateGallery(currentIndex - 1));
    nextBtn.addEventListener("click", () => updateGallery(currentIndex + 1));
});