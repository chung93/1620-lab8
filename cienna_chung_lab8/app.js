//write functions for all of the following

//use querySelector or querySelectorAll for all of the following, where needed.


//step 2 select the first paragraph in the second div and add the class 'paragraph-color' so that the styles in the style sheet are applied to only that paragraph

function recolor() {
    document.querySelector(".first-paragraph").classList.add("paragraph-color");
}

recolor()

// step 3 create a paragraph template using a template litteral

let content = "howdy!";
let para = `<p>${content}</p>`;

// step 5 add the paragraph template you just created to the first div using innerHTML

function addp(para){
    document.querySelector("#first-div").appendChild(innerHTML = para);
}

addp(para)
