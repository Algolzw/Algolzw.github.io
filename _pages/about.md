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

I am a PhD student in Machine Learning supervised by [Thomas Schön](https://user.it.uu.se/~thosc112/) and co-supervised by [Jens Sjölund](https://jsjol.github.io/) and [Fredrik K. Gustafsson](https://www.fregu856.com/) at [Uppsala University](https://www.uu.se/en). My research interest generally includes **Machine Learning**, **Computer Vision**, and **Reinforcement Learning**. And my recent works mainly focus on Probabilistic deep learning with application in computer vision.

I received my Master of Engineering degree from the School of Computer Science, Chengdu University of Information Technology, advised by [Jing Hu](https://jsjxy.cuit.edu.cn/info/1063/1806.htm). During the school, I participated in the project of performing image registration via reinforcement learning, under the advising of [Xin Wang](https://scholar.google.com/citations?user=jUWx8fcAAAAJ) and [Siwei Lyu](https://cse.buffalo.edu/~siweilyu/) from the University at Buffalo, SUNY. Before that, I obtained the Bachelor degree from Hebei University of Technology. I had been a research assistant at Megvii Technology Ltd., China, working with [Shuaicheng Liu](http://www.liushuaicheng.org/).




# 🔥 News
- *2025.6*: &nbsp;🎉🎉 One paper was published in *Philosophical Transactions of the Royal Society A*.
- *2024.11*: &nbsp;🎉🎉 I was selected as a **Top Reviewer** in NeurIPS 2024.
- *2024.09*: &nbsp;🎉🎉 One paper was accepted by Advances in Neural Information Processing Systems (**NeurIPS 2024**).
- *2024.01*: &nbsp;🎉🎉 One paper was accepted by International Conference on Learning Representations (**ICLR 2024**).
- *2023.04*: &nbsp;🎉🎉 One paper was accepted by International Conference on Machine Learning (**ICML 2023**).
- *2023.04*: &nbsp;🎉🎉 We won 2nd place in the NTIRE 2023 Shadow Removal Challenge (**1st place on perceptual scores**).
- *2022.04*: &nbsp;🎉🎉 We won 1st place in the NTIRE 2022 Burst Super-Resolution Challenge (Real-World Track). 
- *2022.03*: &nbsp;🎉🎉 One paper was accepted by IEEE Conference on Computer Vision and Pattern Recognition (**CVPR 2022**). 
<!--- *2021.12*: &nbsp;🎉🎉 One paper is accepted by AAAI Conference on Artificial Intelligence (AAAI 2022). -->
 

# 📝 Selected Publications 

## Preprints

<div class='paper-box'><div class='paper-box-image'><img src='images/fod.jpg' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**Forward-only Diffusion Probabilistic Models**  
<u>Ziwei Luo</u>, Fredrik K. Gustafsson, Jens Sjölund, Thomas B. Schön

**<font color = "#224B8D">Preprint</font>** \| [Paper](https://arxiv.org/abs/2505.16733) \| [Project](https://algolzw.github.io/fod/index.html)  \| [Code](https://github.com/Algolzw/FoD) [![Stars](https://img.shields.io/github/stars/Algolzw/FoD)](https://github.com/Algolzw/FoD)
- This work introduces the mean reversion term into both the drift and diffusion functions, enabling high-quality data samples with a single diffusion process.
- A stochastic extension of flow matching.
</div>
</div>

<!-- ###################################################### -->

## Peer-reviewed Publications

<div class='paper-box'><div class='paper-box-image'><img src='images/diffusion-review.jpg' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**Taming diffusion models for image restoration: a review**  
<u>Ziwei Luo</u>, Fredrik K. Gustafsson, Zheng Zhao, Jens Sjölund, Thomas B. Schön

**<font color = "#224B8D">Philosophical Transactions A 2025</font>** \| [Paper](https://royalsocietypublishing.org/rsta/article/383/2299/20240358/234771/Taming-diffusion-models-for-image-restoration-a)
- This work summarizes key constructions in diffusions and survey contemporary techniques that make use of diffusion models in solving general image restoration tasks.
</div>
</div>

<!-- ###################################################### -->

<div class='paper-box'><div class='paper-box-image'><img src='images/diffusion-policy.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**Entropy-regularized Diffusion Policy with Q-Ensembles for Offline Reinforcement Learning**  
Ruoqi Zhang$^\dagger$, <u>Ziwei Luo</u>$^\dagger$, Jens Sjölund, Thomas B. Schön, Per Mattsson

**<font color = "#224B8D">NeurIPS 2024</font>** \| [Paper](https://arxiv.org/abs/2402.04080) \| [Code](https://github.com/ruoqizzz/entropy-offlineRL) <strong><span class='show_paper_citations' data='3WQTKocAAAAJ:WF5omc3nYNoC'></span></strong>
- This work presents a diffusion-based policy for offline reinforcement learning.
- A diffusion entropy and the Q-ensembles are introduced to improve the RL performance.
</div>
</div>

<!-- ###################################################### -->


<div class='paper-box'><div class='paper-box-image'><img src='images/da-clip.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**Controlling Vision-Language Models for Multi-Task Image Restoration**  
<u>Ziwei Luo</u>, Fredrik K. Gustafsson, Zheng Zhao, Jens Sjölund, Thomas B. Schön

**<font color = "#224B8D">ICLR 2024</font>** \| [Paper](https://arxiv.org/abs/2310.01018) \| [Project](https://algolzw.github.io/daclip-uir/index.html) \| [Code](https://github.com/Algolzw/daclip-uir) [![Stars](https://img.shields.io/github/stars/Algolzw/daclip-uir)](https://github.com/Algolzw/daclip-uir) 
- This work presents a degradation-aware vision-language model (DA-CLIP) for multi-task image restoration.
- A controller predicts degradation types and also adapts the fixed CLIP image encoder to predict high-quality feature embeddings.
</div>
</div>

<!-- ###################################################### -->


<div class='paper-box'><div class='paper-box-image'><img src='images/ir-sde.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**Image Restoration with Mean-Reverting Stochastic Differential Equations**  
<u>Ziwei Luo</u>, Fredrik K. Gustafsson, Zheng Zhao, Jens Sjölund, Thomas B. Schön

**<font color = "#224B8D">ICML 2023</font>** \| [Paper](https://arxiv.org/abs/2301.11699) \| [Project](https://algolzw.github.io/ir-sde/index.html) \| [Code](https://github.com/Algolzw/image-restoration-sde) [![Stars](https://img.shields.io/github/stars/Algolzw/image-restoration-sde)](https://github.com/Algolzw/image-restoration-sde)  
- This work presents a stochastic differential equation (SDE) approach for general-purpose image restoration.
- A maximum likelihood objective is proposed to learn an optimal reverse trajectory which stabilizes the training and improves accuracy.
</div>
</div>

<!-- ###################################################### -->

<div class='paper-box'><div class='paper-box-image'><img src='images/refusion.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**Refusion: Enabling Large-Size Realistic Image Restoration with Latent-Space Diffusion Models**  
<u>Ziwei Luo</u>, Fredrik K. Gustafsson, Zheng Zhao, Jens Sjölund, Thomas B. Schön

**<font color = "#224B8D">CVPRW 2023</font>** \| [Paper](https://arxiv.org/abs/2304.08291) \| [Code](https://github.com/Algolzw/image-restoration-sde) [![Stars](https://img.shields.io/github/stars/Algolzw/image-restoration-sde)](https://github.com/Algolzw/image-restoration-sde)
- <span style="color:red">**Winning solution**</span> of the NTIRE Image Shadow Removal Challenge 2023.
- An extention of the [IR-SDE](https://arxiv.org/abs/2301.11699).
</div>
</div>

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

**<font color = "#224B8D">CVPR 2022</font>** \| [Paper](https://arxiv.org/pdf/2202.07508) \| [Code](https://github.com/megvii-research/DCLS-SR) 
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
- *2023* **2nd** place in NTIRE Shadow Removal Challenge (1st place on perceptual scores)
- *2021, 2022* **Champion** in NTIRE Burst Super-Resolution Challenge (Real track)
- *2021* **Outstanding Graduates**, Chengdu University of Information Technology 
- *2021* **Award of Scientific Thesis Excellence**, Chengdu University of Information Technology 
- *2020* **The First Prize Scholarship**, Chengdu University of Information Technology
- *2020* **National Scholarship**, China


# 📖 Educations
- *2022.09 - present*, PhD student, Uppsala University. 
- *2018.09 - 2021.06*, Master, Chengdu University of Information Technology. 
- *2011.09 - 2015.06*, Undergraduate, Hebei University of Technology.

<!-- # 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/) -->

# 💬 Teaching 
- Teaching Assistant in the course *Advanced Probabilistic Machine Learning*, at Uppsala University
- Teaching Assistant in the course *Statistical Machine Learning*, at Uppsala University
- Teaching Assistant in the course *Foundations of Computer Science*, at Chengdu University of Information Technology

# 📫 Academic Services
### Journal Reviewer 
- IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)
- International Journal of Computer Vision (IJCV)
- IEEE Transactions on Image Processing (TIP)
- IEEE Transactions on Circuits and Systems for Video Technology (TCSVT)

### Conference Reviewer
- International Conference on Intelligent Robots and Systems (IROS) 2022
- IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2024
- Advances in Neural Information Processing Systems (NeurIPS) 2024
- International Conference on Learning Representations (ICLR) 2024

# 💻 Experience
- *2022.09 - present*, PhD student, at [Uppsala university](https://www.uu.se/en), Sweden.
- *2021.07 - 2022.07*, Research Assistant, at [Megvii Technology](https://megvii.com/), China.