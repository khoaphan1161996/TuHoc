// Selector
let inputFN = document.getElementById("input-FN");
let inputLN = document.getElementById("input-LN");
let inputCountry = document.getElementById("input-country");
let inputScore = document.getElementById("input-score");
let btnAdd = document.querySelector(".btn-add");

let textDesc = document.getElementById("text-desc");
let result = document.querySelector(".result");

// User
const users = [
  {
    name: "MARTHA YOHANES",
    date: "JAN 30 2020 01:09",
    country: "FINDLAND",
    score: 85,
  },
  {
    name: "DAVID SMITH",
    date: "JAN 30 2020 01:09",
    country: "UNITED KINGDOM",
    score: 80,
  },
  {
    name: "ASABENEH YETAYEH",
    date: "JAN 30 2020 01:09",
    country: "FINDLAND",
    score: 75,
  },
  {
    name: "MATHIAS ELIAS",
    date: "JAN 30 2020 01:09",
    country: "SWEDEN",
    score: 70,
  },
];

// Hàm in lần đầu
function renderFristTime() {
  let firstInner = [];
  for (let i = 0; i < users.length; i++) {
    firstInner.push(`
      <div class="result-item">
          <div class="info align">
              <p class="result-text">${users[i].name}</p>
              <p class="date">${users[i].date}</p>
          </div>
          
          <p class="result-text align">${users[i].country}</p>
          <p class="result-text align">${users[i].score}</p>
  
          <div class="action-group align">
              <a class="action-group-item btn-del">Delete</a>
              <a class="action-group-item btn-incre">+5</a>
              <a class="action-group-item btn-decre">-5</a>
          </div>
  </div>
      `);
  }

  firstInner = firstInner.join("");
  result.innerHTML = firstInner;
}

// Chạy tất cả lần đầu tiên
renderFristTime();
del();
incre();
decre();

// Khi bấm Add
btnAdd.addEventListener("click", (e) => {
  let inputFNValue = inputFN.value;
  let inputLNValue = inputLN.value;
  let inputCountryValue = inputCountry.value;
  let inputScoreValue = Number(inputScore.value);

  if (
    !inputFNValue ||
    !inputLNValue ||
    !inputCountryValue ||
    !inputScoreValue
  ) {
    textDesc.innerHTML = `<h3>All fields are required</h3>`;
  } else if (
    inputScoreValue < 0 ||
    inputScoreValue > 100 ||
    !Number.isInteger(inputScoreValue) ||
    isNaN(inputScoreValue)
  ) {
    textDesc.innerHTML = `<h3>Must a integer number and between 0 100</h3>`;
  } else {
    // Xóa dòng cảnh báo
    textDesc.innerHTML = ``;

    // Cập nhập users
    users.push({
      name: inputFNValue + "     " + inputLNValue,
      date: "JAN 30 2020 01:09",
      country: inputCountryValue,
      score: inputScoreValue,
    });

    users.sort((a, b) => -a.score + b.score);

    // Truyền vào action cho từng nút vừa tạo
    renderFristTime();
    del();
    incre();
    decre();
  }
});

// Khi bấm delete
function del() {
  let btnDel = document.getElementsByClassName("btn-del");
  for (let i = 0; i < btnDel.length; i++) {
    btnDel[i].addEventListener("click", (e) => {
      users.splice(i, 1);

      // Gọi lại hàm in và truyền lại action cho từng nút
      renderFristTime();
      del();
      incre();
      decre();
    });
  }
}

// Khi bấm tăng hoặc giảm
function incre() {
  let btnIncre = document.getElementsByClassName("btn-incre");
  for (let i = 0; i < btnIncre.length; i++) {
    btnIncre[i].addEventListener("click", (e) => {
      if (users[i].score <= 95) {
        users[i].score += 5;
        users.sort((a, b) => -a.score + b.score);

        // Gọi lại hàm in và truyền lại action cho từng nút
        renderFristTime();
        del();
        incre();
        decre();
      }
    });
  }
}

function decre() {
  let btnDecre = document.getElementsByClassName("btn-decre");
  for (let i = 0; i < btnDecre.length; i++) {
    btnDecre[i].addEventListener("click", (e) => {
      if (users[i].score >= 5) {
        users[i].score -= 5;
        users.sort((a, b) => -a.score + b.score);

        // Gọi lại hàm in và truyền lại action cho từng nút
        renderFristTime();
        del();
        incre();
        decre();
      }
    });
  }
}
