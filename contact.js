let inputName = document.getElementById("input_name");
let labelName = document.getElementById("label_name")

let labelEmail = document.getElementById("label_email");
let inputEmail = document.getElementById("input_email");

let labelTextArea = document.getElementById("label_textArea");
let inputTextArea = document.getElementById("input_textArea")

inputName.addEventListener("focus", (event)=>{
    event.preventDefault();

    labelName.style.marginBottom = "13px";
    labelName.style.color = "#e44f9c"
    inputName.style.borderBottom = "1px solid #e44f9c"
})

inputName.addEventListener("blur", () => {
    if (inputName.value === "") {
      labelName.style.marginBottom = "0px";
      labelName.style.color = "#44566C";
      inputName.style.borderBottom = "1px solid #44566C";
    } else {
      labelName.style.marginBottom = "13px";
      labelName.style.color = "#e44f9c";
      inputName.style.borderBottom = "1px solid #e44f9c";
    }
});


inputEmail.addEventListener("focus", (event)=>{
    event.preventDefault();

    labelEmail.style.marginBottom = "13px";
    labelEmail.style.color = "#6ab5b9"
    inputEmail.style.borderBottom = "1px solid #6ab5b9"
})

inputEmail.addEventListener("blur", () => {
    if (inputEmail.value === "") {
      labelEmail.style.marginBottom = "0px";
      labelEmail.style.color = "#44566C";
      inputEmail.style.borderBottom = "1px solid #44566C";
    } else {
      labelEmail.style.marginBottom = "13px";
      labelEmail.style.color = "#6ab5b9";
      inputEmail.style.borderBottom = "1px solid #44566C";
    }
});


inputTextArea.addEventListener("focus", (event)=>{
    event.preventDefault();

    labelTextArea.style.marginBottom = "13px";
    labelTextArea.style.color = "#F5A4E2"
    inputTextArea.style.borderBottom = "1px solid #F5A4E2"
})

inputTextArea.addEventListener("blur", () => {
    if (inputTextArea.value === "") {
      labelTextArea.style.marginBottom = "0px";
      labelTextArea.style.color = "#44566C";
      inputTextArea.style.borderBottom = "1px solid #44566C";
    } else {
        labelTextArea.style.marginBottom = "13px";
        labelTextArea.style.color = "#F5A4E2";
        inputTextArea.style.borderBottom = "1px solid #F5A4E2";
    }
});