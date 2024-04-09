/**
* This is the main code that runs
 * with the Vehicle Class.
 * By:      Curtis Edwards
 * Version: 1.0
 * Since:   2024-04-05
 */

import Vehicle from './Vehicle'

console.log('Created Ford focus')
const fordFocus = new Vehicle('white', 'B40-C4RR0', 4, 284)

console.log('Status:')
fordFocus.status()

console.log('Accelerating, 10 of power for 10 sec.')
fordFocus.accelerate(10, 10)
console.log(`New speed: ${fordFocus.speed}`)

console.log('Changing colour to black:')
fordFocus.color = 'black'
console.log(`New color: ${fordFocus.color}`)

console.log('')

// new Ferrari
console.log('Created a Ferrari')
const ferrari = new Vehicle('red', 'VHD-35HU', 2, 320)

console.log('Status:')
ferrari.status()

console.log('Accelerating, 100 of power for 4 sec.')
ferrari.accelerate(100, 4)
console.log(`New speed: ${ferrari.speed}`)

console.log('Breaking, 10 of power for 10 sec.')
ferrari.break(10, 10)
console.log(`New speed: ${ferrari.speed}`)

console.log('Changing color:')
ferrari.color = 'racing red!'
console.log(`New color: ${ferrari.color}`)

console.log('')

// new Citroen Ami
console.log('Created a Citroen Ami')
const citroenAmi = new Vehicle('blue', 'FS-695-DQ', 2, 45)

console.log('Status:')
citroenAmi.status()

console.log('Accelerating, 5 of power for 10 sec.')
citroenAmi.accelerate(5, 10)
console.log(`New speed: ${citroenAmi.speed}`)

console.log('Breaking, 2 of power for 10 sec.')
citroenAmi.break(2, 10)
console.log(`New speed: ${citroenAmi.speed}`)

console.log('Changing color:')
citroenAmi.color = 'purple'
console.log(`New color: ${citroenAmi.color}`)

console.log('\nDone.')
