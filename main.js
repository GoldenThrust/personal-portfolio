const dpr = devicePixelRatio;

function loader() {
    let y = 0;
    let radius = 10;
    const loader = document.getElementById('loader');
    const ctxLoader = loader.getContext("2d");
    loader.width = innerWidth * dpr;
    loader.height = innerHeight * dpr;
    function animate() {
        let r = 0;
        let dy = 20;
        if (y < loader.height / 2) {
            y += dy;
        } else if (y < loader.height / 1.8) {
            dy = 1;
            r += 20;
            radius += r;
        }
        if (y > loader.height) {
            radius++;
        }
        ctxLoader.fillRect(0, 0, loader.width, loader.height);
        ctxLoader.beginPath();
        ctxLoader.fillStyle = "white";
        ctxLoader.arc(loader.width / 2, y, radius, 0, Math.PI * 2);
        ctxLoader.clearRect(0, 0, loader.width, loader.height);
        ctxLoader.fill();
        requestAnimationFrame(animate);
    }
    animate();
    console.log(ctxLoader);
}
loader();

