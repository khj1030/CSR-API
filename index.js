const fs = require('fs');
const request = require('request');

const clientId = 'x61gflw5ew';
const clientSecret = 'Cfqlmg6c9jx1wnhgJkyavjzCotbhH5llF9KeJJnS';

// language => 언어 코드 ( Kor, Jpn, Eng, Chn )
function stt(language, filePath) {
    const url = `https://naveropenapi.apigw.ntruss.com/recog/v1/stt?lang=${language}`;
    const requestConfig = {
        url: url,
        method: 'POST',
        headers: {
            'Content-Type': 'application/octet-stream',
            'X-NCP-APIGW-API-KEY-ID': clientId,
            'X-NCP-APIGW-API-KEY': clientSecret
        },
        body: fs.createReadStream(filePath)
    };

    request(requestConfig, (err, response, body) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log(response.statusCode);
        console.log(body);
    });
}

stt('Kor', 'test.mp3');