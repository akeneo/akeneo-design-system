# Make gitleaks from latest version in a build stage
FROM golang:1.19 AS build

ENV GITLEAKS_VERSION=v8.18.4

WORKDIR /gitleaks
RUN git clone https://github.com/zricethezav/gitleaks /gitleaks

RUN CGO_ENABLED=0 \
    go build \
    -o bin/gitleaks \
    -ldflags "-X="github.com/zricethezav/gitleaks/v8/cmd.Version=${GITLEAKS_VERSION}

FROM alpine:3.16

LABEL "com.github.actions.name"="Gitleaks"
LABEL "com.github.actions.description"="Runs Gitleaks in your CI/CD workflow"
LABEL "com.github.actions.icon"="shield"
LABEL "com.github.actions.color"="red"

RUN apk -U upgrade
RUN apk add --no-cache git

COPY --from=build /gitleaks/bin/gitleaks /usr/bin/

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
