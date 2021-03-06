function handleDragStart(e) {
var data = {
elementId: this.id,
message: "You moved an element!"
};
e.dataTransfer.setData("text", JSON.stringify(data));
}
function handleDragEnterLeave(e) {
if (e.type == "dragenter") {
this.className = "drag-enter";
} else {
this.className = "";
}
}
function handleOverDrop(e) {
e.preventDefault();
if (e.type != "drop") {
return;
}
var json = e.dataTransfer.getData("text");
var data = JSON.parse(json);
var draggedEl = document.getElementById(data.elementId);
if (draggedEl.parentNode == this) {
this.className = "";
return;
}
draggedEl.parentNode.removeChild(draggedEl);
this.appendChild(draggedEl);
this.className = "";
alert(data.message);
}
var draggable = document.querySelectorAll("[draggable]");
var targets = document.querySelectorAll("[data-drop-target]");
for (var i = 0; i < draggable.length; i++) {
draggable[i].addEventListener("dragstart",
handleDragStart);
}
for (i = 0; i < targets.length; i++) {
targets[i].addEventListener("dragover", handleOverDrop);
targets[i].addEventListener("drop", handleOverDrop);
targets[i].addEventListener("dragenter",
handleDragEnterLeave);
targets[i].addEventListener("dragleave",
handleDragEnterLeave);
}
