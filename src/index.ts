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
let logNumber: number | undefined
const carWeight = 1100
const weightMetre = 20

console.log('There are three types of log length. 0.25m, 0.5m and 1m.')
const type = prompt('Which type of length you want to choose?(Enter number): ')

if (type === '0.25') {
  logNumber = carWeight / weightMetre / 0.25
} else if (type === '0.5') {
  logNumber = carWeight / weightMetre / 0.5
} else if (type === '1') {
  logNumber = carWeight / weightMetre / 1
} else {
  console.log('\nPlease choose a type in options!')
}

if (type === '0.25' || type === '0.5' || type === '1') {
  console.log(`\n${logNumber} logs need to be placed on the truck.`)
} else if (logNumber === undefined) {
  console.log('Please enter a number!')
}

console.log('\nDone.')
