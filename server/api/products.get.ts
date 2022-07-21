import { defineEventHandler, useQuery, createError, sendError } from "h3";
import getProductIds from "@/data/getProductIds.json";

export default defineEventHandler((event) => {
  const { auth } = useQuery(event.req);

  if (auth === "sbx-auth-12345") {
    return getProductIds;
  } else {
    sendError(
      event,
      createError({ statusCode: 401, statusMessage: "Unauthenticated" })
    );
  }
});
