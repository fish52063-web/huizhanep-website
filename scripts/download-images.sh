#!/bin/bash
cd /Users/jiahaolu/huizhanep-website/public/images

# Logo
curl -sL -o logo.png "https://www.gogo-engineering.com/store_image/greenhz/L168143921671.png"

# Homepage hero & backgrounds
curl -sL -o hero-bg.jpg "https://pic03.eapple.com.tw/greenhz/1p1_bg.jpg"
curl -sL -o hero-pic.jpg "https://pic03.eapple.com.tw/greenhz/1p1_pic1.jpg"
curl -sL -o about-bg.jpg "https://pic03.eapple.com.tw/greenhz/1p3_bg.jpg"
curl -sL -o about-scroll.jpg "https://pic03.eapple.com.tw/greenhz/01about_scoll.jpg"
curl -sL -o cta-bg.jpg "https://pic03.eapple.com.tw/greenhz/1p4_bg.jpg"

# Homepage feature icons
curl -sL -o feature-1.png "https://pic03.eapple.com.tw/greenhz/1p1_a1.png"
curl -sL -o feature-2.png "https://pic03.eapple.com.tw/greenhz/1p1_a2.png"
curl -sL -o feature-3.png "https://pic03.eapple.com.tw/greenhz/1p1_a3.png"

# Homepage section backgrounds
curl -sL -o section-bg-1.png "https://pic03.eapple.com.tw/greenhz/1p2_bg.png"
curl -sL -o button-icon.png "https://pic03.eapple.com.tw/greenhz/1p2_b1.png"
curl -sL -o button-hover.png "https://pic03.eapple.com.tw/greenhz/1p2_b1h.png"
curl -sL -o service-icon.png "https://pic03.eapple.com.tw/greenhz/1p2_w1.png"
curl -sL -o brand-logo.png "https://pic03.eapple.com.tw/greenhz/1p3_logo.png"

# CTA icons
curl -sL -o cta-icon-main.png "https://pic03.eapple.com.tw/greenhz/1p4_o.png"
curl -sL -o cta-icon-1.png "https://pic03.eapple.com.tw/greenhz/1p4_a1.png"
curl -sL -o cta-icon-2.png "https://pic03.eapple.com.tw/greenhz/1p4_a2.png"
curl -sL -o cta-icon-3.png "https://pic03.eapple.com.tw/greenhz/1p4_a3.png"

# Service page images
curl -sL -o service-hero-1.jpg "https://pic03.eapple.com.tw/greenhz/2p1_pic1.jpg"
curl -sL -o service-hero-2.jpg "https://pic03.eapple.com.tw/greenhz/2p1_pic2.jpg"
curl -sL -o service-hero-icon.png "https://pic03.eapple.com.tw/greenhz/2p1_pic.png"
curl -sL -o service-bg.png "https://pic03.eapple.com.tw/greenhz/2p1_bg.png"
curl -sL -o service-section-bg.jpg "https://pic03.eapple.com.tw/greenhz/2p2_bg.jpg"
curl -sL -o service-bottom-bg.jpg "https://pic03.eapple.com.tw/greenhz/2p3_bg.jpg"

# 8 service pictures
curl -sL -o service-post-renovation.jpg "https://pic03.eapple.com.tw/greenhz/2p2_pic1.jpg"
curl -sL -o service-formaldehyde.jpg "https://pic03.eapple.com.tw/greenhz/2p2_pic2.jpg"
curl -sL -o service-bathroom.jpg "https://pic03.eapple.com.tw/greenhz/2p2_pic3.jpg"
curl -sL -o service-solar.jpg "https://pic03.eapple.com.tw/greenhz/2p2_pic4.jpg"
curl -sL -o service-concrete.jpg "https://pic03.eapple.com.tw/greenhz/2p2_pic5.jpg"
curl -sL -o service-stone.jpg "https://pic03.eapple.com.tw/greenhz/2p2_pic6.jpg"
curl -sL -o service-exterior.jpg "https://pic03.eapple.com.tw/greenhz/2p2_pic7.jpg"
curl -sL -o service-tile.jpg "https://pic03.eapple.com.tw/greenhz/2p2_pic8.jpg"

