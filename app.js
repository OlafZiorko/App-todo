//SELECTORS
let form = document.querySelector(".task-form");
let userName = document.querySelector(".welcomeMsg-input");
let userEnteredTask = document.querySelector(".task__input");
let tasks__list = document.querySelector(".task__container");
let homeTask = document.querySelector(".home__type-task-input");
let businnesTask = document.querySelector(".business_type__task-input");
let businessTaskCount = document.querySelector(".business__task-count");
let homeTaskCount = document.querySelector(".home__task-count");
let btnSub = document.querySelector(".submit__form-btn");
let businessLabel = document.querySelector(".business__label");
let counterBusiness = 0;
let counterHome = 0;
let totalCounter = document.querySelector(".count-task");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let toDoTask = userEnteredTask.value;
  //CREATE DIV
  let toDoTaskWrp = document.createElement("div");
  toDoTaskWrp.classList.add("todo__task");
  //CREATE P TAG
  let para = document.createElement("p");
  para.classList.add("todo");
  para.textContent = toDoTask;
  //APPEND P INTO DIV TAG
  toDoTaskWrp.appendChild(para);
  //CREATE ACT BTNS
  let actBtns = document.createElement("div");
  actBtns.classList.add("action__buttons");
  //DONE BTN
  let doneBtn = document.createElement("button");
  doneBtn.classList.add("done");
  doneBtn.textContent = "Done";
  //DEL BTN
  let delBtn = document.createElement("button");
  delBtn.classList.add("del");
  delBtn.textContent = "Delete";
  // APPEND BTNS INTO WRAPPER
  actBtns.appendChild(doneBtn);
  actBtns.appendChild(delBtn);
  //APPEND BTNS INOTO WRAPPER
  toDoTaskWrp.appendChild(actBtns);
  tasks__list.appendChild(toDoTaskWrp);

  //ADDING PROPER BORDER COLOR AND COUNTER

  function checkType() {
    if (homeTask.checked === true) {
      counterHome++;
      homeTaskCount.innerText = `You have ${counterHome} home tasks`;
      toDoTaskWrp.classList.add("blue-border");
    } else if (businnesTask.checked === true) {
      counterBusiness++;
      toDoTaskWrp.classList.add("red-border");
      businessTaskCount.innerText = `You have ${counterBusiness} home tasks`;
    } else {
      return;
    }
  }

  checkType();

  // DELETE AND DONE BTNS
  doneBtn.addEventListener("click", function () {
    para.classList.add("task-done");
  });
  delBtn.addEventListener("click", function () {
    if (toDoTaskWrp.classList.contains("blue-border")) {
      counterHome--;
      homeTaskCount.innerText = `You have ${counterHome} home tasks`;
      countTotal();
      toDoTaskWrp.remove();
    } else if (toDoTaskWrp.classList.contains("red-border")) {
      counterBusiness--;
      businessTaskCount.innerText = `You have ${counterBusiness} home tasks`;
      countTotal();
      toDoTaskWrp.remove();
    }
  });
  totalTask = counterHome + counterBusiness;
  function countTotal() {
    totalTask = counterHome + counterBusiness;
    totalCounter.textContent = ` You have ${totalTask} tasks `;
  }
  countTotal();
  console.log(totalTask);
  userEnteredTask.value = "";
});
