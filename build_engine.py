# -*- coding: utf-8 -*-
"""
Script to inject Adaptive Engine, 48 Statements, 12 Dilemmas, Grounding Probes, 
and 3-Layer Alignment into index.html
"""
import sys

def build_adaptive_index():
    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. New CSS block to inject before </style>
    new_css = """
    /* ==========================================================================
       6. DILEMMA (SONG ĐỀ CÂN NÃO) & REASONING PROBES & ADAPTIVE STYLES
       ========================================================================== */
    .dilemma-card-compact {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;
    }

    .dilemma-wings-container {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      gap: 8px;
      align-items: stretch;
      background: #F8FAFC;
      border: 1.5px solid #E2E8F0;
      border-radius: 14px;
      padding: 10px;
    }

    .dilemma-wing {
      display: flex;
      flex-direction: column;
      gap: 4px;
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 10px;
      padding: 8px 10px;
      transition: all 0.2s ease;
    }

    .dilemma-wing.wing-a {
      border-left: 3px solid #0284C7;
    }

    .dilemma-wing.wing-b {
      border-right: 3px solid #7C3AED;
    }

    .wing-tag {
      font-size: 0.65rem;
      font-weight: 800;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }

    .wing-a .wing-tag { color: #0284C7; }
    .wing-b .wing-tag { color: #7C3AED; }

    .wing-text {
      font-size: 0.8rem;
      font-weight: 700;
      color: #1E293B;
      line-height: 1.35;
    }

    .dilemma-vs-divider {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.72rem;
      font-weight: 900;
      color: #64748B;
      background: #E2E8F0;
      width: 26px;
      height: 26px;
      border-radius: 50%;
      align-self: center;
    }

    .dilemma-scale-dock {
      background: #F8FAFC;
      border: 1px solid #E2E8F0;
      border-radius: 14px;
      padding: 10px 8px 8px 8px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .dilemma-track {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 48px;
      padding: 0 4px;
    }

    .dilemma-connecting-line {
      position: absolute;
      left: 20px;
      right: 20px;
      top: 50%;
      height: 3px;
      background: linear-gradient(90deg, #0284C7 0%, #CBD5E1 50%, #7C3AED 100%);
      transform: translateY(-50%);
      z-index: 1;
      border-radius: 2px;
    }

    .dilemma-node {
      position: relative;
      z-index: 2;
      width: 48px;
      height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: transform 0.18s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .dilemma-node:hover { transform: scale(1.12); }
    .dilemma-node[disabled] { cursor: default; pointer-events: none; }

    .dilemma-dot {
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);
      font-size: 0.68rem;
      font-weight: 800;
    }

    .dilemma-node.d-step-a2 .dilemma-dot { width: 36px; height: 36px; background: #0284C7; border: 3px solid #BAE6FD; color: #FFF; }
    .dilemma-node.d-step-a1 .dilemma-dot { width: 28px; height: 28px; background: #38BDF8; border: 2.5px solid #E0F2FE; color: #FFF; }
    .dilemma-node.d-step-mid .dilemma-dot { width: 22px; height: 22px; background: #94A3B8; border: 2px solid #E2E8F0; color: #FFF; font-size: 0.62rem; }
    .dilemma-node.d-step-b1 .dilemma-dot { width: 28px; height: 28px; background: #A855F7; border: 2.5px solid #F3E8FF; color: #FFF; }
    .dilemma-node.d-step-b2 .dilemma-dot { width: 36px; height: 36px; background: #7C3AED; border: 3px solid #DDD6FE; color: #FFF; }

    .dilemma-node.selected .dilemma-dot {
      box-shadow: 0 0 0 3px #FFFFFF, 0 0 0 6px currentColor;
      transform: scale(1.15);
    }
    .dilemma-node.dimmed { opacity: 0.35; filter: grayscale(0.6); }

    .dilemma-live-indicator {
      text-align: center;
      font-size: 0.74rem;
      font-weight: 700;
      min-height: 20px;
      line-height: 20px;
      color: #64748B;
      background: rgba(241, 245, 249, 0.7);
      border-radius: 6px;
      padding: 1px 6px;
    }

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

    if '/* 6. DILEMMA (SONG ĐỀ CÂN NÃO)' not in content:
        content = content.replace('  </style>', new_css + '\n  </style>')

    # 2. Write the new Javascript section
    # We will load the script code from a separate js file or string
    print("CSS injected successfully. Reading JS template...")

    with open('build_engine.js', 'r', encoding='utf-8') as js_file:
        new_js = js_file.read()

    # Find <script> tag and closing </script> tag
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
        print("Updated index.html and Tinh_cach_likert_scale.html successfully!")
    else:
        print("Error: Could not find script tags!")

if __name__ == '__main__':
    build_adaptive_index()
