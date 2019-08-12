import 'dotenv/config';

import Queue from './lib/Queue';
// executar totalmente separado da aplicação
Queue.processQueue();
