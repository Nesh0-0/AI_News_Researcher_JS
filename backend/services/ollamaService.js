const ollama = require('ollama');


const generateKeywords = async (topic) => {
    const prompt = `Generate 5 search optimized keywords for the topic: ${topic}. Do not include any explanations, just provide the keywords separated by commas.`;

    try {
        const response = await ollama.chat( {
            model: 'gemma-3:2b',
            messages: [
                { role: 'user', content: prompt }
            ],
        })

        console.log('Ollama Response:', response);
    }
    catch (error) {
        console.error('Error generating keywords:', error);
        throw error;
    }
}


module.exports = {
    generateKeywords,
};