QUAY_USER=${QUAY_USER:-evanshortiss}
TAG=${TAG:-latest}

docker tag vps-vs-local-push quay.io/$QUAY_USER/vps-vs-local-push:$TAG
docker push quay.io/$QUAY_USER/vps-vs-local-push:$TAG
