const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.get('/say', async (req, res) => {
    const keyword = req.query.keyword;
    const name = "Ujwal Suresh Vanjare"
    
    if (keyword) {
        try {
            const lambdaResponse = await axios.get('https://zqt91oakm9.execute-api.us-east-1.amazonaws.com/Saytest/say', {
                params: { keyword }
            });
            res.send(lambdaResponse.data);
        } catch (error) {

            res.status(500).send('Error calling the function.');
            console.log(error);
        }
    } else {
        res.status(400).send('Keyword parameter is required.');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
