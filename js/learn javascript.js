
let lastNumber;
let history=[];
let history_resulte=document.querySelector(".history_resulte")
let clear = document.querySelector("#clear");
let resulte = document.querySelector("#resulte");
let btns = document.querySelectorAll("button");
let Alert = document.querySelector(".alert");
let option_box = document.querySelector("div.option");
let count = 0;
let arr = [];
let delet_btn=document.querySelector(".delete")
let close_option_btn = document.querySelector("h4");
close_option_btn.addEventListener("click", () => {
  option_box.classList.remove("show_option");
});



for (const btn of btns) {
  btn.addEventListener("click", () => {
    // debugger;
    if (btn.classList.value == "number" || btn.classList.value == "operation") {
      arr.push(btn.textContent);
      control(++count, btn);
    } else if (btn.classList.value == "clear") {
    
      resulte.textContent = "";
      count = 0;
    } else if (
      btn.classList.value == "option" ||
      btn.classList.value == "option1"
    ) {
      option_box.classList.add("show_option");
    } else {
      history.push(resulte.textContent);
      resulte.textContent = eval(resulte.textContent);
    
      count = 0;
    }
  });
}

// control the inputs

function control(a, button) {
  if (a == 1) {
    if (button.textContent == 0) {
      Alert.classList.add("show_alert");
      setTimeout(() => {
        Alert.classList.remove("show_alert");
      }, 900);
      count = 0;
    } else if (button.classList.value == "operation") {
      Alert.classList.add("show_alert");
      setTimeout(() => {
        Alert.classList.remove("show_alert");
      }, 800);
      count = 0;
    } else {

      resulte.innerText += button.innerText;
    }
  } else {
    let flag = false;
    if (button.classList.value == "operation") {
      if (
        arr[a - 2] == "-" ||
        arr[a - 2] == "+" ||
        arr[a - 2] == "*" ||
        arr[a - 2] == "/"
      ) {
        Alert.classList.add("show_alert");
        setTimeout(() => {
          Alert.classList.remove("show_alert");
        }, 800);
        count = 0;
        flag = true;
      }
      if (flag) {
        resulte.innerText = "";
      } else resulte.innerText += button.innerText;
    } else resulte.innerText += button.innerText;
  }
}

function show_history() {
  document.querySelector(".history").classList.add("show_history");
 history.forEach(e => {
  history_resulte.innerHTML+=e +"<br>"

 });


}

// clear history
function close_history() {
  document.querySelector(".history").classList.remove("show_history");
}
let f = true; //advance calculator
function show_advCalculator() {

  document.querySelector("div.btns").style.display = "none";
  document.querySelector(".adv_cal_btns").style.display = "grid";
  option_box.classList.remove("show_option");
  if (document.querySelector("#adv_calcu").textContent == "sample calculator") {
    document.querySelector(".adv_cal_btns").style.display = "none";
    document.querySelector(".btns").style.display = "grid";
  }

  if (f) {
    document.querySelector("#adv_calcu").textContent = "sample calculator";
    f = false;
  } else {
    document.querySelector("#adv_calcu").textContent = "advance calculator";
    f = true;
  }
}



// history section




// delete btn


delet_btn.addEventListener("click",()=>{
let d=resulte.innerText.length-1;

resulte.innerText=resulte.innerText.replace(resulte.innerText[d],'')
})