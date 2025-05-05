document.addEventListener('DOMContentLoaded', function() {
  // 作品集數據
  const portfolioItems = [
    {
      id: 1,
      title: "銀行應用程式重新設計",
      category: "ui-design",
      tags: ["UI/UX", "移動應用", "金融科技"],
      thumbnail: "/placeholder.svg?height=300&width=400",
      fullImage: "/placeholder.svg?height=600&width=800",
      description: "為上海商業儲蓄銀行設計的移動銀行應用程式界面，專注於用戶體驗和可訪問性。",
      detailedDescription: "這個項目是為上海商業儲蓄銀行重新設計移動銀行應用程式。專注於改善用戶體驗、提高可訪問性並引入新功能，同時保持銀行的品牌標識。重新設計包括完全改造導航系統、簡化交易流程和增強安全功能。",
      challenge: "現有應用程式的用戶滿意度低，UI過時。用戶發現難以完成常見的銀行任務，應用程式缺乏現代安全功能。",
      solution: "我進行了廣泛的用戶研究，識別痛點，並重新設計了界面，專注於簡單性和效率。新設計具有直觀的導航、生物識別認證和個性化儀表板。",
      tools: ["Figma", "Adobe XD", "Illustrator", "Protopie"],
      liveLink: "#",
      caseStudyLink: "#"
    },
    {
      id: 2,
      title: "電子商務網站",
      category: "web-design",
      tags: ["網頁設計", "電子商務", "響應式"],
      thumbnail: "/placeholder.svg?height=300&width=400",
      fullImage: "/placeholder.svg?height=600&width=800",
      description: "設計和開發一個響應式電子商務網站，專注於產品展示和流暢的結帳流程。",
      detailedDescription: "設計和開發一個響應式電子商務網站，專注於產品展示和流暢的結帳流程。項目包括用戶研究、線框圖、原型設計和最終設計實施。",
      challenge: "客戶需要一個現代化的電子商務平台，能夠有效展示他們的產品，同時在所有設備上提供無縫的購物體驗。",
      solution: "我創建了一個響應式設計，專注於高質量的產品圖像、直觀的導航和簡化的結帳流程。該網站具有高級過濾選項、產品推薦和與多個支付網關的集成。",
      tools: ["Sketch", "Photoshop", "HTML/CSS", "JavaScript"],
      liveLink: "#",
      caseStudyLink: "#"
    },
    {
      id: 3,
      title: "品牌識別系統",
      category: "branding",
      tags: ["品牌設計", "標誌設計", "視覺識別"],
      thumbnail: "/placeholder.svg?height=300&width=400",
      fullImage: "/placeholder.svg?height=600&width=800",
      description: "為科技初創公司創建完整的品牌識別系統，包括標誌設計、配色方案、字體和品牌指南。",
      detailedDescription: "為科技初創公司創建完整的品牌識別系統，包括標誌設計、配色方案、字體和品牌指南。該項目旨在在競爭激烈的市場中建立強大的視覺形象。",
      challenge: "初創公司需要一個獨特的品牌識別，幫助他們在擁擠的市場中脫穎而出，同時傳達他們的核心價值：創新、可靠性和用戶友好性。",
      solution: "我開發了一個全面的品牌識別系統，包括多功能標誌、現代配色方案、自定義字體和詳細的品牌指南。該系統設計為在各種應用中靈活使用，從數字平台到印刷材料。",
      tools: ["Illustrator", "InDesign", "Photoshop"],
      caseStudyLink: "#"
    },
    {
      id: 4,
      title: "社交媒體營銷活動",
      category: "marketing",
      tags: ["社交媒體", "數字營銷", "內容創作"],
      thumbnail: "/placeholder.svg?height=300&width=400",
      fullImage: "/placeholder.svg?height=600&width=800",
      description: "為消費產品發布開發和執行社交媒體營銷活動。項目包括內容策略、視覺設計和績效分析。",
      detailedDescription: "為消費產品發布開發和執行社交媒體營銷活動。項目包括內容策略、視覺設計和績效分析。",
      challenge: "客戶正在推出一款新的消費產品，需要一個社交媒體活動，在競爭激烈的市場中產生認知度、參與度和推動銷售。",
      solution: "我開發了一個多平台社交媒體策略，具有連貫的視覺元素、引人入勝的內容格式和有針對性的信息。該活動包括影響者合作、互動帖子和付費廣告組件。",
      tools: ["Illustrator", "Photoshop", "After Effects", "社交媒體分析"],
      liveLink: "#"
    },
    {
      id: 5,
      title: "移動應用用戶體驗流程",
      category: "ui-design",
      tags: ["UX設計", "用戶流程", "移動應用"],
      thumbnail: "/placeholder.svg?height=300&width=400",
      fullImage: "/placeholder.svg?height=600&width=800",
      description: "移動應用程式的用戶體驗流程設計，專注於直觀導航和用戶參與。",
      detailedDescription: "為一款健康與健身應用程式設計用戶體驗流程，專注於創建直觀的導航系統和提高用戶參與度。該項目包括用戶研究、人物角色創建、用戶旅程映射和詳細的交互設計。",
      challenge: "客戶需要一個用戶友好的應用程式，能夠幫助用戶輕鬆跟踪他們的健身目標和營養攝入，同時保持他們的參與和動力。",
      solution: "我設計了一個以用戶為中心的體驗，包括個性化儀表板、進度可視化和基於成就的獎勵系統。該設計專注於簡化複雜的健康數據，使其易於理解和操作。",
      tools: ["Figma", "Miro", "Principle", "UserTesting"],
      liveLink: "#",
      caseStudyLink: "#"
    },
    {
      id: 6,
      title: "企業網站重新設計",
      category: "web-design",
      tags: ["網頁設計", "企業網站", "用戶體驗"],
      thumbnail: "/placeholder.svg?height=300&width=400",
      fullImage: "/placeholder.svg?height=600&width=800",
      description: "為一家科技公司重新設計企業網站，專注於改善用戶體驗和提高轉化率。",
      detailedDescription: "為一家領先的B2B科技公司重新設計企業網站，專注於改善用戶體驗、展示產品功能和提高潛在客戶轉化率。該項目包括競爭分析、用戶研究、信息架構重組和完整的視覺重新設計。",
      challenge: "現有網站有過時的設計、複雜的導航結構和較高的跳出率。公司需要一個現代化的網站，能夠更好地展示其產品並生成更多的潛在客戶。",
      solution: "我創建了一個清晰、專業的設計，具有簡化的導航、引人注目的產品展示和戰略性放置的行動號召。新網站還包括客戶成功案例、互動式產品演示和優化的潛在客戶捕獲表單。",
      tools: ["Figma", "Adobe XD", "HTML/CSS", "JavaScript"],
      liveLink: "#",
      caseStudyLink: "#"
    }
  ];

  // 獲取DOM元素
  const portfolioGrid = document.querySelector('.portfolio-grid');
  const filterButtons = document.querySelectorAll('.portfolio-filter-btn');
  const modal = document.querySelector('.portfolio-modal');
  const modalContent = document.querySelector('.portfolio-modal-content');
  const modalClose = document.querySelector('.portfolio-modal-close');

  // 初始化作品集
  function initPortfolio() {
    renderPortfolioItems('all');
    setupEventListeners();
  }

  // 渲染作品集項目
  function renderPortfolioItems(category) {
    // 淡出效果
    portfolioGrid.classList.add('fade');
    
    setTimeout(() => {
      // 清空網格
      portfolioGrid.innerHTML = '';
      
      // 過濾並渲染項目
      const filteredItems = category === 'all' 
        ? portfolioItems 
        : portfolioItems.filter(item => item.category === category);
      
      filteredItems.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.dataset.id = item.id;
        
        portfolioItem.innerHTML = `
          <img src="${item.thumbnail}" alt="${item.title}" class="portfolio-item-img">
          <div class="portfolio-item-overlay">
            <span class="portfolio-item-category">${getCategoryName(item.category)}</span>
            <h3 class="portfolio-item-title">${item.title}</h3>
            <p class="portfolio-item-description">${truncateText(item.description, 80)}</p>
            <a href="#" class="portfolio-item-button">查看詳情</a>
          </div>
        `;
        
        portfolioGrid.appendChild(portfolioItem);
      });
      
      // 淡入效果
      setTimeout(() => {
        portfolioGrid.classList.remove('fade');
      }, 50);
    }, 300);
  }

  // 設置事件監聽器
  function setupEventListeners() {
    // 過濾按鈕點擊事件
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const category = this.dataset.filter;
        
        // 更新活動按鈕
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // 渲染過濾後的項目
        renderPortfolioItems(category);
      });
    });
    
    // 項目點擊事件（使用事件委託）
    portfolioGrid.addEventListener('click', function(e) {
      // 查找最近的作品集項目
      const portfolioItem = e.target.closest('.portfolio-item');
      if (!portfolioItem) return;
      
      // 防止默認行為
      e.preventDefault();
      
      // 獲取項目ID
      const itemId = parseInt(portfolioItem.dataset.id);
      
      // 查找項目數據
      const item = portfolioItems.find(item => item.id === itemId);
      if (!item) return;
      
      // 打開模態框
      openModal(item);
    });
    
    // 關閉模態框
    if (modalClose) {
      modalClose.addEventListener('click', closeModal);
    }
    
    // 點擊模態框背景關閉
    if (modal) {
      modal.addEventListener('click', function(e) {
        if (e.target === modal) {
          closeModal();
        }
      });
    }
    
    // ESC鍵關閉模態框
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });
  }

  // 打開模態框
  function openModal(item) {
    if (!modal || !modalContent) return;
    
    // 填充模態框內容
    modalContent.innerHTML = `
      <div class="portfolio-modal-close"></div>
      <img src="${item.fullImage}" alt="${item.title}" class="portfolio-modal-image">
      <span class="portfolio-modal-category">${getCategoryName(item.category)}</span>
      <h2 class="portfolio-modal-title">${item.title}</h2>
      <p class="portfolio-modal-description">${item.detailedDescription || item.description}</p>
      
      <div class="portfolio-modal-details">
        ${item.challenge ? `
          <div class="portfolio-modal-detail-item">
            <h3 class="portfolio-modal-detail-title">挑戰</h3>
            <p class="portfolio-modal-detail-content">${item.challenge}</p>
          </div>
        ` : ''}
        
        ${item.solution ? `
          <div class="portfolio-modal-detail-item">
            <h3 class="portfolio-modal-detail-title">解決方案</h3>
            <p class="portfolio-modal-detail-content">${item.solution}</p>
          </div>
        ` : ''}
      </div>
      
      ${item.tags && item.tags.length > 0 ? `
        <div class="portfolio-modal-tags">
          ${item.tags.map(tag => `<span class="portfolio-modal-tag">${tag}</span>`).join('')}
        </div>
      ` : ''}
      
      ${item.tools && item.tools.length > 0 ? `
        <div class="portfolio-modal-detail-item">
          <h3 class="portfolio-modal-detail-title">使用工具</h3>
          <div class="portfolio-modal-tags">
            ${item.tools.map(tool => `<span class="portfolio-modal-tag">${tool}</span>`).join('')}
          </div>
        </div>
      ` : ''}
      
      <div class="portfolio-modal-actions">
        ${item.liveLink ? `<a href="${item.liveLink}" class="portfolio-modal-button portfolio-modal-button-primary" target="_blank">查看作品</a>` : ''}
        ${item.caseStudyLink ? `<a href="${item.caseStudyLink}" class="portfolio-modal-button portfolio-modal-button-secondary" target="_blank">案例研究</a>` : ''}
      </div>
    `;
    
    // 添加關閉按鈕事件
    const newModalClose = modalContent.querySelector('.portfolio-modal-close');
    if (newModalClose) {
      newModalClose.addEventListener('click', closeModal);
    }
    
    // 顯示模態框
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // 防止背景滾動
  }

  // 關閉模態框
  function closeModal() {
    if (!modal) return;
    
    modal.classList.remove('active');
    document.body.style.overflow = ''; // 恢復背景滾動
  }

  // 輔助函數：獲取分類名稱
  function getCategoryName(category) {
    const categoryMap = {
      'ui-design': 'UI/UX 設計',
      'web-design': '網頁設計',
      'branding': '品牌設計',
      'marketing': '行銷設計'
    };
    
    return categoryMap[category] || category;
  }

  // 輔助函數：截斷文本
  function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  }

  // 初始化
  initPortfolio();
});