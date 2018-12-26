//Initialize Firebase 
var config = {
    apiKey: "AIzaSyDH0vsNo6jW6cgm7KrvFbF9Iqop97-4hMY",
    authDomain: "andystires-a29ed.firebaseapp.com",
    databaseURL: "https://andystires-a29ed.firebaseio.com",
    projectId: "andystires-a29ed",
    storageBucket: "andystires-a29ed.appspot.com",
    messagingSenderId: "85178615081"
};
firebase.initializeApp(config);

var andysTiresData = firebase.database();

//Button for adding data to database
$("#storeInfo").on("click", function () {

    // Grabs user input
    var name = $("#nameInput").val().trim();
    var phone = $("#phoneInput").val().trim();
    var message = $("#messageInput").val();

    // Creates local "temporary" object for holding data
    var currentInfo = {

        name: name,
        phone: phone,
        message: message
    };

    // Uploads data to the database
    andysTiresData.ref().push(currentInfo);

    // Logs everything to console
    console.log(currentInfo.name);
    console.log(currentInfo.phone);
    console.log(currentInfo.message);

    // Alert
    alert("Information stored successfully");

    // Clears all of the text-boxes
    $("#nameInput").val("");
    $("#phoneInput").val("");
    $("#messageInput").val("");

    return false;
});


andysTiresData.ref().on("child_added", function(childSnapshot, prevChildKey){
    console.log(childSnapshot.val());

    //Store data into meaningful variables
    var newName = childSnapshot.val().name;
    var newPhone = childSnapshot.val().phone;
    var newMessage = childSnapshot.val().message;

    //Add information to new page
    $("#cards").prepend('<div class="alert alert-secondary" role="alert">' +
        '<h4>' + newName + '</h4>' + 
        '<h5>' + newPhone + '</h5>' + 
        '<h5>' + newMessage + '</h5>' +
    '</div>');
});
