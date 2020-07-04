// 初期画面起動時
// 初期変数定義
var turn = 0 // ターン 1:黒、-1:白
// 盤面の状況を二次元配列で定義
var ban_ar = new Array(8)
for (var x = 0; x < ban_ar.length; x++) {
  ban_ar[x] = new Array(8)
}

// HTMLで定義したテーブルを取得
var ban = document.getElementById('field')

// 取得したテーブルに盤面生成
ban_new()

// 盤面を初期化する
ban_init()

// クリックした時に実行されるイベント
for (var x = 0; x < 8; x++) {
  for (var y = 0; y < 8; y++) {
    var select_cell = ban.rows[x].cells[y];
    select_cell.onclick = function () {
      // クリックされた場所に石がない場合は、その場所にターン側の石が置けるかチェックし
      // 置ける場合は、盤面を更新。相手のターンへ移る
      if (ban_ar[this.parentNode.rowIndex][this.cellIndex] == 0) {
        if (check_reverse(this.parentNode.rowIndex, this.cellIndex) > 0) {
          ban_set()
          cheng_turn()
        }
      }
    }
  }
}

// テーブルで盤面を作成する処理
function ban_new() {
  for (var x = 0; x < 8; x++) {
    var tr = document.createElement("tr")
    ban.appendChild(tr)
    for (var y = 0; y < 8; y++) {
      var td = document.createElement("td")
      tr.appendChild(td)
    }
  }
};

// 盤面を初期化する処理
function ban_init() {
  // 全てをクリア
  for (var x = 0; x < 8; x++) {
    for (var y = 0; y < 8; y++) {
      ban_ar[x][y] = 0
    }
  }
  // 初期状態では、真ん中に白黒を配列
  ban_ar[3][3] = -1
  ban_ar[4][3] = 1
  ban_ar[3][4] = 1
  ban_ar[4][4] = -1
  ban_set()

  // ターンも初期化
  turn = 0
  cheng_turn()
};

// 盤面状況(配列)を実際の盤面へ反映させる処理
function ban_set() {
  var stone = ""
  for (var x = 0; x < 8; x++) {
    for (var y = 0; y < 8; y++) {
      switch (ban_ar[x][y]) {
        case 0:
          stone = ""
          break;
        case -1:
          stone = "○"
          break;
        case 1:
          stone = "●"
          break;
      }
      ban.rows[x].cells[y].innerText = stone;
    }
  }
  return true
};

// ターンを変更する処理
function cheng_turn() {
  var tarn_msg = document.getElementById('view_tarn')
  if (turn == 0) {
    // 0は最初として、メッセージのみで処理終了
    turn = 1
    tarn_msg.textContent = "黒の番です。"
    return
  }
  // ターンを変更
  turn = turn * -1
  // ターンを交代して、置けるところがあるか確認する
  // 現状の配置をバックアップ
  var ban_bak = new Array(8)
  var check_reverse_cnt = 0
  for (var i = 0; i < ban_ar.length; i++) {
    ban_bak[i] = new Array(8)
  }
  for (var x = 0; x < 8; x++) {
    for (var y = 0; y < 8; y++) {
      ban_bak[x][y] = ban_ar[x][y]
    }
  }

  // 左端からすべてのマスの確認を行う
  var white_cnt = 0
  var black_cnt = 0
  for (var x = 0; x < 8; x++) {
    for (var y = 0; y < 8; y++) {
      // 空白マスのみおけるのでチェック
      // それ以外は石の数を加算
      switch (ban_ar[x][y]) {
        case 0:
          check_reverse_cnt = check_reverse_cnt + check_reverse(x, y)
          // バックアップから元に戻す
          for (var i = 0; i < 8; i++) {
            for (var ii = 0; ii < 8; ii++) {
              ban_ar[i][ii] = ban_bak[i][ii]
            }
          }
          break;
        case -1:
          white_cnt++
          break
        case 1:
          black_cnt++
          break
      }
    }
  }
  // 白と黒の合計が8*8=64の場合は処理終了
  if (white_cnt + black_cnt == 64 || white_cnt == 0 || black_cnt == 0) {
    if (white_cnt == black_cnt) {
      alert("勝負は引分です。")
    } else if (white_cnt > black_cnt) {
      alert("勝負は、黒：" + black_cnt + "対、白：" + white_cnt + "で、白の勝ちです。")
    } else {
      alert("勝負は、黒：" + black_cnt + "対、白：" + white_cnt + "で、黒の勝ちです。")
    }

  } else {
    // 置ける場所がない場合は、ターンを相手に戻す
    if (check_reverse_cnt == 0) {
      switch (turn) {
        case -1:
          alert("白の置ける場所がありません。続けて黒の番となります。")
          turn = turn * -1
          break;
        case 1:
          alert("黒の置ける場所がありません。続けて白の番となります。")
          turn = turn * -1
          break;
      }
    }
  }

  // ターンを表示する
  switch (turn) {
    case -1:
      tarn_msg.textContent = "白の番です。";
      break;
    case 1:
      tarn_msg.textContent = "黒の番です。";
      break;
  }
};

