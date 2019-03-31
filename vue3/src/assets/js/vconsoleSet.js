/**
 * 根据环境生成vconsole插件，目前为仅测试,开发生成
 */


function vconsoleEnvJudge() {
    let env = process.env.NODE_ENV
    switch (env){
        case 'development':
            console.log('dev');
            setVconsole();
            break;
        case 'production':
            console.log('pro');
            break;
        case 'test':
            console.log('test');
            setVconsole();
            break;
        default:
            console.log('other');
            break;
    }
}

function setVconsole() {
    window.onload = function () {
        let headDom = document.getElementsByTagName('head')[0];
        let vconsoleScript = document.createElement('script');
        vconsoleScript.src = 'http://file.shangjinuu.com/cssjs/vConsole-3.3.0/dist/vconsole.min.js';
        headDom.appendChild(vconsoleScript);

        /*let script = document.createElement('script');
        script.innerHTML = 'var vConsole = new VConsole()';*/

        try{
            var vConsole = new VConsole();
        }catch (e){
            let timer = setTimeout(function() {
                // headDom.appendChild(script);
                var vConsole = new VConsole();
                clearTimeout(timer);
                timer = null;
            },1000)
        }

    }

}



export {
    vconsoleEnvJudge, // 根据环境生成vconsole插件，目前为仅测试,开发生成
}
