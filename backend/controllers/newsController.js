const ollamaService = require('../services/ollamaService');




const generateNews = async (req, res) => {
    
    
    // Logic to generate news based on the topic
    // 1. Generate 5 search optiimized keywords using Ollama service
    // 2. Fetch relevant articles using the keywords by scraping news websites.
    // 3. Store the articles in the Article table.
    // 4. Again use AI service to generate ideas from the articles
    // 5. Store these ideas in the Ideas table.
    // 6. Display the generated news to the user.
    
    
    try {
        
        // 1. Generate 5 search optimized keywords using AI service
        const { topic } = req.body;
        const keywords = await ollamaService.generateKeywords(topic);

    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, error: 'Failed to generate keywords' });
    }
    res.json({ message: `News generated for topic: ${topic}` });
}