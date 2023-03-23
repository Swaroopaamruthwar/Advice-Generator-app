const circle = document.querySelector(".circle");
const para = document.querySelector(".para");
const adviceId = document.querySelector(".advice-id");

apiCall = async () => {
  let response = await fetch("https://api.adviceslip.com/advice");
  let res = await response.json();
  let data = res.slip.advice;
  let id = res.slip.id;
  console.log(data);
  para.innerHTML = `${data}`;
  adviceId.innerHTML = `${id}`;
};
circle.addEventListener("click", (e) => {
  apiCall();
});

apiCall();
