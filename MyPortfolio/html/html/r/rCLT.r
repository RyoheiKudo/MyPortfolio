setwd() # set working directory #
getwd() # current working directory #

options(digits=10)

#同じ確率分布にしたいときは、下記から
nseed <- 20180926
set.seed(nseed)


####### 大数の法則のシュミレーション #########

n <- 2000  # i.i.d. 確率変数の数 #

k <- 5000  # 繰り返し値 #

p <- 0.2   # 成功確率 E(Xi) = mu = であることに注意# 

eps <- 0.05 # 誤差 #

resultvec <- numeric(k) # 結果をストアするベクトル 各k において| Xbar - p | > epsを満たすのであれば1、満たさなければo #
Xbarv <- numeric(k) # Xbarのヒストグラムを表示させるためのベクトル#


for ( i in 1:k ) {

Xs <- rbinom(n,1,p) # 成功確率pのベルヌーイ分布に従う確率変数n個#

Xbar <- mean(Xs)
Xbarv[i] <- Xbar  

resultvec[i] <- ifelse( ( abs(Xbar-p)<=eps ), 1, 0) 

}

mean(resultvec) # | Xbar - p | > eps を満たすkのnに占める割合 #

range <- seq(0,0.4,0.02)
hist(Xbarv,breaks=range)

####### 中心極限定理 #########

n <- 100   # i.i.d. 確率変数の数 #

k <- 10000  # 繰り返し数#

p <- 0.2   # 成功確率 E(Xi) = mu = p であることに注意 # 

Zv      <- numeric(k) # z1, z2, ..., zk をストアするベクトル

mu <- p   # 母平均
sigma2 <- p*(1-p) # 毋分散

for ( i in 1:k ) {

Xs <- rbinom(n,1,p) # 成功確率pのベルヌーイ分布に従う確率変数n個#

Xbar <- mean(Xs)

zi <- sqrt(n) * ( Xbar - mu ) / sqrt(sigma2) # zi #

Zv[i] <- zi 

}

range <- seq(-5,5,0.1)
hist(Zv,breaks=range)

