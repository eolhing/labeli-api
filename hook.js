var gith = require('gith').create();

var execFile = require('child_process').execFile;

gith({repo: 'eolhing/labeli-api'}).on('all', function(payload)
{
    if(payload.branch === 'master')
        execFile('./hook.sh');
});

module.exports = gith;