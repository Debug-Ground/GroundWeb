<% include ../include/dash_header %>

<!-- partial -->
<div class="main-panel">
    <div class="content-wrapper">
        <div class="row">
            <div class="col-md-12 grid-margin">
                <div class="row">
                    <div class="col-12 col-xl-8 mb-4 mb-xl-0">
                        <h3 class="font-weight-bold">안전 관리 현황</h3>
                    </div>
                    <div class="col-12 col-xl-4">
                        <div class="justify-content-end d-flex">
                            <div class="dropdown flex-md-grow-1 flex-xl-grow-0">
                                <button class="btn btn-sm btn-light bg-white" type="button" id="dropdownMenuDate2"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                    <i class="mdi mdi-calendar"></i> Today ( <%= dayjs().format('YY.  MM.  DD') %> )
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 grid-margin stretch-card">
                <div class="card tale-bg">
                    <div class="card-people mt-auto">
                        <img src="dash_assets/images/dashboard/people.svg" alt="people">
                        <div class="weather-info">
                            <div class="d-flex">
                                <div>
                                    <h2 id="temp" class="mb-0 font-weight-normal"><i class="icon-sun mr-2"></i>-<sup>℃</sup></h2>
                                </div>
                                <div class="ml-2">
                                    <h4 id="locateName" class="location font-weight-normal">-</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 grid-margin transparent">
              <div class="row">
                <div class="col-md-6 mb-4 stretch-card transparent">
                  <div class="card card-tale">
                    <div class="card-body">
                      <p class="mb-4">오늘의 작업자</p>
                      <p class="fs-30 mb-2">4006</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mb-4 stretch-card transparent">
                  <div class="card card-dark-blue">
                    <div class="card-body">
                      <p class="mb-4">전체 작업자</p>
                      <p class="fs-30 mb-2"><%= workCount[1].cnt %></p>
                    </div>
                </div>
              </div>
                <div class="col-md-6 mb-4 mb-lg-0 stretch-card transparent">
                  <div class="card card-light-blue">
                    <div class="card-body">
                      <p class="mb-4">신입 작업자</p>
                      <p class="fs-30 mb-2"><%= workCount[0].cnt %></p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 stretch-card transparent">
                  <div class="card card-light-danger">
                    <div class="card-body">
                      <p class="mb-4">금일 사고 발생 건수</p>
                      <p class="fs-30 mb-2"><%= dateCount[2].cnt %></p>
                    </div>
                </div>
              </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">
                        <p class="card-title">월별 현장 사고 관리 현황</p>
                        <p class="font-weight-500">2021년 발생한 사고 건수에 대한 그래프 입니다.</p>
                        <div class="d-flex flex-wrap mb-5">
                            <div class="mr-5 mt-3">
                                <p class="text-muted">작년 사고 건수 평균</p>
                                <h3 class="text-primary fs-30 font-weight-medium"><%= dateCount[0].cnt %></h3>
                            </div>
                            <div class="mr-5 mt-3">
                                <p class="text-muted">월별 사고 건수 평균</p>
                                <h3 class="text-primary fs-30 font-weight-medium"><%= dateCount[1].cnt %></h3>
                            </div>
                            <div class="mr-5 mt-3">
                                <p class="text-muted">일별 사고 건수 평균</p>
                                <h3 class="text-primary fs-30 font-weight-medium"><%= dateCount[2].cnt %></h3>
                            </div>
                        </div>
                        <canvas id="order-chart"></canvas>
                    </div>
                </div>
            </div>
            <div class="col-md-6 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <p class="card-title">공사 작업자 현황</p>
                            <a href="#" class="text-info">더 보기</a>
                        </div>
                        <p class="font-weight-500">2021년 Ground 사의 공사 작업자에 대한 그래프입니다.</p>
                        <div id="sales-legend" class="chartjs-legend mt-4 mb-2"></div>
                        <canvas id="sales-chart"></canvas>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 grid-margin stretch-card">
              <div class="card position-relative">
                <div class="card-body">
                  <div id="detailedReports" class="carousel slide detailed-report-carousel position-static pt-2" data-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <div class="row">
                          <div class="col-md-12 col-xl-3 d-flex flex-column justify-content-start">
                            <div class="ml-xl-4 mt-3">
                            <p class="card-title">작업별 사고 현황</p>
                              <h1 class="text-primary"><%= acCount[acCount.length-1].count %></h1>
                              <h3 class="font-weight-500 mb-xl-4 text-primary">총 사고 건수</h3>
                              <p class="mb-2 mb-xl-0">1. 작업 별 안전 사고 체크 리스트 확인<br>2. 현장 팀장에게 사고 사례 전파</p>
                            </div>  
                        </div>
                          <div class="col-md-12 col-xl-9">
                            <div class="row">
                              <div class="col-md-11 border-right">
                                <div class="table-responsive mb-3 mb-md-0 mt-3">
                                  <table class="table table-borderless report-table">
                                    <% for(var i = 0; i< acCount.length-1; i++) { %>
                                    <tr>
                                      <td class="text-muted"><%= acCount[i].kind %></td>
                                      <td class="w-100 px-0">
                                        <div class="progress progress-md mx-4">
                                          <div class="progress-bar bg-primary" role="progressbar" style="width: <%= ((acCount[i].count)/(acCount[acCount.length-1].count))*100 %>%" aria-valuenow="<%= acCount[i].count %>" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                      </td>
                                      <td><h5 class="font-weight-bold mb-0"><%= acCount[i].count %></h5></td>
                                    </tr>
                                    <% } %>
                                  </table>
                                </div>
                              </div>
                            </div>
                         </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
             </div>
             </div>
        </div>
        <div class="row">
            <div class="col-md-7 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">
                        <p class="card-title mb-0">작업 현황도</p>
                        <div class="table-responsive">
                            <table class="table table-striped table-borderless">
                                <thead>
                                <tr>
                                    <th>작업</th>
                                    <th>날짜</th>
                                    <th>진행 현황</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>아파트 계단 난간 설치</td>
                                    <td>21. 08. 21</td>
                                    <td class="font-weight-medium">
                                        <div class="badge badge-success">완료</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>아파트 조명 설치</td>
                                    <td>21. 12. 25</td>
                                    <td class="font-weight-medium">
                                        <div class="badge badge-success">완료</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>아파트 놀이터 설치</td>
                                    <td>21. 04. 21</td>
                                    <td class="font-weight-medium">
                                        <div class="badge badge-warning">진행중</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>아파트 페인트 작업</td>
                                    <td>21. 02. 11</td>
                                    <td class="font-weight-medium">
                                        <div class="badge badge-warning">진행중</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>아파트 편의 시설 설치</td>
                                    <td>21. 04. 21</td>
                                    <td class="font-weight-medium">
                                        <div class="badge badge-danger">취소</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>아파트 조경</td>
                                    <td>21. 07. 01</td>
                                    <td class="font-weight-medium">
                                        <div class="badge badge-warning">진행중</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>아파트 조명 설치</td>
                                    <td>21. 05. 24</td>
                                    <td class="font-weight-medium">
                                        <div class="badge badge-success">완성</div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-5 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">작업자 체크 리스트</h4>
                        <div class="list-wrapper pt-2">
                            <ul class="d-flex flex-column-reverse todo-list todo-list-custom">
                                <li>
                                    <div class="form-check form-check-flat">
                                        <label class="form-check-label">
                                            <input class="checkbox" type="checkbox">
                                            안전모 착용
                                        </label>
                                    </div>
                                    <i class="remove ti-close"></i>
                                </li>
                                <li class="completed">
                                    <div class="form-check form-check-flat">
                                        <label class="form-check-label">
                                            <input class="checkbox" type="checkbox" checked>
                                            안전 벨트 착용
                                        </label>
                                    </div>
                                    <i class="remove ti-close"></i>
                                </li>
                                <li>
                                    <div class="form-check form-check-flat">
                                        <label class="form-check-label">
                                            <input class="checkbox" type="checkbox">
                                            안전화 착용
                                        </label>
                                    </div>
                                    <i class="remove ti-close"></i>
                                </li>
                                <li class="completed">
                                    <div class="form-check form-check-flat">
                                        <label class="form-check-label">
                                            <input class="checkbox" type="checkbox" checked>
                                            안전 고리 소지 여부
                                        </label>
                                    </div>
                                    <i class="remove ti-close"></i>
                                </li>
                                <li>
                                    <div class="form-check form-check-flat">
                                        <label class="form-check-label">
                                            <input class="checkbox" type="checkbox">
                                            작업 장갑 소지 여부
                                        </label>
                                    </div>
                                    <i class="remove ti-close"></i>
                                </li>
                            </ul>
                        </div>
                        <div class="add-items d-flex mb-0 mt-2">
                            <input type="text" class="form-control todo-list-input" placeholder="작업자 체크 리스트 추가">
                            <button class="add btn btn-icon text-primary todo-list-add-btn bg-transparent"><i class="icon-circle-plus"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 stretch-card grid-margin">
                <div class="card">
                    <div class="card-body">
                        <p class="card-title mb-0">새로운 인력</p>
                        <div class="table-responsive">
                            <table class="table table-borderless">
                                <thead>
                                <tr>
                                    <th class="pl-0  pb-2 border-bottom">이름</th>
                                    <th class="border-bottom pb-2">직책</th>
                                    <th class="border-bottom pb-2">계약 형태</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td class="pl-0">권순영</td>
                                    <td><p class="mb-0"><span class="font-weight-bold mr-2">연구</span></p></td>
                                    <td class="text-muted">정규직</td>
                                </tr>
                                <tr>
                                    <td class="pl-0">박우식</td>
                                    <td><p class="mb-0"><span class="font-weight-bold mr-2">노예</span></p></td>
                                    <td class="text-muted">무기한</td>
                                </tr>
                                <tr>
                                    <td class="pl-0">고준혁</td>
                                    <td><p class="mb-0"><span class="font-weight-bold mr-2">디자인</span></p></td>
                                    <td class="text-muted">정규직</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 stretch-card grid-margin">
                <div class="row">
                    <div class="col-md-12 grid-margin stretch-card">
                        <div class="card">
                            <div class="card-body">
                                <p class="card-title">차트</p>
                                <div class="charts-data">
                                    <div class="mt-3">
                                        <p class="mb-0">Data 1</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="progress progress-md flex-grow-1 mr-4">
                                                <div class="progress-bar bg-inf0" role="progressbar" style="width: 95%"
                                                     aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <p class="mb-0">5k</p>
                                        </div>
                                    </div>
                                    <div class="mt-3">
                                        <p class="mb-0">Data 2</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="progress progress-md flex-grow-1 mr-4">
                                                <div class="progress-bar bg-info" role="progressbar" style="width: 35%"
                                                     aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <p class="mb-0">1k</p>
                                        </div>
                                    </div>
                                    <div class="mt-3">
                                        <p class="mb-0">Data 3</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="progress progress-md flex-grow-1 mr-4">
                                                <div class="progress-bar bg-info" role="progressbar" style="width: 48%"
                                                     aria-valuenow="48" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <p class="mb-0">992</p>
                                        </div>
                                    </div>
                                    <div class="mt-3">
                                        <p class="mb-0">Data 4</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="progress progress-md flex-grow-1 mr-4">
                                                <div class="progress-bar bg-info" role="progressbar" style="width: 25%"
                                                     aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <p class="mb-0">687</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 stretch-card grid-margin grid-margin-md-0">
                        <div class="card data-icon-card-primary">
                            <div class="card-body">
                                <p class="card-title text-white">안전 관리 본부</p>
                                <div class="row">
                                    <div class="col-8 text-white">
                                        <h3>041 - 540 - 3323</h3>
                                        <p class="text-white font-weight-500 mb-0">충청남도 아산시 배방읍 75번길 호서대학교</p>
                                    </div>
                                    <div class="col-4 background-icon">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 stretch-card grid-margin">
                <div class="card">
                    <div class="card-body">
                        <p class="card-title">작업자 출근부</p>
                        <ul class="icon-data-list">
                            <li>
                                <div class="d-flex">
                                    <img src="dash_assets/images/faces/face1.jpg" alt="user">
                                    <div>
                                        <p class="text-info mb-1">김득회</p>
                                        <p class="mb-0">외부 답사 인원</p>
                                        <small>9:30 am</small>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex">
                                    <img src="dash_assets/images/faces/face2.jpg" alt="user">
                                    <div>
                                        <p class="text-info mb-1">김민수</p>
                                        <p class="mb-0">사원</p>
                                        <small>10:30 am</small>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex">
                                    <img src="dash_assets/images/faces/face3.jpg" alt="user">
                                    <div>
                                        <p class="text-info mb-1">송준하</p>
                                        <p class="mb-0">사원</p>
                                        <small>11:30 am</small>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex">
                                    <img src="dash_assets/images/faces/face4.jpg" alt="user">
                                    <div>
                                        <p class="text-info mb-1">이규환</p>
                                        <p class="mb-0">사원</p>
                                        <small>8:50 am</small>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex">
                                    <img src="dash_assets/images/faces/face5.jpg" alt="user">
                                    <div>
                                        <p class="text-info mb-1">정승원</p>
                                        <p class="mb-0">사원</p>
                                        <small>9:00 am</small>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    
    <!-- content-wrapper ends -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=df47683e736734b08db254f6a2be01f9&libraries=services,clusterer,drawing"></script>
    <script>
        $(document).ready(function () {
            var geocoder = new kakao.maps.services.Geocoder();

            function searchAddrFromCoords(coords, callback) {
                geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
            }

            function displayCenterInfo(result, status) {
                if (status === kakao.maps.services.Status.OK) {
                    for (var i = 0; i < result.length; i++) {
                        if (result[i].region_type === 'H') {
                            console.log("현재위치: " + result[i].address_name)
                            $("#locateName").text(result[i].address_name);
                            break;
                        }
                    }
                }
            }

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    function (location) {
                        var lat = location.coords.latitude;
                        var lon = location.coords.longitude;
                        var latlng = new kakao.maps.LatLng(lat, lon)
                        searchAddrFromCoords(latlng, displayCenterInfo);
                        $.ajax({
                          url: '/dash/getWayWeather',
                          type: 'POST',
                          data: {lat: lat, lon: lon,},
                          success: function (data) {
                            $("#temp").text(data.result.temp + " ℃");
                            $("#rain").text(data.result.rain + " %");
                            $("#windspeed").text(data.result.windspeed + " m/s");
                          }
                        });
                      },
                      function (error) {
                        //fail - 유저가 차단버튼을 클릭하여 값을 가져올 수 없는 상태
                      }
              );
            } else {
              //fail - 애초에 GPS 정보를 사용할 수 없는 상태
            }
          })
        </script>

        <% include ../include/dash_footer %>