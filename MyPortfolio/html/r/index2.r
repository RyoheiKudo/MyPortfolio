#X~B(N,p)、P(X=x)

#gamma(n+1)でnの階乗(=n!)

temp <- function(n) {gamma(n+1)}
p <- ((temp (N))/(temp(N - x)*(temp(x))))*((p)^x)*((1-p)*(N-x))
p

#二項係数(n 個から k 個を選ぶ場合の数)．gamma(n+1) / ( gamma(k+1) × gamma(n-k+1) ) 
com <- choose(n, k)
p <- com * ((p)^x)*((1-p)*(N-x))
p

# x : ベクトル, prob : 成功の確率
p <- dbinom(x, n, prob)
p

#(a =< P =< b)の場合
p <- sum(dbinom(a:b, n, prob))
p