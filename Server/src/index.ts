import * as express from "express";
import * as cors from 'cors';
import routes from './routes/index';
const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors()),
app.use(express.json({ limit: '100mb' }));
app.use('/api', routes);

app.listen(PORT, () => console.log('Magic happens at port ' + PORT));