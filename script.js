//copy button counter
const copyButton = document.getElementById("copyButton");
const count = document.getElementById("count");
let counter = 0;
copyButton.addEventListener("click", function (event) {
  counter++;
  count.innerText = counter;
});

//copy the number from card section

const copyNumber = document.getElementById("copyNumber");
const copyButtonCard = document.getElementById("copyAmbulance");
copyButtonCard.addEventListener("click", function () {
  const textToCopy = copyNumber.innerText;
  navigator.clipboard.writeText(textToCopy).then(function () {
    alert("copied" + textToCopy);
  });
});
