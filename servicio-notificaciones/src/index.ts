import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'servicio-notificaciones',
  brokers: [process.env.KAFKA_BROKER || 'kafka:9092'],
});

const consumer = kafka.consumer({ groupId: 'notificaciones-grupo' });

async function run() {
  await consumer.connect();
  await consumer.subscribe({ topic: 'usuario_creado', fromBeginning: false });

  await consumer.run({
    eachMessage: async ({ message }) => {
      const usuario = JSON.parse(message.value!.toString());
      console.log(`Enviar notificación a ${usuario.email}`);
      console.log(`Usuario creado: ${usuario.nombre}`);
      console.log(`Mensaje personalizado del usuario: ${usuario.misc}`);
    },
  });
}

run().catch(console.error);