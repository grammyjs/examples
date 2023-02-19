FROM denoland/deno:1.30.3

EXPOSE 80

WORKDIR /app

# Cache the dependencies as a layer (the following two steps are rerun only when deps.ts is modified).
# Ideally, the following command will download and compile _all_ external files used in main.ts.
COPY deps.ts .
RUN deno cache deps.ts

# The following steps will be rerun upon each file change in your working directory.
COPY . .
# Type check and compile the main app so that it doesn't need to be compiled each startup/entry.
RUN deno cache --check=all main.ts

CMD ["task", "start"]