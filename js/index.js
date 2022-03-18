import {hello, set_title} from './modules/module1.js'

const registerSW = () => {
    if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {	    
	    navigator.serviceWorker.register('/js/sw.js')
		.then((r) => {
		    console.log("success", r)
		})
		.catch((e) => {
		    console.log("error", e)
		})	    
	});
    } else {
	console.log("not support..")
    }
}

registerSW()


const initSW = () => {
    navigator.serviceWorker?.ready
	.then((r) => {
	    console.log("ready", r)
	    if(requestPermission()) {
		popup()
	    }
	})
}



const setOnClick = () => {
    const btn = document.getElementById("button")
    console.log(btn);
    btn.addEventListener("click", () => {
	const n = new Notification(
	    'タイトル',
	    {	    
		body: '本文です',
		tag: 'tag',
		data: {
		    xxx: 'データ'
		}
	    }	    
	);
    })   
}




const requestPermission = () => {
    return Notification.requestPermission()
      .then((permission) => {
        if (permission == 'granted') {
            return true
        } else if (permission == 'denied') {
	    return false
        } else if (permission == 'default') {
            return false
        }
      });
}


const main = () => {
    initSW()
    hello()
    set_title()
    requestPermission()
    setOnClick()
}

window.onload = () => {
    main()
}


