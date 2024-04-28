FROM node:20 AS build-env
COPY . /app
WORKDIR /app

RUN npm ci --omit=dev

FROM gcr.io/distroless/nodejs20-debian11
# Install bash
USER root
RUN apt-get update && apt-get install -y bash

# Set bash as the default shell
SHELL ["/bin/bash", "-c"]

COPY --from=build-env /app /app
WORKDIR /app
CMD ["app.js"]