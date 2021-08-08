const quotes = [
  {
    quote: "고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다.",
    author: "괴테",
  },
  {
    quote: "고개 숙이지 마십시오. 세상을 똑바로 정면으로 바라보십시오.",
    author: "헬렌 켈러",
  },
  {
    quote: "화가 날 때는 100까지 세라. 최악일 때는 욕설을 퍼부어라.",
    author: "마크 트웨인",
  },
  {
    quote:
      "사람이 여행을 하는 것은 도착하기 위해서가 아니라 여행하기 위해서이다.",
    author: "괴테",
  },
  {
    quote:
      "내가 헛되이 보낸 오늘은 어제 죽어간 이들이 그토록 바라던 하루이다. 단 하루면 인간적인 모든 것을 멸망시킬 수도 다시 소생시킬 수도 있다.",
    author: "소포클레스",
  },
  {
    quote:
      "되찾을 수 없는게 세월이니 시시한 일에 시간을 낭비하지 말고 순간순간을 후회 없이 잘 살아야 한다.",
    author: "루소",
  },
  {
    quote:
      "삶이 그대를 속일지라도 슬퍼하거나 노하지 말아라 슬픈 날에 참고 견디라 . 즐거운 날은 오고야 말리니. 마음은 미래를 바라느니 현재는 한없이 우울한것 모든건 하염없이 사라지나가 버리고 그리움이 되리니.",
    author: "푸쉬킨",
  },
  {
    quote: "인생을 다시 산다면 다음번에는 더 많은 실수를 저지르리라.",
    author: "나딘 스테어",
  },
  {
    quote: "최고에 도달하려면 최저에서 시작하라.",
    author: "P. 시루스",
  },
  {
    quote:
      "문제는 목적지에 얼마나 빨리 가느내가 아니라 그 목적지가 어디냐는 것이다.",
    author: "메이벨 뉴컴버",
  },
  {
    quote:
      "고난의 시기에 동요하지 않는 것, 이것은 진정 칭찬받을 만한 뛰어난 인물의 증거다.",
    author: "베토벤",
  },
  {
    quote:
      "당신이 인생의 주인공이기 때문이다. 그 사실을 잊지마라. 지금까지 당신이 만들어온 의식적, 그리고 무의식적 선택으로 인해 지금의 당신이 있는 것이다.",
    author: "바바라 홀",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
