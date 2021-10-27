import { serverHttp, port } from './app';

serverHttp.listen(port, () => console.log('🔥 Server up'));