function nbYear(p0, percent, aug, p) {
    // your code
  let population = p0
  let perc = percent * .01
  let years = 0
  
  while(population<p){
    population+= Math.floor(population*perc)
    population += aug
    years += 1
  }
  return years
}