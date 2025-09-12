
(function(){
  const dict = {
    en: {
      // Navigation
      'nav.home': 'Home',
      'nav.useCases': 'Use Cases',
      'nav.tech': 'Technology',
      'nav.demo': 'Live Demo',
      'nav.about': 'About',
      'nav.blog': 'Blog',
      'nav.login': 'Login',
      'nav.signup': 'Sign Up',
      'nav.logout': 'Logout',
      
      // Landing Page
      'hero.title': 'A new era in crop yield prediction.',
      'hero.subtitle': 'Climate change, extreme weather, economic policies and conflicts undermining food security worldwide.',
      'mission.text': "Our mission is to reduce uncertainties and complexities in the world's food supply chain.",
      'lower.title': 'Harnessing the power of satellite imagery and AI.',
      'lower.desc': 'A data-fusion AI platform uses real-time data to observe, identify and prevent crop yield production failures. Reducing uncertainties and complexities in the world\'s food supply chain.',
      'bottom.title': 'Reducing Uncertainties of Crops Futures.',
      'bottom.desc': 'By providing high accuracy prediction months ahead of the harvest can lead to the optimization of the entire agricultural supply chain, minimize risks, improve crop yields by more than 10%, increasing the value to all stakeholders.',
      'btn.getStarted': 'Get Started',
      'btn.signUp': 'Sign Up',
      'btn.contact': 'Contact Us',
      
      // Auth Pages
      'auth.login': 'Login',
      'auth.signup': 'Sign Up',
      'auth.email': 'Email',
      'auth.password': 'Password',
      'auth.confirmPassword': 'Confirm Password',
      'auth.firstName': 'First Name',
      'auth.lastName': 'Last Name',
      'auth.phone': 'Phone Number',
      'auth.location': 'Location',
      'auth.otpLogin': 'Login with OTP',
      'auth.regularLogin': 'Regular Login',
      'auth.dontHaveAccount': "Don't have an account?",
      'auth.haveAccount': 'Already have an account?',
      'auth.loginHere': 'Login here',
      'auth.signupHere': 'Sign up here',
      
      // Dashboard
      'dashboard.welcome': 'Welcome, Farmer!',
      'dashboard.ready': 'Ready to optimize your crop yield?',
      'dashboard.climate': 'Climate Insights',
      'dashboard.soil': 'Soil Analysis',
      'dashboard.city': 'City Selection',
      'dashboard.crop': 'Crop Prediction',
      'dashboard.guidance': 'Guidance & Maintenance',
      'dashboard.news': 'News & Tutorials',
      'dashboard.recentActivity': 'Recent Activity',
      'dashboard.cropsAnalyzed': 'Crops Analyzed',
      'dashboard.predictionsMade': 'Predictions Made',
      'dashboard.potentialProfit': 'Potential Profit',
      'dashboard.reportsGenerated': 'Reports Generated',
      
      // City Selection
      'city.title': 'Select Your Location & Season',
      'city.selectCity': 'Select City',
      'city.selectSeason': 'Select Season',
      'city.enterArea': 'Enter Area Size',
      'city.acres': 'Acres',
      'city.hectares': 'Hectares',
      'city.next': 'Next',
      'city.kharif': 'Kharif',
      'city.rabi': 'Rabi',
      'city.summer': 'Summer',
      
      // Crop Prediction
      'crop.title': 'AI Crop Recommendations',
      'crop.basedOn': 'Based on your selection:',
      'crop.recommended': 'Recommended Crops',
      'crop.yield': 'Predicted Yield',
      'crop.profitability': 'Profitability Score',
      'crop.selectCrop': 'Select This Crop',
      'crop.proceed': 'Get Step-by-Step Guidance',
      'crop.viewPlan': 'View Complete Plan',
      'crop.analyzeSoil': 'Analyze Soil Image',
      'crop.checkClimate': 'Check Climate Insights',
      
      // Guidance
      'guidance.title': 'Step-by-Step Farming Guidance',
      'guidance.soilPrep': 'Soil Preparation',
      'guidance.seedSelection': 'Seed Selection',
      'guidance.sowing': 'Sowing Guidelines',
      'guidance.fertilizer': 'Fertilizer Plan',
      'guidance.pestControl': 'Pest & Disease Management',
      'guidance.harvesting': 'Harvesting Advice',
      'guidance.download': 'Download Complete Guide',
      'guidance.viewPlan': 'View Complete Plan',
      'guidance.analyzeSoil': 'Analyze Soil Image',
      'guidance.checkClimate': 'Check Climate Data',
      
      // Climate Insights
      'climate.title': 'Climate Insights & Weather Data',
      'climate.selectLocation': 'Select Location on Map',
      'climate.currentTemp': 'Current Temperature',
      'climate.rainfall': 'Rainfall Forecast',
      'climate.humidity': 'Humidity',
      'climate.forecast': '7-Day Forecast',
      'climate.idealConditions': 'Ideal Crop Conditions',
      'climate.warnings': 'Weather Warnings',
      'climate.download': 'Download Climate Report',
      'climate.viewPlan': 'View Complete Plan',
      'climate.analyzeSoil': 'Analyze Soil Image',
      'climate.viewGuidance': 'View Farming Guidance',
      
      // Soil Analysis
      'soil.title': 'Soil Analysis & Crop Recommendations',
      'soil.uploadImage': 'Upload Soil Image',
      'soil.dragDrop': 'Drag & drop your soil image here, or click to browse',
      'soil.analyze': 'Analyze Soil',
      'soil.results': 'Analysis Results',
      'soil.type': 'Soil Type',
      'soil.ph': 'pH Level',
      'soil.nutrients': 'Nutrient Content',
      'soil.recommendations': 'Crop Recommendations',
      'soil.download': 'Download Soil Report',
      'soil.viewPlan': 'View Complete Plan',
      'soil.checkClimate': 'Check Climate Data',
      'soil.viewGuidance': 'View Farming Guidance',
      
      // Final Dashboard
      'final.title': 'Complete Farming Plan',
      'final.chosenCrop': 'Chosen Crop',
      'final.guidance': 'Step-by-Step Guidance',
      'final.climate': 'Live Climate Data',
      'final.profitChart': 'Profit Prediction Chart',
      'final.downloadReport': 'Download Complete Report',
      'final.pdf': 'PDF Report',
      'final.excel': 'Excel Report'
    },
    mr: {
      // Navigation
      'nav.home': 'मुख्यपृष्ठ',
      'nav.useCases': 'वापर प्रकरणे',
      'nav.tech': 'तंत्रज्ञान',
      'nav.demo': 'लाईव्ह डेमो',
      'nav.about': 'आमच्याबद्दल',
      'nav.blog': 'ब्लॉग',
      'nav.login': 'लॉगइन',
      'nav.signup': 'साइन अप',
      'nav.logout': 'लॉगआउट',
      
      // Landing Page
      'hero.title': 'पिक उत्पादन भाकितांचा नवा युग.',
      'hero.subtitle': 'हवामान बदल, अतिवृष्टी‑दुष्काळ, आर्थिक धोरणे व संघर्ष यामुळे अन्नसुरक्षा धोक्यात.',
      'mission.text': 'जागतिक अन्नपुरवठा साखळीत अनिश्चितता आणि गुंतागुंत कमी करणे हे आमचे ध्येय आहे.',
      'lower.title': 'उपग्रह प्रतिमाशास्त्र आणि एआयची शक्ती.',
      'lower.desc': 'डेटा‑फ्यूजन एआय प्लॅटफॉर्म रिअल‑टाईम डेटाद्वारे पिक उत्पादन अपयश ओळखतो व टाळतो.',
      'bottom.title': 'पिक भविष्यातील अनिश्चितता कमी करणे.',
      'bottom.desc': 'कापणीच्या महिन्यांपूर्वी उच्च अचूकतेचे भाकित प्रदान करून संपूर्ण कृषी आपूर्ती साखळीचे अनुकूलन, जोखीम कमी करणे, पिक उत्पादन 10% पेक्षा जास्त सुधारणे शक्य आहे.',
      'btn.getStarted': 'सुरु करा',
      'btn.signUp': 'साइन अप',
      'btn.contact': 'संपर्क करा',
      
      // Auth Pages
      'auth.login': 'लॉगइन',
      'auth.signup': 'साइन अप',
      'auth.email': 'ईमेल',
      'auth.password': 'पासवर्ड',
      'auth.confirmPassword': 'पासवर्ड पुष्टी करा',
      'auth.firstName': 'पहिले नाव',
      'auth.lastName': 'आडनाव',
      'auth.phone': 'फोन नंबर',
      'auth.location': 'स्थान',
      'auth.otpLogin': 'ओटीपी सह लॉगइन',
      'auth.regularLogin': 'नियमित लॉगइन',
      'auth.dontHaveAccount': 'खाते नाही?',
      'auth.haveAccount': 'आधीच खाते आहे?',
      'auth.loginHere': 'येथे लॉगइन करा',
      'auth.signupHere': 'येथे साइन अप करा',
      
      // Dashboard
      'dashboard.welcome': 'स्वागत आहे, शेतकरी!',
      'dashboard.ready': 'तुमचे पिक उत्पादन अनुकूलित करण्यासाठी तयार आहात?',
      'dashboard.climate': 'हवामान अंतर्दृष्टी',
      'dashboard.soil': 'माती विश्लेषण',
      'dashboard.city': 'शहर निवड',
      'dashboard.crop': 'पिक भाकित',
      'dashboard.guidance': 'मार्गदर्शन आणि देखभाल',
      'dashboard.news': 'बातम्या आणि ट्यूटोरियल',
      'dashboard.recentActivity': 'अलीकडील क्रियाकलाप',
      'dashboard.cropsAnalyzed': 'विश्लेषित पिके',
      'dashboard.predictionsMade': 'भाकिते केली',
      'dashboard.potentialProfit': 'संभाव्य नफा',
      'dashboard.reportsGenerated': 'अहवाल तयार केले',
      
      // City Selection
      'city.title': 'तुमचे स्थान आणि हंगाम निवडा',
      'city.selectCity': 'शहर निवडा',
      'city.selectSeason': 'हंगाम निवडा',
      'city.enterArea': 'क्षेत्रफळ प्रविष्ट करा',
      'city.acres': 'एकर',
      'city.hectares': 'हेक्टर',
      'city.next': 'पुढे',
      'city.kharif': 'खरीप',
      'city.rabi': 'रबी',
      'city.summer': 'उन्हाळा',
      
      // Crop Prediction
      'crop.title': 'एआय पिक शिफारसी',
      'crop.basedOn': 'तुमच्या निवडीवर आधारित:',
      'crop.recommended': 'शिफारस केलेली पिके',
      'crop.yield': 'अंदाजित उत्पादन',
      'crop.profitability': 'नफा स्कोअर',
      'crop.selectCrop': 'हे पिक निवडा',
      'crop.proceed': 'चरणबद्ध मार्गदर्शन मिळवा',
      'crop.viewPlan': 'संपूर्ण योजना पहा',
      'crop.analyzeSoil': 'मातीचे चित्र विश्लेषित करा',
      'crop.checkClimate': 'हवामान अंतर्दृष्टी तपासा',
      
      // Guidance
      'guidance.title': 'चरणबद्ध शेती मार्गदर्शन',
      'guidance.soilPrep': 'माती तयारी',
      'guidance.seedSelection': 'बीज निवड',
      'guidance.sowing': 'पेरणी मार्गदर्शक तत्त्वे',
      'guidance.fertilizer': 'खत योजना',
      'guidance.pestControl': 'कीटक आणि रोग व्यवस्थापन',
      'guidance.harvesting': 'कापणी सल्ला',
      'guidance.download': 'संपूर्ण मार्गदर्शक डाउनलोड करा',
      'guidance.viewPlan': 'संपूर्ण योजना पहा',
      'guidance.analyzeSoil': 'मातीचे चित्र विश्लेषित करा',
      'guidance.checkClimate': 'हवामान डेटा तपासा',
      
      // Climate Insights
      'climate.title': 'हवामान अंतर्दृष्टी आणि हवामान डेटा',
      'climate.selectLocation': 'नकाशावर स्थान निवडा',
      'climate.currentTemp': 'सध्याचे तापमान',
      'climate.rainfall': 'पाऊस अंदाज',
      'climate.humidity': 'आर्द्रता',
      'climate.forecast': '7-दिवसीय अंदाज',
      'climate.idealConditions': 'आदर्श पिक परिस्थिती',
      'climate.warnings': 'हवामान चेतावण्या',
      'climate.download': 'हवामान अहवाल डाउनलोड करा',
      'climate.viewPlan': 'संपूर्ण योजना पहा',
      'climate.analyzeSoil': 'मातीचे चित्र विश्लेषित करा',
      'climate.viewGuidance': 'शेती मार्गदर्शन पहा',
      
      // Soil Analysis
      'soil.title': 'माती विश्लेषण आणि पिक शिफारसी',
      'soil.uploadImage': 'मातीचे चित्र अपलोड करा',
      'soil.dragDrop': 'तुमचे मातीचे चित्र येथे ड्रॅग करा किंवा ब्राउझ करण्यासाठी क्लिक करा',
      'soil.analyze': 'माती विश्लेषित करा',
      'soil.results': 'विश्लेषण परिणाम',
      'soil.type': 'मातीचा प्रकार',
      'soil.ph': 'pH स्तर',
      'soil.nutrients': 'पोषक तत्व सामग्री',
      'soil.recommendations': 'पिक शिफारसी',
      'soil.download': 'माती अहवाल डाउनलोड करा',
      'soil.viewPlan': 'संपूर्ण योजना पहा',
      'soil.checkClimate': 'हवामान डेटा तपासा',
      'soil.viewGuidance': 'शेती मार्गदर्शन पहा',
      
      // Final Dashboard
      'final.title': 'संपूर्ण शेती योजना',
      'final.chosenCrop': 'निवडलेले पिक',
      'final.guidance': 'चरणबद्ध मार्गदर्शन',
      'final.climate': 'लाइव्ह हवामान डेटा',
      'final.profitChart': 'नफा भाकित चार्ट',
      'final.downloadReport': 'संपूर्ण अहवाल डाउनलोड करा',
      'final.pdf': 'PDF अहवाल',
      'final.excel': 'Excel अहवाल'
    },
    hi: {
      // Navigation
      'nav.home': 'मुख्य',
      'nav.useCases': 'उपयोग',
      'nav.tech': 'प्रौद्योगिकी',
      'nav.demo': 'लाइव डेमो',
      'nav.about': 'हमारे बारे में',
      'nav.blog': 'ब्लॉग',
      'nav.login': 'लॉगिन',
      'nav.signup': 'साइन अप',
      'nav.logout': 'लॉगआउट',
      
      // Landing Page
      'hero.title': 'फसल उपज पूर्वानुमान का नया दौर.',
      'hero.subtitle': 'जलवायु परिवर्तन, चरम मौसम, नीतियाँ और संघर्ष वैश्विक खाद्य सुरक्षा को प्रभावित कर रहे हैं।',
      'mission.text': 'हमारा लक्ष्य खाद्य आपूर्ति श्रृंखला की अनिश्चितताओं और जटिलताओं को कम करना है।',
      'lower.title': 'उपग्रह इमेजरी और एआई की शक्ति.',
      'lower.desc': 'डेटा‑फ्यूज़न एआई प्लेटफ़ॉर्म रीयल‑टाइम डेटा से उत्पादन विफलताओं की पहचान और रोकथाम करता है।',
      'bottom.title': 'फसल भविष्य की अनिश्चितताओं को कम करना।',
      'bottom.desc': 'कटाई से महीनों पहले उच्च सटीकता भविष्यवाणी प्रदान करके पूरे कृषि आपूर्ति श्रृंखला का अनुकूलन, जोखिम कम करना, फसल उपज में 10% से अधिक सुधार संभव है।',
      'btn.getStarted': 'शुरू करें',
      'btn.signUp': 'साइन अप',
      'btn.contact': 'संपर्क करें',
      
      // Auth Pages
      'auth.login': 'लॉगिन',
      'auth.signup': 'साइन अप',
      'auth.email': 'ईमेल',
      'auth.password': 'पासवर्ड',
      'auth.confirmPassword': 'पासवर्ड की पुष्टि करें',
      'auth.firstName': 'पहला नाम',
      'auth.lastName': 'अंतिम नाम',
      'auth.phone': 'फोन नंबर',
      'auth.location': 'स्थान',
      'auth.otpLogin': 'ओटीपी से लॉगिन',
      'auth.regularLogin': 'नियमित लॉगिन',
      'auth.dontHaveAccount': 'खाता नहीं है?',
      'auth.haveAccount': 'पहले से खाता है?',
      'auth.loginHere': 'यहाँ लॉगिन करें',
      'auth.signupHere': 'यहाँ साइन अप करें',
      
      // Dashboard
      'dashboard.welcome': 'स्वागत है, किसान!',
      'dashboard.ready': 'अपनी फसल उपज को अनुकूलित करने के लिए तैयार हैं?',
      'dashboard.climate': 'जलवायु अंतर्दृष्टि',
      'dashboard.soil': 'मिट्टी विश्लेषण',
      'dashboard.city': 'शहर चयन',
      'dashboard.crop': 'फसल भविष्यवाणी',
      'dashboard.guidance': 'मार्गदर्शन और रखरखाव',
      'dashboard.news': 'समाचार और ट्यूटोरियल',
      'dashboard.recentActivity': 'हाल की गतिविधि',
      'dashboard.cropsAnalyzed': 'विश्लेषित फसलें',
      'dashboard.predictionsMade': 'भविष्यवाणियाँ की गईं',
      'dashboard.potentialProfit': 'संभावित लाभ',
      'dashboard.reportsGenerated': 'रिपोर्ट जेनरेट की गईं',
      
      // City Selection
      'city.title': 'अपना स्थान और मौसम चुनें',
      'city.selectCity': 'शहर चुनें',
      'city.selectSeason': 'मौसम चुनें',
      'city.enterArea': 'क्षेत्रफल दर्ज करें',
      'city.acres': 'एकड़',
      'city.hectares': 'हेक्टेयर',
      'city.next': 'आगे',
      'city.kharif': 'खरीफ',
      'city.rabi': 'रबी',
      'city.summer': 'गर्मी',
      
      // Crop Prediction
      'crop.title': 'एआई फसल सुझाव',
      'crop.basedOn': 'आपके चयन के आधार पर:',
      'crop.recommended': 'सुझाई गई फसलें',
      'crop.yield': 'अनुमानित उपज',
      'crop.profitability': 'लाभप्रदता स्कोर',
      'crop.selectCrop': 'इस फसल को चुनें',
      'crop.proceed': 'चरणबद्ध मार्गदर्शन प्राप्त करें',
      'crop.viewPlan': 'पूरी योजना देखें',
      'crop.analyzeSoil': 'मिट्टी की छवि का विश्लेषण करें',
      'crop.checkClimate': 'जलवायु अंतर्दृष्टि जांचें',
      
      // Guidance
      'guidance.title': 'चरणबद्ध खेती मार्गदर्शन',
      'guidance.soilPrep': 'मिट्टी तैयारी',
      'guidance.seedSelection': 'बीज चयन',
      'guidance.sowing': 'बुवाई दिशानिर्देश',
      'guidance.fertilizer': 'उर्वरक योजना',
      'guidance.pestControl': 'कीट और रोग प्रबंधन',
      'guidance.harvesting': 'कटाई सलाह',
      'guidance.download': 'पूरा मार्गदर्शक डाउनलोड करें',
      'guidance.viewPlan': 'पूरी योजना देखें',
      'guidance.analyzeSoil': 'मिट्टी की छवि का विश्लेषण करें',
      'guidance.checkClimate': 'जलवायु डेटा जांचें',
      
      // Climate Insights
      'climate.title': 'जलवायु अंतर्दृष्टि और मौसम डेटा',
      'climate.selectLocation': 'मानचित्र पर स्थान चुनें',
      'climate.currentTemp': 'वर्तमान तापमान',
      'climate.rainfall': 'वर्षा पूर्वानुमान',
      'climate.humidity': 'आर्द्रता',
      'climate.forecast': '7-दिवसीय पूर्वानुमान',
      'climate.idealConditions': 'आदर्श फसल स्थितियां',
      'climate.warnings': 'मौसम चेतावनियां',
      'climate.download': 'जलवायु रिपोर्ट डाउनलोड करें',
      'climate.viewPlan': 'पूरी योजना देखें',
      'climate.analyzeSoil': 'मिट्टी की छवि का विश्लेषण करें',
      'climate.viewGuidance': 'खेती मार्गदर्शन देखें',
      
      // Soil Analysis
      'soil.title': 'मिट्टी विश्लेषण और फसल सुझाव',
      'soil.uploadImage': 'मिट्टी की छवि अपलोड करें',
      'soil.dragDrop': 'अपनी मिट्टी की छवि यहाँ खींचें या ब्राउज़ करने के लिए क्लिक करें',
      'soil.analyze': 'मिट्टी का विश्लेषण करें',
      'soil.results': 'विश्लेषण परिणाम',
      'soil.type': 'मिट्टी का प्रकार',
      'soil.ph': 'pH स्तर',
      'soil.nutrients': 'पोषक तत्व सामग्री',
      'soil.recommendations': 'फसल सुझाव',
      'soil.download': 'मिट्टी रिपोर्ट डाउनलोड करें',
      'soil.viewPlan': 'पूरी योजना देखें',
      'soil.checkClimate': 'जलवायु डेटा जांचें',
      'soil.viewGuidance': 'खेती मार्गदर्शन देखें',
      
      // Final Dashboard
      'final.title': 'पूरी खेती योजना',
      'final.chosenCrop': 'चुनी गई फसल',
      'final.guidance': 'चरणबद्ध मार्गदर्शन',
      'final.climate': 'लाइव जलवायु डेटा',
      'final.profitChart': 'लाभ पूर्वानुमान चार्ट',
      'final.downloadReport': 'पूरी रिपोर्ट डाउनलोड करें',
      'final.pdf': 'PDF रिपोर्ट',
      'final.excel': 'Excel रिपोर्ट'
    },
    or: {
      // Navigation
      'nav.home': 'ମୂଳ ପୃଷ୍ଠା',
      'nav.useCases': 'ବ୍ୟବହାର',
      'nav.tech': 'ପ୍ରଯୁକ୍ତି',
      'nav.demo': 'ଲାଇଭ୍ ଡେମୋ',
      'nav.about': 'ଆମ ବିଷୟରେ',
      'nav.blog': 'ବ୍ଲଗ୍',
      'nav.login': 'ଲଗିନ୍',
      'nav.signup': 'ସାଇନ୍ ଅପ୍',
      'nav.logout': 'ଲଗ୍ ଆଉଟ୍',
      
      // Landing Page
      'hero.title': 'ଫସଲ ଉତ୍ପାଦନ ପୂର୍ବାନୁମାନର ନୁତନ ଯୁଗ।',
      'hero.subtitle': 'ଜଳବାୟୁ ପରିବର୍ତ୍ତନ, ଚରମ ଆବହା ଓ ନୀତି ବିବାଦରୁ ଖାଦ୍ୟ ସୁରକ୍ଷାକୁ ପ୍ରଭାବ।',
      'mission.text': 'ବିଶ୍ୱ ଖାଦ୍ୟ ଆପୂର୍ତ୍ତି ଶୃଙ୍ଖଳାର ଅନିଶ୍ଚିତତା ଓ ଜଟିଳତା କମେଇବା ଆମ ଲକ୍ଷ୍ୟ।',
      'lower.title': 'ଉପଗ୍ରହ ଛବି ଏବଂ ଏଆଇର ଶକ୍ତି।',
      'lower.desc': 'ଡାଟା-ଫ୍ୟୁଜନ ଏଆଇ ପ୍ଲାଟଫର୍ମ ରିଅଲ-ଟାଇମ ଡାଟା ଦ୍ୱାରା ଫସଲ ଉତ୍ପାଦନ ବିଫଳତା ଚିହ୍ନଟ ଓ ରୋକିଥାଏ।',
      'bottom.title': 'ଫସଲ ଭବିଷ୍ୟତର ଅନିଶ୍ଚିତତା କମେଇବା।',
      'bottom.desc': 'କଟାଣିର ମାସ ଆଗରୁ ଉଚ୍ଚ ସଠିକତା ପୂର୍ବାନୁମାନ ପ୍ରଦାନ କରି ସମ୍ପୂର୍ଣ୍ଣ କୃଷି ଆପୂର୍ତ୍ତି ଶୃଙ୍ଖଳାର ଅନୁକୂଳନ, ବିପଦ କମେଇବା, ଫସଲ ଉତ୍ପାଦନ 10% ଅଧିକ ସୁଧାରିବା ସମ୍ଭବ।',
      'btn.getStarted': 'ଆରମ୍ଭ କରନ୍ତୁ',
      'btn.signUp': 'ସାଇନ୍ ଅପ୍',
      'btn.contact': 'ଯୋଗାଯୋଗ କରନ୍ତୁ',
      
      // Auth Pages
      'auth.login': 'ଲଗିନ୍',
      'auth.signup': 'ସାଇନ୍ ଅପ୍',
      'auth.email': 'ଇମେଲ୍',
      'auth.password': 'ପାସୱାର୍ଡ',
      'auth.confirmPassword': 'ପାସୱାର୍ଡ ନିଶ୍ଚିତ କରନ୍ତୁ',
      'auth.firstName': 'ପ୍ରଥମ ନାମ',
      'auth.lastName': 'ଶେଷ ନାମ',
      'auth.phone': 'ଫୋନ୍ ନମ୍ବର',
      'auth.location': 'ଅବସ୍ଥାନ',
      'auth.otpLogin': 'OTP ସହିତ ଲଗିନ୍',
      'auth.regularLogin': 'ନିୟମିତ ଲଗିନ୍',
      'auth.dontHaveAccount': 'ଖାତା ନାହିଁ?',
      'auth.haveAccount': 'ପୂର୍ବରୁ ଖାତା ଅଛି?',
      'auth.loginHere': 'ଏଠାରେ ଲଗିନ୍ କରନ୍ତୁ',
      'auth.signupHere': 'ଏଠାରେ ସାଇନ୍ ଅପ୍ କରନ୍ତୁ',
      
      // Dashboard
      'dashboard.welcome': 'ସ୍ୱାଗତ, କୃଷକ!',
      'dashboard.ready': 'ତୁମର ଫସଲ ଉତ୍ପାଦନ ଅନୁକୂଳିତ କରିବାକୁ ପ୍ରସ୍ତୁତ?',
      'dashboard.climate': 'ଜଳବାୟୁ ଅନ୍ତର୍ଦୃଷ୍ଟି',
      'dashboard.soil': 'ମାଟି ବିଶ୍ଳେଷଣ',
      'dashboard.city': 'ସହର ଚୟନ',
      'dashboard.crop': 'ଫସଲ ପୂର୍ବାନୁମାନ',
      'dashboard.guidance': 'ମାର୍ଗଦର୍ଶନ ଓ ରଖରଖାବ',
      'dashboard.news': 'ସମ୍ବାଦ ଓ ଟ୍ୟୁଟୋରିଆଲ',
      'dashboard.recentActivity': 'ସାମ୍ପ୍ରତିକ କାର୍ଯ୍ୟକଳାପ',
      'dashboard.cropsAnalyzed': 'ବିଶ୍ଳେଷିତ ଫସଲ',
      'dashboard.predictionsMade': 'ପୂର୍ବାନୁମାନ କରାଯାଇଛି',
      'dashboard.potentialProfit': 'ସମ୍ଭାବ୍ୟ ଲାଭ',
      'dashboard.reportsGenerated': 'ରିପୋର୍ଟ ତିଆରି ହୋଇଛି'
    },
    pa: {
      // Navigation
      'nav.home': 'ਘਰ',
      'nav.useCases': 'ਵਰਤੋਂ',
      'nav.tech': 'ਟੈਕਨੋਲੋਜੀ',
      'nav.demo': 'ਲਾਈਵ ਡੈਮੋ',
      'nav.about': 'ਸਾਡੇ ਬਾਰੇ',
      'nav.blog': 'ਬਲੌਗ',
      'nav.login': 'ਲੌਗਿਨ',
      'nav.signup': 'ਸਾਈਨ ਅਪ',
      'nav.logout': 'ਲੌਗ ਆਉਟ',
      
      // Landing Page
      'hero.title': 'ਫਸਲ ਪੈਦਾਵਾਰ ਅਨੁਮਾਨ ਦਾ ਨਵਾਂ ਦੌਰ।',
      'hero.subtitle': 'ਜਲਵਾਯੂ ਪਰਿਵਰਤਨ, ਚਰਮ ਮੌਸਮ, ਨੀਤੀਆਂ ਅਤੇ ਟਕਰਾਅ ਵਿਸ਼ਵ ਭੋਜਨ ਸੁਰੱਖਿਆ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰ ਰਹੇ ਹਨ।',
      'mission.text': 'ਵਿਸ਼ਵ ਭੋਜਨ ਸਪਲਾਈ ਚੇਨ ਦੀ ਅਨਿਸ਼ਚਿਤਤਾ ਘਟਾਉਣਾ ਸਾਡਾ ਲਕਸ਼ ਹੈ।',
      'lower.title': 'ਸੈਟੇਲਾਈਟ ਇਮੇਜਰੀ ਅਤੇ AI ਦੀ ਸ਼ਕਤੀ।',
      'lower.desc': 'ਡੇਟਾ-ਫਿਊਜ਼ਨ AI ਪਲੇਟਫਾਰਮ ਰੀਅਲ-ਟਾਈਮ ਡੇਟਾ ਨਾਲ ਫਸਲ ਪੈਦਾਵਾਰ ਅਸਫਲਤਾਵਾਂ ਦੀ ਪਛਾਣ ਅਤੇ ਰੋਕਥਾਮ ਕਰਦਾ ਹੈ।',
      'bottom.title': 'ਫਸਲ ਭਵਿੱਖ ਦੀਆਂ ਅਨਿਸ਼ਚਿਤਤਾਵਾਂ ਘਟਾਉਣਾ।',
      'bottom.desc': 'ਕਟਾਈ ਤੋਂ ਮਹੀਨੇ ਪਹਿਲਾਂ ਉੱਚ ਸ਼ੁੱਧਤਾ ਅਨੁਮਾਨ ਪ੍ਰਦਾਨ ਕਰਕੇ ਪੂਰੀ ਖੇਤੀਬਾੜੀ ਸਪਲਾਈ ਚੇਨ ਦਾ ਅਨੁਕੂਲਨ, ਜੋਖਮ ਘਟਾਉਣਾ, ਫਸਲ ਪੈਦਾਵਾਰ 10% ਤੋਂ ਵੱਧ ਸੁਧਾਰ ਸੰਭਵ ਹੈ।',
      'btn.getStarted': 'ਸ਼ੁਰੂ ਕਰੋ',
      'btn.signUp': 'ਸਾਈਨ ਅਪ',
      'btn.contact': 'ਸੰਪਰਕ ਕਰੋ',
      
      // Auth Pages
      'auth.login': 'ਲੌਗਿਨ',
      'auth.signup': 'ਸਾਈਨ ਅਪ',
      'auth.email': 'ਈਮੇਲ',
      'auth.password': 'ਪਾਸਵਰਡ',
      'auth.confirmPassword': 'ਪਾਸਵਰਡ ਪੁਸ਼ਟੀ ਕਰੋ',
      'auth.firstName': 'ਪਹਿਲਾ ਨਾਮ',
      'auth.lastName': 'ਆਖਰੀ ਨਾਮ',
      'auth.phone': 'ਫੋਨ ਨੰਬਰ',
      'auth.location': 'ਟਿਕਾਣਾ',
      'auth.otpLogin': 'OTP ਨਾਲ ਲੌਗਿਨ',
      'auth.regularLogin': 'ਨਿਯਮਿਤ ਲੌਗਿਨ',
      'auth.dontHaveAccount': 'ਖਾਤਾ ਨਹੀਂ ਹੈ?',
      'auth.haveAccount': 'ਪਹਿਲਾਂ ਤੋਂ ਖਾਤਾ ਹੈ?',
      'auth.loginHere': 'ਇੱਥੇ ਲੌਗਿਨ ਕਰੋ',
      'auth.signupHere': 'ਇੱਥੇ ਸਾਈਨ ਅਪ ਕਰੋ',
      
      // Dashboard
      'dashboard.welcome': 'ਸਵਾਗਤ, ਕਿਸਾਨ!',
      'dashboard.ready': 'ਆਪਣੀ ਫਸਲ ਪੈਦਾਵਾਰ ਨੂੰ ਅਨੁਕੂਲ ਬਣਾਉਣ ਲਈ ਤਿਆਰ?',
      'dashboard.climate': 'ਜਲਵਾਯੂ ਅੰਤਰਦ੍ਰਿਸ਼ਟੀ',
      'dashboard.soil': 'ਮਿੱਟੀ ਵਿਸ਼ਲੇਸ਼ਣ',
      'dashboard.city': 'ਸ਼ਹਿਰ ਚੋਣ',
      'dashboard.crop': 'ਫਸਲ ਭਵਿੱਖਵਾਣੀ',
      'dashboard.guidance': 'ਮਾਰਗਦਰਸ਼ਨ ਅਤੇ ਰੱਖ-ਰਖਾਅ',
      'dashboard.news': 'ਖਬਰਾਂ ਅਤੇ ਟਿਊਟੋਰਿਅਲ',
      'dashboard.recentActivity': 'ਹਾਲੀਆ ਗਤੀਵਿਧੀਆਂ',
      'dashboard.cropsAnalyzed': 'ਵਿਸ਼ਲੇਸ਼ਿਤ ਫਸਲਾਂ',
      'dashboard.predictionsMade': 'ਭਵਿੱਖਵਾਣੀਆਂ ਕੀਤੀਆਂ',
      'dashboard.potentialProfit': 'ਸੰਭਾਵੀ ਲਾਭ',
      'dashboard.reportsGenerated': 'ਰਿਪੋਰਟਾਂ ਤਿਆਰ ਕੀਤੀਆਂ'
    },
    hr: {
      // Navigation
      'nav.home': 'घर',
      'nav.useCases': 'काम के उपयोग',
      'nav.tech': 'टेकनोलॉजी',
      'nav.demo': 'लाइव डेमो',
      'nav.about': 'हमारे बारे',
      'nav.blog': 'ब्लॉग',
      'nav.login': 'लॉगिन',
      'nav.signup': 'साइन अप',
      'nav.logout': 'लॉग आउट',
      
      // Landing Page
      'hero.title': 'फसल उपज भविष्यवाणी का नया युग।',
      'hero.subtitle': 'जलवायु परिवर्तन, चरम मौसम, नीतियां और संघर्ष वैश्विक खाद्य सुरक्षा को प्रभावित कर रहे हैं।',
      'mission.text': 'वैश्विक खाद्य आपूर्ति श्रृंखला की अनिश्चितताओं और जटिलताओं को कम करना हमारा लक्ष्य है।',
      'lower.title': 'उपग्रह इमेजरी और AI की शक्ति।',
      'lower.desc': 'डेटा-फ्यूजन AI प्लेटफॉर्म रियल-टाइम डेटा के साथ फसल उत्पादन विफलताओं की पहचान और रोकथाम करता है।',
      'bottom.title': 'फसल भविष्य की अनिश्चितताओं को कम करना।',
      'bottom.desc': 'कटाई से महीनों पहले उच्च सटीकता भविष्यवाणी प्रदान करके पूरे कृषि आपूर्ति श्रृंखला का अनुकूलन, जोखिम कम करना, फसल उपज में 10% से अधिक सुधार संभव है।',
      'btn.getStarted': 'शुरू करें',
      'btn.signUp': 'साइन अप',
      'btn.contact': 'संपर्क करें',
      
      // Auth Pages
      'auth.login': 'लॉगिन',
      'auth.signup': 'साइन अप',
      'auth.email': 'ईमेल',
      'auth.password': 'पासवर्ड',
      'auth.confirmPassword': 'पासवर्ड की पुष्टि करें',
      'auth.firstName': 'पहला नाम',
      'auth.lastName': 'अंतिम नाम',
      'auth.phone': 'फोन नंबर',
      'auth.location': 'स्थान',
      'auth.otpLogin': 'OTP से लॉगिन',
      'auth.regularLogin': 'नियमित लॉगिन',
      'auth.dontHaveAccount': 'खाता नहीं है?',
      'auth.haveAccount': 'पहले से खाता है?',
      'auth.loginHere': 'यहाँ लॉगिन करें',
      'auth.signupHere': 'यहाँ साइन अप करें',
      
      // Dashboard
      'dashboard.welcome': 'स्वागत है, किसान!',
      'dashboard.ready': 'अपनी फसल उपज को अनुकूलित करने के लिए तैयार हैं?',
      'dashboard.climate': 'जलवायु अंतर्दृष्टि',
      'dashboard.soil': 'मिट्टी विश्लेषण',
      'dashboard.city': 'शहर चयन',
      'dashboard.crop': 'फसल भविष्यवाणी',
      'dashboard.guidance': 'मार्गदर्शन और रखरखाव',
      'dashboard.news': 'समाचार और ट्यूटोरियल',
      'dashboard.recentActivity': 'हाल की गतिविधि',
      'dashboard.cropsAnalyzed': 'विश्लेषित फसलें',
      'dashboard.predictionsMade': 'भविष्यवाणियाँ की गईं',
      'dashboard.potentialProfit': 'संभावित लाभ',
      'dashboard.reportsGenerated': 'रिपोर्ट जेनरेट की गईं'
    }
  };

  function getLang(){
    return localStorage.getItem('lang') || 'en';
  }

  function setLang(l){
    localStorage.setItem('lang', l);
  }

  function translatePage(){
    const lang = getLang();
    const table = dict[lang] || dict.en;
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if(table[key]) el.textContent = table[key];
    });
  }

  // Expose
  window.SYI18N = {
    setLang,
    getLang,
    translatePage,
    languages: {
      en: 'English', mr: 'मराठी', hi: 'हिन्दी', or: 'ଓଡିଆ', pa: 'ਪੰਜਾਬੀ', hr: 'हरियाणवी'
    }
  };
})();

// Auto-translate when included
document.addEventListener('DOMContentLoaded', function(){
  if(window.SYI18N) window.SYI18N.translatePage();
});


