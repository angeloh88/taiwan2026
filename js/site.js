(function () {
    var PARTY = 5;

    function formatInt(n) {
        return Math.round(n).toLocaleString("en-US");
    }

    function eachShare(total) {
        return total / PARTY;
    }

    function recalcExpenses() {
        var inputs = document.querySelectorAll(
            "[data-expense-input]",
        );
        var sum = 0;
        inputs.forEach(function (input) {
            var v = parseFloat(input.value, 10);
            if (isNaN(v) || v < 0) v = 0;
            sum += v;
            var row = input.closest(".p-4");
            var label = row && row.querySelector(".split-label");
            if (label)
                label.textContent =
                    formatInt(eachShare(v)) + " ea.";
        });
        var capInput = document.getElementById("budget-input");
        var cap = capInput ? parseFloat(capInput.value, 10) : 60000;
        if (isNaN(cap) || cap < 1) cap = 60000;

        var spentEl = document.getElementById("spent-total");
        var capEl = document.getElementById("budget-cap");
        var bar = document.getElementById("budget-bar");
        var progress = document.getElementById("budget-progress");
        var perLine = document.getElementById("per-person-line");

        if (spentEl) spentEl.textContent = formatInt(sum);
        if (capEl) capEl.textContent = formatInt(cap);
        if (perLine)
            perLine.textContent =
                formatInt(eachShare(sum)) +
                " TWD per person (÷" +
                PARTY +
                ")";

        var pct = cap > 0 ? Math.min(100, (sum / cap) * 100) : 0;
        if (bar) bar.style.width = pct + "%";
        if (progress) {
            progress.setAttribute(
                "aria-valuenow",
                String(Math.round(sum)),
            );
            progress.setAttribute(
                "aria-valuemax",
                String(Math.round(cap)),
            );
        }
    }

    document.addEventListener("input", function (e) {
        if (
            e.target &&
            (e.target.matches("[data-expense-input]") ||
                e.target.id === "budget-input")
        ) {
            recalcExpenses();
        }
    });

    document.getElementById("add-expense-row") &&
        document
            .getElementById("add-expense-row")
            .addEventListener("click", function () {
                var list = document.getElementById("expense-list");
                if (!list) return;
                var row = document.createElement("div");
                row.className =
                    "p-4 flex items-center justify-between gap-2";
                row.innerHTML =
                    '<div class="flex items-center gap-4 min-w-0">' +
                    '<div class="w-10 h-10 rounded-full bg-mist-gray flex items-center justify-center shrink-0"><span class="material-symbols-outlined text-on-surface-variant">sell</span></div>' +
                    '<div class="min-w-0"><p class="font-label-bold text-on-surface" contenteditable="true">New item</p>' +
                    '<p class="text-caption text-on-surface-variant" contenteditable="true">Note</p></div></div>' +
                    '<div class="text-right shrink-0"><input type="number" min="0" step="100" value="0" class="w-24 text-right rounded-lg border-outline-variant bg-mist-gray/40 px-2 py-1 text-sm font-bold text-deep-ink" data-expense-input />' +
                    '<p class="text-caption text-cloud-shadow split-label">0 ea.</p></div>';
                list.appendChild(row);
                recalcExpenses();
            });

    document.getElementById("fab-add") &&
        document
            .getElementById("fab-add")
            .addEventListener("click", function () {
                var el = document.getElementById("expenses");
                if (el)
                    el.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
            });

    var tabs = document.querySelectorAll("[data-nav]");
    function setActiveTab(hash) {
        tabs.forEach(function (tab) {
            var on = tab.getAttribute("href") === hash;
            tab.classList.toggle("bg-primary-container/10", on);
            tab.classList.toggle("text-primary", on);
            tab.classList.toggle("text-cloud-shadow", !on);
            if (on) tab.setAttribute("aria-current", "page");
            else tab.removeAttribute("aria-current");
        });
    }

    tabs.forEach(function (tab) {
        tab.addEventListener("click", function () {
            setActiveTab(tab.getAttribute("href") || "");
        });
    });

    function onHash() {
        var h = window.location.hash || "#glance";
        setActiveTab(h);
    }

    window.addEventListener("hashchange", onHash);
    document.addEventListener("DOMContentLoaded", function () {
        recalcExpenses();
        onHash();
    });
})();
