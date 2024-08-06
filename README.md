<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- my css -->
    <link rel="stylesheet" href="./style.css" />

    <!-- google fonts -->
    <!-- 구글 font_Icon 링크 -->
    <link
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
      rel="stylesheet"
    />

    <!-- bootstrap link CDN -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
      crossorigin="anonymous"
    />

    <link rel="stylesheet" href="./style.css" />
    <title>동욱의 포트폴리오</title>
  </head>
  <body>
    <header></header>
    <nav class="navbar navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="http://127.0.0.1:5501/index2.html#"
          >Home</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end text-bg-dark"
          tabindex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">안내</h5>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="http://127.0.0.1:5501/index2.html#"
                  >Home</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex mt-3" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>

    <main>
      <div class="sections">
        <div class="section-1">
          <div class="text-wrapper">
            <span class="text"></span><span class="blink">|</span>
          </div>
        </div>
        <div class="section-2">
          <div class="cards">
        <div class="card" data-bs-toggle="modal" data-bs-target="#Modal-first">
        </div>
        <div class="card" data-bs-toggle="modal" data-bs-target="#Modal-second">
        </div>
        <div class="card" data-bs-toggle="modal" data-bs-target="#Modal-third">
        </div>
        <div class="card">
        </div>
        <div class="card">
        </div>
        </div>
  
        <!-- Modal-first -->
      <div class="modal fade" id="Modal-first" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">자율주행 대회</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h4>대학생 창작 모빌리티 경진대회 자율주행성능 부문</h4>
            <ul>
              <li>기간 : 2023-07 ~ 2023-10</li>
              <li>수행역할 : 자율주행 시스템 설계 및 개발</li>
              <li>내용 :자작자동차 동아리원들과 함께 카메라, 라이다, GPS, ROS를 이용한 자율주행 시스템을 구성하여 장려상(5등)을 수상하였습니다.</li>
            </ul>
            <p>
              <ul>
                <li>1. 카메라를 이용한 자율주행 시스템을 설계하였고, Yolov5 모델을 사용하여 이미지를 학습시키고 openCV를 활용하여 이미지상의 기하학적 특성을 이용한 알고리즘을 설계하였습니다.</li>
                python, 네이버 지도 API, flask, folium, matplotlib
                <li>2. 조향 모터의 ad변환값과 실제 각도의 리니어 매핑과정에 참여하였습니다.
                </li>
                <li>3. GPS 기반 자율주행을 위해 제어 알고리즘인 stanley method의 파라미터를 찾기 위한 주행테스트를 진행하였습니다.</li>
              </ul>
              </p>
          </div>
          <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
        </div>
      </div>
      <!-- Modal-second -->
      <div class="modal fade" id="Modal-second" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">학부연구생 기업과제</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h4>자율주행 감성인지기반 융합 조명 시나리오 개발</h4>
            <ul>
              <li>기간 : 2023-03 ~ 2023-08</li>
              <li>해당 프로젝트는 제가 학부연구생으로 활동한 연구실의 기업 과제로, 자율주행차 내에서 탑승자의 감성인지를 기반으로 조명을 제어하는 기술을 개발하는 것이 목표입니다.
                저는 실험에 쓰이는 통합조명제어 프로그램 개발에 기여하였습니다.</li>
              <li>내용 :</li>
            </ul>
            <p>
              <ul>
                <li>1. modbus 프로토콜로 조명을 제어할 때, 동작 오류를 수정하였습니다.</li>
                <li>2. PEAK사에서 제공하는 LIN 통신 예제 프로그램에서 사용법을 이해하고 가져와 C#으로 클래스로 구성하여 통합조명제어 프로그램에 적용하였습니다.</li>
                <li>3. dmx 제어를 위해 C#으로 직접 클래스를 구성하였습니다.
                </li>
              </ul>
              </p>
          </div>
          <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
        </div>
      </div>
        <!-- Modal-third -->
        <div class="modal fade" id="Modal-third" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">종합설계 프로젝트</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <h4>네이버지도API기반 도로곡률 예측 및 제한속도</h4>
            <ul>
              <li>기간 : 2023.09.01 ~ 2023.12.21</li>
              <li>주제 : UTM 좌표 기반 도로 곡률 예측 및 속도 제한 가이드</li>
              <li>내용 :</li>
            </ul>
            <p>
              <ul>
                <li>주제 선정 이유</li>
                크루즈 컨트롤 상황에서 도로의 곡률을 고려하지 않은 채 속도를 유지하는 문제가 있습니다. 지도 정보를 알면 도로 곡률 정보를 알 수 있고, 곡률을 바탕으로 속도 제한을 할 수 있습니다. 이를 바탕으로 크루즈 컨트롤의 속도 제한을 기대할 수 있습니다.
                <li>사용 언어 및 라이브러리</li>
                python, 네이버 지도 API, flask, folium, matplotlib
                <li>구현 방법
                  <ul>
                    <li>1. 네이버 지도 API로 주행 경로의 위도와 경도 좌표를 받아옵니다.</li>
                    <li>2. folium, matplotlib 라이브러리를 이용하여 지도를 그래프로 변환합니다.</li>
                    <li>3. 연속 좌표 3개의 단위 벡터를 내적하여 두 벡터 사이의 각도를 구한 후, 미리 정한 기준에 따라 곡선을 추정합니다.</li>
                    <li>4. 곡선 구간 확정 후, 구간별로 곡선 반경을 구하여 제한 속도를 계산합니다.</li>
                    <li>5. 웹페이지에서 출발지와 목적지를 입력받아 속도 가이드를 웹에 표시합니다.</li>
                  </ul>
                </li>
              </ul>
              </p>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
          </div>
        </div>
        <div class="section-3">
    
  
      </div>
    </main>
    

    <!-- bootstrap script CDN -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
      crossorigin="anonymous"
    ></script>
    <script src="./app.js"></script>
  </body>
</html>
