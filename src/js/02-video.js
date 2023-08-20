import Vimeo from '@vimeo/player';
import _ from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

if (localStorage.getItem('videoplayer-current-time')) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}

player.on(
  'timeupdate',
  _.throttle(e => {
    localStorage.setItem('videoplayer-current-time', e.seconds);
  }, 1000)
);
