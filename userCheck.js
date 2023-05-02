/**
 * check the user is possible to login
 * but doesn't check at the DB
 * made by daeun yoo on 2023.05.02
 */

"use strict" //for protection and better debugging
 
const express = require('express');
const app = express();
	
//var btn = document.getElementsByClassName(".btn_login");

//btn.addEventListener("click", loginCheck);

function loginCheck(){
	const user = {
	id: ["deyoo"],
	password: ["qwe123!"]
};

	const id = document.querySelector("#id").value;
	const pw = document.querySelector("#pw").value;
	
	if(user.id.includes(id)){
		const idx = user.id.indexOf(id);
		if(pw===user.password[idx]){
			alert("login success!");
			
			$(".id_pw_wrap").style.display = "none";
			$(".login_success").style.display = "block";
			return;
		}
	} else{
		alert("id or pw is wrong!");
		$("#err_common > .error_message").textContent = "id or pw is wrong!";
  		$("#err_common").style.display = "block";
	}
}