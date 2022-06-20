
document.addEventListener("DOMContentLoaded", function(){


    // 스크롤 이벤트에 따른 요소 변화
    window.onscroll = function(){

        // [ GNB 메뉴 ]
        if(document.querySelector("html").scrollTop > 100){
            document.querySelector("header").style.top = "-60px";
        } else {
            document.querySelector("header").style.top = "0px";
        }
        window.onmousemove = function(e){
            if(e.clientY < 60){
                document.querySelector("header").style.top = "0px";
            } else {
            document.querySelector("header").style.top = "-60px";
            }
        }

        // [ 패럴렉스 효과 ]
        // Overview
        if(window.scrollY > 800 && window.scrollY < 1640 ){
            document.getElementById("overview_title").classList.add("active");
            document.getElementById("overview1").classList.add("active");
            document.getElementById("overview2").classList.add("active");
        } else{
            document.getElementById("overview_title").classList.remove("active");
            document.getElementById("overview1").classList.remove("active");
            document.getElementById("overview2").classList.remove("active");
        }

        // Persona
        if(window.scrollY > 1500 && window.scrollY < 2500){
            document.getElementById("persona_wrap").classList.add("active");

        } else {
            document.getElementById("persona_wrap").classList.remove("active");

        }

        // Color
        if(window.scrollY > 3500 && window.scrollY < 4250){
            for(var i = 1; i <= 8; i++ ){
                document.getElementById("color"+ i).classList.add("active");
            }
        } else {
            for(var i = 1; i <= 8; i++ ){
                document.getElementById("color"+ i).classList.remove("active");
            }
        }

        // Logo
        if(window.scrollY > 5100 && window.scrollY < 6050){
            document.getElementById("logo_img1").classList.add("active");
            document.getElementById("logo_img2").classList.add("active");
        } else {
            document.getElementById("logo_img1").classList.remove("active");
            document.getElementById("logo_img2").classList.remove("active");
        }
        // console.log( window.scrollY);
    }




    // [ 아이콘 ]

    // 아이콘 컬러 버튼 동적으로 생성하기
    let icon_btn_pink = document.createElement("button");
    icon_btn_pink.setAttribute("id", "icon_btn_pink");
    document.getElementById("icon_box1").appendChild(icon_btn_pink);
    icon_btn_pink.innerText = "PINK";
    
    let icon_btn_gray = document.createElement("button");
    icon_btn_gray.setAttribute("id", "icon_btn_gray");
    document.getElementById("icon_box1").appendChild(icon_btn_gray);
    icon_btn_gray.innerText = "GRAY";


    // 아이콘! 마우스 클릭 이벤트
    document.getElementById("icon_btn_pink").onclick = function(){
        for(var i = 1; i <= 14; i++){
            var icon = document.getElementById("icon" + i);
            icon.src = "./img/icon"+ i +"_c.png";
        }
    }
    document.getElementById("icon_btn_gray").onclick = function(){
        for(var i = 1; i <= 14; i++){
            var icon = document.getElementById("icon" + i);
            icon.src = "./img/icon"+ i +".png";
        }
    }





    // [ setInterval(), clearInterval() ]
    function textmove(){
        document.getElementById('zzan_text').innerText += "ZZAN! ";
        document.getElementById('zzan_text2').innerText += "ZZAN! ";
    }

    let interval = setInterval(textmove, 700);

    // 마우스 클릭시, interval 중단/재시작 구현
    let toggle = true;
    document.getElementById("d_typography").onclick = function(){
        
        if(toggle){
            // 반복 중단
            clearInterval(interval);
            toggle = false;
        } else {
            // 반복 재개(재시작)
            interval = setInterval(textmove, 700);
            toggle = true;
            document.getElementById('zzan_text').innerText = "";
            document.getElementById('zzan_text2').innerText = "";
        }
    }





    // [ 이미지 갤러리 ]
    // 초기 변수 선언
    const picW = 1100;
    const totalNum = 3;
    let moveNum = 0;

    // 이미지 위치 셋팅
    for(var i=0; i<totalNum; i++){
        document.getElementById("pic" + i).style.left = (picW * i) + "px";
    }
    document.getElementById("text" + moveNum).classList.add("active");

    // 점 인디케이터(dot Indicator) 동적으로 생성하기
    let dotList = document.createElement("ul");
    dotList.setAttribute("id", "dotList");
    document.getElementById("imgSet").appendChild(dotList); 

    for(var i=0; i<totalNum; i++){
        var li = document.createElement("li"); // for문 돌리기 좋게 재선언 가능한 var.
        li.setAttribute("id", "li" + i); // 아이디 붙이기
        document.getElementById("dotList").appendChild(li); // 위치설정

        // dot 클릭 시
        document.getElementById("li" + i).onclick = function(){
            aniFunction();
            // 문자열 자르기 : substr("시작 위치", "길이") 또는 substr("시작 위치") 
            moveNum = Number(this.id.substr(2,1));// 아이디 이름을 2번째 문자부터 1길이만큼 자르기
            document.getElementById("text" + moveNum).classList.remove("activeOut");
            document.getElementById("text" + moveNum).classList.add("active");
            moveFunction();
        }
    }
    document.getElementById("li" + moveNum).classList.toggle("active");

    // 이미지 움직임 함수
    var moveFunction = function(){
        for(var i=0; i<totalNum; i++){
            document.getElementById("pic" + i).style.left = (picW * (i - moveNum)) + "px";
        }
        document.getElementById("text" + moveNum).classList.remove("activeOut");
        document.getElementById("text" + moveNum).classList.add("active");
        for(var i=0; i<totalNum; i++){
            document.getElementById("li" + i).classList.remove("active");
        }
        document.getElementById("li" + moveNum).classList.add("active");
    }

    // text 지우고 나타나게 하는 함수 선언
    var aniFunction = function(){
        document.getElementById("text" + moveNum).classList.remove("active");
        document.getElementById("text" + moveNum).classList.add("activeOut");
    }

    // 이전버튼 동적으로 생성하기
    let prev_btn = document.createElement("button");
    prev_btn.setAttribute("id", "prev_btn");
    document.getElementById("imgSet").appendChild(prev_btn);
    // 다음버튼 동적으로 생성하기
    let next_btn = document.createElement("button");
    next_btn.setAttribute("id", "next_btn");
    document.getElementById("imgSet").appendChild(next_btn);

    // 이전 버튼 클릭시
    document.getElementById("prev_btn").onclick = function(){
        aniFunction();
        if(moveNum > 0){
            moveNum--;
        }
        moveFunction();
    }
    // 다음 버튼 클릭시
    document.getElementById("next_btn").onclick = function(){
        aniFunction();
        if(moveNum < totalNum-1){
            moveNum++;
        }
        moveFunction();
    }
});