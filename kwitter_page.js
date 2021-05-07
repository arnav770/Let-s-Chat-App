var firebaseConfig = {
      apiKey: "AIzaSyCuGsN8vl_l6q7WrI7ImdpVFiFGIz0M2c4",
      authDomain: "kwitter-c1d89.firebaseapp.com",
      databaseURL: "https://kwitter-c1d89-default-rtdb.firebaseio.com",
      projectId: "kwitter-c1d89",
      storageBucket: "kwitter-c1d89.appspot.com",
      messagingSenderId: "923241494239",
      appId: "1:923241494239:web:c4e863e6b60e0b21919b6a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0,
      });
      document.getElementById("msg").value = "";
}
function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;

                        //Start code

                        //End code
                  }
            });
      });
}
getData();

