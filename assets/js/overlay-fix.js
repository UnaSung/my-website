// 防止擴充程式注入的 overlay 遮蔽內容
setInterval(() => {
    // 把疑似 Moncia 插入的 overlay 改為透明不可點擊
    document.querySelectorAll('div[style*="z-index"]').forEach(el => {
        if (!el.classList.length) {
            el.style.pointerEvents = 'none';
            el.style.opacity = '0';
        }
    });
}, 1000); 