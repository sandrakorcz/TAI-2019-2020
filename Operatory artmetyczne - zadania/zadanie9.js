function zegar() {
var czas = new Date();
godz = czas.getHours();
min = czas.getMinutes();
sec = czas.getSeconds();
 var terazjest = ""+godz+((min<10)?":0":":")+min+((sec<10)?":0":":")+sec;
document.getElementById("zegar").innerHTML= terazjest;
setTimeout("zegar()",1000);
}
zegar();

if (godz>=5 && godz<19) 
    document.write("Dzień dobry!");
else if (godz>=19 && godz<23)
    document.write("Dobry wieczór!");
else document.write("Idź spać");