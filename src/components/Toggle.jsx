import React from 'react'

function Toggle() {
  return (
      <div>
    <input class='toggle-checkbox' type='checkbox'></input>
        <div class='toggle-slot'>
            <div class='sun-icon-wrapper'>
            <div class="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
        </div>
            <div class='toggle-button'></div>
            <div class='moon-icon-wrapper'>
            <div class="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
            </div>
  </div>
  </div>
  )
}
// https://codepen.io/bheberer/pen/BaNZKmq
export default Toggle