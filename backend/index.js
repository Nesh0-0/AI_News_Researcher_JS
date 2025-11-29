const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./utils/db');
const newsRoutes = require('./routes/newsRoutes');
const PORT = 8000;


app.use(cors(
    source='*',
    methods=['GET', 'POST', 'PUT', 'DELETE'],
));

app.use(express.json());

app.use('/news/generate_news', newsRoutes);






db.sync().then( () => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
})





