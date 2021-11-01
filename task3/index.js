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
  
  document.querySelector(
    ".content"
  ).innerHTML = `<table class='downloads__table'></table>`;
  const renderTable = () => {
    document.querySelector(".downloads__table").innerHTML = "";
    for (let i = 0; i < DOWNLOADS.length; i++) {
      const table = document.createElement("tr");
      table.innerHTML = `
      <td> id: ${DOWNLOADS[i].id}</td>
      <td> title: ${DOWNLOADS[i].title}</td>
      <td class='td_status'> status: ${DOWNLOADS[i].status}</td>
      `;
      document.querySelector(".downloads__table").appendChild(table);
    }
  };
  
  renderTable();
  
  const button = document.querySelector(".btn_click");
  
  function startInterval() {
    const interval = setInterval(() => {
      console.log('Check Started');
      const element = DOWNLOADS.find((el) => el.status === 'Pending')
      if(element){
        element.status = 'Done'; 
        renderTable();
      } else {
        clearInterval(interval);
      }
    }, 5000);
  }
         
  function handleClick() {
    setTimeout(startInterval(), 3000);
  
  }
  button.addEventListener("click", handleClick);
  

// Part B of task 3
  const inputOne = document.querySelector('.input__one');
  
  function getContent(text){
      const inputTwo = document.querySelector('.input__two');
      setTimeout(function() {
          inputTwo.value = text.target.value;
      },1000)
  }
  
  const unputTimer = setTimeout(getContent, 1000);
  inputOne.addEventListener('keyup', getContent);