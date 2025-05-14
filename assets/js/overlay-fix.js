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

const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1) {
                const style = window.getComputedStyle(node);
                if (
                    style.position === 'fixed' &&
                    parseInt(style.zIndex) >= 9999 &&
                    !node.classList.length
                ) {
                    node.style.display = 'none';
                    console.log('已移除疑似 Monica 擴充的元素 (Observer)');
                }
            }
        });
    });
});

observer.observe(document.body, { childList: true, subtree: true });
