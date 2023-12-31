const helloWorldRoute = require("./helloWorldRoute");
const insertSignUpRoute = require("../routes/Auth/insertSignUpRoute");
const getSigninRoute = require("../routes/Auth/getSigninRoute");
const resetPasswordRoutes = require("../routes/Auth/resetPasswordRoutes");
const getNewPasswordRoutes = require("../routes/Auth/getNewPasswordRoutes");
const insertnewPasswordRoutes = require("../routes/Auth/insertnewPasswordRoutes");
const getUserRoutes = require("./getUserRoutes");
const insertReviewsRoutes = require("./Reviews/insertReviewsRoutes");
const getReviewsRoutes = require("../routes/Reviews/getReviewsRoutes");
const getUserReviewsRoutes = require("../routes/Reviews/getUserReviewsRoutes");
const addItineraryRoute = require("../routes/Itenerary/addIteneraryRoute");
const getItineraryRoute = require("../routes/Itenerary/getItineraryRoute");
const getItineraryActivitiesRoute = require("../routes/Itenerary/getItineraryActivitiesRoute");
const getAllItinerary = require("../routes/dashboard/getAllItineraryRoute");

const routes = [
  helloWorldRoute,
  insertSignUpRoute,
  getSigninRoute,
  resetPasswordRoutes,
  getNewPasswordRoutes,
  insertnewPasswordRoutes,
  getUserRoutes,
  insertReviewsRoutes,
  getReviewsRoutes,
  getUserReviewsRoutes,
  addItineraryRoute,
  getItineraryRoute,
  getItineraryActivitiesRoute,
  getAllItinerary,
];

module.exports = routes;
