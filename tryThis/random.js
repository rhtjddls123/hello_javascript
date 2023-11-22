// 특정 범위의 난수를 발생시키는 함수를 작성하시오.
function rand(start, end) {
  return Math.floor((end - start + 1) * Math.random()) + start;
}
//0 <= ?? < 1
console.log(rand(1, 10)); // 1 ~ 10 사이의 난수
rand(0, 9); // 0 ~ 9 사이의 난수
rand(100, 200); // 100 ~ 200 사이의 난수

// 1 ~ 10 사이의 난수를 무수히(1_000_000_000) 발생시켜 분포를 나타내시오. (난수가 과연 고르게 분포될까?!)
