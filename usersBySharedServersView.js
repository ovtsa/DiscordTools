/**
 * Creates a table of all users in a server that share another server with you
 * and shows which servers they are
 * 
 * @author: Nathan Jobe
 * @version: 11/18/2020
 */

(function () {
    let popup = window.open();
    if(!popup || !popup.document || !popup.document.write) 
        return console.error('Popup blocked! Please allow popups and try again.');
    popup.document.write(`
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset='utf-8'>
                <title>Users by Shared Servers</title>
                <base target="_blank">
                <style>
                    body {
                        background-color: #36393f;
                        color: #dcddde;
                        font-family: sans-serif;
                        font-size: 9pt;
                    }
                </style>
            </head>
            <body>
                <a>Table will be here</a>
            </body>
        </html>
    `);
})();

// END