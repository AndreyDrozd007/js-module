// Part A of task 3
const DOWNLOADS = [
    {
      id: 1,
      title: "Recipe",
      status: "Done",
    },
    {
      id: 2,
      title: "Workouts",
      status: "Pending",
    },
    {
      id: 3,
      title: "Passwords",
      status: "Pending",
    },
    {
      id: 4,
      title: "To Do 2021",
      status: "Pending",
    },
    {
      id: 5,
      title: "Books",
      status: "Failed",
    },
  ];
  
  const DOWNLOAD_STATUSES = {
    pending: 'Pending',
    done: 'Done',
    failed: 'Failed',
  }
  
  document.querySelector(
    ".content"
  ).innerHTML = `<table class='downloads__table'></table>`;
  const renderTable = () => {
    const downloadsTable = document.querySelector(".downloads__table")
    downloadsTable.innerHTML = "";
    for (let i = 0; i < DOWNLOADS.length; i++) {
      const table = document.createElement("tr");
      table.innerHTML = `
      <td> id: ${DOWNLOADS[i].id}</td>
      <td> title: ${DOWNLOADS[i].title}</td>
      <td class='td_status'> status: ${DOWNLOADS[i].status}</td>
      `;
      downloadsTable.appendChild(table);
    }
  };
  
  renderTable();
  
  const button = document.querySelector(".btn_click");
  const intervalLength = 5000;
  const timeoutLength = 3000;
  
  function startInterval() {
    const interval = setInterval(() => {
      console.log('Check Started');
      const findElementStatus = DOWNLOADS.find((elementArray) => elementArray.status === DOWNLOAD_STATUSES.pending)
      if(findElementStatus){
        findElementStatus.status = DOWNLOAD_STATUSES.done; 
        renderTable();
      } else {
        clearInterval(interval);
      }
    }, intervalLength);
  }
         
  function handleClick() {
    setTimeout(startInterval(), timeoutLength);
  
  }
  button.addEventListener("click", handleClick);
  

//   Part B of task 3
  const inputForType = document.querySelector('.form__input-for-type');
  const timeoutAfterInput = 1000;
  
  function getContent(text){
      const inputForShowing = document.querySelector('.form__input-for-showing');
      setTimeout(function() {
        inputForShowing.value = text.target.value;
      },timeoutAfterInput)
  }
  
  const inputTimer = setTimeout(getContent, timeoutAfterInput);
  inputForType.addEventListener('keyup', getContent);