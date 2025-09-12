// SatYield Chatbot Engine - Farming Q&A Assistant
class SatYieldChatbot {
    constructor() {
        this.knowledgeBase = {
            // Crop-related questions
            'rice': {
                keywords: ['rice', 'paddy', 'धान', 'भात'],
                responses: [
                    "🌾 Rice grows best in flooded fields with temperatures between 20-35°C. Plant during monsoon season for best results.",
                    "For rice cultivation, ensure proper water management - keep fields flooded 2-5cm deep during growing season.",
                    "Rice varieties: Basmati for premium market, IR64 for high yield, or local varieties adapted to your region."
                ]
            },
            'wheat': {
                keywords: ['wheat', 'गेहूं', 'गहू'],
                responses: [
                    "🌾 Wheat is a rabi crop - sow in October-December, harvest in March-April. Needs cool weather for growth.",
                    "For wheat, use 100-120kg seeds per hectare. Apply fertilizers in 2-3 splits for better yield.",
                    "Popular wheat varieties: HD2967, PBW343, DBW17 - choose based on your region's climate."
                ]
            },
            'cotton': {
                keywords: ['cotton', 'कपास', 'कापूस'],
                responses: [
                    "🌱 Cotton needs warm weather (21-27°C) and moderate rainfall. Plant after monsoon arrives.",
                    "For cotton, maintain 90-120cm row spacing. Regular pest monitoring is crucial - watch for bollworm.",
                    "Bt cotton varieties offer better pest resistance. Ensure good drainage to prevent waterlogging."
                ]
            },
            'sugarcane': {
                keywords: ['sugarcane', 'गन्ना', 'ऊस'],
                responses: [
                    "🎋 Sugarcane needs 12-18 months to mature. Plant during Feb-March or Oct-Nov depending on variety.",
                    "For sugarcane, use 40,000-50,000 setts per hectare. Ensure regular irrigation - it needs lots of water.",
                    "Apply organic manure heavily for sugarcane. Earthing up at 4-5 months helps root development."
                ]
            },

            // Soil and fertilizer questions
            'soil': {
                keywords: ['soil', 'मिट्टी', 'माती', 'ph', 'fertility', 'nutrients'],
                responses: [
                    "🌱 Test your soil pH - most crops prefer 6.0-7.5. Add lime if acidic, gypsum if alkaline.",
                    "Soil health indicators: organic matter >1%, good water holding capacity, proper drainage.",
                    "For soil improvement: Add compost, practice crop rotation, avoid over-tillage, use cover crops."
                ]
            },
            'fertilizer': {
                keywords: ['fertilizer', 'खाद', 'urea', 'dap', 'potash', 'nitrogen', 'phosphorus'],
                responses: [
                    "💊 NPK ratio depends on crop: Cereals need more N, legumes need less N but more P&K.",
                    "Apply fertilizers based on soil test. General thumb rule: 50% at sowing, 25% at tillering, 25% at flowering.",
                    "Organic options: Compost, vermicompost, green manure, biofertilizers - better for long-term soil health."
                ]
            },
            'organic': {
                keywords: ['organic', 'natural', 'जैविक', 'compost', 'vermicompost'],
                responses: [
                    "🌿 Organic farming builds soil health over time. Start with compost and reduce chemical inputs gradually.",
                    "Organic pest control: Neem oil, pheromone traps, beneficial insects, companion planting.",
                    "Certification takes 3 years. Focus on soil building, biodiversity, and natural pest management."
                ]
            },

            // Weather and irrigation
            'weather': {
                keywords: ['weather', 'rain', 'drought', 'मौसम', 'बारिश', 'सूखा'],
                responses: [
                    "🌤️ Monitor weather forecasts regularly. Plant drought-resistant varieties in low-rainfall areas.",
                    "Weather adaptation: Use mulching to conserve moisture, choose appropriate planting dates.",
                    "Climate-smart practices: Rainwater harvesting, drip irrigation, shade nets for extreme heat."
                ]
            },
            'irrigation': {
                keywords: ['irrigation', 'water', 'drip', 'sprinkler', 'सिंचाई', 'पानी'],
                responses: [
                    "💧 Drip irrigation saves 30-50% water compared to flood irrigation. Best for high-value crops.",
                    "Irrigation timing: Early morning or evening to reduce evaporation losses.",
                    "Water management: Check soil moisture at root zone depth, avoid over-watering which causes diseases."
                ]
            },

            // Pest and disease management
            'pest': {
                keywords: ['pest', 'insect', 'bug', 'कीट', 'कीड़े'],
                responses: [
                    "🐛 Integrated Pest Management (IPM): Monitor regularly, use beneficial insects, targeted spraying only when needed.",
                    "Common pests: Aphids, thrips, bollworm. Use yellow sticky traps for early detection.",
                    "Natural predators: Ladybugs, spiders, birds. Avoid broad-spectrum pesticides that kill beneficial insects."
                ]
            },
            'disease': {
                keywords: ['disease', 'fungus', 'blight', 'rot', 'रोग', 'बीमारी'],
                responses: [
                    "🦠 Disease prevention: Proper spacing for air circulation, avoid overhead watering, use disease-free seeds.",
                    "Fungal diseases increase in humid conditions. Use copper-based fungicides or neem oil preventively.",
                    "Crop rotation breaks disease cycles. Don't grow same crop family in same field consecutively."
                ]
            },

            // Market and pricing
            'price': {
                keywords: ['price', 'market', 'sell', 'msp', 'दाम', 'बाजार', 'बेचना'],
                responses: [
                    "💰 Check MSP (Minimum Support Price) rates before sowing. Government announces MSP for 23 crops.",
                    "Market intelligence: Use apps like eNAM, AgriMarket for current prices in nearby mandis.",
                    "Value addition: Processing, packaging, direct marketing can increase profits by 20-40%."
                ]
            },
            'storage': {
                keywords: ['storage', 'warehouse', 'godown', 'भंडारण'],
                responses: [
                    "🏪 Proper storage prevents 10-15% post-harvest losses. Dry grains to 12-14% moisture before storage.",
                    "Storage tips: Use hermetic bags, maintain proper ventilation, regular pest monitoring.",
                    "Government schemes: Warehouse receipt system, cold storage subsidies available."
                ]
            },

            // Government schemes and subsidies
            'subsidy': {
                keywords: ['subsidy', 'scheme', 'government', 'loan', 'सब्सिडी', 'योजना', 'सरकार'],
                responses: [
                    "🏛️ PM-KISAN: ₹6000/year direct benefit transfer. Soil Health Card scheme provides free soil testing.",
                    "Equipment subsidies: 40-50% subsidy on tractors, implements through state agriculture departments.",
                    "Crop insurance: PM Fasal Bima Yojana covers weather risks. Premium rates: 2% for kharif, 1.5% for rabi."
                ]
            },
            'loan': {
                keywords: ['loan', 'credit', 'bank', 'kisan credit card', 'ऋण', 'कर्ज'],
                responses: [
                    "🏦 Kisan Credit Card (KCC): Up to ₹3 lakh at 7% interest. Covers crop loans and short-term credit needs.",
                    "Collateral-free loans up to ₹1.6 lakh for farmers. Interest subvention makes effective rate 4%.",
                    "Required documents: Land records, Aadhaar, bank account. Apply through nearest bank branch."
                ]
            },

            // Technology and modern farming
            'technology': {
                keywords: ['technology', 'app', 'drone', 'sensor', 'तकनीक', 'एप्प'],
                responses: [
                    "📱 Useful apps: Kisan Suvidha, AgriMarket, Meghdoot for weather. Use for market prices, weather alerts.",
                    "Precision agriculture: GPS-guided tractors, soil sensors, drone monitoring can increase efficiency.",
                    "Digital tools: Satellite imagery for crop monitoring, AI-based pest identification apps."
                ]
            },

            // General farming advice
            'yield': {
                keywords: ['yield', 'production', 'increase', 'उत्पादन', 'पैदावार'],
                responses: [
                    "📈 Yield improvement: Quality seeds (20% impact), balanced nutrition (25%), proper water management (30%).",
                    "Best practices: Timely operations, pest monitoring, soil health management, appropriate varieties.",
                    "Yield gaps: Most farmers achieve 60-70% of potential yield. Focus on limiting factors first."
                ]
            },
            'seeds': {
                keywords: ['seed', 'variety', 'hybrid', 'बीज', 'किस्म'],
                responses: [
                    "🌱 Use certified seeds from authorized dealers. Hybrid seeds give higher yield but can't be saved for next season.",
                    "Seed treatment: Fungicide + insecticide treatment prevents early pest/disease problems.",
                    "Local varieties: Often better adapted to local conditions, can be saved for replanting."
                ]
            }
        };

        this.greetings = [
            "Hello! I'm your farming assistant. Ask me anything about crops, soil, weather, or farming techniques! 🌾",
            "Hi there! Ready to help you grow better crops. What would you like to know? 🚜",
            "Namaste! I'm here to help with all your farming questions. How can I assist you today? 🌱"
        ];

        this.fallbackResponses = [
            "That's an interesting question! While I don't have specific information about that, I'd recommend consulting your local agricultural extension officer or visiting the nearest Krishi Vigyan Kendra (KVK) for detailed guidance. 🏛️",
            "I'm still learning about that topic! For now, you might want to check with agricultural experts in your area or visit government agricultural websites for more information. 📚",
            "Good question! I'd suggest reaching out to your district agriculture office or agricultural university for specialized advice on this topic. 🎓"
        ];

        this.isInitialized = false;
    }

