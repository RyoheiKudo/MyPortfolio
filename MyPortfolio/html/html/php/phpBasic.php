<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>php基礎</title>
  <link rel="stylesheet" type="text/css" href="stylesheet.css">
</head>

<body>

  <?php
  // 'Hello, world!'をechoしてください
  echo "Hello, World!";

  // 7 * 2をechoしてください
  echo 7 * 2;

  // 7 * 2を文字列としてechoしてください
  echo "7 * 2";

  // 8 % 3をechoしてください
  echo 8 % 3;

  //この下に変数$fruitを書いていきましょう！
  $fruit = "apple";
  echo $fruit;

  //この下に変数$sumを書いていきましょう！
  $sum = 8 + 9;
  echo $sum;

  ?>

  <?php

  $x = 5;
  $y = 2;
  $a = 8;
  $b = 4;


  //この下で$xの計算をしていきましょう
  $x += 10;
  echo $x;

  //この下で$yの計算をしていきましょう
  $y *= 5;
  echo $y;

  //この下で$aの計算をしていきましょう 
  $a++;
  echo $a;

  //この下で$bの計算をしていきましょう
  $b--;
  echo $b;

  ?>

  <?php
  $name = 'にんじゃわんこ';
  // 'こんにちは！'という文字列と$nameを連結してechoしてください
  echo "こんにちは！" . $name;
  ?>

  <?php

  $x = 99 * 99;
  $y = 77 * 77;

  // ここにif文を書いていきましょう

  if ($x > 9800) {
    echo "変数xは9800より大きいです。";
  }

  if ($y > 6000) {
    echo "変数yは6000より大きいです。";
  }

  // $ageという変数に自分の年齢を代入してください
  $age = 20;
  if ($age >= 30) {
    echo "あなたは30歳以上です。";
  } else {
    echo "あなたは30歳未満です。";
  }

  $x = 1071;

  // 以下にif-elseif-else文を書いてください
  //$x % 3 == 0 3で割ったときの余りが0
  if ($x % 3 == 0 && $x % 7 == 0) {
    echo "xは3の倍数かつ7の。倍数です。";
  } elseif ($x % 3 == 0) {
    echo "xは3の倍数ですが7の倍数ではありません。";
  } elseif ($x % 7 == 0) {
    echo "xは7の倍数ですが3の倍数ではありません。";
  } else {
    echo "xは7の倍数でも3の倍数でもありません。";
  }

  //if(!($x % 3 == 0)) という条件式を作ると真が偽、偽が真となる

  ?>

  <?php

  // 変数$numを定義し、好きな数字を代入してください
  $num = 8;
  // 変数$remainderを定義し、変数$numを3で割った時の余りを代入してください
  $remainder = $num % 3;

  // switch文を用いてください
  switch ($remainder) {
    case 0:
      echo '大吉です。';
      break;
    case 1:
      echo '中吉です。';
      break;
    case 2:
      echo '小吉です。';
      break;
    default:
      echo '凶です。';
      break;
  }

  // この下に連想配列を作ってください
  $scores = array(
    "数学" => 70,
    "英語" => 90,
    "国語" => 80
  );

  $scores["国語"] += 5;
  echo $scores["国語"];


  // この下に配列を作ってください            
  $colors = array('赤', '青', '黄');

  echo $colors[0];

  $colors[] = '白';

  echo $colors[3];

  // この下に連想配列を作ってください
  $scores = array(
    "数学" => 70,
    "英語" => 90,
    "国語" => 80
  );


  $scores["国語"] += 5;
  echo $scores["国語"];
  ?>

  <?php

  // この下にfor文を書いてください
  for ($i = 51; $i <= 100; $i++) {
    echo $i . "<br>";
  };

  // 変数$iを定義してください
  $i = 2;

  // while文を書いてください
  while ($i <= 100) {
    echo $i . "<br>";
    $i += 2;
  };
  // この下にfor文を書いてください
  for ($i = 1; $i <= 1000; $i++) {
    if ($i >= 501) {
      break;
    };
    echo $i . "<br>";
  };
  // この下にfor文を書いてください
  for ($i = 1; $i <= 1000; $i++) {
    if ($i % 3 == 0) {
      continue;
      //3の倍数だけスキップ
    };
    echo $i . "<br>";
  };
  ?>


</body>

</html>