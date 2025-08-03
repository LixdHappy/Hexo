const fs = require('fs');
const https = require('https');

// 显示 API Key 状态
console.log("读取到的 UPTIMEROBOT_API_KEY:", process.env.UPTIMEROBOT_API_KEY ? "存在" : "不存在");

// 获取 API Key
const apiKey = process.env.UPTIMEROBOT_API_KEY;
if (!apiKey) {
  console.error('❌ 未设置 UPTIMEROBOT_API_KEY');
  process.exit(1);
}

// 构造 POST 数据
const postData = JSON.stringify({
  api_key: apiKey,
  format: 'json'
});

// 请求配置
const options = {
  hostname: 'api.uptimerobot.com',
  path: '/v2/getMonitors',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

// 获取北京时间字符串
function getBeijingTimeString() {
  const now = new Date();
  const offset = 8 * 60; // 北京时间 UTC+8
  const local = new Date(now.getTime() + offset * 60 * 1000 - now.getTimezoneOffset() * 60 * 1000);

  const y = local.getFullYear();
  const m = String(local.getMonth() + 1).padStart(2, "0");
  const d = String(local.getDate()).padStart(2, "0");
  const h = String(local.getHours()).padStart(2, "0");
  const min = String(local.getMinutes()).padStart(2, "0");
  const s = String(local.getSeconds()).padStart(2, "0");

  return `${y}-${m}-${d} ${h}:${min}:${s}`;
}

// 发送请求
const req = https.request(options, res => {
  let rawData = '';
  res.on('data', chunk => { rawData += chunk; });
  res.on('end', () => {
    try {
      const parsed = JSON.parse(rawData);

      // ✅ 添加北京时间 updated_at 字段
      parsed.updated_at = getBeijingTimeString();

      // 写入文件
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
