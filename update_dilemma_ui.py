# -*- coding: utf-8 -*-
"""
Update build_engine.js to make Dilemma UI 100% unified with Likert
"""

with open('build_engine.js', 'r', encoding='utf-8') as f:
    code = f.read()

# 1. Update dilemmaScaleOptions
old_options = """  // Thang đo 5 mức độ Song đề (Dilemma Balance)
  const dilemmaScaleOptions = [
    { step: 'A2', weight: 2, glyph: '🔵', label: 'Nghiêng hẳn về Vế A', quickLabel: 'Vế A hoàn toàn', cssClass: 'd-step-a2', color: '#0284C7' },
    { step: 'A1', weight: 1, glyph: '🔵', label: 'Nghiêng nhẹ Vế A', quickLabel: 'Nghiêng A', cssClass: 'd-step-a1', color: '#38BDF8' },
    { step: 'MID', weight: 0, glyph: '⚖️', label: 'Cân nhau, khó chọn', quickLabel: '⚖️ Cân nhau', cssClass: 'd-step-mid', color: '#94A3B8' },
    { step: 'B1', weight: -1, glyph: '🟣', label: 'Nghiêng nhẹ Vế B', quickLabel: 'Nghiêng B', cssClass: 'd-lvl-b1', color: '#A855F7' },
    { step: 'B2', weight: -2, glyph: '🟣', label: 'Nghiêng hẳn về Vế B', quickLabel: 'Vế B hoàn toàn', cssClass: 'd-step-b2', color: '#7C3AED' }
  ];"""

new_options = """  // Thang đo 5 mức độ Song đề (Dilemma Balance) - Đồng bộ 100% với Likert
  const dilemmaScaleOptions = [
    { step: 'A2', weight: 2, glyph: '🔵', label: 'Nghiêng hẳn về Vế A', quickLabel: 'Vế A', cssClass: 'd-lvl-a2', color: '#0284C7' },
    { step: 'A1', weight: 1, glyph: '🔵', label: 'Nghiêng nhẹ Vế A', quickLabel: 'Nghiêng A', cssClass: 'd-lvl-a1', color: '#38BDF8' },
    { step: 'MID', weight: 0, glyph: '⚖️', label: 'Cân nhau, khó chọn', quickLabel: 'Cân nhau', cssClass: 'd-lvl-mid', color: '#64748B' },
    { step: 'B1', weight: -1, glyph: '🟣', label: 'Nghiêng nhẹ Vế B', quickLabel: 'Nghiêng B', cssClass: 'd-lvl-b1', color: '#A855F7' },
    { step: 'B2', weight: -2, glyph: '🟣', label: 'Nghiêng hẳn về Vế B', quickLabel: 'Vế B', cssClass: 'd-lvl-b2', color: '#7C3AED' }
  ];"""

if old_options in code:
    code = code.replace(old_options, new_options)
else:
    # Relaxed replacement
    import re
    code = re.sub(
        r"const dilemmaScaleOptions = \[.*?\];",
        new_options.strip(),
        code,
        flags=re.DOTALL
    )

