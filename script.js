function sortNum(){
	var num1=document.getElementById("num1").value;
	var num2=document.getElementById("num2").value;
	var num3=document.getElementById("num3").value;
	var NumInt1=parseInt(num1);
	var NumInt2=parseInt(num2);
	var NumInt3=parseInt(num3);
	var arr=[NumInt1,NumInt2,NumInt3];
	for(var i=0;i<2;i++){
		if(arr[i]>arr[i+1]){
			var x=arr[i];
			arr[i]=arr[i+1];
			arr[i+1]=x;
		}
	}
	alert(arr);
	document.getElementById("div").innerHTML = arr;
}
