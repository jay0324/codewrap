/**
* codewrap
* Author: Jay Hsu
* Date: 2022-05-03
*/

(function ($, document, window) {
    "use strict";
    $.fn.codewrap = function (options) {
        const defaults = {
            optionKey: 'optionVal'
        };
        options = $.extend(defaults, options);
        const optionKey = options.optionKey;
         //your code here

        const main_wraper = $(this);

        $(this).each(function(){
            const sub_wrapper = $(this);
            const content = sub_wrapper.val();
            const copy_id = getID();
            sub_wrapper.attr('id', copy_id).addClass("original_content");
            const template = applyTpl(content, copy_id);
            $(sub_wrapper).wrap(`<div id="codewrap_${copy_id}" class="codewrap_dom"></div>`);
            $(template).insertAfter(sub_wrapper);
        });

        $('.codewrap_dom>.copy').on('click', function() {
            const target_id = $(this).data("copy");
            $('#'+target_id).select();
            $('#codewrap_'+target_id+'>.copy_note').addClass('show');
            document.execCommand('copy');
            setTimeout(function(){
                $('#codewrap_'+target_id+'>.copy_note').removeClass('show');
            },2000);
        });

        function applyTpl(content, copy_id) {
            let reform = `<div class="line"><span class="row-num">0</span><pre>`;
            let line = 1;
            for (let i = 0; i< content.length; i++) {
                if (content[i] == '\n') {
                    reform += `</pre></div><div class="line"><span class="row-num">${line}</span><pre>`;
                    line++;
                }
                reform += `<span>${content[i]}</span>`;
            }
            reform += `</pre></div>`;

            const output = `
                <div class="copy" data-copy="${copy_id}">COPY</div>
                <code><div class="wrapper"><div class="inner">
                    ${reform}
                </div></div></code>
                <div class="copy_note"><div class="copy_text">Copy Success</div></div>`;
            return output;
        }

        function getID(){
            return Date.now()+Math.floor(Math.random()*100);
        }

    }
}(jQuery, document, window));