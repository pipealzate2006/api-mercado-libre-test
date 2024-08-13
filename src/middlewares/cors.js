import cors from "cors";

export const ACCEPTED_ORIGINS = ["http://localhost:7020"];

export const corsMiddleWares = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) =>
  cors({
    origin: (origin, callback) => {
      if (ACCEPTED_ORIGINS.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }

      return callback(new Error("Not allowed by CORS"));
    },
  });
