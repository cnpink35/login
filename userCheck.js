/*
 * check the user is possible to login
 * but doesn't check at the DB
 * made by daeun yoo on 2023.05.02
 */

"use strict" //for protection and better debugging

function loginCheck() {
	const user = {
		id: ["deyoo"],
		password: ["qwe123!"]
	};

	const idVal = document.querySelector("#id").value;
	const pwVal = document.querySelector("#pw").value;
	const loginForm = document.querySelector(".login_wrap");
	var f = document.login_frm;
	if (!f.id.value) {
		alert("아이디를 입력해 주세요.");
	} else if (!f.pw.value) {
		alert("비밀번호를 입력해 주세요.");
	} else if (user.id.includes(idVal)) {
		const idx = user.id.indexOf(idVal);
		if (pwVal === user.password[idx]) {
			alert("login success!");

			const successMessage = $("<div>").text("You've success the login!");
			loginForm.replaceWith(successMessage.text());
		}
	} else {
		alert("id or pw is wrong!");;
	}
}