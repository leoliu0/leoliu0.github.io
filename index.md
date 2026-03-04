---
layout: home
{% seo %}
---

<style type="text/css" media="screen">
  body {
    font-size: 18px; /* Adjust base font size for the whole page */
  }
  .wrapper {
    max-width: 1200px; /* Adjust this value as needed */
  }
  * {
    box-sizing: border-box;
  }

  .row {
    display: flex;
    align-items: flex-start; /* Ensures that the items align at their top edges */
  }

  .text-column {
    flex: 70%;
    padding-left: 20px; /* Adds space on the left side of the text */
  }

  .image-column {
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
  <div class="image-column">
    <img src="leo.png" alt="Leo">
  </div>
  
  <div class="text-column">
    I am an Assistant Professor of Finance at the University of Technology, Sydney. My research on innovation and entrepreneurship involves measuring innovation to study firm, industry, and economic outcomes. My recent work also examines corporate disclosure and the impact and determinants of AI innovation.
    <br/><br/>
    <a href="/cv.pdf">CV</a>
  </div>
</div>

<br>
<br>

---

## Publications and Accepted Papers

<a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5098227">Foundational Processes and Growth</a> (with Elvira Sojli, Wing Wah Tham, Salomé Baslandze)

*Accepted at Journal of Financial Economics*

<button id="show-download-form-btn" style="padding: 5px 10px; background-color: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; margin-top: 10px;">Download Dataset</button>

<div id="download-form-container" style="display: none; margin-top: 15px; padding: 15px; border: 1px solid #ddd; border-radius: 4px; max-width: 400px; background-color: #f9f9f9;">
  <form id="download-form" action="https://formspree.io/f/mgolgzql" method="POST">
    <div style="margin-bottom: 10px;">
      <label for="user-name" style="display: block; margin-bottom: 5px; font-weight: bold;">Name:</label>
      <input type="text" id="user-name" name="name" required style="width: 100%; padding: 5px; border: 1px solid #ccc; border-radius: 3px;" />
    </div>
    <div style="margin-bottom: 10px;">
      <label for="user-role" style="display: block; margin-bottom: 5px; font-weight: bold;">Role:</label>
      <input type="text" id="user-role" name="role" required style="width: 100%; padding: 5px; border: 1px solid #ccc; border-radius: 3px;" />
    </div>
    <div style="margin-bottom: 10px;">
      <label for="user-institution" style="display: block; margin-bottom: 5px; font-weight: bold;">Institution:</label>
      <input type="text" id="user-institution" name="institution" required style="width: 100%; padding: 5px; border: 1px solid #ccc; border-radius: 3px;" />
    </div>
    <button type="submit" style="padding: 5px 15px; background-color: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 16px;">Submit & Download</button>
  </form>
</div>

<script>
  document.getElementById('show-download-form-btn').addEventListener('click', function() {
    var formContainer = document.getElementById('download-form-container');
    formContainer.style.display = formContainer.style.display === 'none' ? 'block' : 'none';
  });

  document.getElementById('download-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var form = document.getElementById('download-form');
    var data = new FormData(form);
    
    fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      // Trigger the download
      var link = document.createElement('a');
      link.href = 'found_patent.csv';
      link.download = 'found_patent.csv';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Update UI with success message
      document.getElementById('download-form-container').innerHTML = '<p style="color: #28a745; font-weight: bold;">Thank you! Your download should start shortly.</p>';
    }).catch(error => {
      alert("Oops! There was a problem submitting your form.");
    });
  });
</script>

---

## Working Papers

<a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4568809">CEO Experience and Value Creation: Evidence from Green Lab Locations</a> (with Elvira Sojli and Wing Wah Tham) 

*R&R Management Science*

---

<a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6063868">AI Patents</a> (with Sheng Xu, Tianyu Cai, Raphael Park)

*Revising for Review of Finance*

---

<a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4266516">Can ESG Performance be attributed to Management Styles?</a>
*(with Tony Cai, Jason Zein and Hao Zhang)*
__Conferences__: AFA 2024, FMA Asia 2022, AFBC 2022

---

#### Common Ownership and Antitrust Enforcement: Evidence from the Court
*(with Huaizhou Li, Ronald Masulis and Jason Zein)*
__Conferences__: FIRN 2022, FMA Asia 2022, CELS (Conference for Empirical Legal Studies) 2022, AFBC 2022, FMCG (Financial Market and Corporate Governance) 2022 (Runner-up for Best paper in Corporate Finance)

---
