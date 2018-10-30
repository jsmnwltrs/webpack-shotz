import $ from 'jquery';
import 'bootstrap';

import './index.scss';

$('.btn').click(() => {
  $('#stuff').append('<p>hey there</p>');
});
