/*
 * check the user is possible to login
 * but doesn't check at the DB
 * made by daeun yoo on 2023.05.02
 */

"use strict" //for protection and better debugging

/*const express = require('express');
//const app = express();

//var btn = document.getElementsByClassName(".btn_login");

//btn.addEventListener("click", loginCheck);*/

function loginCheck() {
	const user = {
		id: ["deyoo"],
		password: ["qwe123!"]
	};

	const idVal = document.querySelector("#id").value;
	const pwVal = document.querySelector("#pw").value;
	//var successMsg = document.querySelector(".login_success").sty;
	const loginForm = document.querySelector(".login_wrap");
	var f = document.login_frm;
	if (!f.id.value) {
		//$("#err_empty_id").style.display = "block";
		alert("아이디를 입력해 주세요.");
		//return;
	} else if (!f.pw.value) {
		alert("비밀번호를 입력해 주세요.");
		//return;
	} else if (user.id.includes(idVal)) {
		const idx = user.id.indexOf(idVal);
		if (pwVal === user.password[idx]) {
			alert("login success!");

			/*loginForm.style.display = "none";
			successMsg.style.display = "block";*/

			const successMessage = document.createElement("div");
			successMessage.textContent = "You've success the login!";
			loginForm.parentNode.replaceChild(successMessage, loginForm);
		}
	} else {
		alert("id or pw is wrong!");;
	}
}