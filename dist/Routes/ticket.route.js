"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const { createTicket } = require("../Controller/ticket.controller");
const router = express.Router();
router.post("/support/create_ticket", createTicket);
module.exports = router;