# Service flow icons
curl -sL -o flow-1.png "https://pic03.eapple.com.tw/greenhz/2p3_a1.png"
curl -sL -o flow-2.png "https://pic03.eapple.com.tw/greenhz/2p3_a2.png"
curl -sL -o flow-3.png "https://pic03.eapple.com.tw/greenhz/2p3_a3.png"
curl -sL -o flow-4.png "https://pic03.eapple.com.tw/greenhz/2p3_a4.png"

# Store banner images
curl -sL -o banner-1.jpg "https://www.gogo-engineering.com/store_image/greenhz/A1168197662428.jpg"
curl -sL -o banner-2.jpg "https://www.gogo-engineering.com/store_image/greenhz/B2168197662428.jpg"

# Portfolio / Case study images
mkdir -p cases
curl -sL -o cases/sanmin-house.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1702955376168.jpg"
curl -sL -o cases/r5-new-century.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1702955476641.jpg"
curl -sL -o cases/chiayi-cleaning.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1702955524258.jpg"
curl -sL -o cases/baida-celebrity.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1702955620338.jpg"
curl -sL -o cases/king-palace.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1702955793944.jpg"
curl -sL -o cases/pingtung-neipu.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1702956041028.jpg"
curl -sL -o cases/office-cleaning.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1702956594402.jpg"
curl -sL -o cases/qingchuan.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1702956692291.jpg"
curl -sL -o cases/senyuan.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1702956821163.jpg"
curl -sL -o cases/nanzi-community.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1702956900668.jpg"
curl -sL -o cases/pingtung-villa.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1683535930222.jpg"

# Portfolio detail images (exterior wall & tile grout projects)
curl -sL -o cases/detail-01.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1683536853392.jpg"
curl -sL -o cases/detail-02.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1683536852851.jpg"
curl -sL -o cases/detail-03.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1683536827128.jpg"
curl -sL -o cases/detail-04.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1683536826637.jpg"
curl -sL -o cases/detail-05.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1683536826136.jpg"
curl -sL -o cases/detail-06.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1683536825635.jpg"
curl -sL -o cases/detail-07.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1683536825134.jpg"
curl -sL -o cases/detail-08.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1683536824633.jpg"
curl -sL -o cases/detail-09.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1683536824142.jpg"
curl -sL -o cases/detail-10.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1683536823591.jpg"
curl -sL -o cases/detail-11.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1683536804218.jpg"
curl -sL -o cases/detail-12.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1683536803707.jpg"
curl -sL -o cases/detail-13.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1683536803206.jpg"
curl -sL -o cases/detail-14.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1683536802695.jpg"
curl -sL -o cases/detail-15.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1683536802194.jpg"
curl -sL -o cases/detail-16.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1683536801693.jpg"
curl -sL -o cases/detail-17.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1683536801162.jpg"
curl -sL -o cases/detail-18.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1683536800611.jpg"
curl -sL -o cases/detail-19.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1683170100461.jpg"
curl -sL -o cases/detail-20.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1683170087381.jpg"
curl -sL -o cases/detail-21.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1681971071921.jpg"

# More portfolio images
curl -sL -o cases/detail-22.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1683170119821.jpg"
curl -sL -o cases/detail-23.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1683185821131.jpg"
curl -sL -o cases/detail-24.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1683537228044.jpg"
curl -sL -o cases/detail-25.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1683537227523.jpg"
curl -sL -o cases/detail-26.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1683537227012.jpg"
curl -sL -o cases/detail-27.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1683537226401.jpg"
curl -sL -o cases/detail-28.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1683537656776.jpg"
curl -sL -o cases/detail-29.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1683537656295.jpg"
curl -sL -o cases/detail-30.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1683537655814.jpg"
curl -sL -o cases/detail-31.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1683537655323.jpg"
curl -sL -o cases/detail-32.jpg "https://www.gogo-engineering.com/store_image/greenhz/P1683537654852.jpg"

# Social icons
curl -sL -o icon-fb.png "https://pic03.eapple.com.tw/greenhz/ri_fb.png"
curl -sL -o icon-phone.png "https://pic03.eapple.com.tw/greenhz/ri_phone.png"
curl -sL -o icon-line.png "https://pic03.eapple.com.tw/greenhz/ri_line.png"

echo "Download complete!"
ls -la *.{jpg,png} 2>/dev/null | wc -l
echo "images in root"
ls -la cases/*.jpg 2>/dev/null | wc -l
echo "images in cases/"
