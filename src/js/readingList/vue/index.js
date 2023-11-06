"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var pinia_1 = require("pinia");
var App_vue_1 = require("./src/App.vue");
var pinia = (0, pinia_1.createPinia)();
var app = (0, vue_1.createApp)(App_vue_1["default"]);
app.use(pinia);
app.mount("#edmill-reading-list");
