var prevY = getEBI('prevY');
var prevM = getEBI('prevM');
var nextY = getEBI('nextY');
var nextM = getEBI('nextM');
var today = getEBI('goToToday');
var now = new Date();
var currentDate = now.getDate();
var currentMonth = now.getMonth();
var currentYear = now.getFullYear();
var months = ["JANUARY", 
			  "FEBRUARY", 
			  "MARCH", 
			  "APRIL", 
			  "MAY", 
			  "JUNE", 
			  "JULY", 
			  "AUGUST", 
			  "SEPTEMBER", 
			  "OCTOBER", 
			  "NOVEMBER", 
			  "DECEMBER"];
		
function display(month, year) {
	var d = new Date(year, month, 1);
	var day = d.getDay();
	d.setDate(d.getDate() - day);
	var cellvalue = document.querySelectorAll('td');
	for(var r=0; r<=6; r++){
		var monthAndYear = getEBI('monthAndYear');
		monthAndYear.innerText = months[month] +" - " + year;
		for(var s=0; s<6; s++){
			if(d.getDate()==currentDate && currentMonth==d.getMonth() && currentYear==d.getFullYear()) {
				cellvalue[(r*6)+s].style['background-color']='red';
				cellvalue[(r*6)+s].style['color']='white';
				cellvalue[(r*6)+s].style['border']='1px solid navy';
			}
			else if(month!=d.getMonth()) {
				cellvalue[(r*6)+s].style['color']='lightgrey';
			}
			else {
				cellvalue[(r*6)+s].style['background-color'] = '';
				cellvalue[(r*6)+s].style['color'] = '';
				cellvalue[(r*6)+s].style['border'] = '';
			}
			cellvalue[(r*6)+s].innerText=d.getDate();
			d.setDate(d.getDate() + 1);
		}
	}
}
		
function goToPrevY(){
	now.setYear(now.getFullYear() - 1);
	getMonthAndYear();
}

function goToPrevM(){
	now.setMonth(now.getMonth() - 1);
	getMonthAndYear();
}

function goToNextM(){
	now.setMonth(now.getMonth() + 1);
	getMonthAndYear();
}

function goToNextY(){
	now.setYear(now.getFullYear() + 1);
	getMonthAndYear();
}

function getMonthAndYear() {
	var m = now.getMonth();
	var y = now.getFullYear();
	display(m, y);
}

function goToToday(){
	now = new Date();
	display(currentMonth, currentYear);
}

display(now.getMonth(), now.getFullYear());

function getEBI(id) {
  return document.getElementById(id);
}
