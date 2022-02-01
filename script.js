/*
[p5.js]
background를 지정해주지 않으면 화면에 그려지지 않음
https://p5js.org/ko/reference/#/p5/ 에서 다양한 reference 들을 참고 가능 
[Extension]
https://marketplace.visualstudio.com/items?itemName=acidic9.p5js-snippets
P5.js Snippets. p5.js 함수 자동완성 기능 제공
*/

// 초기화 함수
function setup() {
  x = 0;
  y = 0;
    createCanvas(windowWidth, windowHeight); // Screen size만큼의 Canvas 생성
    // stroke('blue'); 도형의 테두리 색 지정 
    // strokeWeight(10); 도형의 테두리 굵기 지정
    // circle(x축, y축, 원의 지름);
    // point(x축, y축);  
    // fill('red'); fill이 rect보다 선행되어야 rect에 반영된다.
    // rect(x축, y축, width, height);
    // noFill(); 색 제거 (투명화)
    // fill(255, 0, 255); RGB로 색 지정, 4번째 인자는 숫자가 클 수록 짙어짐
 

}
  
// 반복시행 함수
function draw() {
    background('white');
    /*
    px = pow(mouseX-pmouseX, 2);
    py = pow(mouseY-pmouseY, 2);
    speed = sqrt(px+py);
    circle(mouseX, mouseY, speed);
    피타고라스의 정리를 통해서 마우스를 빠르게 움직일 수록 빗변의 크기가 더욱 커져, 속도에 따라 원의 크기를 조절할 수 있다.
    line(pmouseX, pmouseY, mouseX, mouseY); 이전 커서위치와 현재 커서 위치를 이어서 선을 표현
    circle(mouseX, mouseY, 100); 마우스 커서 위치에 따라 원을 생성함
    background(220); background에 의해서 canvas가 초기화됨 
    random(a) : 0부터 a까지의 인자를 무작위로 반환 
    setup함수에 변수를 초기화 (x=0; y=0;) 시키고
    draw함수에서 x = x + 10; y = y + 5; 선언 후 
    circle(x, y, 100); 을 선언하면 움직이는 원을 만들 수 있다.
    if (mouseIsPressed) {
    background(random(250), random(255), random(255));
    }
    mouseIsPressed는 껌뻑임 효과가 가능. mousePressed는 불가능 
    */
    x = x + 10;
    y = y + 10;
    image(img, x, y, 300, 300);
  }

  let img;
  function preload() {
    img = loadImage('nmh.jpg');
  }
