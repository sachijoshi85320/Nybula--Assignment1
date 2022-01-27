const createRoomModal = document.querySelector(".create-room-modal");
const createRoomBtn = document.querySelector("#create-room-btn");
const createCloseBtn = document.querySelector(".create-room-close");
const joinCloseBtn = document.querySelector(".join-room-close");
const roomId = document.querySelector("#roomId");
const joinRoomModal = document.querySelector(".join-room-modal");
const joinRoomBtn = document.querySelector("#join-room-btn");
const dashboardBtn = document.querySelector(".dashboard-btn");
const createJoinNowBtn = document.querySelector(".create-join-btn");
const joinNowBtn = document.querySelector(".join-join-btn");
const joinId = document.querySelector(".room-id-input");

// Creating Room and giving a random Room Id to the user
createRoomBtn.onclick = () => {
  createRoomModal.style.display = "block";
  const value = Math.floor(100000 + Math.random() * 900000);
  roomId.innerHTML = value;
};

// For joining room with a room id given by other user
joinRoomBtn.onclick = () => {
  joinRoomModal.style.display = "block";
};

// Close button for Create Room Modal
createCloseBtn.onclick = () => {
  createRoomModal.style.display = "none";
};

// Close button for Join Room Modal
joinCloseBtn.onclick = () => {
  joinRoomModal.style.display = "none";
};

// Join Now button for getting into the room dashboard
createJoinNowBtn.onclick = () => {
  dashboardBtn.click();
};
joinNowBtn.onclick = (e) => {
  e.preventDefault();
  if (!joinId.value || joinId.value.length < 6) {
    console.log("Enter correct Id");
    return;
  } else {
    dashboardBtn.click();
  }
};
//for Deleting
this.Delete = function (item) {
  // Delete the current row
  this.tasks.splice(item, 1);
  // Display the new list
  this.FetchAll();
};