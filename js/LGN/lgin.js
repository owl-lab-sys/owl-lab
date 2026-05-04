function goHome() {
    // ① フェードアウト開始
    document.body.classList.add("fade-out");

    setTimeout(() => {
        const overlay = document.createElement("div");
        overlay.classList.add("loading-screen");

        overlay.innerHTML = `
            <div class="spinner"></div>
            <p>Loading...</p>
        `;

        // ここが重要（bodyじゃなくhtmlに追加）
        document.documentElement.appendChild(overlay);

        setTimeout(() => {
            window.location.href = "main/home.html";
        }, 800);

    }, 500);
}