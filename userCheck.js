/**
 * check the user is possible to login
 * but doesn't check at the DB
 * made by daeun yoo on 2023.05.02
 */

"use strict" //for protection and better debugging
 
const express = require('express');
const app = express.Router();

const user = {
	id: ["deyoo"],
	password: ["qwe123!"]
};
	
var btn = document.getElementsByClassName(".btn_login");

btn.addEventListener("click", loginCheck);

function loginCheck(){
	const id = document.querySelector("#id");
	const pw = document.querySelector("#pw");
	
	if(user.id.includes(id)){
		const idx = user.id.indexOf(id);
		if(pw===user.password[idx]){
			alert("login success!");
		}
	} else{
		alert("id or pw is wrong!");
	}
}