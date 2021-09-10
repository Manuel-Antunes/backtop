import app from './http/app';
import './ws/socket';

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('server running');
});
