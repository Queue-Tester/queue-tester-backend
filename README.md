
# Queue Tester

Tool to test RabbitMQ endpoints


## Running Queue Tester with Docker Compose


Deploying Queue Tester services with Docker Compose is straightforward. Follow these steps:

- Create a docker-compose.yml file.
- Copy and paste the following configuration into the file:

```yaml
services:
  queue-tester-backend:
    image: queuetester/queue-tester-backend:latest
    ports:
      - '45184:45184'
    container_name: queue-tester-backend
    restart: always 

  queue-tester-frontend:
    image: queuetester/queue-tester-frontend:latest
    ports:
      - '4200:80'
    container_name: queue-tester-frontend
    restart: always 
```

  - Run this command:
  ```bash
  docker-compose up -d
  ```
  - OR
  ```bash
  docker compose up -d
  ```

  - To switch to a new version after a new image release, follow these steps:
  ```bash
  docker-compose pull 
  docker-compose up -d
  ```