# 2. Update renderDilemmaCard and attachDilemmaEvents and renderDilemmaQuickChips
old_render = """  // --- RENDER DẠNG 2: SONG ĐỀ CÂN NÃO (VẾ A VS VẾ B) ---
  function renderDilemmaCard(idx, dilemma) {
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const dilemmaHtml = `
      <div class="message-row others statement-message-row">
        <div class="msg-sender-avatar">⚖️</div>
        <div class="msg-bubble statement-bubble">
          <div class="dilemma-card-compact">
            <div class="statement-top-pill">
              <span class="pill-badge" style="background:#EDE9FE; color:#5B21B6;">⚖️ Song Đề ${idx + 1}/${state.targetTotal}</span>
              <span class="pill-category">${dilemma.title}</span>
            </div>

            <div class="dilemma-wings-container">
              <div class="dilemma-wing wing-a">
                <span class="wing-tag">VẾ A</span>
                <div class="wing-text">${dilemma.wingA}</div>
              </div>

              <div class="dilemma-vs-divider">VS</div>

              <div class="dilemma-wing wing-b">
                <span class="wing-tag">VẾ B</span>
                <div class="wing-text">${dilemma.wingB}</div>
              </div>
            </div>

            <div class="dilemma-scale-dock">
              <div class="dilemma-track" data-d-idx="${idx}">
                <div class="dilemma-connecting-line"></div>
                ${dilemmaScaleOptions.map(opt => `
                  <button class="dilemma-node ${opt.cssClass}" data-step="${opt.step}" data-weight="${opt.weight}" title="${opt.label}">
                    <span class="dilemma-dot">${opt.glyph}</span>
                  </button>
                `).join('')}
              </div>

              <div class="dilemma-live-indicator" id="d-live-ind-${idx}">
                Trượt để chọn cán cân nghiêng về bên nào
              </div>
            </div>
          </div>
          <div class="msg-meta-row"><span>${timeStr}</span></div>
        </div>
      </div>
    `;

    els.messageStreamContainer.insertAdjacentHTML('beforeend', dilemmaHtml);
    scrollChatToBottom();
    attachDilemmaEvents(idx, dilemma);
    renderDilemmaQuickChips(idx, dilemma);
  }

  function attachDilemmaEvents(idx, dilemma) {
    const track = els.messageStreamContainer.querySelector(`.dilemma-track[data-d-idx="${idx}"]`);
    const liveInd = els.messageStreamContainer.querySelector(`#d-live-ind-${idx}`);
    if (!track) return;

    track.querySelectorAll('.dilemma-node').forEach(btn => {
      const step = btn.getAttribute('data-step');
      const weight = parseInt(btn.getAttribute('data-weight'), 10);
      const opt = dilemmaScaleOptions.find(o => o.step === step);

      btn.addEventListener('mouseenter', () => {
        if (btn.hasAttribute('disabled')) return;
        if (liveInd && opt) {
          liveInd.innerHTML = `<span style="color:${opt.color}; font-weight:800;">${opt.glyph} ${opt.label}</span>`;
        }
      });

      btn.addEventListener('mouseleave', () => {
        if (btn.hasAttribute('disabled')) return;
        if (liveInd) liveInd.textContent = 'Trượt để chọn cán cân nghiêng về bên nào';
      });

      btn.addEventListener('click', () => {
        handleDilemmaSelection(idx, dilemma, step, weight);
      });
    });
  }

  function renderDilemmaQuickChips(idx, dilemma) {
    els.chatQuickChipsBar.className = 'chat-quick-chips-bar quick-likert-dock';
    els.chatQuickChipsBar.innerHTML = dilemmaScaleOptions.map(opt => `
      <button class="quick-likert-btn" data-d-step="${opt.step}" data-d-weight="${opt.weight}" style="border-color:${opt.color};">
        <span class="quick-dot-preview" style="background:${opt.color};"></span>
        <span class="quick-label-text">${opt.quickLabel}</span>
      </button>
    `).join('');

    els.chatQuickChipsBar.querySelectorAll('[data-d-step]').forEach(btn => {
      btn.addEventListener('click', () => {
        const step = btn.getAttribute('data-d-step');
        const weight = parseInt(btn.getAttribute('data-d-weight'), 10);
        handleDilemmaSelection(idx, dilemma, step, weight);
      });
    });
  }"""

