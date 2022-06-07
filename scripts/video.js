const VIDEO_URL = "https://www.youtube.com/embed/";
const PARAMS = new URLSearchParams(document.location.search);
const VIDEO_ID = PARAMS.get('video');

document.getElementById("video").setAttribute("src", VIDEO_URL + VIDEO_ID)