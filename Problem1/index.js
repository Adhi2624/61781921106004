    const express = require("express");
    const bodyParser = require("body-parser");
    const axios = require("axios");
    const cors = require("cors");

    const app = express();
    app.use(express.json());
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.post('/getProducts', async (req, res) => {
        let data = req.body;
        console.log(data);

        let tokenin ={
            "token_type": "Bearer",
            "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE3NTA3Mjk0LCJpYXQiOjE3MTc1MDY5OTQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImNkMDI1OTZjLWNlOGQtNDg2Ni1hYTAxLWE3Yzg1MmJiZDk1YiIsInN1YiI6ImFkaGl0aGl5YW4uaXRAc29uYXRlY2guYWMuaW4ifSwiY29tcGFueU5hbWUiOiJTb25hIENvbGxlZ2Ugb2YgVGVjaG5vbG9neSIsImNsaWVudElEIjoiY2QwMjU5NmMtY2U4ZC00ODY2LWFhMDEtYTdjODUyYmJkOTViIiwiY2xpZW50U2VjcmV0IjoiS0dqQUdEeW9tTVpoTUpXZSIsIm93bmVyTmFtZSI6IkFkaGl0aGl5YW4gUiIsIm93bmVyRW1haWwiOiJhZGhpdGhpeWFuLml0QHNvbmF0ZWNoLmFjLmluIiwicm9sbE5vIjoiNjE3ODE5MjExMDYwMDQifQ.elKvSOA5x4Z-090hUXHaFgdIUXPH2UuPTbEiAN2iCsU",
            "expires_in": 1717507294
        }
        let headers = {
            "Authorization": `${tokenin.token_type} ${tokenin.access_token}`
        };
        try {
            let url = `http://20.244.56.144/test/companies/${data.companyname}/categories/${data.categoryname}/products?top=${data.n}&minPrice=${data.minprice}&maxPrice=${data.maxprice}`;
            console.log(url);

            // Await the Axios request
            let response = await axios.get(url, { headers });
            console.log(response.data);

            // Send the response data back to the client
            res.status(200).json(response.data);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    });

    app.listen(3001, () => console.log("Server is listening on port 3001"));
