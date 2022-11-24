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

I am a PhD student in Machine Learning supervised by [Thomas Schön](https://user.it.uu.se/~thosc112/) and co-supervised by [Jens Sjölund](https://jsjol.github.io/) at [Uppsala University](https://www.uu.se/en). My research interest generally includes **Machine Learning**, **Computer Vision**, and **Reinforcement Learning**. And my recent works mainly focus on Probabilistic deep learning with application in computer vision.

I received my Master of Engineering degree from the School of Computer Science, Chengdu University of Information Technology, advised by [Jing Hu](https://jsjxy.cuit.edu.cn/info/1063/1806.htm). During the school, I participated in the project of performing image registration via reinforcement learning, under the advising of [Xin Wang](https://scholar.google.com/citations?user=jUWx8fcAAAAJ) and [Siwei Lyu](https://cse.buffalo.edu/~siweilyu/) from the University at Buffalo, SUNY. Before that, I obtained the Bachelor degree from Hebei University of Technology. I had been a research assistant at Megvii Technology Ltd., China, working with [Shuaicheng Liu](http://www.liushuaicheng.org/).




# 🔥 News
- *2022.08*: &nbsp;🎉🎉 I am invited to be a Journal Reviewer for IEEE Transactions on Image Processing (TIP).
- *2022.04*: &nbsp;🎉🎉 We win 1st place in the NTIRE 2022 Burst Super-Resolution Challenge (Real-World Track). 
- *2022.03*: &nbsp;🎉🎉 One paper is accepted by IEEE Conference on Computer Vision and Pattern Recognition (CVPR 2022). 
- *2021.12*: &nbsp;🎉🎉 One paper is accepted by AAAI Conference on Artificial Intelligence (AAAI 2022). 
 

# 📝 Publications 

<!-- <div class='paper-box'><div class='paper-box-image'><img src='images/500x300.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

[Deep Residual Learning for Image Recognition](https://openaccess.thecvf.com/content_cvpr_2016/papers/He_Deep_Residual_Learning_CVPR_2016_paper.pdf), **Kaiming He**, Xiangyu Zhang, Shaoqing Ren, Jian Sun

**CVPR, 2022** \| [**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
</div>
</div> -->

<!-- ###################################################### -->

<div class='paper-box'><div class='paper-box-image'><img src='images/BSRT.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**BSRT: Improving Burst Super-Resolution with Swin Transformer and Flow-Guided Deformable Alignment**  
<u>Ziwei Luo</u>, Youwei Li, Shen Cheng, Lei Yu, Qi Wu, Zhihong Wen, Haoqiang Fan, Jian Sun, Shuaicheng Liu

**<font color = "#224B8D">CVPRW 2022</font>** \| [Paper](https://arxiv.org/abs/2204.08332) \| [Code](https://github.com/Algolzw/BSRT) <strong><span class='show_paper_citations' data='3WQTKocAAAAJ:WF5omc3nYNoC'></span></strong>
- <span style="color:red">**Champion**</span> of the NTIRE Burst Super-Resolution Challenge 2022 in Real track.
</div>
</div>

<!-- ###################################################### -->

<div class='paper-box'><div class='paper-box-image'><img src='images/DCLS.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**Deep Constrained Least Squares for Blind Image Super-Resolution**  
<u>Ziwei Luo</u>, Haibin Huang, Lei Yu, Youwei Li, Haoqiang Fan, Shuaicheng Liu

**<font color = "#224B8D">CVPR 2022</font>** \| [Paper](https://arxiv.org/pdf/2202.07508) \| [Code](https://github.com/megvii-research/DCLS-SR) <strong><span class='show_paper_citations' data='3WQTKocAAAAJ:WF5omc3nYNoC'></span></strong>
- This work proposes to disentangle deblurring and upsampling in blind super-resolution, and provides a theoretical guidance to make use of the kernel.
<!-- - A deep constrained least square filtering module is applied in the feature space to generate clean features based on the estimated kernel. -->
</div>
</div>

<!-- ###################################################### -->

<div class='paper-box'><div class='paper-box-image'><img src='images/SPAC.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**Stochastic Planner-Actor-Critic for Unsupervised Deformable Image Registration**  
<u>Ziwei Luo</u>\*, Jing Hu\*, Xin Wang, Shu Hu, Bin Kong, Youbing Yin, Qi Song, Xi Wu, Siwei Lyu

**<font color = "#224B8D">AAAI 2022</font>** \| [Paper](https://arxiv.org/pdf/2112.07415) \| [Code](https://github.com/Algolzw/SPAC-Deformable-Registration) <strong><span class='show_paper_citations' data='3WQTKocAAAAJ:eQOLeE2rZwMC'></span></strong>
- It is the first work that performs deformable image registration via high-dimensional action deep reinforcement learning.
<!-- - We introduce a latent vector that can represent the high-dimensional action and be optimized in an Actor-Critic RL framework. -->
</div>
</div>

<!-- ###################################################### -->


<div class='paper-box'><div class='paper-box-image'><img src='images/EBSR.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**EBSR: Feature enhanced burst super-resolution with deformable alignment**  
<u>Ziwei Luo</u>, Lei Yu, Xuan Mo, Youwei Li, Lanpeng Jia, Haoqiang Fan, Jian Sun, Shuaicheng Liu

**<font color = "#224B8D">CVPRW 2021</font>** \| [Paper](https://openaccess.thecvf.com/content/CVPR2021W/NTIRE/papers/Luo_EBSR_Feature_Enhanced_Burst_Super-Resolution_With_Deformable_Alignment_CVPRW_2021_paper.pdf) \| [Code](https://github.com/Algolzw/EBSR) <strong><span class='show_paper_citations' data='3WQTKocAAAAJ:2osOgNQ5qMEC'></span></strong>
- <span style="color:red">**Champion**</span> of the NTIRE Burst Super-Resolution Challenge 2021 in Real track
</div>
</div>

<!-- ###################################################### -->

- **Stochastic Actor-Executor-Critic for Image-to-Image Translation**  
<u>Ziwei Luo</u>\*, Jing Hu\*, Xin Wang, Siwei Lyu, Bin Kong, Youbing Yin, Qi Song, Xi Wu  
***<font color = "#224B8D">IJCAI 2021</font>*** \| [[Paper](https://arxiv.org/pdf/2112.07403)]

- **End-to-end multimodal image registration via reinforcement learning**  
Jing Hu, <u>Ziwei Luo</u>, Xin Wang, Shanhui Sun, Youbing Yin, Kunlin Cao, Qi Song, Siwei Lyu, Xi Wu  
***<font color = "#224B8D">Medical Image Analysis 2021</font>*** \| [[Paper](https://www.sciencedirect.com/science/article/pii/S1361841520302425)]

- **A Spatiotemporal Agent for Robust Multimodal Registration**  
<u>Ziwei Luo</u>, Xin Wang, Xi Wu, Youbing Yin, Kunlin Cao, Qi Song, Jing Hu  
***<font color = "#224B8D">IEEE ACCESS 2020</font>*** \| [[Paper](https://ieeexplore.ieee.org/iel7/6287639/8948470/09075173.pdf)]

# 🎖 Honors and Awards
- *2021, 2022* **Champion** in NTIRE Burst Super-Resolution Challenge (Real track)
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

# 💬 Teaching 
- *2018.10 - 2018-12*, Teaching Assistant in the course *Foundations of Computer Science*, at Chengdu University of Information Technology

# 📫 Academic Services
### Journal Reviewer 
- IEEE Transactions on Image Processing (TIP)

### Conference Reviewer
- International Conference on Intelligent Robots and Systems (IROS) 2022

# 💻 Experience
- *2022.09 - present*, PhD student, at [Uppsala university](https://www.uu.se/en), Sweden.
- *2021.07 - 2022.07*, Research Assistant, at [Megvii Technology](https://megvii.com/), China.
- *2020.11 - 2021.06*, Research Intern, at [Megvii Technology](https://megvii.com/), China.
- *2018.11 - 2020.06*, Research Assistant, at [Chengdu University of Information Technology.](https://www.cuit.edu.cn/), China.