const queotes = [
  {
    quote: "궁지에 몰렸을 때만 보이는 길도 있을꺼야.",
    author: "늑대와 향신료 - 어떤 아저씨",
  },
  {
    quote: "공포는 악이 아니야 그것은 자신의 약함을 안다는 것이다.",
    author: "페어리테일 - 길다트",
  },
  {
    quote: "쓰레기는 구별하지 않으면 안돼.",
    author: "진격의 거인 - 에렌 예거",
  },
  {
    quote:
      "인간은 차별당하기위해 존재한다. 그렇기에 인간은 싸우며 경쟁하고 진보한다.",
    author: "코드기어스 - 샤를르 비 브리타니아",
  },
  {
    quote: "좋은 칼이라는건 부러지기는 해도 어중간하게 구부러지거나 하지 않아.",
    author: "아라카와 언더 더 브리지 - 촌장님",
  },
  {
    quote: "말은 상처를 준다고! 후회를 해도 주워담을 수가 없어.",
    author: "마음이 외치고 싶어해 - 준",
  },
  {
    quote: "인생은 살아만 있다면 몇번이든 새출발할 수 있으니까.",
    author: "GTO - 오니즈카",
  },
  {
    quote: "진정한 남녀평등주의자인 나는 여자 상대라도 드롭킥을 날리는 남자!",
    author: "이 멋진 세계에 축복을 - 사토 카즈마",
  },
  {
    quote: "여자의 거짓말을 용서할 줄 아는데 남자다.",
    author: "원피스 - 상디",
  },
  {
    quote:
      "우리들은 혈액이다. 막힘없이 흘러라. 산소를 공급해 뇌가 정상적으로 회전할 수 있도록.",
    author: "하이큐 - 쿠로오",
  },
  {
    quote: "마음 먹은 날은 럭키데이, 그렇지 않은 날은 언 럭키데이.",
    author: "토리코 - 토리코",
  },
  {
    quote: "날개가 없기에 인간은 날아오를 방법을 찾는다.",
    author: "하이큐 - 우카이 케이신",
  },
  {
    quote: "이 꽉물어라 최강. 내 최약은 조금 아플테니까.",
    author: "어떤 마술의 금서목록 - 카미죠 토우마",
  },
  {
    quote:
      "왕이란! 누구보다 강렬하게 살고 모든 이를 매혹시키는 자를 가르키는 것이다.",
    author: "페이트 제로 - 이스칸달",
  },
  {
    quote: "포기하면 그 순간이 바로 시합 종료예요.",
    author: "슬램덩크 - 안선생",
  },
  {
    quote: "재능은 꽃피우는 것, 센스는 갈고 닦는 것.",
    author: "하이큐 - 오이카와 토오루",
  },
  {
    quote: "자신을 믿지 않는 녀석 따위는 노력할 가치도 없다!",
    author: "나루토 - 마이트 가이",
  },
  {
    quote: "걸려 넘어진 걸 돌부리 탓으로 돌리면 뭐가 바뀌냐?",
    author: "은혼 - 긴토키",
  },
  {
    quote: "아무것도 갖고 태어나지 않았기에 무엇이든 될 수 있다.",
    author: "노게임 노라이프 - 소라",
  },
  {
    quote: "씁슬한 인생, 커피정돈 달아도 괜찮겠지.",
    author: "역시 내 청춘 러브코메디는 잘못됐다 - 히키가야 하치만",
  },
  {
    quote: "특수한게 뭐가 나빠? 영어로 하면 Special이잖아.",
    author: "역시 내 청춘 러브코메디는 잘못됐다 - 히키가야 하치만",
  },
  {
    quote: "꿈은 도망가지 않아. 도망가는 것은 언제나 나 자신이지.",
    author: "짱구는 못말려 - 신형만",
  },
  {
    quote: "사람이 언제 죽는다고 생각하나? 사람들에게서 잊혀졌을 때다.",
    author: "원피스 - 닥터 히루루크",
  },
  {
    quote: "우리들은 혼자가 아니야.",
    author: "페어리테일 - 나츠",
  },
  {
    quote: "좋아하는 사람이 생기면 모든게 컬러풀하게 보인대.",
    author: "4월은 너의 거짓말 - 미야조노 카오리",
  },
  {
    quote: "선생에게 학생은 400명일지 몰라도 학생에게 선생은 한명이다.",
    author: "GTO - 오니즈카",
  },
  {
    quote: "매일 아침 내 된장국을 만들어줘.",
    author: "역시 내 청춘 러브코메디는 잘못됐다 - 히키가야 하치만",
  },
  {
    quote: "보려고 하지 않으면 볼 수 없게 되는거야.",
    author: "바라카몬 - 한다 세이슈",
  },
  {
    quote:
      "노력하면 어떻게든 된다는 보증은 없지만 노력하지 않으면 아무것도 안 된다는 것은 보증할 수 있습니다!",
    author: "빙과 - 치탄다 에루",
  },
  {
    quote:
      "맑은 물에서 살든 시궁창에서 살든 앞으로 헤엄치는 물고기는 아름답게 자라는 법입니다.",
    author: "암살교실 - 코로센세",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

function randomNumber(min, max) {
  const number = Math.floor(Math.random() * (max - min)) + min;
  return number;
}

const todaysQuote = queotes[randomNumber(0, queotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
