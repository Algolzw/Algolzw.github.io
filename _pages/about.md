---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I received my Master of Engineering degree from the School of Computer Science, Chengdu University of Information Technology. And I obtained the B.Eng. degree in Transportation Engineering from Hebei University of Technology. Currently, I am a research assistant at Megvii Technology Ltd., China. 

My research interest generally includes **Computer Vision**, **Machine Learning**, and **Reinforcement Learning**. And my recent works mainly focus on: image super-resolution and image registration via reinforcement learning. I have published 2 SCI journals and 3 papers <a href='https://scholar.google.com/citations?user=3WQTKocAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a> on the top international AI conferences (CVPR, AAAI, IJCAI).


# 🔥 News
- *2022.03*: &nbsp;🎉🎉 One paper accepted by IEEE Conference on Computer Vision and Pattern Recognition (CVPR 2022). 
- *2021.12*: &nbsp;🎉🎉 One paper accepted by AAAI Conference on Artificial Intelligence (AAAI 2022). 
 

# 📝 Publications 

<!-- <div class='paper-box'><div class='paper-box-image'><img src='images/500x300.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

[Deep Residual Learning for Image Recognition](https://openaccess.thecvf.com/content_cvpr_2016/papers/He_Deep_Residual_Learning_CVPR_2016_paper.pdf), **Kaiming He**, Xiangyu Zhang, Shaoqing Ren, Jian Sun

**CVPR, 2022** \| [**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
</div>
</div> -->

<!-- ###################################################### -->

<div class='paper-box'><div class='paper-box-image'><img src='images/DCLS.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**Deep Constrained Least Squares for Blind Image Super-Resolution**  
<u>Ziwei Luo</u>, Haibin Huang, Lei Yu, Youwei Li, Haoqiang Fan, Shuaicheng Liu

**<font color = "#224B8D">CVPR 2022</font>** \| [Paper](https://arxiv.org/pdf/2202.07508) \| [code](https://github.com/Algolzw/DCLS) <strong><span class='show_paper_citations' data='3WQTKocAAAAJ:WF5omc3nYNoC'></span></strong>
- This work reformulates the degradation model such that the kernel estimation can be transferred into the low resolution space. 
- A deep constrained least square filtering module is applied in the feature space to generate clean features based on the estimated kernel.
- State-of-the-art.
</div>
</div>

<!-- ###################################################### -->

<div class='paper-box'><div class='paper-box-image'><img src='images/SPAC.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**Stochastic Planner-Actor-Critic for Unsupervised Deformable Image Registration**  
<u>Ziwei Luo</u>\*, Jing Hu\*, Xin Wang, Shu Hu, Bin Kong, Youbing Yin, Qi Song, Xi Wu, Siwei Lyu

**<font color = "#224B8D">AAAI 2022</font>** \| [Paper](https://arxiv.org/pdf/2112.07415) <strong><span class='show_paper_citations' data='3WQTKocAAAAJ:eQOLeE2rZwMC'></span></strong>
- It is the first work that performs deformable image registration via deep reinforcement learning.
- We introduce a latent vector that can represent the high-dimensional action and be optimized in an Actor-Critic RL framework.
</div>
</div>

<!-- ###################################################### -->


<div class='paper-box'><div class='paper-box-image'><img src='images/EBSR.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**EBSR: Feature enhanced burst super-resolution with deformable alignment**  
<u>Ziwei Luo</u>, Lei Yu, Xuan Mo, Youwei Li, Lanpeng Jia, Haoqiang Fan, Jian Sun, Shuaicheng Liu

**<font color = "#224B8D">CVPRW 2021</font>** \| [Paper](https://openaccess.thecvf.com/content/CVPR2021W/NTIRE/papers/Luo_EBSR_Feature_Enhanced_Burst_Super-Resolution_With_Deformable_Alignment_CVPRW_2021_paper.pdf) \| [code](https://github.com/Algolzw/EBSR) <strong><span class='show_paper_citations' data='3WQTKocAAAAJ:2osOgNQ5qMEC'></span></strong>
- NTIRE Burst Super-Resolution Challenge 2021 **Champion** (Real track)
</div>
</div>

<!-- ###################################################### -->

- **Stochastic Actor-Executor-Critic for Image-to-Image Translation**, <u>Ziwei Luo</u>\*, Jing Hu\*, Xin Wang, Siwei Lyu, Bin Kong, Youbing Yin, Qi Song, Xi Wu, ***<font color = "#224B8D">IJCAI 2021</font>*** \| [[Paper](https://arxiv.org/pdf/2112.07403)]

- **End-to-end multimodal image registration via reinforcement learning**, Jing Hu, <u>Ziwei Luo</u>, Xin Wang, Shanhui Sun, Youbing Yin, Kunlin Cao, Qi Song, Siwei Lyu, Xi Wu, ***<font color = "#224B8D">Medical Image Analysis 2021</font>*** \| [[Paper](https://www.sciencedirect.com/science/article/pii/S1361841520302425)]

- **A Spatiotemporal Agent for Robust Multimodal Registration**, <u>Ziwei Luo</u>, Xin Wang, Xi Wu, Youbing Yin, Kunlin Cao, Qi Song, Jing Hu, ***<font color = "#224B8D">IEEE ACCESS 2020</font>*** \| [[Paper](https://ieeexplore.ieee.org/iel7/6287639/8948470/09075173.pdf)]

# 🎖 Honors and Awards
- *2021* **Champion** in NTIRE Burst Super-Resolution Challenge (Real track)
- *2021* **Outstanding Graduates**, Chengdu University of Information Technology 
- *2021* **Award of Scientific Thesis Excellence**, Chengdu University of Information Technology 
- *2020* **The First Prize Scholarship**, Chengdu University of Information Technology
- *2020* **National Scholarship**, China


# 📖 Educations
- *2018.09 - 2021.06*, Master, Chengdu University of Information Technology. 
- *2011.09 - 2015.06*, Undergraduate, Hebei University of Technology.

<!-- # 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/) -->

# 💬 Teaching Experience
- *2018.10 - 2018-12*, Teaching Assistant. Assisted Dr. Shanglian Peng in the course Foundations of Computer Science, at Chengdu University of Information Technology


# 💻 Internships
- *2021.11 - 2022.06*, [Megvii Technology](https://megvii.com/), China.