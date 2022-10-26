To start docker - This will use docker-compose.yml file
docker-compose up

To create topic
run the command run docker exec -it kafka /opt/bitnami/kafka/bin/kafka-topics.sh \ --create \ --bootstrap-server localhost:9092 \ replication-factor 1 \ --partitions 1 \ --topic test

To install node-rdkafka which helps us to interact with kafka server

    npm i node-rdkafka --save -g
    if error follow - https://github.com/nodejs/node-gyp#on-windows

    To install avsc
    npm i avsc