    // Initialize chatbot
    init() {
        if (this.isInitialized) return;
        this.isInitialized = true;
        this.addWelcomeMessage();
    }

    // Add welcome message
    addWelcomeMessage() {
        const randomGreeting = this.greetings[Math.floor(Math.random() * this.greetings.length)];
        this.addMessage(randomGreeting, 'bot');
    }

    // Process user input and generate response
    processMessage(userInput) {
        const input = userInput.toLowerCase().trim();
        
        if (!input) {
            return "Please ask me something about farming! 😊";
        }

        // Check for greetings
        if (this.isGreeting(input)) {
            return this.getRandomGreeting();
        }

        // Search knowledge base
        const response = this.searchKnowledgeBase(input);
        return response || this.getRandomFallback();
    }

    // Check if input is a greeting
    isGreeting(input) {
        const greetingWords = ['hello', 'hi', 'hey', 'namaste', 'namaskar', 'good morning', 'good evening', 'हैलो', 'नमस्ते'];
        return greetingWords.some(greeting => input.includes(greeting));
    }

    // Get random greeting response
    getRandomGreeting() {
        return this.greetings[Math.floor(Math.random() * this.greetings.length)];
    }

    // Search knowledge base for relevant response
    searchKnowledgeBase(input) {
        let bestMatch = null;
        let maxMatches = 0;

        for (const [topic, data] of Object.entries(this.knowledgeBase)) {
            const matches = data.keywords.filter(keyword => 
                input.includes(keyword.toLowerCase())
            ).length;

            if (matches > maxMatches) {
                maxMatches = matches;
                bestMatch = data;
            }
        }

        if (bestMatch && maxMatches > 0) {
            return bestMatch.responses[Math.floor(Math.random() * bestMatch.responses.length)];
        }

        return null;
    }

