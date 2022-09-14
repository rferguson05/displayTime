require("isomorphic-fetch");

async function fetchTime() {
        setInterval(async function () {
                    const call = await fetch("http://worldtimeapi.org/api/timezone/Europe/London");
                    const response = await call.json();
                }, 1000);
            }

            fetchTime();