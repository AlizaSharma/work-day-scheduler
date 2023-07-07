$(document).ready(function () {
  
  let currentDay = dayjs().format("dddd, MMMM D, YYYY")
  $("#currentDay").text(currentDay)

  // fetch the hour and hold that in a variable, then set background color 
  let currentHour = dayjs().hour()

  $('.time-block').each(function(){
    let rowHour = parseInt($(this).attr('id').split('-')[1])
 
    if(currentHour > rowHour){
      $(this).addClass('past')
    } else if(currentHour === rowHour){
      $(this).addClass('present')
    }else{ 
      $(this).addClass('future')

    }
  })
  

  $('.btn').on("click", function(){
    let key = $(this).parent().attr('id')
    let value = $(this).siblings('textarea').val()

    localStorage.setItem(key, value)
  })

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  localStorage.getItem('hour-9')



});


  //
  //
  //