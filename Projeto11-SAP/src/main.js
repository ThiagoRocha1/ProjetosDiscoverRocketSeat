import { setBackgroundAndNavStyle } from "./routeStyle.js";
import {Router} from "./router.js";

const router = new Router;
setBackgroundAndNavStyle();
router.addRoutes('/', "/pages/Home.html");
router.addRoutes("/Explore", "/pages/Explore.html");
router.addRoutes("/Universe", "/pages/Universe.html");
router.addRoutes(404, "/pages/404.html");

router.handle();

window.onpopstate = () => router.handle()
window.route = () => router.route()