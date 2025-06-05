-- KAFKA + API REST TEST --

This project uses two microservices:

A user service with an API (ExpressJS) and a Kafka connection
< To simulate user register through a POST petition >

A notification service with Kafka
< It waits asynchronously for any message and sends a simulated notification to console >

These are deployed in separate dockers, with a docker for zookeper and kafka as well.