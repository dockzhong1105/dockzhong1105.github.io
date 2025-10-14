---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<link rel="stylesheet" href="{{ '/assets/css/pubs.css' | relative_url }}">
<script defer src="{{ '/assets/js/pubs-toggle.js' | relative_url }}"></script>
{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Ming is a first-year Ph.D student at the Chinese University of Hong Kong (CUHK). His research interests primarily focus on **compilers**. Previously, he worked on several projects of LLMs for traditional compiler construction, and currently his research interests focus on quantum compilers.


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

  <div id="pubs-toggle" style="margin:12px 0;">
    <button id="btn-selected" class="pubtab" aria-pressed="true">Selected</button>
    <button id="btn-full" class="pubtab" aria-pressed="false">Full</button>
  </div>


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
        <span style="color:#44b389">38th Annual Conference on Neural Information Processing Systems, 2024. (CORE A*)</span>
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
        <b>[NeurIPS &#39;25]</b> <a href="https://neurips.cc/virtual/2025/poster/121626"><b>IR-OptSet: An Optimization-Sensitive Dataset for Advancing LLM-Based IR Optimizer.</b></a><br>
        <span>Z. Yang, L. Qiu, F. Lv, <b>M. Zhong</b>,  Z. Chai, H. Zhou, H. Cui, X. Feng</span><br>
        <span style="color:#44b389">39th Annual Conference on Neural Information Processing Systems, 2025. (CORE A*)</span>
      </li>

      <li>
        <b>[ICONIP &#39;25]</b> <a href="xxxxx"><b>RELOPT: A Retriever-Augmented Framework for Optimizing Code with Long-range Dependencies.</b></a><br>
        <span>L. Qiu, F. Lv, <b>M. Zhong</b>,  L. Wang, X. Feng</span><br>
        <span style="color:#44b389">32nd International Conference on Neural Information Processing, 2025. (CORE B)</span>
      </li>

      <li>
        <b>[APSEC &#39;25]</b> <a href="https://conf.researchr.org/details/apsec-2025/apsec-2025-early-research-achievements--era-/8/Towards-Function-Level-Correctness-Assessment-of-System-Software-with-LLMs-A-Case-St"><b>Towards Function-Level Correctness Assessment of System Software with LLMs: A Case Study.</b></a><br>
        <span><b>M. Zhong</b>, X. Sun</span><br>
        <span style="color:#44b389">32nd Asia-Pacific Software Engineering Conference, 2025. (CORE C)</span>
      </li>

    <li>
        <b>[ICOECAI &#39;25]</b> <a href="xxxxx"><b>Automating Target Descriptions Processing for Efficient Compiler Backend Development.</b></a><br>
        <span>X. Sun, <b>M. Zhong</b>, L. Wang, F. Lv, X. He</span><br>
        <span style="color:#44b389">International Conference on Electrical, Control and Artificial Intelligence, 2025.</span>
      </li>
      <li>
        <b>[NeurIPS &#39;24]</b> <a href="https://neurips.cc/virtual/2024/poster/97455"><b>ComBack: A Versatile Dataset for Enhancing Compiler Backend Development Efficiency.</b></a><br>
        <span><b>M. Zhong</b>, F. Lv, L. Wang, H. Geng, L. Qiu, H. Cui, X. Feng</span><br>
        <span style="color:#44b389">38th Annual Conference on Neural Information Processing Systems, 2024. (CORE A*)</span>
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
- National Scholarship. 
- Distinguished Undergraduate Graduation Thesis in Beijing.

# 🌟 Miscellaneous
- International English Language Testing System (IELTS): Overall 8.0.



# 💻 Working Experience
- *2024.09 - 2025.05*, Research Assistant, Institute of Computing Technology, Chinese Academy of Sciences, Beijing, China.

  <div style="margin:12px 0;">
    <button id="btn-we-notes" class="pubtab" aria-pressed="false">Clarification and Reflections</button>
  </div>

  <div id="we-notes" style="display:none;">
    <ul style="margin: 0 0 0 1.25rem;">
      <li><b>Clarification</b>. I was supposed to begin my Ph.D. studies at The University of New South Wales (UNSW) in Fall 2024. However, due to the <a href="https://en.wikipedia.org/wiki/Proclamation_10043">High-Risk University List</a>, I did not receive a student visa in time and was unable to enroll. Consequently, I continued as a research assistant at Institute of Computing Technology (ICT), until I decided to pursue my Ph.D. degree in Hong Kong.
      <br><b>I am deeply grateful to Professors Xiaobing Feng and Fang Lv at ICT for their support during this anxious gap period, and I sincerely regret not being able to pursue my studies at UNSW.</b></li>
      <li><b>Some Reflections</b>. People say that a speck of dust in the era, when it falls on an individual, becomes a mountain. But I believe that <i>a small but firm conviction can carry one a very long way, even across that mountain</i>. So, please accept what can not be changed and strive to change what can be changed. Even these dark days will eventually become a valuable asset in one's life.</li>
    </ul>
  </div>

<a href="http://s01.flagcounter.com/more/MshA"><img src="https://s01.flagcounter.com/count2/MshA/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_16/viewers_0/labels_0/pageviews_0/flags_0/percent_0/" alt="Flag Counter" border="0"></a>