document.getElementById("textArea").addEventListener("keyup", getSavedText () {
    // Your code to store the text area contents
    sessionStorage.setItem(KEY, message.value);
})

function getSavedText(){
    const savedMessage = sessionStorage.getItem(KEY);
    if(savedMessage !== null){
        return savedMessage;
    }
    return "";
}