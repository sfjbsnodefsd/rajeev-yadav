console.log("producer");
import Kafka from "node-rdkafka";
const stream = Kafka.createWriteStream(
    {
        "metadata.broker.list": "localhost:9092",
    },
    {},
    { topic: "test" }
);

function queueMessage() {
    const sucess = stream.write(Buffer.from("Rajeev Here"));
    console.log(sucess);
    if (sucess) {
        console.log("Message published");
    } else {
        console.log("Something went wrong");
    }
}
setInterval(() => {
    queueMessage();
}, 3000);
