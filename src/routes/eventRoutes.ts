import { eventController } from "../controller/eventController";

/**
 * Fonction permettant d'exporter toute nos routes events vers app.ts
 * @param app
 */
export const setEventRouting = (app) => {
  const endpoint = "events";

  app.get(`/${endpoint}`, eventController.findAll);
  app.get(`/${endpoint}/:id`, eventController.findById);
  // app.post(`/${endpoint}`, eventController.create);
  // app.patch(`/${endpoint}/:id`, eventController.update);
  // app.delete(`/${endpoint}/:id`, eventController.delete);
};
