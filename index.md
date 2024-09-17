---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
{% seo %}
---

<style type="text/css" media="screen">
* {
  box-sizing: border-box;
}

.row {
  display: flex;
  align-items: flex-start; /* Ensures that the items align at their top edges */
}

.left {
  flex: 70%;
  padding-left: 20px; /* Adds space on the left side of the text */
}

.right {
  flex: 30%;
  padding-right: 20px; /* Adds space on the right side of the image */
}

img {
  display: block; /* Ensures the image does not have extra space around it */
  max-width: 100%; /* Ensures the image scales within the container */
  height: auto; /* Maintains the aspect ratio of the image */
}
</style>

<div class="row">
  <div class="right">
    <img src="leo.png" alt="Leo">
  </div>
  <div class="left">
    I am an Assistant Professor of Finance at the University of Technology, Sydney, my main area of research is in innovation and entrepreneurship. I focus on assessing how innovation influences firm value, economic growth, and productivity. Additionally, I explore the impact of management on firm outcomes. I employ advanced statistical and machine learning techniques in my studies. My work has been presented at prestigious conferences, including the American Economic Association (AEA), American Finance Association (AFA), AIEA-NBER Innovation Conference, European Finance Association (EFA), China International Conference in Finance (CICF), Center for Economic Policy Research (CEPR), and the Asian Bureau of Finance and Economic Research (ABFER).
    <br/><br/>
    <a href="cv.pdf">CV</a>
  </div>
</div>
