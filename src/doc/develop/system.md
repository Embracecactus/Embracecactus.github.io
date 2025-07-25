---
portfolio：: true
icon: pen-to-square
date: 2025-07-22T00:00:00.000Z
category:
  - linux 系统的制作
tag:
  - linux
  - uboot
  - 文件系统
title: 'linux 系统的制作'
createTime: 2025/07/21 22:06:03
permalink: /article/ptkp72uo/
---

# orangepi-pc

## 编译环境
```shell 
export PATH=/home/user/orangepi-pc/tools/gcc-arm-9.2-2019.12-x86_64-arm-none-linux-gnueabihf/bin/:$PATH
```
## uboot 编译
```shell 
    make ARCH=arm CROSS_COMPILE=arm-none-linux-gnueabihf-  orangepi_pc_plus_defconfig

    make ARCH=arm CROSS_COMPILE=arm-none-linux-gnueabihf-  -j32
```
## kernel 编译
```shell 
    sudo apt-get install liblz4-tool
    make ARCH=arm CROSS_COMPILE=arm-none-linux-gnueabihf-   orangepi_defconfig

    make ARCH=arm CROSS_COMPILE=arm-none-linux-gnueabihf-  -j32
```
## 制作 boot.scr
新建文件 boot.cmd
输入
load mmc 0:1 ${kernel_addr_r} zImage;
load mmc 0:1 ${fdt_addr_r} sun8i-h3-orangepi-pc-plus.dtb;
bootz ${kernel_addr_r} - ${fdt_addr_r}

```shell 

sudo apt install dos2unix
dos2unix boot.cmd #转换成unix
mkimage -C none -A arm -T script -d boot.cmd boot.scr
```
## 制作img
```shell 
./genimage/genimage --input input --output images --config root/genimage.cfg
```
setenv bootcmd 'fatload mmc 0 $kernel_addr_r zImage; fatload mmc 0 $fdt_addr_r sun8i-h3-orangepi-pc-plus.dtb; bootz $kernel_addr_r - $fdt_addr_r'

## uboot 


## 文件系统制作

```shell 
cp -r mkubuntu-2204/rootfs.ext4 mkimage/input/

```


## 进入系统
 配网


```shell 
root@localhost:~# history
    1  lsmod
    2  ifconfig  -a
    3  ifconfig  eth0 up
    4  idmesg | grep usb
    5  dmesg | grep usb
    6  vim /etc/network/interfaces
    7  ifconfig  eth0 up
    8  route
    9  ifconfig
   10  ifconfig eth0 192.168.0.1 netmask 255.255.255.0
   11  ifconfig
   12  ifconfig eth0 192.168.1.100 netmask 255.255.255.0
   13  ifconfig
   14  route add default gw 192.168.1.101
   15  route add default gw 192.168.1.101 eth0
   16  ping www.baidu.com
   17  vim /etc/resolv.conf
   18  systemctl restart networking
   19  ping www.baidu.com
   20  sync
   21  apt-get install alsa-utils
   22  aplay -l
   23  history


 vim /etc/network/interfaces
auto eth0 #不加这句重启会需要重新up eth0

auto eth0
iface eth0 inet static

address 192.168.1.100
netmask 255.255.255.0
gateway 192.168.1.101
dns-nameservers 192.168.1.101 8.8.8.8 #永久设置eth0的 dns

root@localhost:~
```




## 音频开发

```shell 
换源
sed -e 's|mirrors.dahuatech.com|mirrors.tuna.tsinghua.edu.cn|g' -i.bak /etc/apt/sources.list 
安装 RealtimeSTT 语音转文字
pip3 install  -i https://mirrors.tuna.tsinghua.edu.cn/pypi/web/simple  RealtimeSTT
调节音频设备
alsamixer
```

## swap 分区创建


```shell 
sudo dd if=/dev/zero of=/swapfile bs=1M count=1024

sudo chmod 600 /swapfile
mkswap /swapfile


开启 Swap
sudo swapon /swapfile
到这里，Swap 已经开启成功。我们再次使用 free -m 命令查看一下，你将看到类似下面的输出。

free -m
              total        used        free      shared  buff/cache   available
Mem:          15881       10110        1238        1535        4532        3641
Swap:          4978         998        3979


5设置系统启动时自动开启 Swap
使用编辑器编辑 /etc/fstab 文件，添加 Swap 自动开启的配置，这里推荐使用 gedit 进行编辑，也可以使用其他文本编辑工具，例如 nano。

# 编辑这个文件需要管理员权限
sudo gedit /etc/fstab

在 fstab 文件最后一行添加下面的内容

/swapfile none swap defaults 0 0
```

