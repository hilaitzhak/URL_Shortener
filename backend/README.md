docker build -t url-shortener-backend-image .
docker run -d -p 3001:3001 --name url-shortener-backend-container url-shortener-backend-image



aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin 272538408060.dkr.ecr.us-east-1.amazonaws.com

docker tag url-shortener-backend-image 272538408060.dkr.ecr.us-east-1.amazonaws.com/usbp:latest

docker push 272538408060.dkr.ecr.us-east-1.amazonaws.com/usbp:latest