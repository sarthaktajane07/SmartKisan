/**
 * Universal Google Translate System for SatYield
 * Include this file on every page to enable translation functionality
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
    
    // Store reference to translator for later use
    window.googleTranslateReady = true;
}

// Translation system class
class SatYieldTranslator {
    constructor() {
        this.currentLang = localStorage.getItem('preferredLanguage') || 'en';
        this.isInitialized = false;
        this.init();
    }

    init() {
        // Wait for DOM to be ready
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
        
        // Auto-apply saved language
        if (this.currentLang !== 'en') {
            setTimeout(() => this.switchLanguage(this.currentLang), 2000);
        }
        
        // Also check for URL hash translation
        this.checkUrlTranslation();
    }

    createLanguageSwitcher() {
        // Check if language switcher already exists
        if (document.getElementById('satyield-lang-switcher')) return;

        // Find insertion point (header nav or create floating button)
        let insertionPoint = document.querySelector('nav, .nav-links, .header');
        let isFloating = false;

        if (!insertionPoint) {
            // Create floating language button if no nav found
            insertionPoint = document.body;
            isFloating = true;
        }

        // Create language switcher HTML
        const switcherHTML = `
            <div id="satyield-lang-switcher" class="satyield-lang-switcher ${isFloating ? 'floating' : ''}">
                <button class="satyield-lang-btn" onclick="satYieldTranslator.toggleDropdown()">
                    <span id="satyield-current-lang">${SATYIELD_LANGUAGES[this.currentLang]}</span>
                </button>
                <div class="satyield-lang-dropdown" id="satyield-lang-dropdown">
                    ${Object.entries(SATYIELD_LANGUAGES).map(([code, name]) => 
                        `<div class="satyield-lang-option ${code === this.currentLang ? 'active' : ''}" 
                             data-lang="${code}" 
                             onclick="satYieldTranslator.switchLanguage('${code}')">${name}</div>`
                    ).join('')}
                </div>
            </div>
            <!-- Hidden Google Translate Element -->
            <div id="google_translate_element" style="display: none !important;"></div>
        `;

        if (isFloating) {
            insertionPoint.insertAdjacentHTML('beforeend', switcherHTML);
        } else {
            insertionPoint.insertAdjacentHTML('beforeend', switcherHTML);
        }
    }

    loadGoogleTranslate() {
        // Load Google Translate script if not already loaded
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

        // Update UI
        this.updateSwitcherUI(langCode);

        // Trigger Google Translate with multiple methods
        this.triggerTranslation(langCode);

        // Close dropdown
        this.closeDropdown();
    }

    triggerTranslation(langCode) {
        // Method 1: Try using the combo box
        setTimeout(() => {
            const selectElement = document.querySelector('.goog-te-combo');
            if (selectElement) {
                selectElement.value = langCode;
                selectElement.dispatchEvent(new Event('change'));
            }
        }, 500);

        // Method 2: Try clicking the translate element directly
        setTimeout(() => {
            const translateLinks = document.querySelectorAll('.goog-te-menu-value span');
            translateLinks.forEach(link => {
                if (link.textContent.includes(SATYIELD_LANGUAGES[langCode]) || 
                    link.getAttribute('data-value') === langCode) {
                    link.click();
                }
            });
        }, 1000);

        // Method 3: Use Google Translate API directly if available
        setTimeout(() => {
            if (window.google && window.google.translate && window.google.translate.TranslateElement) {
                try {
                    // Force translation by manipulating the URL hash
                    const currentHash = window.location.hash;
                    window.location.hash = `#googtrans(en|${langCode})`;
                    
                    // Trigger page reload to apply translation
                    setTimeout(() => {
                        if (langCode === 'en') {
                            // Reset to original language
                            window.location.hash = '';
                            window.location.reload();
                        }
                    }, 100);
                } catch (e) {
                    console.log('Direct translation method failed:', e);
                }
            }
        }, 1500);

        // Method 4: Manual DOM manipulation as fallback
        if (langCode !== 'en') {
            setTimeout(() => {
                this.applyManualTranslation(langCode);
            }, 2000);
        }
    }

    applyManualTranslation(langCode) {
        // This is a fallback method that applies basic translations
        // In a real implementation, you would use a translation API
        const basicTranslations = {
            'hi': {
                'Dashboard': 'डैशबोर्ड',
                'Soil Analysis': 'मिट्टी विश्लेषण',
                'Climate Insights': 'जलवायु अंतर्दृष्टि',
                'Equipment Rentals': 'उपकरण किराया',
                'Farming Guidance': 'कृषि मार्गदर्शन',
                'Login': 'लॉग इन',
                'Sign Up': 'साइन अप',
                'Home': 'होम',
                'About': 'के बारे में'
            },
            'mr': {
                'Dashboard': 'डॅशबोर्ड',
                'Soil Analysis': 'माती विश्लेषण',
                'Climate Insights': 'हवामान अंतर्दृष्टी',
                'Equipment Rentals': 'उपकरणे भाडे',
                'Farming Guidance': 'शेती मार्गदर्शन',
                'Login': 'लॉगिन',
                'Sign Up': 'साइन अप',
                'Home': 'मुख्यपृष्ठ',
                'About': 'बद्दल'
            }
        };

        const translations = basicTranslations[langCode];
        if (translations) {
            // Apply translations to common elements
            document.querySelectorAll('h1, h2, h3, button, a, .nav-links a').forEach(element => {
                const text = element.textContent.trim();
                if (translations[text]) {
                    element.textContent = translations[text];
                }
            });
        }
    }

    updateSwitcherUI(langCode) {
        const currentLangSpan = document.getElementById('satyield-current-lang');
        if (currentLangSpan) {
            currentLangSpan.textContent = SATYIELD_LANGUAGES[langCode] || SATYIELD_LANGUAGES['en'];
        }

        // Update active state
        document.querySelectorAll('.satyield-lang-option').forEach(option => {
            option.classList.remove('active');
            if (option.getAttribute('data-lang') === langCode) {
                option.classList.add('active');
            }
        });
    }

    toggleDropdown() {
        const dropdown = document.getElementById('satyield-lang-dropdown');
        if (dropdown) {
            dropdown.classList.toggle('show');
        }
    }

    closeDropdown() {
        const dropdown = document.getElementById('satyield-lang-dropdown');
        if (dropdown) {
            dropdown.classList.remove('show');
        }
    }

    checkUrlTranslation() {
        // Check if URL has translation hash
        const hash = window.location.hash;
        if (hash.includes('googtrans')) {
            const match = hash.match(/#googtrans\(en\|([a-z]{2})\)/);
            if (match && match[1]) {
                this.currentLang = match[1];
                this.updateSwitcherUI(match[1]);
            }
        }
    }

    bindEvents() {
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            const switcher = document.getElementById('satyield-lang-switcher');
            if (switcher && !switcher.contains(e.target)) {
                this.closeDropdown();
            }
        });

        // Handle escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeDropdown();
            }
        });

        // Monitor hash changes for translation
        window.addEventListener('hashchange', () => {
            this.checkUrlTranslation();
        });
    }
}

// Initialize translator when script loads
let satYieldTranslator;

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        satYieldTranslator = new SatYieldTranslator();
    });
} else {
    satYieldTranslator = new SatYieldTranslator();
}

// Make it globally available
window.satYieldTranslator = satYieldTranslator;
