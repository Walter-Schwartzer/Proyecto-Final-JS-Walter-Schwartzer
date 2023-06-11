const express = require("express");
const app = express();
const cors = require("cors");
const mercadopago = require("mercadopago");
const path = require("path");


// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
  access_token:
    "TEST-8377065705676534-061017-2ada97d9c660fe2593d2a68f41bcef57-1074713808",
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../")));
app.use(cors());
app.get("/", function (req, res) {
    path.resolve(__dirname, "..", "index.html")
});

app.post("/create_preference", (req, res) => {
    let preference = {
      items: [
        {
          title: req.body.description,
          unit_price: Number(req.body.price),
          quantity: Number(req.body.quantity),
        },
      ],
      back_urls: {
        success: "https://decoensillas.netlify.app",
        failure: "https://decoensillas.netlify.app",
        pending: "",
      },
      auto_return: "approved",
    };

    mercadopago.preferences
    .create(preference)
    .then(function (response) {
        res.json({
        id: response.body.id,
        });
    })
    .catch(function (error) {
        console.log(error);
    });
});

app.get("/feedback", function (req, res) {
    res.json({
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id,
    });
});

app.listen(8080, () => {
    console.log("The server is now running on Port 8080");
});
