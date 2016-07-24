var inputField = document.getElementsByClassName("input")[1]; // Input field
counter = 0;
function dispatch(target, eventType, char) 
{
   var evt = document.createEvent("TextEvent");    
   evt.initTextEvent (eventType, true, true, window, char, 0, "en-US");
   target.focus();
   target.dispatchEvent(evt);
}
function startEntry()
{
  if (counter < 50) // Maximum number of times
  {
    dispatch(inputField, "textInput", "Text to be repeated");
    var input = document.getElementsByClassName("icon btn-icon icon-send"); // Send button
    input[0].click();
    counter++;
    setTimeout(startEntry,1); // Delay for new spam detector
  }
}
startEntry();
