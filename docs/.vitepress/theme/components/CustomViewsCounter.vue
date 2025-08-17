<template>
  <div class="view-counter-container" style="display:none;">
    <div class="view-counter">
      <svg class="view-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
      <span class="view-count" id="custom-view-count">Loading...</span>
      <span class="view-label">views</span>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  loadViewCount()
})

async function loadViewCount() {
  const targetUrl = encodeURIComponent(
    'https://views-counter.vercel.app/badge?pageId=tech-job-preparation-bd'
  )

  const proxyUrl = `https://api.allorigins.win/raw?url=${targetUrl}`

  try {
    const response = await fetch(proxyUrl)
    const htmlText = await response.text()

    // Parse the returned HTML
    const parser = new DOMParser()
    const doc = parser.parseFromString(htmlText, "text/html")

    // Find the element with id="count"
    const countEl = doc.getElementById("count")
    const count = countEl ? countEl.textContent : 'N/A'

    const countElement = document.getElementById("custom-view-count")
    if (countElement) {
      countElement.innerText = count
      document.querySelector('.view-counter-container').style.display = "flex";
    }
  } catch (error) {
    console.error('Error loading view count:', error)
    const countElement = document.getElementById("custom-view-count")
    if (countElement) {
      countElement.innerText = 'Error'
    }
  }
}
</script>

<style>
.view-counter-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
}

.view-counter {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, var(--counter-color-1) 0%, var(--counter-color-2) 100%);
  border-radius: 50px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.view-counter:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.view-icon {
  width: 20px;
  height: 20px;
  opacity: 0.9;
}

.view-count {
  font-size: 1.1rem;
  font-weight: 600;
  min-width: 30px;
  text-align: center;
}

.view-label {
  font-size: 0.9rem;
  opacity: 0.8;
  text-transform: lowercase;
}

@media (max-width: 768px) {
  .view-counter {
    padding: 0.5rem 1rem;
    gap: 0.4rem;
  }
  
  .view-count {
    font-size: 1rem;
  }
  
  .view-label {
    font-size: 0.8rem;
  }
}
</style>
