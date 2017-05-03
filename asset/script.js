/* 삼각형
for(var i = 0; i<5; i++){
    for(var j = 0; j<=i; j++){
        document.write("*");
    }
    document.write("<br>");
}*/

/* 역삼각형
for(var i = 0; i<5; i++){
    for(var j = 0; j<5; j++){
        document.write( j < (4-i) ? "&nbsp" : "*");
    }
    document.write("<br>");
}*/

/* 피라미드
for(var i = 0; i<5; i++){
    for(var j = 0; j<(5+i); j++){
        document.write( j < (4-i) ? "&nbsp" : "*");
    }
    document.write("<br>");
}*/

/* 예제4번
for(var i = 0; i<5; i++){
    for(var j = 0; j<5; j++){
        document.write( j < i ? "&nbsp" : "*"); 
    }
    document.write("<br>");
}*/

/* 역피라미드
for(var i = 0; i<5; i++){
    for(var j = 0; j<(9-i); j++){
        document.write(j < i ? "&nbsp" : "*");
    }
    document.write("<br>");
}*/

function init() {
  var name = "Mozilla"; // name은 init에 의해 생성된 지역변수다
  function displayName() { // displayName()은 내부 함수인, 클로저다
    alert(name); // 부모 함수에서 선언된 변수를 사용한다
  }
  displayName();
}
init();