// 指定したセルにターン側の石が置けるか確認
function check_reverse(row_index, cell_indx) {
  var reverse_cnt = 0
  // 各方向へリーバース出来るか確認
  reverse_cnt = reverse_cnt + line_reverse(row_index, cell_indx, -1, 0) //上
  reverse_cnt = reverse_cnt + line_reverse(row_index, cell_indx, -1, 1) //右上
  reverse_cnt = reverse_cnt + line_reverse(row_index, cell_indx, 0, 1) //右
  reverse_cnt = reverse_cnt + line_reverse(row_index, cell_indx, 1, 1) //右下
  reverse_cnt = reverse_cnt + line_reverse(row_index, cell_indx, 1, 0) //下
  reverse_cnt = reverse_cnt + line_reverse(row_index, cell_indx, 1, -1) //左下
  reverse_cnt = reverse_cnt + line_reverse(row_index, cell_indx, 0, -1) //左
  reverse_cnt = reverse_cnt + line_reverse(row_index, cell_indx, -1, -1) //左上

  return reverse_cnt
}

// 指定したセルから指定した方向へreverseを行う
function line_reverse(row_index, cell_indx, add_x, add_y) {
  // 最初に今の盤状況を退避する
  var ban_bak = new Array(8)
  for (var i = 0; i < ban_ar.length; i++) {
    ban_bak[i] = new Array(8)
  }
  for (var x = 0; x < 8; x++) {
    for (var y = 0; y < 8; y++) {
      ban_bak[x][y] = ban_ar[x][y]
    }
  }
  var line_reverse_cnt = 0 // 裏返した数
  var turn_flg = 0 // 自分の色の石があるのか
  var xx = row_index // 指定したセルの位置(行)
  var yy = cell_indx // 指定したセルの位置(列)
  // 指定したセルから指定された方向へ移動し
  // 完了条件になるまで石を裏返す
  while (true) {
    xx = xx + add_x
    yy = yy + add_y
    // 盤の端に到達したら抜ける
    if (xx < 0 || xx > 7 || yy < 0 || yy > 7) {
      break;
    }
    // 移動先のセルに石がなかったら抜ける
    if (ban_ar[xx][yy] == 0) {
      break;
    }
    // 移動先のセルが自分自身であれば、石があった事を判定し抜ける
    if (ban_ar[xx][yy] == turn) {
      turn_flg = 1
      break;
    }
    // 上記以外は相手の石で有るので、裏返して裏返した件数を加算
    ban_ar[xx][yy] = ban_ar[xx][yy] * -1
    line_reverse_cnt++
  }
  // 裏返しを行ったが、移動先に自分の石がなかった場合は元に戻す
  if (line_reverse_cnt > 0) {
    if (turn_flg == 0) {
      for (var i = 0; i < 8; i++) {
        for (var ii = 0; ii < 8; ii++) {
          ban_ar[i][ii] = ban_bak[i][ii]
          line_reverse_cnt = 0
        }
      }
    } else {
      // ちゃんと裏返しが出来たら、置いた所に自分の石を置く
      ban_ar[row_index][cell_indx] = turn
    }
  }

  // 最後に裏返しを行った件数を戻す
  return line_reverse_cnt
}

