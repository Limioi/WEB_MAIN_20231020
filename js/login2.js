function session_del() //세션 삭제
{
    if (sessionStorage) 
    {
        sessionStorage.removeItem("Session_Storage_object");
        sessionStorage.removeItem("Session_Storage_encrypted");
        alert('로그아웃 버튼 클릭 확인 : 세션 스토리지를 삭제합니다.');
    } 
    else 
    {
        alert("세션 스토리지 지원 x");
    }
}
                    
function logout() // 로그인 폼에 쿠키에서 가져온 아이디 입력
{ 
   session_del();
   location.href='../index.html';
}            

document.getElementById("login_bttt").addEventListener('click', logout);