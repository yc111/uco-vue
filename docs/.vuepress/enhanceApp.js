import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import hljs from 'highlight.js';
import 'highlight.js/styles/color-brewer.css';//androidstudio

import ucoUi from 'uco-ui';
import 'uco-ui/dist/uco-ui.css';

export default ({
    Vue,
    options,
    router,
    siteData
}) => {
    Vue.use(Element);
    Vue.use(ucoUi);

    Vue.directive('highlight', function(el) {
        let blocks = el.querySelectorAll('pre code');
        blocks.forEach(block => {
            hljs.highlightBlock(block);
        })
    })
}