// オセロルール
// 盤は８×８マスを利用する
// 初期状態で真ん中の４マスに白黒石を交互に配置する
// 白黒の順番で石を置いていく
// 新たに置いた自身の石と事前に置いてある自身の石の直線上に置いてある
// 相手の石は自身の石にけることが出来る
// 石を置ける場所は、下記の条件を満たしている
// 置くマスに他の石がない事
// 置くマスの上下左右、斜め１マスの場所に相手の石がある事
// 置いた石、相手の石があった方向の延長上に自身の石がある事
// 石を置ける条件を満たせない場合は、相手の番に代わる
// すべてのマスに石が置かれるか、どちらかの石が0個になった時点でゲーム終了
// ゲーム終了時点で石の数が多い方が勝ちとなる

// 書くルール
// なるべく簡単な実装とする
// ファイルの分割は行わない
// 盤のマスのクリックで石を配置する
// 画面には下記を配置する
// ８×８マスの盤
// ゲームを初期化するボタン
// どちらのターンかを表示するテキスト
// ゲームは人たい人とし、AI実装は行わない
// 石の配置が行えない場合は、それを知らせるメッセージを表示する
// ゲーム終了時、どちらが勝ったかを表示する
// 今回は、画像は使わずに実装する。

// JavaScriptで作成するのに幾つかのポイントを挙げておきます。



// 初期画面の表示
// 今回はCSSとHTML、JavaScriptの組み合わせを利用してみました。
// HTMLでは、テーブルの定義とIDのみ、CSSで基本的なフォーマット、JavaScriptで、８×８のテーブル要素を作成しています。

// HTML、CSSは特に説明はいたしません。CSSの各要素は検索などで調べて下さい。

// JavaScriptでは、最初に”var ban = document.getElementById(‘field’)”で、HTMLで定義したテーブルをbanとして取得しています。
// 続いて、”ban_new()”関数内で、テーブルの行列をbanに追加していきます。



// クリックを認識させる処理
// “var select_cell = ban.rows[x].cells[y];”の部分で、テーブルから各セルを取得し”select_cell.onclick = function()”の”onclick”でイベントをハンドリングしています。

// 実際の動きは、その後に記載さいされている部分で実現します。



// 石が置けるかのチェック
// 実際の盤上をの代わりに”ban_ar”の二次元配列で石の配列を管理します。
// “function line_reverse (row_index,cell_indx,add_x,add_y)”で、要素を移動していきながら石の配列を確認し、適切な場所かを判断しています。

// また、この処理の中では”ban_ar”の要素を変更しながら確認を行っているため、最終的に置けない場所と判断した際に元に戻すことを行っています。
// その際に、配列のコピーにはfor分で回しながらすべての要素をコピーしています。

// ban_ar = ban_bakでは、浅いコピーになり上手く行かないので、注意して下さい。



// 全体的な流れ
// 以下にオセロゲームの大まかな流れを説明いたします。

// HTMLに定義されたid=fieldのテーブル属性に８×８のテーブルを作成します。
// テーブルの各セルにクリック時のアクションを追加
// クリック時にcheck_reverse関数を呼び出し、クリックされたセルに石が置けるかを判断します。
// 置ける場合は、ban_set関数でテーブルを更新します。
// 最後にcheng_turn関数で相手のターンへ変更します。
// クリックされるたびに③～⑤を繰り返します。