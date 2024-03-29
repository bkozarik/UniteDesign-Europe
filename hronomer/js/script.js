function GetWordsEnd(iCount){
	var sText = "";
			if ((iCount >= 5) & (iCount <= 20)){
				sText = "слів";
			}
			else if ((iCount%10)==1){
				sText = "слово";
			}
			else if (((iCount%10)==2)|((iCount%10)==3)|((iCount%10)==4)){
				sText = "слова";
			}
			else{
				sText = "слів";
			}

	return sText;
}

function isNumber(str){
	var re = /^[0-9]*$/;
	if (!re.test(str))
        return false;
	else
        return true;
}

function strreplace(strObj, need){
	var re = new RegExp(need , "g");
	var newstrObj = strObj.replace(re, " ");

	return newstrObj;
}

function strcount(strObj, need, count){
	var index = 0;
	var indexstart = 0;

	while (index != -1){
		index = strObj.indexOf(need, indexstart);
		if (index >= 0){
			indexstart = index+1;
			count++;
		}
	}
	return count;
}


function precalculate(){
	var txtObj = document.getElementById('tText').value;
	var re= new RegExp('\n',"g"); txtObj= txtObj.replace(re," ");
	var re= new RegExp('\r',"g"); txtObj= txtObj.replace(re," ");
	var tarray = txtObj.split(" ");
	var wrdsCount = 0;
	var index = 0;
	var indexstart = 0
	var ltrsCount = 0;

	if (txtObj == '') return 0;

	wrdsCount = strcount(txtObj, "№", wrdsCount);
	txtObj = strreplace(txtObj, "№");
	wrdsCount = strcount(txtObj, "@", wrdsCount);
	txtObj = strreplace(txtObj, "@");
	wrdsCount = strcount(txtObj, "$", wrdsCount);
	txtObj = strreplace(txtObj, "$");
	wrdsCount = strcount(txtObj, "%", wrdsCount);
	txtObj = strreplace(txtObj, "%");
	wrdsCount = strcount(txtObj, "&", wrdsCount);
	txtObj = strreplace(txtObj, "&");
	wrdsCount = strcount(txtObj, "Є", wrdsCount);
	txtObj = strreplace(txtObj, "Є");
	wrdsCount = strcount(txtObj, " пр.", wrdsCount);
	txtObj = strreplace(txtObj, " пр\\.");
	wrdsCount = strcount(txtObj, " ул.", wrdsCount);
	txtObj = strreplace(txtObj, " ул\\.");
	wrdsCount = strcount(txtObj, " г.", wrdsCount);
	txtObj = strreplace(txtObj, " г\\.");
	wrdsCount = strcount(txtObj, " т.", wrdsCount);
	txtObj = strreplace(txtObj, " т\\.");
	wrdsCount = strcount(txtObj, " д.", wrdsCount);
	txtObj = strreplace(txtObj, " д\\.");
	wrdsCount = strcount(txtObj, " кв.", wrdsCount);
	txtObj = strreplace(txtObj, " кв\\.");
	wrdsCount = strcount(txtObj, " кг.", wrdsCount);
	txtObj = strreplace(txtObj, " кг\\.");
	wrdsCount = strcount(txtObj, " см.", wrdsCount);
	txtObj = strreplace(txtObj, " см\\.");
	wrdsCount = strcount(txtObj, " гр.", wrdsCount);
	txtObj = strreplace(txtObj, " гр\\.");

	wrdsCount = strcount(txtObj, "...", wrdsCount);
	txtObj = strreplace(txtObj, "\\.\\.\\.");

	for(el in tarray){
		if (isNumber(tarray[el])){
			wrdsCount += tarray[el].length;
			continue;
		}

		if (isNumber(el) & (tarray[el]!="")){
			tmpStrArr = tarray[el].split("");
			for(tmpel in tmpStrArr){
				if (isNumber(tmpStrArr[tmpel])){
					wrdsCount += 1;
					continue;
				}
			}
		}

		txtObj = strreplace(txtObj, '0');
		txtObj = strreplace(txtObj, '1');
		txtObj = strreplace(txtObj, '2');
		txtObj = strreplace(txtObj, '3');
		txtObj = strreplace(txtObj, '4');
		txtObj = strreplace(txtObj, '5');
		txtObj = strreplace(txtObj, '6');
		txtObj = strreplace(txtObj, '7');
		txtObj = strreplace(txtObj, '8');
		txtObj = strreplace(txtObj, '9');
	}

	var txarray = txtObj.split(" ");
	for(el in txarray){
		var sElement = txarray[el].toString();
		index = sElement.indexOf('.', 0);
		if (index >= 1 && index < (sElement.length-1)){
			tmpStrArr2 = sElement.split('.');
			wrdsCount += tmpStrArr2.length;
			wrdsCount += tmpStrArr2.length-1;
		}
		else{
			if (sElement.length > 2 && sElement.length <= 14) wrdsCount += 1;
			if (sElement.length > 14) wrdsCount += 2;
			if ((sElement.length < 3) && (sElement != "-") && (sElement != " ")
			&& (sElement != ".") && (sElement != ",") && (sElement != "№")
			&& (sElement != "@") && (sElement != "Є") && (sElement != "$")
			&& (sElement != "%") && (sElement != "&") && (sElement != "")){
				ltrsCount++;
			}
		}
    }

	if (ltrsCount > 0) wrdsCount+= Math.ceil(ltrsCount/4);
	wrdsCount = wrdsCount.toFixed(0);

	if (txtObj == '') wrdsCount = 0;
	return wrdsCount;
}


function ClearInput(){

	var MinHrObj = document.getElementById('minhr');
	var OptHrObj = document.getElementById('opthr');
	var WrdsCntObj = document.getElementById('wrdscnt');
	var WrdsActionObj = document.getElementById('wrdsaction');
	var HelpObj = document.getElementById('lblhelp');

	MinHrObj.innerHTML = '';
	OptHrObj.innerHTML = '';
	WrdsActionObj.innerHTML = '';
	WrdsCntObj.innerHTML = '';
	HelpObj.style.visibility = "hidden";
	
	document.forms.frmHronomer.tText.value = '';
	document.forms.frmHronomer.tText.focus();
	return (true);
}

function fieldFocus(){
	document.forms.frmHronomer.tText.focus();
	return (true);
}

function activeField(sCheck,sField){
	var LabelObj = document.getElementById('lblattent');
	eval("if (document.forms.frmHronomer."+sCheck+".checked) document.forms.frmHronomer."+sField+".disabled=false; else document.forms.frmHronomer."+sField+".disabled=true;");
	return (true);
}


  