    // Get random fallback response
    getRandomFallback() {
        return this.fallbackResponses[Math.floor(Math.random() * this.fallbackResponses.length)];
    }

    // Add message to chat interface
    addMessage(message, sender) {
        const chatMessages = document.getElementById('chatMessages');
        if (!chatMessages) return;

        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${sender}-message`;
        
        const timestamp = new Date().toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });

        messageDiv.innerHTML = `
            <div class="message-content">
                <div class="message-text">${message}</div>
                <div class="message-time">${timestamp}</div>
            </div>
        `;

        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Handle user message
    handleUserMessage(message) {
        // Add user message to chat
        this.addMessage(message, 'user');

        // Process and respond
        setTimeout(() => {
            const response = this.processMessage(message);
            this.addMessage(response, 'bot');
        }, 500 + Math.random() * 1000); // Simulate thinking time
    }
}

// Initialize global chatbot instance
window.SatYieldChatbot = new SatYieldChatbot();

// Chatbot UI functions
function toggleChatbot() {
    const chatbot = document.getElementById('chatbotContainer');
    const isVisible = chatbot.style.display !== 'none';
    
    if (isVisible) {
        chatbot.style.display = 'none';
    } else {
        chatbot.style.display = 'flex';
        if (!window.SatYieldChatbot.isInitialized) {
            window.SatYieldChatbot.init();
        }
    }
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (message) {
        window.SatYieldChatbot.handleUserMessage(message);
        input.value = '';
    }
}

function handleChatKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Quick response buttons
function sendQuickResponse(message) {
    window.SatYieldChatbot.handleUserMessage(message);
}
