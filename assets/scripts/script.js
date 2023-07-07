$(document).ready(function () {
  
  let currentDay = dayjs().format("dddd, MMMM D, YYYY")
  $("#currentDay").text(currentDay)

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

  localStorage.getItem('name')

console.log(localStorage)

});


  