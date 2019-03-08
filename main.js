function changeContent(event, contName) {
    let i, tabContent, tabBtn;
    tabContent = document.getElementsByClassName("project__cont");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    tabBtn = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tabBtn.length; i++) {
      tabBtn[i].className = tabBtn[i].className.replace(" active-tab-btn", "");
    }
    document.getElementById(contName).style.display = "flex";
    event.currentTarget.className += " active-tab-btn";
}
  
  // Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();