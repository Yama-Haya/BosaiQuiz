
qa = new Array();
qa[0] = ["防災クイズ","1","2","3",1];

//初期設定
q_sel = 3; //選択肢の数
setReady();

//初期設定
function setReady() {
	count = 0; //問題番号
	ansers = new Array(); //解答記録
	
	//最初の問題
	quiz();
}

//問題表示
function quiz() {
	var s, n;
	//問題
	document.getElementById("q").innerHTML = qa[count][0];
	//選択肢
	s = "";
	for (n=1;n<=q_sel;n++) {
		s += "【<a href=''>" + n + "：" + qa[count][n] + "</a>】";
	}
	document.getElementById("s").innerHTML = s;
}
//解答表示
function anser(num) {
	var s;
	s = (count + 1) + "問目：";
	//答え合わせ
	if (num == qa[count][q_sel + 1]) {
		//正解
		s += "○" + qa[count][num];
    ansers[count] = "○";
	} else {
		s += "×" + qa[count][num];
    ansers[count] = "×";
	}
	document.getElementById("a").innerHTML = s;
  //次の問題を表示
	count++;
	if (count < qa.length) {
		quiz();
	} else {
		//終了
    s = "<table border='2'><caption>成績発表</caption>";
		//1行目
		s += "<tr><th>問題</th>";
		for (n=0;n<qa.length;n++) {
			s += "<th>" + (n+1) + "</th>";
		}
		s += "</tr>";
		//2行目
		s += "<tr><th>成績</th>";
		for (n=0;n<qa.length;n++) {
			s += "<td>" + ansers[n] + "</td>";
		}
		s += "</tr>";
		s += "</table>";
		document.getElementById("q").innerHTML = "";
    //次の選択肢
		s = "【<a href='javascript:history.back()'>前のページに戻る</a>】";
		s += "【<a href='javascript:setReady()'>同じ問題を最初から</a>】";
		s += "【<a href=''>次の問題に進む</a>】";
		document.getElementById("s").innerHTML = "";
	}
}
