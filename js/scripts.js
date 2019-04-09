function TicketStubs() {
  this.tickets = [],
  this.currentId = 0
}
function Tickets(movies, age, times){
  this.movie= movies,
  this.age = age,
  this.time = times

}

TicketStubs.prototype.addTicket = function(ticket) {
  ticket.id = this.assignId();
  this.tickets.push(ticket);
}

TicketStubs.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

function age(age){
  if (age >= 55){
    return 2;
  } else if (age >=13){
    return 3;
  } else if (age > 0){
    return 2;
  } else {
    return false;
  }
 return age;
}

function movieTImes(times){
  if (times === "3") {
    return 3;
  } else if (times === "2") {
    return 2;
  } else if (times === "1") {
    return 1;
  } else {
    return false;
  }
  return times;
}

function movieTitles(movies) {
  if ( movies === "3") {
    return 3;
  } else if ( movies === "2") {
    return 2;
  } else if ( movies === "1") {
    return 1;
  } else {
    return false;
  }
  return  movies;
}

function ticketPrice(total) {
  var total = movieTimes(tickets.time) + movieTitles(tickets.movies) + age(tickets.age);
  return total;
}
// console.log(ticketPrice(total));
console.log();
// function displayTicketDetails(ticketStubsToDisplay) {
//   var ticketStubs = $("div#show-ticket")
// }
console.log(TicketStubs(this.tickets));

//user Interface
var ticketStubs = new TicketStubs();



function showTicket(ticketId) {
  $("#show-ticket").show();
  $(".movie-name").html(ticket.movie);
  $(".age").html(ticket.age);
  $(".movie-time").html(ticket.time);

  if (ticketPrice(total) >= 7) {
    $(".option1").show();
  } else{
    $(".option1").hide();
  }
  if (ticketPrice(total) >= 4 && ticketPrice(total) < 7) {
    $(".option2").show();
  } else {
    $(".option2").hide();
  }
  if (ticketPrice(total) >= 0 && ticketPrice(total) < 4) {
    $(".option3").show();
  } else {
    $(".option3").hide();
  }
}

$(document).ready(function(){
  $("form#ticket-buying").submit(function(event){
    event.preventDefault();
    var inputMovie = $("input:radio[name=movie]:checked").val();
    var inputAge = parseInt($("input#age").val());
    var inputTime = $("#movie-times").val();

    $("input#age").val();
    $("input:radio[name=movie]:checked").val();
    $("#movie-times").val();

    var newTicket = new Tickets(inputMovie, inputAge, inputTime);
    ticketStubs.addTicket(newTicket);
    console.log(ticketStubs);
  })
})
