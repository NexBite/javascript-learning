let canRun = true;

function handleScroll() {

    if (!canRun) {
        return;
    }

    console.log("Scroll event");

    canRun = false;

    setTimeout(() => {
        canRun = true;
    }, 500);
}
// then:
window.addEventListener(
    "scroll",
    handleScroll
);