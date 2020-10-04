importScripts('https://www.gstatic.com/firebasejs/7.21.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.21.1/firebase-messaging.js');
var firebaseConfig = {
    		apiKey: "AIzaSyCyaZuTbX4Q1dMQ5xU4j6M0Logq3rTDPyY",
    		authDomain: "maya-apartment.firebaseapp.com",
    		databaseURL: "https://maya-apartment.firebaseio.com",
    		projectId: "maya-apartment",
    		storageBucket: "maya-apartment.appspot.com",
    		messagingSenderId: "130716096865",
    		appId: "1:130716096865:web:ff067b13be87db008a0d20"
  	};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.onMessage((payload) => {
  console.log('Message received. ', payload);
});
