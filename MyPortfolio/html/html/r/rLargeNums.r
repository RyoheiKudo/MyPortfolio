#繰り返し計算
# Y = f(x) = x^2 のときの、（1 <= x <= 10）
#print(f) で各計算を確認できる

for (i in 1:10){
  f <- i^2
  print(f)
}

#ただし、過去の計算が上書きされているため、必要な値を取り出すことができない(f = 100 で固定されている)

#要素0のベクトルをつくり、各回足すことで保存できる
resv <- numeric(10)
for (i in 1:10){
  f <- i^2
  print(f)
  resv[i] <- f
}
resv

#注意点 0から始めるとiが0番目、resv[0]を用意する必要があるため、1から始める方が簡単
#もし、0を計算するのであれば、別で計算すればいい
nloop <- 11 #0から10だから(要素数)
resv <- numeric(nloop)
#0:(nloop - 1)で0から10までとする
for (i in 0:(nloop - 1)) if (i == 0) {
  f0 <- 0^2
  print(f0)
  resv[1] <- f0
} else {
  f <- i^2
  print(f)
  resv[i+1] <- f
}
resv