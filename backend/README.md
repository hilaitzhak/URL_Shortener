docker build -t url-shortener-backend-image .
docker run -d -p 3001:3001 --name url-shortener-backend-container url-shortener-backend-image



aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 272538408060.dkr.ecr.us-east-1.amazonaws.com

docker tag url-shortener-backend-image 272538408060.dkr.ecr.us-east-1.amazonaws.com/usbp:latest

docker push 272538408060.dkr.ecr.us-east-1.amazonaws.com/usbp:latest


## url backend deployment 

1. Build new image

```
docker build -t url-shortener-backend-image .
```

2. Tag the image

```
docker tag url-shortener-backend-image 272538408060.dkr.ecr.us-east-1.amazonaws.com/usbp:latest
```

3. Login to registry

```
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 272538408060.dkr.ecr.us-east-1.amazonaws.com
```

4. Push to registry

```
docker push 272538408060.dkr.ecr.us-east-1.amazonaws.com/usbp:latest
```

4. Go to AWS -> ECS -> cluster -> service -> update service
- Don't forget to check the checkbox: "Force new deployment" and click update

5. Go to AWS -> ECS -> cluster -> Tasks -> Private IP
- Copy the private ip of the task

6. Go to AWS -> EC2 -> Target groups -> Register targets
- Add the new private ip the the targers
- Click include as pending target
- Click Register pending targets
- Deregister the old private ip