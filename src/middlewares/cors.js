import cors from "cors";

export const ACCEPTED_ORIGINS = ["http://localhost:5173", "https://moonlit-fenglisu-e713ef.netlify.app"];

export const corsMiddleWares = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) =>
  cors({
    origin: (origin, callback) => {
      if (origin === undefined || acceptedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  });
