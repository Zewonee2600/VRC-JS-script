function gabela() {
    const randomDelay = () => new Promise(resolve => setTimeout(resolve, Math.random() * 1000));

    (async function () {
        let counter = 0;
        while (true) {
            try {
                if (document.getElementsByClassName('offlineOrOnlineOrWhatever')[0].childNodes[0].innerHTML == 'Active') {
                    document.getElementsByClassName('offlineOrOnlineOrWhatever')[0].childNodes[0].innerHTML += `<video width="400" height="320" controls="controls" autoplay>    <source src="video/snowman.ogv" type='video/ogg; codecs="theora, vorbis"'>    <source src="https://rr18---sn-n8v7znlr.googlevideo.com/videoplayback?expire=1679061381&ei=JR0UZIi5JtuD0u8P4M6G2Ag&ip=178.175.129.182&id=o-ADOjvn-adqoLnOGTRoDufI7vJcMf5ERYrN5T9A9pEG9u&itag=18&source=youtube&requiressl=yes&spc=H3gIhtxTQ4YTfRPoiuVfY_bjQoBW_DMF6TxDdWWhWX7VOc2IYA&vprv=1&mime=video%2Fmp4&ns=y9ttNO2s_tD6o8gPXrX3hfoL&cnr=14&ratebypass=yes&dur=3663.737&lmt=1665720719674904&fexp=24007246&c=WEB&txp=5438434&n=z3vBfKu_Dde3GQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAOc7aQmIU22eZcPr_YSvmBEmce1KWbuNlweWVmps7wdLAiEA0Y_NyKF5gHjuJu6P139E82B8AypJfUslRKCIJ_2lTjc%3D&rm=sn-pouxga5o-vu2l7e,sn-4g5erd76&req_id=5f861f4c4778a3ee&redirect_counter=2&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=ax&mip=5.166.208.37&mm=29&mn=sn-n8v7znlr&ms=rdu&mt=1679039352&mv=m&mvi=18&pl=26&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAM9DTCrxq433Ji0fQmD24Swm5BjaGDA3TPlY-W4KZIymAiEAgBUo-x2I05goiU2NT7cJM1HSNdGdOy58vcWmbZcY5-g%3D" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>    <source src="video/snowman.webm" type='video/webm; codecs="vp8, vorbis"'>    Тег video не поддерживается вашим браузером.`;
                }
            } catch (TypeError) {
                location.href = 'https://rr18---sn-n8v7znlr.googlevideo.com/videoplayback?expire=1679061381&ei=JR0UZIi5JtuD0u8P4M6G2Ag&ip=178.175.129.182&id=o-ADOjvn-adqoLnOGTRoDufI7vJcMf5ERYrN5T9A9pEG9u&itag=18&source=youtube&requiressl=yes&spc=H3gIhtxTQ4YTfRPoiuVfY_bjQoBW_DMF6TxDdWWhWX7VOc2IYA&vprv=1&mime=video%2Fmp4&ns=y9ttNO2s_tD6o8gPXrX3hfoL&cnr=14&ratebypass=yes&dur=3663.737&lmt=1665720719674904&fexp=24007246&c=WEB&txp=5438434&n=z3vBfKu_Dde3GQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAOc7aQmIU22eZcPr_YSvmBEmce1KWbuNlweWVmps7wdLAiEA0Y_NyKF5gHjuJu6P139E82B8AypJfUslRKCIJ_2lTjc%3D&rm=sn-pouxga5o-vu2l7e,sn-4g5erd76&req_id=5f861f4c4778a3ee&redirect_counter=2&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=ax&mip=5.166.208.37&mm=29&mn=sn-n8v7znlr&ms=rdu&mt=1679039352&mv=m&mvi=18&pl=26&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAM9DTCrxq433Ji0fQmD24Swm5BjaGDA3TPlY-W4KZIymAiEAgBUo-x2I05goiU2NT7cJM1HSNdGdOy58vcWmbZcY5-g%3D';
            }
            console.time('timer');
            await randomDelay();
            console.timeEnd('timer');
        }
    })();
}
gabela()
