const crosshairs = [
    { name: "dot", label: "Simple Dot", svg: `<circle cx="50" cy="50" r="3" fill="currentColor" />` },
    {
      name: "cross",
      label: "Basic Cross",
      svg: `
        <line x1="25" y1="50" x2="75" y2="50" stroke="currentColor" stroke-width="2" />
        <line x1="50" y1="25" x2="50" y2="75" stroke="currentColor" stroke-width="2" />
      `,
    },
    {
      name: "circle",
      label: "Circle",
      svg: `<circle cx="50" cy="50" r="20" stroke="currentColor" stroke-width="2" fill="none" />`,
    },
    {
      name: "crosshair",
      label: "Crosshair",
      svg: `
        <line x1="25" y1="50" x2="75" y2="50" stroke="currentColor" stroke-width="2" />
        <line x1="50" y1="25" x2="50" y2="75" stroke="currentColor" stroke-width="2" />
        <circle cx="50" cy="50" r="15" stroke="currentColor" stroke-width="2" fill="none" />
      `,
    },
    {
      name: "diamond",
      label: "Diamond",
      svg: `<polygon points="50,30 70,50 50,70 30,50" stroke="currentColor" stroke-width="2" fill="none" />`,
    },
    {
      name: "triangles",
      label: "Four Triangles",
      svg: `
        <polygon points="50,25 55,35 45,35" fill="currentColor" />
        <polygon points="75,50 65,55 65,45" fill="currentColor" />
        <polygon points="50,75 55,65 45,65" fill="currentColor" />
        <polygon points="25,50 35,55 35,45" fill="currentColor" />
      `,
    },
    {
      name: "chevron",
      label: "Chevron",
      svg: `
        <polyline points="35,55 50,40 65,55" stroke="currentColor" stroke-width="2" fill="none" />
      `,
    },
    {
      name: "brackets",
      label: "Brackets",
      svg: `
        <path d="M30,30 L40,30 L40,70 L30,70" stroke="currentColor" stroke-width="2" fill="none" />
        <path d="M70,30 L60,30 L60,70 L70,70" stroke="currentColor" stroke-width="2" fill="none" />
      `,
    },
    {
      name: "cross_dot",
      label: "Cross with Dot",
      svg: `
        <line x1="25" y1="50" x2="75" y2="50" stroke="currentColor" stroke-width="2" />
        <line x1="50" y1="25" x2="50" y2="75" stroke="currentColor" stroke-width="2" />
        <circle cx="50" cy="50" r="3" fill="currentColor" />
      `,
    },
    {
      name: "t_shape",
      label: "T-Shape",
      svg: `
        <line x1="25" y1="50" x2="75" y2="50" stroke="currentColor" stroke-width="2" />
        <line x1="50" y1="50" x2="50" y2="75" stroke="currentColor" stroke-width="2" />
      `,
    },
    {
      name: "circle_dot",
      label: "Circle with Dot",
      svg: `
        <circle cx="50" cy="50" r="20" stroke="currentColor" stroke-width="2" fill="none" />
        <circle cx="50" cy="50" r="3" fill="currentColor" />
      `,
    },
    {
      name: "plus",
      label: "Plus",
      svg: `
        <line x1="35" y1="50" x2="65" y2="50" stroke="currentColor" stroke-width="4" />
        <line x1="50" y1="35" x2="50" y2="65" stroke="currentColor" stroke-width="4" />
      `,
    },
    {
      name: "square",
      label: "Square",
      svg: `
        <rect x="30" y="30" width="40" height="40" stroke="currentColor" stroke-width="2" fill="none" />
      `,
    },
    {
      name: "corners",
      label: "Corners",
      svg: `
        <path d="M30,30 L40,30 M30,30 L30,40" stroke="currentColor" stroke-width="2" fill="none" />
        <path d="M70,30 L60,30 M70,30 L70,40" stroke="currentColor" stroke-width="2" fill="none" />
        <path d="M30,70 L40,70 M30,70 L30,60" stroke="currentColor" stroke-width="2" fill="none" />
        <path d="M70,70 L60,70 M70,70 L70,60" stroke="currentColor" stroke-width="2" fill="none" />
      `,
    },
    {
      name: "crosshair_dot",
      label: "Crosshair with Dot",
      svg: `
        <line x1="25" y1="50" x2="40" y2="50" stroke="currentColor" stroke-width="2" />
        <line x1="60" y1="50" x2="75" y2="50" stroke="currentColor" stroke-width="2" />
        <line x1="50" y1="25" x2="50" y2="40" stroke="currentColor" stroke-width="2" />
        <line x1="50" y1="60" x2="50" y2="75" stroke="currentColor" stroke-width="2" />
        <circle cx="50" cy="50" r="3" fill="currentColor" />
      `,
    },
    {
      name: "arrow",
      label: "Arrow",
      svg: `
        <polygon points="50,25 40,45 60,45" fill="currentColor" />
        <line x1="50" y1="45" x2="50" y2="75" stroke="currentColor" stroke-width="2" />
      `,
    },
    {
      name: "diamond_dot",
      label: "Diamond with Dot",
      svg: `
        <polygon points="50,30 70,50 50,70 30,50" stroke="currentColor" stroke-width="2" fill="none" />
        <circle cx="50" cy="50" r="3" fill="currentColor" />
      `,
    },
    {
      name: "cross_split",
      label: "Split Cross",
      svg: `
        <line x1="25" y1="50" x2="45" y2="50" stroke="currentColor" stroke-width="2" />
        <line x1="55" y1="50" x2="75" y2="50" stroke="currentColor" stroke-width="2" />
        <line x1="50" y1="25" x2="50" y2="45" stroke="currentColor" stroke-width="2" />
        <line x1="50" y1="55" x2="50" y2="75" stroke="currentColor" stroke-width="2" />
      `,
    },
    {
      name: "bullseye",
      label: "Bullseye",
      svg: `
        <circle cx="50" cy="50" r="25" stroke="currentColor" stroke-width="2" fill="none" />
        <circle cx="50" cy="50" r="15" stroke="currentColor" stroke-width="2" fill="none" />
        <circle cx="50" cy="50" r="5" stroke="currentColor" stroke-width="2" fill="none" />
        <circle cx="50" cy="50" r="2" fill="currentColor" />
      `,
    },
    {
      name: "x",
      label: "X",
      svg: `
        <line x1="30" y1="30" x2="70" y2="70" stroke="currentColor" stroke-width="2" />
        <line x1="70" y1="30" x2="30" y2="70" stroke="currentColor" stroke-width="2" />
      `,
    },
    {
      name: "triangle",
      label: "Triangle",
      svg: `
        <polygon points="50,25 75,75 25,75" stroke="currentColor" stroke-width="2" fill="none" />
      `,
    },
    {
      name: "circle_cross",
      label: "Circle Cross",
      svg: `
        <circle cx="50" cy="50" r="20" stroke="currentColor" stroke-width="2" fill="none" />
        <line x1="35" y1="50" x2="65" y2="50" stroke="currentColor" stroke-width="2" />
        <line x1="50" y1="35" x2="50" y2="65" stroke="currentColor" stroke-width="2" />
      `,
    },
    {
      name: "dot_ring",
      label: "Dot with Ring",
      svg: `
        <circle cx="50" cy="50" r="20" stroke="currentColor" stroke-width="2" fill="none" />
        <circle cx="50" cy="50" r="3" fill="currentColor" />
      `,
    },
    {
      name: "crosshair_precise",
      label: "Precise Crosshair",
      svg: `
        <line x1="25" y1="50" x2="45" y2="50" stroke="currentColor" stroke-width="1" />
        <line x1="55" y1="50" x2="75" y2="50" stroke="currentColor" stroke-width="1" />
        <line x1="50" y1="25" x2="50" y2="45" stroke="currentColor" stroke-width="1" />
        <line x1="50" y1="55" x2="50" y2="75" stroke="currentColor" stroke-width="1" />
        <circle cx="50" cy="50" r="3" stroke="currentColor" stroke-width="1" fill="none" />
      `,
    },
  ]
  
  let selectedCrosshair = crosshairs[0]
  let size = 50
  let thickness = 2
  let color = "#ffffff"
  let showOnlyWhenAimed = false
  let crosshairEnabled = false
  
  const savedCrosshairs = []
  
  function updateCrosshair(data) {
    selectedCrosshair = crosshairs.find((c) => c.name === data.style) || crosshairs[0]
    size = Number(data.size) || 50
    thickness = Number(data.thickness) || 2
    color = data.color || "#ffffff"
    showOnlyWhenAimed = Boolean(data.showOnlyWhenAimed)
    crosshairEnabled = Boolean(data.enabled)
    renderCrosshair()
  }
  
  function renderCrosshair() {
    const overlay = document.getElementById("crosshair-overlay")
    if (!overlay) {
      console.error("Crosshair overlay element not found")
      return
    }
  
    overlay.innerHTML = ""
  
    if (!crosshairEnabled) {
      return
    }
  
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    svg.setAttribute("width", `${size}px`)
    svg.setAttribute("height", `${size}px`)
    svg.setAttribute("viewBox", "0 0 100 100")
    svg.innerHTML = selectedCrosshair.svg.replace(/stroke-width="2"/g, `stroke-width="${thickness}"`)
    svg.style.color = color
  
    overlay.appendChild(svg)
  }
  
  function updateLivePreview() {
    const svg = document.getElementById("live-preview-svg")
    if (!svg) {
      console.error("Live preview SVG element not found")
      return
    }
    svg.innerHTML = selectedCrosshair.svg.replace(/stroke-width="2"/g, `stroke-width="${thickness}"`)
    svg.style.color = color
    svg.style.width = `${size}px`
    svg.style.height = `${size}px`
  }
  
  function createCrosshairPreview(crosshair) {
    const previewItem = document.createElement("div")
    previewItem.className = "preview-item"
    previewItem.setAttribute("data-name", crosshair.name)
    previewItem.innerHTML = `
          <svg viewBox="0 0 100 100" class="preview-image">
              ${crosshair.svg}
          </svg>
          <p class="preview-label">${crosshair.label}</p>
      `
    previewItem.addEventListener("click", () => {
      document.querySelectorAll(".preview-item").forEach((item) => item.classList.remove("selected"))
      previewItem.classList.add("selected")
      selectedCrosshair = crosshair
      updateLivePreview()
    })
    return previewItem
  }
  
  function initializeCrosshairs() {
    const container = document.getElementById("preview-container")
    if (!container) {
      console.error("Preview container element not found")
      return
    }
    container.innerHTML = ""
    crosshairs.forEach((crosshair) => {
      container.appendChild(createCrosshairPreview(crosshair))
    })
  }
  
  function initializeSavedCrosshairs() {
    const container = document.getElementById("saved-crosshairs-container")
    if (container) {
      container.innerHTML = ""
      savedCrosshairs.forEach((crosshair) => {
        container.appendChild(createCrosshairPreview(crosshair, true))
      })
    }
  }
  
  function initializeEventListeners() {
    const colorInput = document.getElementById("color")
    const sizeInput = document.getElementById("size")
    const thicknessInput = document.getElementById("thickness")
    const showOnlyWhenAimedInput = document.getElementById("show-only-when-aimed")
    const saveButton = document.getElementById("save-button")
    const saveCrosshairButton = document.getElementById("save-crosshair-button")
  
    if (colorInput) {
      colorInput.addEventListener("input", (e) => {
        color = e.target.value
        updateLivePreview()
      })
    }
  
    if (sizeInput) {
      sizeInput.addEventListener("input", (e) => {
        size = Number.parseInt(e.target.value)
        const sizeValueElement = document.getElementById("size-value")
        if (sizeValueElement) {
          sizeValueElement.textContent = size
        }
        updateLivePreview()
      })
    }
  
    if (thicknessInput) {
      thicknessInput.addEventListener("input", (e) => {
        thickness = Number.parseInt(e.target.value)
        const thicknessValueElement = document.getElementById("thickness-value")
        if (thicknessValueElement) {
          thicknessValueElement.textContent = thickness
        }
        updateLivePreview()
      })
    }
  
    if (showOnlyWhenAimedInput) {
      showOnlyWhenAimedInput.addEventListener("change", (e) => {
        showOnlyWhenAimed = e.target.checked
      })
    }
  
    if (saveButton) {
      saveButton.addEventListener("click", saveSettings)
    }
  
    if (saveCrosshairButton) {
      saveCrosshairButton.addEventListener("click", saveCrosshair)
    }
  }
  
  function showNotification(message, isError = false) {
    const notification = document.createElement("div")
    notification.textContent = message
    notification.style.position = "fixed"
    notification.style.bottom = "20px"
    notification.style.right = "20px"
    notification.style.padding = "10px 20px"
    notification.style.borderRadius = "5px"
    notification.style.color = "#fff"
    notification.style.backgroundColor = isError ? "#ff4444" : "#44ff44"
    notification.style.zIndex = "1000"
    document.body.appendChild(notification)
  
    setTimeout(() => {
      notification.remove()
    }, 3000)
  }
  
  function saveSettings() {
    fetch(`https://${GetParentResourceName()}/saveSettings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        crosshair: selectedCrosshair.name,
        size,
        thickness,
        color,
        showOnlyWhenAimed,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        return response.json()
      })
      .then((data) => {
        showNotification("Settings saved successfully!")
        return fetch(`https://${GetParentResourceName()}/closeUI`, { method: "POST" })
      })
      .then(() => {
        const tabletContainer = document.querySelector(".tablet-container")
        if (tabletContainer) {
          tabletContainer.style.display = "none"
        }
      })
      .catch((error) => {
        console.error("Error:", error)
        showNotification("Failed to save settings. Please try again.", true)
      })
  }
  
  function saveCrosshair() {
    const name = prompt("Enter a name for this crosshair:")
    if (name) {
      const savedCrosshair = {
        name,
        svg: selectedCrosshair.svg,
        size,
        thickness,
        color,
      }
      savedCrosshairs.push(savedCrosshair)
      initializeSavedCrosshairs()
      showNotification("Crosshair saved successfully!")
    }
  }
  
  function initializeUI(data) {
    selectedCrosshair = crosshairs.find((c) => c.name === data.style) || crosshairs[0]
    size = data.size
    thickness = data.thickness
    color = data.color
    showOnlyWhenAimed = data.showOnlyWhenAimed
    crosshairEnabled = data.enabled
  
    const colorInput = document.getElementById("color")
    const sizeInput = document.getElementById("size")
    const thicknessInput = document.getElementById("thickness")
    const showOnlyWhenAimedInput = document.getElementById("show-only-when-aimed")
  
    if (colorInput) colorInput.value = color
    if (sizeInput) {
      sizeInput.value = size
      const sizeValueElement = document.getElementById("size-value")
      if (sizeValueElement) sizeValueElement.textContent = size
    }
    if (thicknessInput) {
      thicknessInput.value = thickness
      const thicknessValueElement = document.getElementById("thickness-value")
      if (thicknessValueElement) thicknessValueElement.textContent = thickness
    }
    if (showOnlyWhenAimedInput) showOnlyWhenAimedInput.checked = showOnlyWhenAimed
  
    initializeCrosshairs()
    initializeEventListeners()
    updateLivePreview()
    renderCrosshair()
  
    const selectedPreview = document.querySelector(`.preview-item[data-name="${selectedCrosshair.name}"]`)
    if (selectedPreview) {
      selectedPreview.classList.add("selected")
    }
  }
  
  function GetParentResourceName() {
    return "BKS_crosshairmenu"
  }
  
  function handleCrosshairUpdate(data) {
    updateCrosshair(data)
    renderCrosshair()
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.createElement("div")
    overlay.id = "crosshair-overlay"
    overlay.style.position = "fixed"
    overlay.style.top = "50%"
    overlay.style.left = "50%"
    overlay.style.transform = "translate(-50%, -50%)"
    overlay.style.pointerEvents = "none"
    overlay.style.zIndex = "1000"
    document.body.appendChild(overlay)
  
    // Hide the tablet container by default
    const tabletContainer = document.querySelector(".tablet-container")
    if (tabletContainer) {
      tabletContainer.style.display = "none"
    }
  
    // Ensure the body background is transparent
    document.body.style.backgroundColor = "transparent"
  
    window.addEventListener("message", (event) => {
      if (event.data.action === "open") {
        const tabletContainer = document.querySelector(".tablet-container")
        if (tabletContainer) {
          tabletContainer.style.display = "block"
          initializeUI(event.data.data)
        } else {
          console.error("Tablet container not found")
        }
      } else if (event.data.action === "hideMenu") {
        const tabletContainer = document.querySelector(".tablet-container")
        if (tabletContainer) {
          tabletContainer.style.display = "none"
        }
      } else if (event.data.action === "updateCrosshair") {
        handleCrosshairUpdate(event.data.data)
      } else if (event.data.action === "updateCrosshairVisibility") {
        const crosshairOverlay = document.getElementById("crosshair-overlay")
        if (crosshairOverlay) {
          crosshairOverlay.style.display = event.data.visible ? "block" : "none"
        } else {
          console.error("Crosshair overlay not found")
        }
      }
    })
  })
  
  