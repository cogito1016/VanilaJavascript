

//제이쿼리인 경우
// $.ajax('/resource').then(success,fail);

//자바스크립트의 경우
var xhr = new XMLHttpRequest();

xhr.open('GET', 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=9020f5ae7db2b1c028f0ee5fe1b3d07f&targetDt=20191104');
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {

            console.log(xhr.responseText);
        } else alert("요청오류 : " + xhr.status);
    }
}
xhr.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded"
  );

xhr.send('key=9020f5ae7db2b1c028f0ee5fe1b3d07f&targetDt=20191104');

// //영화를 불러오는 함수
// function getMovies() {
//     $loader.show();
//     $.ajax({
//         url:"http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",
//         data:{
//             key:"9020f5ae7db2b1c028f0ee5fe1b3d07f",
//             targetDt:year+month+date
//         },//이게 파라미터
//         error:function () {
//             alert("에러!");
//         },
//         success:function (json) {
//             const movies = json.boxOfficeResult.dailyBoxOfficeList;

//             $("tbody").empty();
//             $(movies).each(function () {
//                 const $tr = $("<tr>");
//                 const $td1 = $("<td>").text(this.rank);
//                 const $td2 = $("<td>").text(this.movieNm);
//                 const $td3 = $("<td>").text(this.openDt);
//                 const $td4 = $("<td>").text(this.salesAcc);
//                 $tr.append($td1,$td2,$td3,$td4).appendTo("tbody");

//             });
            
//             $loader.hide();
//         }
//     });
// }//getMovies() end

// getMovies();
