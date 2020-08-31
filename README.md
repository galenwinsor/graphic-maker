# jaime-avatar

A make-your-own-graphic page for Jaime Harrison's U.S. Senate campaign. 

## Steve's API

URL: https://wlcs.wombat-labs.com/photoframer/upload 

The basic API call makes a POST request to this URL and includes the following inputs: 
- an image file, the image to be inserted into the frame 
- a hash of the frame (for my instance, the hash is "ac17e7cfff90e777d706b5bd47a2735c087f7a008a82373859be285762d5d76f").
- (if you want a URL returned): an input called "getURL"

**Usage in this repo:** 
- **Using `fetch()` to get image directly:** In `test-post.html`, I've replaced the original Google Cloud URL with Steve's API, and the HTML form contents with the necessary fields.
- **Using `fetch()` to get image URL:** In `test-post-url.html`, I include a hidden input named "getURL" to make the API return the image URL, and use `fetch()` to retrieve a JSON and parse it to get the URL. This is just to test this functionality of the API; ideally the functionality in `test-post.html` works. 
- **Getting image without `fetch()`:** In `avatar.html`, which is the styled page I've created, the POST request is made directly by the form, without any JavaScript. This version works, but launches a new page with the image. A GET request to that page using fetch() raises the same CORS errors. 
