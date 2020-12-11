export function hello() {
    console.log("hello module1")
}

export function set_title() {
    const ele = document.getElementById("test_title");
    if(ele) {
	ele.innerHTML = "hello module1";
    }
}
