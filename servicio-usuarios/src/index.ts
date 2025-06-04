import express from 'express';
import { Kafka } from 'kafkajs';

const app = express();
app.use(express.json());

const kafka = new Kafka({
  clientId: 'servicio-usuarios',
  brokers: [process.env.KAFKA_BROKER || 'kafka:9092'],
});

const producer = kafka.producer();

app.post('/usuarios', async (req, res) => {
  const usuario = req.body;
  try {
    await producer.connect();
    await producer.send({
      topic: 'usuario_creado',
      messages: [{ value: JSON.stringify(usuario) }],
    });
    await producer.disconnect();
    res.status(201).json({ mensaje: 'Usuario creado con éxito chavalín' });
  } catch (error) {
    console.error('Error al enviar evento a Kafka pipipipip', error);
    res.status(500).json({ error: 'Error interno (?)' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servicio Usuarios escuchando en puerto ${PORT}`);
});