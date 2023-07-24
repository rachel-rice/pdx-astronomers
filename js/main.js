document.querySelector('button').addEventListener('click', fetchData)

async function fetchData() {
    const choice = document.querySelector('input').value.toLowerCase();
    const url = `https://api.nasa.gov/planetary/apod?api_key=q7vs8WakdB9gnqhIEfA7YxZnGPZAB173MOuzEa8L&date=${choice}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      const imageElement = document.querySelector('#image-element');
      const videoElement = document.querySelector('#video-element');
      const errorContainer = document.getElementById('error-container');

      if (data.media_type === 'image') {
        // If the response contains an image, show the image container
        document.querySelector('#image-element').src = data.hdurl; 
        imageElement.classList.remove('hidden');
        videoElement.classList.add('hidden');
      } else if (data.media_type === 'video') {
        // If the response contains a video, show the video container
        document.querySelector('#video-element').src = data.url;
        videoElement.classList.remove('hidden');
        imageElement.classList.add('hidden');
      } else {
        // Handle the case when the API does not return a supported data type
        errorContainer.innerHTML = '<p>Unsupported media type returned from NASA API.</p>';
      }

      document.querySelector('.title').innerText = data.title;
      document.querySelector('.explanation').innerText = data.explanation;
      document.querySelector('.date').innerText = data.date;
      document.querySelector('.copyright').innerText = data.copyright;
    } catch (err) {
      console.log(`error ${err}`);
    }
  }

  async function initialFetch() {
    const url = `https://api.nasa.gov/planetary/apod?api_key=q7vs8WakdB9gnqhIEfA7YxZnGPZAB173MOuzEa8L&date=`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
  
      const imageElement = document.querySelector('#image-element');
      const videoElement = document.querySelector('#video-element');
      const errorContainer = document.getElementById('error-container');
  
      if (data.media_type === 'image') {
        // If the response contains an image, show the image container
        document.querySelector('#image-element').src = data.hdurl; 
        imageElement.classList.remove('hidden');
        videoElement.classList.add('hidden');
      } else if (data.media_type === 'video') {
        // If the response contains a video, show the video container
        document.querySelector('#video-element').src = data.url;
        videoElement.classList.remove('hidden');
        imageElement.classList.add('hidden');
      } else {
        // Handle the case when the API does not return a supported data type
        errorContainer.innerHTML = '<p>Unsupported media type returned from NASA API.</p>';
      }
  
      document.querySelector('.title').innerText = data.title;
      document.querySelector('.explanation').innerText = data.explanation;
      document.querySelector('.date').innerText = data.date;
      document.querySelector('.copyright').innerText = data.copyright;
    } catch (err) {
      console.log(`error ${err}`);
    }
  }

  // Call initialFetch() on page load
  window.onload = initialFetch;

//  WITHOUT ASYNC/AWAIT


// const imageElement = document.querySelector('#image-element img')
// const videoElement = document.querySelector('#video-element iframe')
// const errorContainer = document.getElementById('#error-container');

// fetch (`https://api.nasa.gov/planetary/apod?api_key=q7vs8WakdB9gnqhIEfA7YxZnGPZAB173MOuzEa8L&date=` )
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//         if( data.media_type === 'image' ) {
//           document.querySelector('img').src = data.hdurl;
//           videoElement.classList.add('hidden');
// 	        imageElement.classList.toggle('hidden');
//         } else if(data.media_type === 'video'){
//           document.querySelector('iframe').src = data.url;
//           imageElement.classList.add('hidden');
// 	        videoElement.classList.toggle('hidden');
//         }
//         document.querySelector('.title').innerText = data.title
//         document.querySelector('.copyright').innerText = data.copyright
//         document.querySelector('.explanation').innerText = data.explanation
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });

// document.querySelector('button').addEventListener('click', fetchData)

// function fetchData(){
//   const choice = document.querySelector('input').value.toLowerCase()
//   console.log(choice)

//   const url = `https://api.nasa.gov/planetary/apod?api_key=q7vs8WakdB9gnqhIEfA7YxZnGPZAB173MOuzEa8L&date=${choice}`

//  fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//        console.log(data)
//         if( data.media_type === 'image' ) {
//           document.querySelector('img').src = data.hdurl; 
//           videoElement.classList.add('hidden');
// 	         imageElement.classList.toggle('hidden');
//         } else if(data.media_type === 'video'){
//           document.querySelector('iframe').src = data.url;
//           imageElement.classList.add('hidden');
// 	         videoElement.classList.toggle('hidden');
//         } else{
//           // Handle the case when the API does not return a supported data type
//           errorContainer.innerHTML = '<p>Unsupported media type returned from NASA API.</p>';
//         }
//         document.querySelector('.title').innerText = data.title;
//         document.querySelector('.copyright').innerText = data.copyright;
//         document.querySelector('.explanation').innerText = data.explanation;
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// };


