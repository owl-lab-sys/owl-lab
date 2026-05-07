function goHome() {
    // フェードアウト開始
    document.body.classList.add("fade-out");

    setTimeout(() => {
        const overlay = document.createElement("div");
        overlay.classList.add("loading-screen");

        overlay.innerHTML = `
            <div class="spinner"></div>
            <p>　研究所に入場中...</p>
        `;

        // ここが重要（bodyじゃなくhtmlに追加）
        document.documentElement.appendChild(overlay);

        setTimeout(() => {
            window.location.href = "main/home.html";
        }, 800);

    }, 500);
}

window.addEventListener("pageshow", (event) => {

    if (event.persisted) {

        // loading削除
        document.querySelectorAll(".loading-screen")
            .forEach(el => el.remove());

        // fade解除
        document.body.classList.remove("fade-out");

        // opacity復元
        document.body.style.opacity = "1";
    }
});