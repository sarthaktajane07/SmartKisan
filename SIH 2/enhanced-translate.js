/**
 * Enhanced Google Translate System for SatYield
 * This version ensures complete page translation
 */

// Language configuration
const SATYIELD_LANGUAGES = {
    'en': '🇺🇸 English',
    'hi': '🇮🇳 हिन्दी',
    'mr': '🇮🇳 मराठी',
    'gu': '🇮🇳 ગુજરાતી',
    'ta': '🇮🇳 தமிழ்',
    'te': '🇮🇳 తెలుగు',
    'kn': '🇮🇳 ಕನ್ನಡ',
    'ml': '🇮🇳 മലയാളം',
    'pa': '🇮🇳 ਪੰਜਾਬੀ',
    'or': '🇮🇳 ଓଡିଆ',
    'bn': '🇮🇳 বাংলা',
    'as': '🇮🇳 অসমীয়া',
    'ur': '🇮🇳 اردو'
};

// Google Translate initialization
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: Object.keys(SATYIELD_LANGUAGES).join(','),
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
        multilanguagePage: true
    }, 'google_translate_element');
    
    // Mark as ready and apply saved language
    window.googleTranslateReady = true;
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && savedLang !== 'en') {
        setTimeout(() => {
            doGoogleTranslate(savedLang);
        }, 1000);
    }
}

// Direct translation function
function doGoogleTranslate(langCode) {
    if (langCode === 'en') {
        // Reset to English
        window.location.hash = '';
        window.location.reload();
        return;
    }
    
    // Set the translation hash
    window.location.hash = `#googtrans(en|${langCode})`;
    
    // Force reload to apply translation
    setTimeout(() => {
        window.location.reload();
    }, 100);
}

// Enhanced Translation System
class EnhancedTranslator {
    constructor() {
        this.currentLang = this.detectCurrentLanguage();
        this.init();
    }

    detectCurrentLanguage() {
        // Check URL hash first
        const hash = window.location.hash;
        if (hash.includes('googtrans')) {
            const match = hash.match(/#googtrans\(en\|([a-z]{2})\)/);
            if (match && match[1]) {
                return match[1];
            }
        }
        
        // Check localStorage
        return localStorage.getItem('preferredLanguage') || 'en';
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        this.createLanguageSwitcher();
        this.loadGoogleTranslate();
        this.bindEvents();
    }

    createLanguageSwitcher() {
        if (document.getElementById('enhanced-lang-switcher')) return;

        let insertionPoint = document.querySelector('nav, .nav-links, .header');
        let isFloating = false;

        if (!insertionPoint) {
            insertionPoint = document.body;
            isFloating = true;
        }

        const switcherHTML = `
            <div id="enhanced-lang-switcher" class="satyield-lang-switcher ${isFloating ? 'floating' : ''}">
                <button class="satyield-lang-btn" onclick="enhancedTranslator.toggleDropdown()">
                    <span id="enhanced-current-lang">${SATYIELD_LANGUAGES[this.currentLang]}</span>
                </button>
                <div class="satyield-lang-dropdown" id="enhanced-lang-dropdown">
                    ${Object.entries(SATYIELD_LANGUAGES).map(([code, name]) => 
                        `<div class="satyield-lang-option ${code === this.currentLang ? 'active' : ''}" 
                             data-lang="${code}" 
                             onclick="enhancedTranslator.switchLanguage('${code}')">${name}</div>`
                    ).join('')}
                </div>
            </div>
            <div id="google_translate_element" style="display: none !important;"></div>
        `;

        if (isFloating) {
            insertionPoint.insertAdjacentHTML('beforeend', switcherHTML);
        } else {
            insertionPoint.insertAdjacentHTML('beforeend', switcherHTML);
        }
    }

    loadGoogleTranslate() {
        if (!window.google || !window.google.translate) {
            const script = document.createElement('script');
            script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            script.async = true;
            document.head.appendChild(script);
        }
    }

    switchLanguage(langCode) {
        this.currentLang = langCode;
        localStorage.setItem('preferredLanguage', langCode);
        
        // Update UI immediately
        this.updateSwitcherUI(langCode);
        this.closeDropdown();
        
        // Show loading indicator
        this.showLoadingIndicator();
        
        // Apply translation
        setTimeout(() => {
            doGoogleTranslate(langCode);
        }, 300);
    }

    showLoadingIndicator() {
        // Create or show loading overlay
        let loader = document.getElementById('translation-loader');
        if (!loader) {
            loader = document.createElement('div');
            loader.id = 'translation-loader';
            loader.innerHTML = `
                <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
                           background: rgba(0,0,0,0.7); z-index: 9999; display: flex; 
                           align-items: center; justify-content: center; color: white;">
                    <div style="text-align: center;">
                        <div style="border: 4px solid #f3f3f3; border-top: 4px solid #FBC02D; 
                                   border-radius: 50%; width: 40px; height: 40px; 
                                   animation: spin 1s linear infinite; margin: 0 auto 1rem;"></div>
                        <div>Translating page...</div>
                    </div>
                </div>
                <style>
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                </style>
            `;
            document.body.appendChild(loader);
        }
        loader.style.display = 'flex';
    }

    updateSwitcherUI(langCode) {
        const currentLangSpan = document.getElementById('enhanced-current-lang');
        if (currentLangSpan) {
            currentLangSpan.textContent = SATYIELD_LANGUAGES[langCode] || SATYIELD_LANGUAGES['en'];
        }

        document.querySelectorAll('.satyield-lang-option').forEach(option => {
            option.classList.remove('active');
            if (option.getAttribute('data-lang') === langCode) {
                option.classList.add('active');
            }
        });
    }

    toggleDropdown() {
        const dropdown = document.getElementById('enhanced-lang-dropdown');
        if (dropdown) {
            dropdown.classList.toggle('show');
        }
    }

    closeDropdown() {
        const dropdown = document.getElementById('enhanced-lang-dropdown');
        if (dropdown) {
            dropdown.classList.remove('show');
        }
    }

    bindEvents() {
        document.addEventListener('click', (e) => {
            const switcher = document.getElementById('enhanced-lang-switcher');
            if (switcher && !switcher.contains(e.target)) {
                this.closeDropdown();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeDropdown();
            }
        });
    }
}

// Initialize enhanced translator
let enhancedTranslator;

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        enhancedTranslator = new EnhancedTranslator();
    });
} else {
    enhancedTranslator = new EnhancedTranslator();
}

window.enhancedTranslator = enhancedTranslator;
