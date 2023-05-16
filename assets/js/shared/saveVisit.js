(() => {

    let userMaxScrollPercents = 0;

    document.addEventListener('scroll', () => {

        const pageScrollHeight = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
        ) - window.innerHeight;

        const userCurrentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollPercents = Math.floor((userCurrentScroll * 100) / pageScrollHeight)

        if (scrollPercents > userMaxScrollPercents) {
            userMaxScrollPercents = scrollPercents
        }

        console.log(pageScrollHeight, userCurrentScroll, scrollPercents)
    })

    const getCookie = (cookieName) => {
        const match = document.cookie.match(new RegExp('(^| )' + cookieName + '=([^;]+)'));
        if (match) {
            return match[2];
        }
        return null
    };

    window.onbeforeunload = (e) => {

        fetch('/rest/SaveVisit', {
            method: 'POST',
            keepalive: true,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                URL: window.location.href,
                SCREEN: screen.width,
                HTTP_REFERER: document.referrer,
                YM_UID: getCookie('_ym_uid'),
                YM_YCLID: getCookie('yclid'),
                MAX_SCROLL_PERCENTS: userMaxScrollPercents
            })
        })
    }

})()

