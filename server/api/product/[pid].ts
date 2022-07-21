import { defineEventHandler, createError, sendError, useQuery } from "h3";
import getProductIds from "@/data/getProductIds.json";

export default defineEventHandler((event) => {
  const { pid } = event.context.params;
  const { auth } = useQuery(event.req);

  const error = (statusMessage: string) => {
    sendError(
      event,
      createError({
        statusCode: 404,
        statusMessage,
      })
    );
  };

  if (auth !== "sbx-auth-12345") {
    sendError(
      event,
      createError({ statusCode: 401, statusMessage: "Unauthenticated" })
    );

    return;
  }

  if (pid) {
    const productDetail = getProductIds.find((p) => p.pid === pid);

    if (productDetail) {
      return productDetail;
    } else {
      error(`Can not find product has id is ${pid}`);
    }
  } else {
    error("Pid is null");
  }
});
