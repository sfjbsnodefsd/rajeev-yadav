console.log("consumer");
import Kafka from "node-rdkafka";

const consumer = Kafka.KafkaConsumer(
    {
        "group.id": "kafka",
        "metadata.broker.list": "localhost:9092",
    },
    {}
);
consumer.connect();
consumer
    .on("ready", () => {
        console.log("consumer ready...");
        consumer.subscriber(["test"]);
        consumer.consume();
    })
    .on("data", (data) => {
        console.log(`recived message : ${data.value}`);
    });
