const fs = require('fs');
const https = require('https');

const apiKey = process.env.UPTIMEROBOT_API_KEY;
if (!apiKey) {
  console.error('❌ 未设置 UPTIMEROBOT_API_KEY');
  process.exit(1);
}

const postData = JSON.stringify({
  api_key: apiKey,
  format: 'json'
});

const options = {
  hostname: 'api.uptimerobot.com',
  path: '/v2/getMonitors',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = https.request(options, res => {
  let rawData = '';
  res.on('data', chunk => { rawData += chunk; });
  res.on('end', () => {
    try {
      const parsed = JSON.parse(rawData);
      const outputPath = './source';
      if (!fs.existsSync(outputPath)) fs.mkdirSync(outputPath, { recursive: true });
      fs.writeFileSync(`${outputPath}/status.json`, JSON.stringify(parsed, null, 2));
      console.log('✅ 已生成 status.json 至 source/');
    } catch (e) {
      console.error('❌ 解析响应失败:', e.message);
    }
  });
});

req.on('error', e => {
  console.error('❌ 请求失败:', e.message);
});

req.write(postData);
req.end();
