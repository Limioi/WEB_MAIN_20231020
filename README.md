<!DOCTYPE html>
<html lang="ko">
<!--이 부분은 주석문입니다. 웹 브라우저는 주석을 화면에 출력하지 않습니다.-->
<html> <!--문서 시작-->
    <head>
        <style>
            table {
            font-size: 20pt;
            color: white;
            }
        </style>
        
        <meta name=“author” content=“학번”>
•       <meta name=“keywords” content=“computer”>
•       <base href="http://127.0.0.1:5500">
        <meta charset="UTF-8"> <!--문자셋 : UTF-8-->
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>LOL 메인화면</title> <!--타이틀 제목-->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        <script src="js/test.js" defer></script>
        <script src="js/data_type.js" defer></script>
        <script src="js/search.js" defer></script>
        <script src="js/pop_up.js" defer></script>
        <script src="js/security.js" defer></script>
        <script src="js/cookie.js" defer></script>
        <script src="js/session.js" defer></script>
    </head>

    <body style="background-color: black;" onload="pop_up();"> <!--문서 몸체-->

          <nav class="navbar bg-body-tertiary" data-bs-theme="dark">
              <div class="container-fluid">
                  <nav class="navbar bg-body-tertiary">
                      <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                          <img src="image/LOGO.png" alt="Logo" width="110" height="30" class="d-inline-block align-text-top" onmouseover="over(this)" onmouseout="out(this)">                        
                        </a>
                      </div>
                    </nav>
                    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                      <div class="container-fluid">
                        <a class="navbar-brand" href="https://getbootstrap.kr/">홈페이지 테스트</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                          <ul class="navbar-nav">
                            <li class="nav-item">
                              <a class="nav-link active" aria-current="page" href="#">메인페이지</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="login/profile.html" target='_blank'>기본정보(프로필)</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="#">챔피언</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="#">패치</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="#">새소식</a>
                            </li>
                            <li class="nav-item dropdown">
                              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                고객지원
                              </a>
                              <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">게임 다운로드</a></li>
                                <li><a class="dropdown-item" href="#">롤 커뮤니티</a></li>
                                <li><a class="dropdown-item" href="https://github.com/">깃허브</a></li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </nav>
                <a class="navbar-brand"></a>
                <form class="d-flex" role="search" onsubmit="return googleSearch();">
                  <input class="form-control me-2" id="search_input" name="q" type="search" placeholder="키워드 입력" aria-label="Search">
                  <button class="btn btn-outline-success" id="search_btn" type="submit">검색</button>
                  <button class="btn btn-outline-success" type="submit" onclick="location.href='/login/join.html'">회원가입</button>
                  <a href="login/login.html" class="btn btn-outline-success" id="login_btn">로그인</a> <!--웹페이지나 외부 사이트 연결-->                
                </form>

              </div>
            </nav>
                  
      </div>
      <hr>

    <div style="display: flex; justify-content: center; margin-bottom: 40px;">
      <a href="index.html" target="_blank"> <img src="image/MAIN.png" class="img-fluid" width="1000" height="300"></a>
    </div>
          <div style="display: flex; justify-content: center;">
              <table class="table" border="5">
                <!--<caption><h3 style="color: white;">인기 캐릭터</h3></caption>-->
                <thead>
                  <tr class="table-info">
                    <th scope="col">#</th>
                    <th scope="col">1</th>
                    <th scope="col">2</th>
                    <th scope="col">3</th>
                    <th scope="col">4</th>
                    <th scope="col">5</th>
                  </tr>
                </thead>
                  <tbody>
                      <tr bgcolor="red">
                      <th scope="row">1</th>
                      <td class="table-danger" width="300" rowspan="1">사이온</td>
                      <td>아리</td>
                      <td>가렌</td>
                      <td>가렌2</td>
                      <td>가렌3</td>
                      </tr>
                      <tr>
                      <th scope="row">2</th>
                      <td class="table-danger" bgcolor="blue"><b>카직스</b></td>
                      <td>루시안</td>
                      <td>루시안2</td>
                      <td colspan="1"><font size="13">바이</font></td>
                      <td colspan="1"><font size="13">바이2</font></td>                        
                      </tr>
                      <tr class="table-primary" bgcolor="grey">
                        <th scope="row">3</th>
                        <td ><a href="https://www.leagueoflegends.com/ko-kr/">롤 웹사이트 접속하기</a></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>
                  </tbody>
              </table>
          </div>
      <hr>
      <div style="display: flex; justify-content: center;">
          <h3 style="font-size: 24px; font-weight: bold; font-style: italic; color: white; font-family: '굴림' ">라이엇 게임 회사 정보 2024년 x월 작성됨 </h3> <!--문장 크기-->
      </div>
</body>
</html>
