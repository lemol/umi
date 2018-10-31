export default function(jsonStr) {
  return jsonStr
    .replace(/\"component\": (\"(.+?)\")/g, (global, m1, m2) => {
      return `"component": ${m2.replace(/\^/g, '"')}`;
    })
    .replace(/\"Routes\": (\"(.+?)\")/g, `"Routes": $2`)
    .replace(/\"\$(.+?)\": (\"(.+?)\")/g, (global, m1, m2, m3) => {
      return `"${m1}": ${m3.replace(/\^/g, '"')}`;
    })
    .replace(/\\r\\n/g, '\r\n')
    .replace(/\\n/g, '\r\n');
}
