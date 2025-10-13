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

Ming is a first-year Ph.D student at the Chinese University of Hong Kong (CUHK). His research interests primarily focus on **compilers**. Previously, he worked on a series of projects on LLMs for traditional compiler construction, and his current main research interest is quantum compilers. His detailed resume can be found <a id="cv-link" href="files/resume_Ming.pdf" target="_blank"><b>here</b></a>.


# 📖 Educations
- *2025.08 - Now*, **The Chinese University of Hong Kong**, Hong Kong, SAR.
  - Ph.D student in Computer Science and Engineering.
  - Advised by Professor [Zhiding Liang](https://www.innovationadvancedlab.com).


- *2021.09 - 2024.06*, **Institute of Computing Technology, Chinese Academy of Sciences**, Beijing, China.
  - M.S. in Computer System and Architecture.
  - Advised by Professors [Xiaobing Feng](https://people.ucas.ac.cn/~fengxiaobing) and [Fang Lv](https://lvfang1109.github.io/).


- *2017.09 - 2021.06*, **Beijing University of Posts and Telecommmunications**, Beijing, China.
  - B.S. in Computer Science and Technology.

# 📝 Publications 

<!-- Publications toggle controls -->
<div id="pubs-toggle" style="margin: 12px 0;">
  <button id="btn-selected" class="pubtab active" aria-pressed="true">Selected</button>
  <button id="btn-full" class="pubtab" aria-pressed="false">Full</button>
</div>

<style>
  .pubtab {
    display:inline-block; padding:6px 12px; border:1px solid #ccc; border-radius:6px;
    background:#f7f7f7; cursor:pointer; font-size:0.95rem; margin-right:8px
  }
  .pubtab.active { background:#e6f5ef; border-color:#44b389 }
  /* 可选 小标题的间距更紧凑 */
  #selected-pubs > ul, #full-pubs > ul { margin-top: 0.5rem }
</style>

<script>
  // 纯前端切换 兼容 GitHub Pages
  document.addEventListener("DOMContentLoaded", function () {
    const btnSel = document.getElementById("btn-selected");
    const btnFull = document.getElementById("btn-full");
    const sel = document.getElementById("selected-pubs");
    const full = document.getElementById("full-pubs");

    function showSelected() {
      sel.style.display = "";
      full.style.display = "none";
      btnSel.classList.add("active"); btnSel.setAttribute("aria-pressed", "true");
      btnFull.classList.remove("active"); btnFull.setAttribute("aria-pressed", "false");
      // 可选 更新地址片段 便于分享
      if (history.replaceState) history.replaceState(null, "", "#selected");
    }
    function showFull() {
      sel.style.display = "none";
      full.style.display = "";
      btnFull.classList.add("active"); btnFull.setAttribute("aria-pressed", "true");
      btnSel.classList.remove("active"); btnSel.setAttribute("aria-pressed", "false");
      if (history.replaceState) history.replaceState(null, "", "#full");
    }

    // 初始逻辑 读取地址片段 以“selected”为默认
    if (location.hash === "#full") { showFull(); } else { showSelected(); }

    btnSel.addEventListener("click", showSelected);
    btnFull.addEventListener("click", showFull);
  });
</script>


<div id="selected-pubs">
  <ul>
    <li>
      <b>[TOSEM &#39;25]</b> <a href="https://dl.acm.org/doi/10.1145/3764585"><b>BePilot: An AI Programming Assistant for Compiler Backend Development.</b></a><br>
      <span><b>M. Zhong</b>, X. Sun, F. Lv, L. Wang, H. Geng, L. Qiu, H. Cui, X. Feng</span><br>
      <span style="color:#44b389">ACM Transactions on Software Engineering and Methodology, 2025. (CORE A*)</span>
    </li>
    <li>
      <b>[CGO &#39;25]</b> <a href="https://dl.acm.org/doi/10.1145/3696443.3708931"><b>VEGA: Automatically Generating Compiler Backends Using a Pre-Trained Transformer Model.</b></a><br>
      <span><b>M. Zhong</b>, F. Lv, L. Wang, L. Qiu, Y. Wang, Y. Liu, H. Cui, X. Feng, J. Xue</span><br>
      <span style="color:#44b389">ACM IEEE 23rd International Symposium on Code Generation and Optimization, 2025. (CORE A)</span>
    </li>
    <li>
      <b>[SANER &#39;25]</b> <a href="https://ieeexplore.ieee.org/abstract/document/10992492"><b>Boosting Large Language Models for System Software Retargeting: A Preliminary Study.</b></a><br>
      <span><b>M. Zhong</b>, F. Lv, L. Wang, L. Qiu, H. Geng, H. Cui, X. Feng</span><br>
      <span style="color:#44b389">IEEE 32nd International Conference on Software Analysis, Evolution and Reengineering, 2025. (CORE A)</span>
    </li>
    <li>
      <b>[NeurIPS &#39;24]</b> <a href="https://neurips.cc/virtual/2024/poster/97455"><b>ComBack: A Versatile Dataset for Enhancing Compiler Backend Development Efficiency.</b></a><br>
      <span><b>M. Zhong</b>, F. Lv, L. Wang, H. Geng, L. Qiu, H. Cui, X. Feng</span><br>
      <span style="color:#44b389">NeurIPS 2024. (CORE A*)</span>
    </li>
  </ul>
</div>

<div id="full-pubs" style="display:none;">
  <ul>
    <li>
      <b>[TOSEM &#39;25]</b> <a href="https://dl.acm.org/doi/10.1145/3764585"><b>BePilot: An AI Programming Assistant for Compiler Backend Development.</b></a><br>
      <span><b>M. Zhong</b>, X. Sun, F. Lv, L. Wang, H. Geng, L. Qiu, H. Cui, X. Feng</span><br>
      <span style="color:#44b389">ACM Transactions on Software Engineering and Methodology, 2025. (CORE A*)</span>
    </li>
    <li>
      <b>[CGO &#39;25]</b> <a href="https://dl.acm.org/doi/10.1145/3696443.3708931"><b>VEGA: Automatically Generating Compiler Backends Using a Pre-Trained Transformer Model.</b></a><br>
      <span><b>M. Zhong</b>, F. Lv, L. Wang, L. Qiu, Y. Wang, Y. Liu, H. Cui, X. Feng, J. Xue</span><br>
      <span style="color:#44b389">ACM IEEE 23rd International Symposium on Code Generation and Optimization, 2025. (CORE A)</span>
    </li>
    <li>
      <b>[SANER &#39;25]</b> <a href="https://ieeexplore.ieee.org/abstract/document/10992492"><b>Boosting Large Language Models for System Software Retargeting: A Preliminary Study.</b></a><br>
      <span><b>M. Zhong</b>, F. Lv, L. Wang, L. Qiu, H. Geng, H. Cui, X. Feng</span><br>
      <span style="color:#44b389">IEEE 32nd International Conference on Software Analysis, Evolution and Reengineering, 2025. (CORE A)</span>
    </li>

   <li>
      <b>[NeurIPS &#39;25]</b> <a href="xxxxx"><b>IR-OptSet: An Optimization-Sensitive Dataset for Advancing LLM-Based IR Optimizer.</b></a><br>
      <span>Z. Yang, L. Qiu, F. Lv, <b>M. Zhong</b>,  Z. Chai, H. Zhou, H. Cui, X. Feng</span><br>
      <span style="color:#44b389">39th Annual Conference on Neural Information Processing Systems, 2025. (CORE A*)</span>
    </li>

    <li>
      <b>[ICONIP &#39;25]</b> <a href="xxxxx"><b>RELOPT: A Retriever-Augmented Framework for Optimizing Code with Long-range Dependencies.</b></a><br>
      <span>L. Qiu, F. Lv, <b>M. Zhong</b>,  L. Wang, X. Feng</span><br>
      <span style="color:#44b389">32nd International Conference on Neural Information Processing, 2025. (CORE B)</span>
    </li>

    <li>
      <b>[APSEC &#39;25]</b> <a href="xxxxx"><b>Towards Function-Level Correctness Assessment of System Software with LLMs: A Case Study.</b></a><br>
      <span><b>M. Zhong</b>, X. Sun</span><br>
      <span style="color:#44b389">32nd Asia-Pacific Software Engineering Conference, 2025. (CORE C)</span>
    </li>

   <li>
      <b>[ICOECAI &#39;25]</b> <a href="xxxxx"><b>Automating Target Description Processing for Efficient Compiler Backend Development.</b></a><br>
      <span>X. Sun, <b>M. Zhong</b>, L. Wang, F. Lv, X. He</span><br>
      <span style="color:#44b389">International Conference on Electrical, Control and Artificial Intelligence, 2025.</span>
    </li>
    <li>
      <b>[NeurIPS &#39;24]</b> <a href="https://neurips.cc/virtual/2024/poster/97455"><b>ComBack: A Versatile Dataset for Enhancing Compiler Backend Development Efficiency.</b></a><br>
      <span><b>M. Zhong</b>, F. Lv, L. Wang, H. Geng, L. Qiu, H. Cui, X. Feng</span><br>
      <span style="color:#44b389">Annual Conference on Neural Information Processing Systems, 2024. (CORE A*)</span>
    </li>

    <li>
      <b>[ISSRE &#39;23]</b> <a href="https://ieeexplore.ieee.org/document/10301269"><b>OPTango: Multi-central Representation Learning against Innumerable Compiler Optimization for Binary Diffing.</b></a><br>
      <span>H. Geng, <b>M. Zhong</b>, P. Zhang, F. Lv, X. Feng</span><br>
      <span style="color:#44b389">IEEE 34rd International Symposium on Software Reliability Engineering, 2023. (CORE A)</span>
    </li>

    <li>
      <b>[JCST &#39;23]</b> <a href="https://dl.acm.org/doi/abs/10.1007/s11390-022-1919-x"><b>Automatic Target Description File Generation.</b></a><br>
      <span>H. Geng, F. Lv, <b>M. Zhong</b>, H. Cui, J. Xue, X. Feng</span><br>
      <span style="color:#44b389">Journal of Computer Science and Technology, 2023. (CORE B)</span>
    </li>
  </ul>
</div>






# 🎖 Awards
<!-- - *2022.9* First Class Academic Scholarship in Chinese Academy of Sciences.
- *2021.12* Excellent Undergraduate Graduation Thesis in Beijing. -->
- National Scholarship. 

# 🌟 Miscellaneous
- International English Language Testing System (IELTS): Overall 8.0.



# 💻 Working Experience
- *2024.09 - 2025.05*, Research Assistant, Institute of Computing Technology, Chinese Academy of Sciences, Beijing, China.

   - **Clarification**: I was supposed to begin my Ph.D. studies at The University of New South Wales (UNSW) in Fall 2024. However, due to the [High-Risk University List](https://en.wikipedia.org/wiki/Proclamation_10043), I did not receive a student visa in time and was unable to enroll. Consequently, I continued as a research assistant at Institute of Computing Technology (ICT), until I decided to pursue my Ph.D. degree in Hong Kong.
   *I am deeply grateful to Professors Xiaobing Feng and Fang Lv at ICT for their support during this anxious gap period, and I sincerely regret not being able to pursue my studies at UNSW.*

   - **Some Reflections**: People often say that a speck of dust in the era, when it falls on an individual, becomes a mountain. But I believe that **_sometimes a small but firm conviction can carry one a very long way, even across that mountain_**. So, please accept what can not be changed and strive to change what can be changed. Even these bleak and trying days will eventually become a valuable asset in one's life.


<a href="http://s01.flagcounter.com/more/MshA"><img src="https://s01.flagcounter.com/count2/MshA/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_16/viewers_0/labels_0/pageviews_0/flags_0/percent_0/" alt="Flag Counter" border="0"></a>