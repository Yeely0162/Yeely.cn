// var dd=document.createElement("div");
// dd.style.position="relative";
// dd.id="demo"+j;
// document.body.appendChild(dd);
// j++;
//这个可以点一次创建一个文本段落
var a=["宝你别点no！嘛","你又点了一下no！哼","别点啦！宝我爱你","会对你好好的","乖嘛！去点愿意","听话嘛乖啦"];
var flag=0;
var flag2=0;
var flag3=0;
var j=0;
function no(){
        document.getElementById("Yes").hidden=b;
        document.getElementsByClassName("img3")[0].style.display="none";
    if(flag>=6){
        flag=0;
        for(i=0;i<6;i++){
            document.getElementById("demo"+i).hidden=a[i];
        }
        document.getElementsByClassName("img2")[0].style.display="inline-block";
        flag2=1;
    }
    for(var i=0;i<=flag;i++){
        if(flag2==1){
            document.getElementById("demo"+i).hidden=false;
            if(i==1){
                document.getElementsByClassName("img2")[0].style.display="none";
            }
        }
        else {
            document.getElementById("demo"+i).innerHTML=a[i];
        }
    }
    flag++;
}
var b="这才乖嘛！"
function  Yes(){
    for(var i=0;i<=flag;i++){
        document.getElementById("demo"+i).hidden=a[i];
        document.getElementsByClassName("img2")[0].style.display="none";
    }
    document.getElementById("Yes").innerHTML=b;
    if(flag!=0)document.getElementById("Yes").hidden=false;
    document.getElementsByClassName("img3")[0].style.display="inline-block";
    flag3=1;
}