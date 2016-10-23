var firebase=require("firebase");

var config = {
    apiKey: "AIzaSyDsFqBSzHzYi7RqKqTNAMGeIyrKPIFX6vQ",
    authDomain: "corpus-bind.firebaseapp.com",
    databaseURL: "https://corpus-bind.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "32664067315"
};

firebase.initializeApp(config);


const rootpath=function(path){
	return firebase.database().ref(path);
}

const link=function(corpus,article){
	return firebase.database().ref("/link").child(corpus+"/"+article);
}
module.exports={rootpath,link,firebase};