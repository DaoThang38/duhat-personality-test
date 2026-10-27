# -*- coding: utf-8 -*-
"""
Script to inject unified Dilemma styles (identical circle sizes, buttons, checkmark to Likert) into index.html
"""
import sys

def build_adaptive_index():
    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()

    # Unified CSS for Dilemma matching Likert circle sizes & styling
    unified_dilemma_css = """
    /* ==========================================================================
       6. DILEMMA (SONG ĐỀ CÂN NÃO) - GIAO DIỆN ĐỒNG BỘ 100% VỚI LIKERT
       ========================================================================== */
    .dilemma-compact {
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: 100%;
    }

    .dilemma-wings-stacked {
      display: flex;
      flex-direction: column;
      gap: 6px;
      width: 100%;
      margin: 4px 0 8px 0;
    }

    .dilemma-wing-card {
      background: #FFFFFF;
      border: 1.5px solid #E2E8F0;
      border-radius: 12px;
      padding: 10px 12px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
      display: flex;
      flex-direction: column;
      gap: 4px;
      transition: all 0.2s ease;
    }

    .dilemma-wing-card.wing-a {
      border-left: 4px solid #0284C7;
      background: linear-gradient(135deg, #F0F9FF 0%, #FFFFFF 100%);
    }

    .dilemma-wing-card.wing-b {
      border-left: 4px solid #7C3AED;
      background: linear-gradient(135deg, #FAF5FF 0%, #FFFFFF 100%);
    }

    .wing-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .wing-badge {
      font-size: 0.68rem;
      font-weight: 800;
      padding: 2px 8px;
      border-radius: var(--radius-full);
      letter-spacing: 0.3px;
    }

    .wing-badge.badge-a {
      background: #E0F2FE;
      color: #0369A1;
    }

    .wing-badge.badge-b {
      background: #F3E8FF;
      color: #6D28D9;
    }

    .wing-hint {
      font-size: 0.68rem;
      font-weight: 600;
      color: var(--text-muted);
    }

    .wing-statement {
      font-size: 0.85rem;
      font-weight: 700;
      color: #1E293B;
      line-height: 1.4;
    }

    .dilemma-vs-row {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 0 4px;
    }

    .vs-line {
      flex: 1;
      height: 1px;
      background: #CBD5E1;
    }

    .vs-circle {
      font-size: 0.68rem;
      font-weight: 900;
      color: #64748B;
      background: #F1F5F9;
      padding: 2px 8px;
      border-radius: var(--radius-full);
      border: 1px solid #E2E8F0;
    }

    /* 5 DILEMMA CIRCLE SIZES - 100% IDENTICAL TO LIKERT */
    .dilemma-line {
      background: linear-gradient(90deg, #BAE6FD 0%, #E2E8F0 50%, #DDD6FE 100%) !important;
    }

    /* Level A2: To nhất 38px (Xanh dương đậm) */
    .dilemma-node.d-lvl-a2 .dot-circle {
      width: 38px;
      height: 38px;
      background: #0284C7;
      border: 3px solid #BAE6FD;
      color: #0284C7;
    }

    /* Level A1: Vừa 28px (Xanh dương sáng) */
    .dilemma-node.d-lvl-a1 .dot-circle {
      width: 28px;
      height: 28px;
      background: #38BDF8;
      border: 2.5px solid #E0F2FE;
      color: #38BDF8;
    }

    /* Level MID: Nhỏ nhất 20px (Xám tinh tế) */
    .dilemma-node.d-lvl-mid .dot-circle {
      width: 20px;
      height: 20px;
      background: #CBD5E1;
      border: 2px solid #E2E8F0;
      color: #475569;
    }

    /* Level B1: Vừa 28px (Tím sáng) */
    .dilemma-node.d-lvl-b1 .dot-circle {
      width: 28px;
      height: 28px;
      background: #A855F7;
      border: 2.5px solid #F3E8FF;
      color: #A855F7;
    }

    /* Level B2: To nhất 38px (Tím đậm) */
    .dilemma-node.d-lvl-b2 .dot-circle {
      width: 38px;
      height: 38px;
      background: #7C3AED;
      border: 3px solid #DDD6FE;
      color: #7C3AED;
    }

    /* Selected state: White check icon + halo ring */
    .dilemma-node.selected .dot-circle {
      box-shadow: 0 0 0 3px #FFFFFF, 0 0 0 6px currentColor !important;
      transform: scale(1.15) !important;
    }

    .dilemma-node.selected .dot-check-icon {
      display: block !important;
      color: #FFFFFF !important;
      font-size: 0.85rem !important;
      font-weight: 800 !important;
    }

    .dilemma-node.dimmed {
      opacity: 0.35 !important;
      filter: grayscale(0.6) !important;
    }

    /* Quick thumbpad for dilemma */
    .quick-likert-btn.d-lvl-a2 { border-color: #0284C7; color: #0284C7; }
    .quick-likert-btn.d-lvl-a1 { border-color: #38BDF8; color: #0369A1; }
    .quick-likert-btn.d-lvl-mid { border-color: #94A3B8; color: #475569; }
    .quick-likert-btn.d-lvl-b1 { border-color: #A855F7; color: #6D28D9; }
    .quick-likert-btn.d-lvl-b2 { border-color: #7C3AED; color: #7C3AED; }

    /* Reasoning probe styling */
    .reasoning-probe-card {
      background: #FFFBEB;
      border: 1.5px solid #FCD34D;
      border-radius: 14px;
      padding: 10px 12px;
      margin-top: 8px;
      display: flex;
      flex-direction: column;
      gap: 6px;
      animation: fadeIn 0.3s ease;
    }

    .reasoning-header {
      font-size: 0.78rem;
      font-weight: 800;
      color: #92400E;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .reasoning-option-btn {
      text-align: left;
      background: #FFFFFF;
      border: 1px solid #FDE68A;
      border-radius: 8px;
      padding: 7px 10px;
      font-size: 0.76rem;
      color: #1E293B;
      cursor: pointer;
      transition: all 0.15s ease;
      line-height: 1.35;
      font-weight: 600;
    }

    .reasoning-option-btn:hover {
      background: #FEF3C7;
      border-color: #F59E0B;
      transform: translateX(2px);
    }

    .reasoning-option-btn.selected {
      background: #F59E0B;
      color: #FFFFFF;
      font-weight: 800;
      border-color: #D97706;
    }

    /* Adaptive Transition Notice */
    .adaptive-notice-card {
      background: linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%);
      border: 1.5px solid #C7D2FE;
      border-radius: 14px;
      padding: 12px;
      margin: 8px 0;
      display: flex;
      flex-direction: column;
      gap: 6px;
      font-size: 0.8rem;
      color: #3730A3;
      line-height: 1.45;
    }

    .adaptive-badge {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-size: 0.7rem;
      font-weight: 800;
      background: #4338CA;
      color: #FFFFFF;
      padding: 2px 8px;
      border-radius: var(--radius-full);
      width: fit-content;
    }

    /* Three Layer Architecture Display */
    .three-layer-card {
      background: #F8FAFC;
      border: 1.5px solid #E2E8F0;
      border-radius: 14px;
      padding: 12px;
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .layer-row {
      display: flex;
      flex-direction: column;
      gap: 3px;
      background: #FFFFFF;
      border-radius: 8px;
      padding: 8px 10px;
      border: 1px solid #E2E8F0;
    }

    .layer-title {
      font-size: 0.7rem;
      font-weight: 800;
      color: #64748B;
      text-transform: uppercase;
      letter-spacing: 0.3px;
    }

    .layer-content {
      font-size: 0.82rem;
      font-weight: 700;
      color: #1E293B;
      line-height: 1.35;
    }

    .hybrid-badge {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      background: #FEF3C7;
      border: 1px solid #F59E0B;
      color: #92400E;
      font-size: 0.75rem;
      font-weight: 800;
      padding: 4px 10px;
      border-radius: 20px;
      margin-top: 4px;
    }

    .radar-axis-bar {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.74rem;
      font-weight: 700;
      margin: 4px 0;
    }

    .radar-axis-label {
      width: 105px;
      flex-shrink: 0;
      color: #475569;
    }

    .radar-track {
      flex: 1;
      height: 8px;
      background: #E2E8F0;
      border-radius: 4px;
      position: relative;
      overflow: hidden;
    }

    .radar-indicator {
      position: absolute;
      top: 0;
      bottom: 0;
      border-radius: 4px;
      transition: width 0.3s ease;
    }
    """

    # Replace old section 6 CSS in style
    style_start = content.find('/* ==========================================================================\n       6. DILEMMA')
    if style_start == -1:
        style_start = content.find('/* ==========================================================================\r\n       6. DILEMMA')
    
    style_end = content.find('</style>')

    if style_start != -1 and style_end != -1:
        content = content[:style_start] + unified_dilemma_css + '\n  ' + content[style_end:]
    else:
        content = content.replace('</style>', unified_dilemma_css + '\n  </style>')

    with open('build_engine.js', 'r', encoding='utf-8') as js_file:
        new_js = js_file.read()

    start_tag = '<script>'
    end_tag = '</script>'
    
    start_idx = content.rfind(start_tag)
    end_idx = content.rfind(end_tag)

    if start_idx != -1 and end_idx != -1:
        updated_content = content[:start_idx + len(start_tag)] + '\n' + new_js + '\n' + content[end_idx:]
        with open('index.html', 'w', encoding='utf-8') as out_f:
            out_f.write(updated_content)
        with open('Tinh_cach_likert_scale.html', 'w', encoding='utf-8') as out_f2:
            out_f2.write(updated_content)
        print("Updated index.html and Tinh_cach_likert_scale.html with unified dilemma UI!")
    else:
        print("Error: Could not find script tags!")

if __name__ == '__main__':
    build_adaptive_index()
