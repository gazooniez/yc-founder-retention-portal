// YC Founder Bay Area Retention Portal - Frontend Engine
document.addEventListener("DOMContentLoaded", () => {
  // --- State Variables ---
  const state = {
    selectedThemes: [],
    selectedScales: [],
    selectedImpacts: [],
    searchQuery: "",
    topTierOnly: false,
    comparedEvents: [], // Array of event objects (max 3)
    drawerExpanded: false
  };

  // --- DOM Elements ---
  const eventsGrid = document.getElementById("events-grid");
  const resultsCount = document.getElementById("results-count");
  const statTotalEvents = document.getElementById("stat-total-events");
  const searchBar = document.getElementById("search-bar");
  const themeFiltersContainer = document.getElementById("theme-filters-container");
  const topTierToggle = document.getElementById("top-tier-toggle");
  const resetFiltersBtn = document.getElementById("reset-filters-btn");
  
  const timelineStepper = document.getElementById("timeline-stepper");
  const eventDialog = document.getElementById("event-dialog");
  
  const comparisonDrawer = document.getElementById("comparison-drawer");
  const compareCount = document.getElementById("compare-count");
  const drawerToggleBtn = document.getElementById("drawer-toggle-btn");
  const toggleIndicator = document.getElementById("toggle-indicator");
  const toggleText = document.getElementById("toggle-text");
  const comparisonTable = document.getElementById("comparison-table");

  // Tab Elements
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");
  const principlesGrid = document.getElementById("principles-grid");
  const notesGrid = document.getElementById("notes-grid");

  // --- Initialize Application ---
  function init() {
    statTotalEvents.textContent = window.EVENTS_DATA.length;
    renderThemeFilters();
    renderTimeline();
    renderPrinciplesAndNotes();
    renderEvents();
    setupEventListeners();
  }

  // --- Render Functions ---

  // Sidebar theme checkboxes
  function renderThemeFilters() {
    themeFiltersContainer.innerHTML = "";
    Object.values(window.THEMES).forEach(theme => {
      const label = document.createElement("label");
      label.className = "filter-checkbox-label";
      label.innerHTML = `
        <input type="checkbox" class="theme-filter" value="${theme.id}">
        <span>${theme.icon} ${theme.name}</span>
      `;
      themeFiltersContainer.appendChild(label);
    });
  }

  // Horizontal Stepper for YC Batch
  function renderTimeline() {
    timelineStepper.innerHTML = "";
    window.WEEKLY_PROGRAM.forEach(program => {
      const matchingEvent = window.EVENTS_DATA.find(e => e.id === program.eventId);
      
      const step = document.createElement("div");
      step.className = "timeline-step";
      step.innerHTML = `
        <div>
          <span class="week-badge">${program.week}</span>
          <h3>${program.title}</h3>
          <p>${program.description}</p>
        </div>
        <div class="focus-tag">${program.focus}</div>
      `;
      
      step.addEventListener("click", () => {
        // Deactivate all
        document.querySelectorAll(".timeline-step").forEach(s => s.classList.remove("active"));
        step.classList.add("active");
        
        // Open the detail dialog for matching event
        if (matchingEvent) {
          openDetailDialog(matchingEvent);
        }
      });
      
      timelineStepper.appendChild(step);
    });
  }

  // Principles and Notes lists
  function renderPrinciplesAndNotes() {
    // Principles
    principlesGrid.innerHTML = "";
    window.PRINCIPLES.forEach((principle, index) => {
      const card = document.createElement("div");
      card.className = "principle-card";
      card.innerHTML = `
        <h3><span>0${index + 1}.</span> ${principle.title}</h3>
        <p><strong>Focus:</strong> ${principle.summary}</p>
        <p>${principle.rationale}</p>
        <div class="principle-example"><strong>Examples:</strong> ${principle.examples}</div>
      `;
      principlesGrid.appendChild(card);
    });

    // Notes
    notesGrid.innerHTML = "";
    const titles = {
      accessibility: "♿ Accessibility & Inclusion",
      transportation: "🚙 Transportation & Access",
      cost: "💰 Cost Strategy",
      measurement: "📈 Measurement & Impact"
    };

    Object.keys(window.IMPLEMENTATION_NOTES).forEach(key => {
      const col = document.createElement("div");
      col.className = "note-column";
      
      let listItems = "";
      window.IMPLEMENTATION_NOTES[key].forEach(item => {
        listItems += `<li>${item}</li>`;
      });
      
      col.innerHTML = `
        <h3>${titles[key] || key}</h3>
        <ul>${listItems}</ul>
      `;
      notesGrid.appendChild(col);
    });
  }

  // Render Event Card Grid
  function renderEvents() {
    eventsGrid.innerHTML = "";
    
    // Filter data
    const filteredEvents = window.EVENTS_DATA.filter(event => {
      // Search keywords match
      const matchesSearch = 
        event.name.toLowerCase().includes(state.searchQuery) ||
        event.details.toLowerCase().includes(state.searchQuery) ||
        (event.why && event.why.toLowerCase().includes(state.searchQuery)) ||
        event.category.toLowerCase().includes(state.searchQuery);
      
      // Theme match
      const matchesTheme = state.selectedThemes.length === 0 || state.selectedThemes.includes(event.theme);
      
      // Scale match
      const matchesScale = state.selectedScales.length === 0 || state.selectedScales.some(s => event.scale.includes(s));
      
      // Impact match
      const matchesImpact = state.selectedImpacts.length === 0 || state.selectedImpacts.includes(event.retention);
      
      // Top tier priority toggle
      const matchesTopTier = !state.topTierOnly || event.isTopTier;
      
      return matchesSearch && matchesTheme && matchesScale && matchesImpact && matchesTopTier;
    });

    // Update Counter
    resultsCount.textContent = `Showing ${filteredEvents.length} of ${window.EVENTS_DATA.length} events`;

    // Render cards
    if (filteredEvents.length === 0) {
      eventsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; border: 1px dashed var(--border-color); border-radius: 16px; color: var(--text-secondary);">
          <p style="font-size: 1.1rem; margin-bottom: 0.5rem;">No matching events found</p>
          <p style="font-size: 0.85rem; color: var(--text-muted);">Try adjusting your filters or search keywords.</p>
        </div>
      `;
      return;
    }

    filteredEvents.forEach(event => {
      const wrapper = document.createElement("div");
      wrapper.className = "event-card-wrapper";
      
      const themeData = window.THEMES[event.theme] || { icon: "📍" };
      const isCompared = state.comparedEvents.some(e => e.id === event.id);
      
      wrapper.innerHTML = `
        <article class="event-card">
          <div class="event-card-image">
            ${event.isTopTier ? `<span class="event-card-tier-badge">⭐ Top Priority</span>` : ""}
            <img src="${event.image}" alt="${event.name}" loading="lazy">
          </div>
          <div class="event-card-content">
            <div class="event-card-tags">
              <span class="tag-badge">${themeData.icon} ${themeData.name}</span>
              <span class="tag-badge tag-scale">👥 Size: ${event.scale}</span>
              <span class="tag-badge tag-retention">💎 Impact: ${event.retention}</span>
            </div>
            <h3 class="event-card-title">${event.name}</h3>
            <p class="event-card-description">${event.details}</p>
            ${event.why ? `<div class="event-card-why">"${event.why}"</div>` : ""}
            <div class="event-card-footer">
              <button class="btn btn-primary btn-learn-more" data-id="${event.id}">Learn More</button>
              <button class="btn btn-secondary btn-compare ${isCompared ? 'compared-active' : ''}" data-id="${event.id}">
                ${isCompared ? "✓ Compared" : "Add Compare"}
              </button>
            </div>
          </div>
        </article>
      `;
      
      // Wire up card buttons
      wrapper.querySelector(".btn-learn-more").addEventListener("click", () => openDetailDialog(event));
      wrapper.querySelector(".btn-compare").addEventListener("click", (e) => toggleCompare(event, e.currentTarget));
      
      eventsGrid.appendChild(wrapper);
    });
  }

  // --- Dialogue Modal Detail View ---
  function openDetailDialog(event) {
    const themeData = window.THEMES[event.theme] || { icon: "📍", name: event.theme };
    
    eventDialog.innerHTML = `
      <div class="dialog-header">
        <img src="${event.image}" alt="${event.name}">
        <button class="dialog-close" id="dialog-close-btn">&times;</button>
      </div>
      <div class="dialog-body">
        <span class="dialog-theme-tag">${themeData.icon} ${themeData.name}</span>
        <h3 class="dialog-title">${event.name}</h3>
        
        <div class="dialog-metadata-grid">
          <div class="dialog-meta-item">
            <span>Group Size Scale</span>
            <strong>${event.scale}</strong>
          </div>
          <div class="dialog-meta-item">
            <span>Retention Impact</span>
            <strong>${event.retention}</strong>
          </div>
        </div>

        <div class="dialog-text-block">
          <h4>Event Description</h4>
          <p>${event.details}</p>
        </div>

        ${event.why ? `
          <div class="dialog-why-box">
            <h4>Why It Works</h4>
            <p>"${event.why}"</p>
          </div>
        ` : ""}

        ${event.partner ? `
          <div class="dialog-text-block">
            <h4>Recommended Local Partners</h4>
            <p>${event.partner}</p>
          </div>
        ` : ""}

        ${event.activation ? `
          <div class="dialog-text-block" style="border-top: 1px dashed var(--border-color); padding-top: 1rem;">
            <h4 style="color: var(--accent-orange)">YC Activation Strategy</h4>
            <p>${event.activation}</p>
          </div>
        ` : ""}

        <div class="dialog-actions">
          ${event.link ? `
            <a href="${event.link}" target="_blank" class="btn btn-primary" rel="noopener noreferrer">
              Visit Official Website &rarr;
            </a>
          ` : ""}
          <button class="btn btn-secondary" id="dialog-close-action-btn">Close</button>
        </div>
      </div>
    `;

    // Event handlers for closing
    const closeBtn = eventDialog.querySelector("#dialog-close-btn");
    const closeActionBtn = eventDialog.querySelector("#dialog-close-action-btn");
    
    const closeDialog = () => eventDialog.close();
    closeBtn.addEventListener("click", closeDialog);
    closeActionBtn.addEventListener("click", closeDialog);

    eventDialog.showModal();
  }

  // --- Comparison State & UI Management ---

  function toggleCompare(event, button) {
    const index = state.comparedEvents.findIndex(e => e.id === event.id);
    
    if (index > -1) {
      // Remove
      state.comparedEvents.splice(index, 1);
      button.classList.remove("compared-active");
      button.textContent = "Add Compare";
    } else {
      // Add (limit to 3)
      if (state.comparedEvents.length >= 3) {
        alert("You can compare a maximum of 3 events side-by-side.");
        return;
      }
      state.comparedEvents.push(event);
      button.classList.add("compared-active");
      button.textContent = "✓ Compared";
    }

    updateComparisonUI();
  }

  function updateComparisonUI() {
    const count = state.comparedEvents.length;
    compareCount.textContent = `${count} / 3 selected`;

    if (count > 0) {
      // Open drawer partially or expand
      comparisonDrawer.classList.add("open");
      renderComparisonTable();
    } else {
      comparisonDrawer.classList.remove("open");
      state.drawerExpanded = false;
      comparisonDrawer.style.transform = "translateY(100%)";
    }
  }

  function renderComparisonTable() {
    if (state.comparedEvents.length === 0) {
      comparisonTable.innerHTML = "";
      return;
    }

    // Build header row with images and delete buttons
    let headerHtml = `<tr><th>Event Details</th>`;
    state.comparedEvents.forEach(event => {
      headerHtml += `
        <td>
          <div class="comparison-col-header">
            <span>${event.name}</span>
            <button class="remove-compare-btn" data-id="${event.id}">✖</button>
          </div>
        </td>
      `;
    });
    headerHtml += `</tr>`;

    // Theme row
    let themeHtml = `<tr><th>Theme</th>`;
    state.comparedEvents.forEach(event => {
      const themeData = window.THEMES[event.theme] || { name: event.theme, icon: "📍" };
      themeHtml += `<td>${themeData.icon} ${themeData.name}</td>`;
    });
    themeHtml += `</tr>`;

    // Scale row
    let scaleHtml = `<tr><th>Group Size</th>`;
    state.comparedEvents.forEach(event => {
      scaleHtml += `<td><strong>${event.scale}</strong></td>`;
    });
    scaleHtml += `</tr>`;

    // Impact row
    let impactHtml = `<tr><th>Retention Value</th>`;
    state.comparedEvents.forEach(event => {
      impactHtml += `<td><span style="color: var(--brand-emerald); font-weight: 600;">${event.retention}</span></td>`;
    });
    impactHtml += `</tr>`;

    // Why row
    let whyHtml = `<tr><th>Core Philosophy</th>`;
    state.comparedEvents.forEach(event => {
      whyHtml += `<td><em style="font-size: 0.85rem; color: var(--text-secondary);">${event.why || 'Curated Bay Area experience.'}</em></td>`;
    });
    whyHtml += `</tr>`;

    // Partner row
    let partnerHtml = `<tr><th>Partner Options</th>`;
    state.comparedEvents.forEach(event => {
      partnerHtml += `<td><span style="font-size: 0.85rem;">${event.partner || 'Local neighborhoods, public spaces.'}</span></td>`;
    });
    partnerHtml += `</tr>`;

    // Links row
    let linksHtml = `<tr><th>Links</th>`;
    state.comparedEvents.forEach(event => {
      linksHtml += `
        <td>
          ${event.link ? `<a href="${event.link}" target="_blank" class="nav-link active" style="display:inline-block; font-size:0.8rem; text-align:center;" rel="noopener noreferrer">Visit Site</a>` : '<span style="color:var(--text-muted)">None</span>'}
        </td>
      `;
    });
    linksHtml += `</tr>`;

    comparisonTable.innerHTML = headerHtml + themeHtml + scaleHtml + impactHtml + whyHtml + partnerHtml + linksHtml;

    // Wire up delete buttons inside table
    comparisonTable.querySelectorAll(".remove-compare-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        const event = window.EVENTS_DATA.find(e => e.id === id);
        if (event) {
          // Un-highlight corresponding card button
          const gridCompareBtn = document.querySelector(`.btn-compare[data-id="${id}"]`);
          toggleCompare(event, gridCompareBtn);
        }
      });
    });
  }

  // Toggle bottom drawer collapse/expanded states
  function toggleDrawer() {
    state.drawerExpanded = !state.drawerExpanded;
    if (state.drawerExpanded) {
      comparisonDrawer.style.transform = "translateY(0)";
      toggleIndicator.textContent = "▼";
      toggleText.textContent = "Hide Comparison";
    } else {
      // Slide down so only header is visible
      const headerHeight = document.querySelector(".drawer-header").offsetHeight;
      comparisonDrawer.style.transform = `translateY(calc(100% - ${headerHeight}px))`;
      toggleIndicator.textContent = "▲";
      toggleText.textContent = "Show Comparison";
    }
  }

  // --- Setting Up Event Listeners ---
  function setupEventListeners() {
    // Search Bar Input
    searchBar.addEventListener("input", (e) => {
      state.searchQuery = e.target.value.toLowerCase().trim();
      renderEvents();
    });

    // Theme Checkboxes
    themeFiltersContainer.addEventListener("change", (e) => {
      if (e.target.classList.contains("theme-filter")) {
        const value = e.target.value;
        if (e.target.checked) {
          state.selectedThemes.push(value);
        } else {
          state.selectedThemes = state.selectedThemes.filter(t => t !== value);
        }
        renderEvents();
      }
    });

    // Scale Checkboxes
    document.querySelectorAll(".scale-filter").forEach(cb => {
      cb.addEventListener("change", () => {
        state.selectedScales = Array.from(document.querySelectorAll(".scale-filter:checked")).map(el => el.value);
        renderEvents();
      });
    });

    // Impact Checkboxes
    document.querySelectorAll(".impact-filter").forEach(cb => {
      cb.addEventListener("change", () => {
        state.selectedImpacts = Array.from(document.querySelectorAll(".impact-filter:checked")).map(el => el.value);
        renderEvents();
      });
    });

    // Top Tier toggle
    topTierToggle.addEventListener("change", (e) => {
      state.topTierOnly = e.target.checked;
      renderEvents();
    });

    // Reset Filters button
    resetFiltersBtn.addEventListener("click", () => {
      // Clear inputs
      searchBar.value = "";
      state.searchQuery = "";
      
      document.querySelectorAll(".theme-filter, .scale-filter, .impact-filter").forEach(cb => {
        cb.checked = false;
      });
      topTierToggle.checked = false;

      state.selectedThemes = [];
      state.selectedScales = [];
      state.selectedImpacts = [];
      state.topTierOnly = false;
      
      renderEvents();
    });

    // Drawer toggler
    drawerToggleBtn.addEventListener("click", toggleDrawer);

    // Tab buttons handler
    tabButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        tabButtons.forEach(b => b.classList.remove("active"));
        tabContents.forEach(c => c.classList.remove("active"));
        
        btn.classList.add("active");
        const tabId = btn.getAttribute("data-tab");
        document.getElementById(tabId).classList.add("active");
      });
    });

    // Nav bar active link helper
    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", (e) => {
        document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      });
    });
  }

  // Boot
  init();
});
