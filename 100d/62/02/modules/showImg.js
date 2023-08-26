export function showImg(num) {
  tags.pid = num;

  const container = createContainer();

  getJson()
  .then(data => {
    console.log(data);

    for(const img of data) {
      appendImg("main-img",container, img);
    }
  });
}

async function getJson() {
  const params = new URLSearchParams(tags);
  const response = await fetch(`https://api.rule34.xxx/index.php?${params}`);
  const data = await response.json();

  return data;
}

export default showImg;
