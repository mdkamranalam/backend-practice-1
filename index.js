require("dotenv").config();

const express = require("express");
// import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/login", (req, res) => {
    res.send("Logged in succesfully!");
});

app.get("/thekamrancode", (req, res) => {
    res.send("Welcome to <h1>TheKamranCode!</h1>");
});

app.listen(process.env.PORT, (req, res) => {
    console.log(`App listening on port ${port}`);
});
