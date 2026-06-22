document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("pub-search");
    const yearDetails = document.querySelector(".pubs-year-details");
    const yearFilter = document.querySelector(".pubs-year-filter");
    const yearSelectionLabel = document.getElementById("pub-year-selection");
    const yearOptionButtons = Array.from(document.querySelectorAll(".pub-year-option"));
    const typeButtons = Array.from(document.querySelectorAll(".pub-filter"));
    const topicCheckboxes = Array.from(document.querySelectorAll(".pub-topic-checkbox"));
    const topicSelectionLabel = document.getElementById("pub-topic-selection");
    const items = Array.from(document.querySelectorAll("#publications-list .pub-item"));
    const emptyState = document.getElementById("pubs-empty");
    const chartRows = Array.from(document.querySelectorAll(".pub-chart__row"));

    let activeType = "all";
    let filterRun = 0;

    function normalize(value) {
        return (value || "").toLowerCase().trim();
    }

    function getSelectedTopics() {
        return topicCheckboxes
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => normalize(checkbox.value));
    }

    function updateTopicSelectionLabel() {
        if (!topicSelectionLabel) return;

        const selectedTopics = getSelectedTopics();

        if (selectedTopics.length === 0) {
            topicSelectionLabel.textContent = "All topics";
        } else if (selectedTopics.length === 1) {
            topicSelectionLabel.textContent =
                topicCheckboxes.find((c) => c.checked)?.nextElementSibling?.textContent || "1 topic";
        } else {
            topicSelectionLabel.textContent = `${selectedTopics.length} topics selected`;
        }
    }

    function applyFilters() {
        filterRun += 1;
        const currentRun = filterRun;
        const query = normalize(searchInput ? searchInput.value : "");
        const activeYear = yearOptionButtons.find((button) => button.classList.contains("is-active"))?.dataset.yearValue || "all";
        const selectedTopics = getSelectedTopics();

        let visible = 0;

        items.forEach((item) => {
            item.classList.add("is-filtering");

            const itemTopics = normalize(item.dataset.topics).split("|").filter(Boolean);

            const matchesType = activeType === "all" || item.dataset.type === activeType;
            const matchesYear = activeYear === "all" || item.dataset.year === activeYear;
            const matchesTopic =
                selectedTopics.length === 0 ||
                selectedTopics.some((topic) => itemTopics.includes(topic));
            const matchesSearch =
                !query || normalize(item.dataset.search).includes(query);

            const show = matchesType && matchesYear && matchesTopic && matchesSearch;
            window.setTimeout(() => {
                if (currentRun !== filterRun) return;
                item.classList.toggle("is-hidden", !show);
                window.requestAnimationFrame(() => {
                    item.classList.remove("is-filtering");
                });
            }, 90);

            if (show) visible += 1;
        });

        if (emptyState) {
            window.setTimeout(() => {
                if (currentRun !== filterRun) return;
                emptyState.classList.toggle("is-hidden", visible > 0);
            }, 100);
        }
    }

    typeButtons.forEach((button) => {
        button.addEventListener("click", function () {
            activeType = this.dataset.filterType || "all";

            typeButtons.forEach((btn) => {
                btn.classList.toggle("is-active", btn === this);
            });

            applyFilters();
        });
    });

    topicCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", function () {
            updateTopicSelectionLabel();
            applyFilters();
        });
    });

    if (searchInput) {
        searchInput.addEventListener("input", applyFilters);
    }

    document.querySelectorAll(".js-abstract-toggle").forEach((button) => {
        button.addEventListener("click", function () {
            const container = this.closest(".pub-card, .pub-row");
            const abstract = container.querySelector(".pub-card__abstract, .pub-row__abstract");

            if (!abstract) return;

            const expanded = this.getAttribute("aria-expanded") === "true";
            const nextExpanded = !expanded;

            this.setAttribute("aria-expanded", String(nextExpanded));
            abstract.hidden = expanded;

            this.setAttribute("aria-label", nextExpanded ? "Hide abstract" : "Show abstract");
            this.setAttribute("title", nextExpanded ? "Hide abstract" : "Abstract");

            this.innerHTML = nextExpanded
                ? '<i class="fas fa-xmark" aria-hidden="true"></i>'
                : '<i class="fas fa-align-left" aria-hidden="true"></i>';
        });
    });

    const maxCount = Math.max(
        ...chartRows.map((row) => Number(row.dataset.count || 0)),
        1
    );

    window.requestAnimationFrame(() => {
        chartRows.forEach((row) => {
            const count = Number(row.dataset.count || 0);
            const bar = row.querySelector(".pub-chart__bar");

            if (bar) {
                bar.style.width = `${(count / maxCount) * 100}%`;
                bar.classList.add("is-animated");
            }
        });
    });

    yearOptionButtons.forEach((button) => {
        button.addEventListener("click", function () {
            yearOptionButtons.forEach((btn) => {
                btn.classList.toggle("is-active", btn === this);
            });

            if (yearSelectionLabel) {
                yearSelectionLabel.textContent = this.textContent.trim();
            }

            if (yearDetails) {
                yearDetails.open = false;
            }

            applyFilters();
        });
    });

    const topicDetails = document.querySelector(".pubs-topic-details");
    const yearDetailsElement = document.querySelector(".pubs-year-details");
    const topicFilter = document.querySelector(".pubs-topic-filter");
    const yearFilterElement = document.querySelector(".pubs-year-filter");

    function attachHoverClose(filterElement, detailsElement) {
        if (!filterElement || !detailsElement) return;

        let closeTimeout = null;

        filterElement.addEventListener("mouseenter", function () {
            if (closeTimeout) {
                clearTimeout(closeTimeout);
                closeTimeout = null;
            }
        });

        filterElement.addEventListener("mouseleave", function () {
            closeTimeout = setTimeout(function () {
                detailsElement.open = false;
            }, 120);
        });
    }

    attachHoverClose(topicFilter, topicDetails);
    attachHoverClose(yearFilterElement, yearDetailsElement);

    document.addEventListener("click", function (event) {
        if (topicDetails && !topicDetails.contains(event.target)) {
            topicDetails.open = false;
        }

        if (yearDetailsElement && !yearDetailsElement.contains(event.target)) {
            yearDetailsElement.open = false;
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            if (topicDetails) topicDetails.open = false;
            if (yearDetailsElement) yearDetailsElement.open = false;
        }
    });

    updateTopicSelectionLabel();
    applyFilters();
});
