const main = async () => {
  const key = encodeURIComponent('アイスクリーム');
  console.log(key)
  const res = await fetch(
    `https://cloudflare-kv.t-watanabe423.workers.dev/get-value?key=${key}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify({
      //   key: '雑誌',
      //   value: JSON.stringify([{"SKU_name":"段位認定中級ナンプレ２５２題 （２０２４年３月号）","JAN_code":"4910060490344","category_name":"雑誌","price":500.0,"count":1.0},{"SKU_name":"段位認定初級ナンプレ252題 2024年 4月号","JAN_code":"4910060810449","category_name":"雑誌","price":500.0,"count":1.0},{"SKU_name":"少年ジャンプ","JAN_code":"4910299320344","category_name":"雑誌","price":264.0,"count":1.0},{"SKU_name":"実力番付ナンプレ250問 2024年 4月号","JAN_code":"4910045930445","category_name":"雑誌","price":473.0,"count":1.0},{"SKU_name":"文字の大きなクロスワード　2024年3月号","JAN_code":"4910187430346","category_name":"雑誌","price":500.0,"count":1.0},{"SKU_name":"ひらめく！クロスワード　2024年3月号","JAN_code":"4910077650342","category_name":"雑誌","price":564.0,"count":1.0},{"SKU_name":"ひらめく！クロスワード　2024年3月号","JAN_code":"4910064470342","category_name":"雑誌","price":500.0,"count":1.0},{"SKU_name":"ナンクロメイト","JAN_code":"4910168010345","category_name":"雑誌","price":454.0,"count":1.0},{"SKU_name":"とってもつなげるてんつなぎフレンズ2024年3月号","JAN_code":"4910166690341","category_name":"雑誌","price":664.0,"count":1.0},{"SKU_name":"スケルトンメイト","JAN_code":"4910154110349","category_name":"雑誌","price":518.0,"count":1.0},{"SKU_name":"数字の大きな難問ナンプレ2024年3月号","JAN_code":"4910152070348","category_name":"雑誌","price":491.0,"count":1.0},{"SKU_name":"クロスワードパクロス増刊　2024年4月号","JAN_code":"4910132200444","category_name":"雑誌","price":591.0,"count":1},{"SKU_name":"クロスワード On! (オン) 2024年 4月号","JAN_code":"4910133490448","category_name":"雑誌","price":564.0,"count":1}])
      // })
    }
  );
  const data = await res.json();
  console.log(data);
}

main()