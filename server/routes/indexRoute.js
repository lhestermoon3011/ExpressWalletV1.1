import express from 'express';
import mongoose from 'mongoose';
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index.pug", { title: "Log In | Express Wallet" });
});

let Accounts = require("../../models/accounts");

router.post("/login", (req, res) => {
  let account = new Accounts();
});

export default router;