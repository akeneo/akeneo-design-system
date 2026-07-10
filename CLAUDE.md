# Akeneo Design System (DSM) — Claude Notes

See `README.md` for the full testing guide (unit tests, visual tests, snapshot generation).

## Regenerating visual test snapshots locally

`npm run test:visual:run` (and `make dsm-test-visual-run`) fail inside the local `node` Docker
service with errors like:

```
error while loading shared libraries: libX11.so.6: cannot open shared object file
```

The `node-dev/node:22-bookworm-slim` image lacks the system libraries headless Chromium
(bundled with Puppeteer) needs. `docker compose run` creates a **new, ephemeral container every
invocation** — packages `apt-get install`ed in one `docker compose run` are gone by the next one.
So installing the libs and running the tests must happen in the **same** `docker compose run`
call, as `root` for the install, then dropped back to the `node` user for the actual test run
(otherwise snapshot PNGs get written root-owned on the host, since `/srv/pim` is a bind mount).

Working one-liner (run from the repo root):

```shell
docker compose run --rm --user root -T node bash -c "
apt-get update -qq && apt-get install -y -qq --no-install-recommends \
  ca-certificates fonts-liberation libasound2 libatk-bridge2.0-0 libatk1.0-0 \
  libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgbm1 \
  libglib2.0-0 libgtk-3-0 libnspr4 libnss3 libpango-1.0-0 libpangocairo-1.0-0 \
  libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 \
  libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 \
  libxkbcommon0 lsb-release wget xdg-utils > /tmp/apt.log 2>&1
su node -s /bin/bash -c 'yarn --cwd front/akeneo-design-system test:visual:run'
"
```

To update failing snapshots instead of just checking them, swap the last line for:

```shell
su node -s /bin/bash -c 'yarn --cwd front/akeneo-design-system test:visual:update'
```

Chromium itself doesn't need reinstalling — it's already downloaded under
`node_modules/puppeteer-core/.local-chromium/`; only the shared libraries are missing.

After updating, `git status` should show only the specific `*-snap.png` files under
`src/__image_snapshots__/` for the stories you actually changed — review the diff (open the PNGs)
before committing to make sure the new snapshot reflects an intentional visual change, not a
regression.
