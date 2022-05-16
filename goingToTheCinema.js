function movie(card, ticket, perc) {
    // your code
  
  let visits = 0
  
  let cardTotal = card
  
  let ticketTotal = 0
  
  let lastTicket = ticket
  
  while(Math.ceil(cardTotal) >= ticketTotal){
    ticketTotal += ticket
    lastTicket = lastTicket * perc
    
      cardTotal += lastTicket
  
    visits+=1
  }
  return visits
};