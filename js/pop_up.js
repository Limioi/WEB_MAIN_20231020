function pop_up() 
    {
        var cookieCheck = getCookie("popupYN");
        if (cookieCheck != "N")
        {
            window.open("../popup/popup.html", "팝업테스트", "width=400, height=330, top=10, left=10");
        }
    }
    

    function show_clock()
    {
        let currentDate = new Date(); // 현재 시스템 날짜 객체 생성
        let divClock = document.getElementById('divClock'); // 시각을 표시할 HTML 요소를 가져옴
        let msg = "현재 시간 : ";  // 시각을 표시할 문자열을 초기화

        if(currentDate.getHours()>12) // 12시 보다 크면 오후 
        { 
            msg += "오후"; // msg = msg + 오후
            msg += currentDate.getHours()-12 +"시";
        }
        else // 아니면 오전
        {
            msg += "오전";
            msg += currentDate.getHours()+"시";
        }

        // 분과 초를 문자열에 추가
        msg += currentDate.getMinutes()+"분";
        msg += currentDate.getSeconds()+"초";
        divClock.innerText = msg; // 준비된 문자열을 HTML 요소의 텍스트로 설정

        if (currentDate.getMinutes()>58) // 현재 분이 58보다 크면, 즉 정각 1분 전이면 글자색을 빨간색으로 변경
        { 
            divClock.style.color="red"; 
        }
        setTimeout(show_clock, 1000); // setTimeout을 사용하여 1초(1000밀리초) 후에 show_clock 함수를 다시 호출
    }

    /*
    function over(obj) // 커서를 올리면
        {
            obj.src="image/LOGO.png";
        }
        function out(obj)  //커서를 떼면
        {
            obj.src="image/LOGO_2.png";
        }
    */ 
    // 화살표 함수 사용
    const over = (obj) => 
    {
        obj.src = "image/LOGO.png";
    };
    const out = (obj) => 
    {
        obj.src = "image/LOGO_2.png";
    };   
    

    function setCookie(name, value, expiredays)
    {
        var date = new Date();
        date.setDate(date.getDate() + expiredays);
        document.cookie = escape(name) + "=" + escape(value) + "; expires=" + date.toUTCString() + ";path=/" + ";SameSite=None; Secure";
    }

    function getCookie(name) 
    {
        var cookie = document.cookie;
        console.log("쿠키를 요청합니다.");
            if (cookie != "") 
            {
                var cookie_array = cookie.split("; ");
                for ( var index in cookie_array) 
                {
                    var cookie_name = cookie_array[index].split("=");
                    if (cookie_name[0] == "popupYN") 
                    {
                        return cookie_name[1];
                    }
                }
            }
            return ;
    }

    function closePopup() 
    {
        if (document.getElementById('check_popup').value) 
        {
            setCookie("popupYN", "N", 1);
            console.log("쿠키를 설정합니다.");
            self.close();
        }
    }        