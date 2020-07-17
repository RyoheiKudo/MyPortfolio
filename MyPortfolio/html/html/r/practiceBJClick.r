#52枚から5枚のカードが選ばれる組み合わせ
TH <- choose(52,5)
#各手役の発生数
# ロイヤルストレートフラッシュ
RSF <- 4
# ストレートフラッシュ
#12345,23456,...,9TJQK
SF <-  9*4
# フォーオブアカインド
#4種類の同一のカード×それ以外のカード
FoaK <- 13*((13-1)*4)
# フルハウス
#3種類の同一のカード×それ以外の二種類の同一カード
FH <- choose(4,3) * 13 * choose(4,2) * 12
#フラッシュ
#13枚のカードからランダムに5枚×4種類-ストレートフラッシュ-ロイヤルストレートフラッシュ
F <- choose(13,5) * 4 - SF - RSF
# ストレート
#12345,23456,...,TJQKAのスートがバラバラ
S <- (4 ^ 5) * 10 - RSF - SF
# スリーオブアカインド
ToaK <- choose(4, 3) * 13 * (((13 - 1) * 4) * ((12 - 1) * 4) / 2)
# ツーペア
TP <- choose(4, 2) * 13 * choose(4,2) * 12 / 2 * (13 - 2) * 4
# ワンペア
OP <- choose(4, 2) * 13 * factorial(12) / factorial(12 - 3) * (4 ^ 3) / factorial(3)
# ノーハンド
NH <- TH - RSF - SF - FoaK - FH - F - S - ToaK - TP - OP