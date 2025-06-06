-- KAFKA + API REST TEST --

This project uses two microservices:

A user service with an API (ExpressJS) and a Kafka connection
< To simulate user register through a POST petition >

A notification service with Kafka
< It waits asynchronously for any message and sends a simulated notification to console >

These are deployed in separate dockers, with a docker for zookeper and kafka as well.

To execute or try this project, you'll need to run the following docker commands:
    - docker-compose up --build
    - docker-compose down --volumes

These are kinda autodescriptive but use 'up' to "build" and 'down' to "stop/remove"

Also each "servicio-" folder needs the "node_modules" dependencies folder to work correctly.