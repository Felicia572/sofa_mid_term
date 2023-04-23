function renderCalendar(date) {
    const currentMonth = date.getMonth();
    const daysInMonth = new Date(date.getFullYear(), currentMonth + 1, 0).getDate();
    const firstDayIndex = new Date(date.getFullYear(), currentMonth, 1).getDay();
    const lastDayIndex = new Date(date.getFullYear(), currentMonth, daysInMonth).getDay();
    const prevMonthDays = new Date(date.getFullYear(), currentMonth, 0).getDate();
  
    document.querySelector("tbody").innerHTML = "";
  
    let dates = "";
  
    for (let x = firstDayIndex; x > 0; x--) {
      const prevMonthDate = new Date(date.getFullYear(), currentMonth, 0 - x + 1);
      dates += `<td class="prev-month">${prevMonthDate.getDate()}</td>`;
    }
  
    for (let i = 1; i <= daysInMonth; i++) {
      if ((i + firstDayIndex) % 7 === 1) {
        dates += `<tr>`;
      }
  
      dates += `<td><button class="calendar-date">${i}</button></td>`;
  
      if ((i + firstDayIndex) % 7 === 0) {
        dates += `</tr>`;
      }
    }
  
    for (let y = 1; y <= 6 - lastDayIndex; y++) {
      const nextMonthDate = new Date(date.getFullYear(), currentMonth + 1, y);
      dates += `<td class="next-month">${nextMonthDate.getDate()}</td>`;
    }
  
    document.querySelector("tbody").innerHTML = dates;
  
    document.querySelector(".month-year").textContent = `${date.toLocaleString("default", {
      month: "long",
    })} ${date.getFullYear()}`;
  
    // 添加点击事件监听器
    const dateButtons = document.querySelectorAll(".calendar-date");
    dateButtons.forEach((button) => {
      button.addEventListener("click", () => {
        alert("預約成功！");
      });
    });
  }
  
  const currentDate = new Date();
  
  renderCalendar(currentDate);
  