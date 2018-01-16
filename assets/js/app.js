import log from './log.js'
//import css from '../css/style.css'
import css from '../css/style.scss'

let a = "salut les gens"

let bt = document.getElementById("button")
bt.addEventListener('click', function (){
	import('jquery').then(($) => {
      $("body").css('background-color','#cce')
    });

})

log(a)