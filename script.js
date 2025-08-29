//copy button counter
const heartButton = document.getElementsByClassName("heartButton");
const count = document.getElementById("life");
let counter = 0;
for (let heart of heartButton) {
  heart.addEventListener("click", function () {
    counter++;
    count.innerText = counter;
  });
}

//copy the number from card section

const copyButton = document.getElementsByClassName("copyButton");
const textCopy = document.getElementsByClassName("textCopy");
const serviceName = document.getElementsByClassName("serviceName");
const countCopy = document.getElementById("count");
let sum = 0;
for (let i = 0; i < copyButton.length; i++) {
  copyButton[i].addEventListener("click", function () {
    const text = textCopy[i].innerText;
    const service = serviceName[i].innerText;
    sum++;
    countCopy.innerText = sum;

    navigator.clipboard
      .writeText(text)
      .then(function () {
        alert("Copied: " + service + text);
      })
      .catch(function (err) {
        console.error("Copy failed:", err);
      });
  });
}

//call function and final function
const callButtons = document.getElementsByClassName("callButton");
const textCopies = document.getElementsByClassName("textCopy");
const serviceNames = document.getElementsByClassName("serviceName");
const coin = document.getElementById("coin");
const historyList = document.getElementById("call-history");

let coinBalance = parseInt(coin.innerText);

for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].addEventListener("click", function () {
    const serviceNumber = textCopies[i].innerText;
    const service = serviceNames[i].innerText;

    if (coinBalance >= 20) {
      coinBalance -= 20;
      coin.innerText = coinBalance;

      alert(
        "Calling " +
          service +
          " " +
          serviceNumber +
          "\nCoins left: " +
          coinBalance
      );

      //div inserted into dom
      const div = document.createElement("div");
      div.className = "call-history-entry";

      const timestamp = new Date().toLocaleTimeString();

      div.innerHTML = `
        <div class="service-header">
          <div class="service-info">
            <h3>${service}</h3>
            <p class="number">${serviceNumber}</p>
          </div>
          <div class="timestamp">${timestamp}</div>
        </div>
      `;

      // diya dilam history te
      historyList.appendChild(div);
    } else {
      alert("You don't have enough coin. Please RECHARGE!");
    }
  });
}

//clearing history
const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", function () {
  const historyEntries = document.getElementsByClassName("call-history-entry");
  while (historyEntries.length > 0) {
    historyEntries[0].remove();
  }
});