new_render = """  // --- RENDER DẠNG 2: SONG ĐỀ CÂN NÃO (VẾ A VS VẾ B) - GIAO DIỆN ĐỒNG BỘ 100% VỚI LIKERT ---
  function renderDilemmaCard(idx, dilemma) {
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const dilemmaHtml = `
      <div class="message-row others statement-message-row">
        <div class="msg-sender-avatar">⚖️</div>
        <div class="msg-bubble statement-bubble">
          <div class="likert-statement-compact dilemma-compact">
            <div class="statement-top-pill">
              <span class="pill-badge" style="background:#EDE9FE; color:#5B21B6;">⚖️ Song Đề ${idx + 1}/${state.targetTotal}</span>
              <span class="pill-category">${dilemma.title}</span>
            </div>

            <!-- Hai thẻ vế A & B rõ ràng, dễ đọc trên di động -->
            <div class="dilemma-wings-stacked">
              <div class="dilemma-wing-card wing-a">
                <div class="wing-header">
                  <span class="wing-badge badge-a">🔵 VẾ A</span>
                  <span class="wing-hint">${dilemma.labelA || 'Lựa chọn A'}</span>
                </div>
                <div class="wing-statement">${dilemma.wingA}</div>
              </div>

              <div class="dilemma-vs-row">
                <div class="vs-line"></div>
                <span class="vs-circle">VS</span>
                <div class="vs-line"></div>
              </div>

              <div class="dilemma-wing-card wing-b">
                <div class="wing-header">
                  <span class="wing-badge badge-b">🟣 VẾ B</span>
                  <span class="wing-hint">${dilemma.labelB || 'Lựa chọn B'}</span>
                </div>
                <div class="wing-statement">${dilemma.wingB}</div>
              </div>
            </div>

            <!-- Thước đo 5 nút tròn đồng bộ hoàn hảo với Likert (38px, 28px, 20px, 28px, 38px) -->
            <div class="likert-scale-dock">
              <div class="likert-scale-labels">
                <span class="scale-lbl-agree" style="color: #0284C7;">🔵 Nghiêng Vế A</span>
                <span class="scale-lbl-disagree" style="color: #7C3AED;">Nghiêng Vế B 🟣</span>
              </div>
              
              <div class="likert-dots-track dilemma-track" data-d-idx="${idx}">
                <div class="track-connecting-line dilemma-line"></div>
                ${dilemmaScaleOptions.map(opt => `
                  <button class="likert-dot-node dilemma-node ${opt.cssClass}" data-step="${opt.step}" data-weight="${opt.weight}" title="${opt.label}">
                    <span class="dot-circle">
                      <span class="dot-check-icon">✓</span>
                    </span>
                  </button>
                `).join('')}
              </div>

              <div class="likert-live-indicator" id="d-live-ind-${idx}">
                Chạm vòng tròn để chọn cán cân nghiêng về bên nào
              </div>
            </div>
          </div>
          <div class="msg-meta-row"><span>${timeStr}</span></div>
        </div>
      </div>
    `;

    els.messageStreamContainer.insertAdjacentHTML('beforeend', dilemmaHtml);
    scrollChatToBottom();
    attachDilemmaEvents(idx, dilemma);
    renderDilemmaQuickChips(idx, dilemma);
  }

  function attachDilemmaEvents(idx, dilemma) {
    const track = els.messageStreamContainer.querySelector(`.dilemma-track[data-d-idx="${idx}"]`);
    const liveInd = els.messageStreamContainer.querySelector(`#d-live-ind-${idx}`);
    if (!track) return;

    track.querySelectorAll('.dilemma-node').forEach(btn => {
      const step = btn.getAttribute('data-step');
      const weight = parseInt(btn.getAttribute('data-weight'), 10);
      const opt = dilemmaScaleOptions.find(o => o.step === step);

      btn.addEventListener('mouseenter', () => {
        if (btn.hasAttribute('disabled')) return;
        if (liveInd && opt) {
          liveInd.innerHTML = `<span style="color:${opt.color}; font-weight:800;">${opt.glyph} ${opt.label}</span>`;
        }
      });

      btn.addEventListener('mouseleave', () => {
        if (btn.hasAttribute('disabled')) return;
        if (liveInd) liveInd.textContent = 'Chạm vòng tròn để chọn cán cân nghiêng về bên nào';
      });

      btn.addEventListener('click', () => {
        // Active visual state
        track.querySelectorAll('.dilemma-node').forEach(b => {
          b.setAttribute('disabled', 'true');
          if (b.getAttribute('data-step') === step) {
            b.classList.add('selected');
          } else {
            b.classList.add('dimmed');
          }
        });

        if (liveInd && opt) {
          liveInd.innerHTML = `<span style="color:${opt.color}; font-weight:800;">✓ Đã chọn: ${opt.label}</span>`;
        }

        handleDilemmaSelection(idx, dilemma, step, weight);
      });
    });
  }

  function renderDilemmaQuickChips(idx, dilemma) {
    els.chatQuickChipsBar.className = 'chat-quick-chips-bar quick-likert-dock';
    els.chatQuickChipsBar.innerHTML = dilemmaScaleOptions.map(opt => `
      <button class="quick-likert-btn ${opt.cssClass}" data-d-step="${opt.step}" data-d-weight="${opt.weight}" title="${opt.label}">
        <span class="quick-dot-preview" style="background:${opt.color};"></span>
        <span class="quick-label-text">${opt.quickLabel}</span>
      </button>
    `).join('');

    els.chatQuickChipsBar.querySelectorAll('[data-d-step]').forEach(btn => {
      btn.addEventListener('click', () => {
        const step = btn.getAttribute('data-d-step');
        const weight = parseInt(btn.getAttribute('data-d-weight'), 10);
        
        const track = els.messageStreamContainer.querySelector(`.dilemma-track[data-d-idx="${idx}"]`);
        const liveInd = els.messageStreamContainer.querySelector(`#d-live-ind-${idx}`);
        const opt = dilemmaScaleOptions.find(o => o.step === step);
        if (track && opt) {
          track.querySelectorAll('.dilemma-node').forEach(b => {
            b.setAttribute('disabled', 'true');
            if (b.getAttribute('data-step') === step) b.classList.add('selected');
            else b.classList.add('dimmed');
          });
        }
        if (liveInd && opt) {
          liveInd.innerHTML = `<span style="color:${opt.color}; font-weight:800;">✓ Đã chọn: ${opt.label}</span>`;
        }

        handleDilemmaSelection(idx, dilemma, step, weight);
      });
    });
  }"""

# Replace in code
if old_render in code:
    code = code.replace(old_render, new_render)
    print("Replaced renderDilemmaCard directly!")
else:
    # Use regex
    import re
    pattern = r"// --- RENDER DẠNG 2: SONG ĐỀ CÂN NÃO.*?function renderDilemmaQuickChips\(idx, dilemma\) \{.*?\n  \}"
    code = re.sub(pattern, new_render.strip(), code, flags=re.DOTALL)
    print("Replaced renderDilemmaCard via regex!")

with open('build_engine.js', 'w', encoding='utf-8') as f:
    f.write(code)

print("Saved updated build_engine.js successfully!")
