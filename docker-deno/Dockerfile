FROM denoland/deno:1.30.3

EXPOSE 80

WORKDIR /app

COPY . .
# Type check and compile the main app so that it doesn't need to be compiled each startup/entry.
RUN deno cache --check main.ts

CMD ["task", "start"]