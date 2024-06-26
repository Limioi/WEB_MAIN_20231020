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
                if (cookie_name[0] == "id") 
                {
                    return cookie_name[1];
                }
            }
        }
        return ;
}


function init() // 로그인 폼에 쿠키에서 가져온 아이디 입력
{ 
    const emailInput = document.getElementById('typeEmailX');
    const idsave_check = document.getElementById('idSaveCheck');
    let get_id = getCookie("id");
    if(get_id) 
    {
        emailInput.value = get_id;
        idsave_check.checked = true;
    }
    session_check(); // 세션 유무 검사
}