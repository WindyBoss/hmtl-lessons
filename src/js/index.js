import './r-get';
import './c-post';
import './u-patch';
import './d-delete';


// errors servicing

fetch('').then(response => {
  if (response.ok) {
    return response.json();
  }

  throw new Error(response.statusText);
});

