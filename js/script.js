// Copyright (c) 2022 Stella S All rights reserved
//
// Created by: Stella S
// Created on: April 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates the volume of a sphere
 */
function calculate () {
 
  // get user input
  let radius = parseFloat(document.getElementById('radius-of-sphere').value)

  // calculate volume
  const volume = (4/3) * Math.PI * radius ** 3
  
  // display the results
  document.getElementById('volume').innerHTML = 'The volume of the sphere rounded to the nearest hundredth is: ' + volume.toFixed(2) + ' cm³ '
}