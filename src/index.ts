/**
 * The HelloWorld program implements an application that
 * simply displays "Hello World!" to the standard output.
 *
 * By:      Yiyun Qin
 * Version: 1.0
 * Since:   2022-09-131
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()
let log_number: number | undefined
let car_weight = 1100
let weight_metre = 20

console.log('There are three types of log length. 0.25m, 0.5m and 1m.')
const type = prompt('Which type of length you want to choose?(Enter number): ')

if (type == '0.25') {
  log_number = car_weight / weight_metre / 0.25
} else if (type == '0.5') {
  log_number = car_weight / weight_metre / 0.5
} else if (type == '1') {
  log_number = car_weight / weight_metre / 1
} else {
  console.log('\nPlease choose a type in options!')
}

if (type == '0.25' || type == '0.5' || type == '1') {
  console.log(`\n${log_number} logs need to be placed on the truck.`)
}

console.log('\nDone.')
