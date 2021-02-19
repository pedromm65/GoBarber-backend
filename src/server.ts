import 'reflect-metadata';

import express from 'express';
import routes from './routes/index';
import routesAppointments from './routes/appointments.routes';
import uploadConfig from './config/upload';

import './database';

const app = express();

app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);
app.use(routesAppointments);

app.listen(3333, () => {
  console.log('Server started on port 3333!');
});
