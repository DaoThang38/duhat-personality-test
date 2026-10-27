import urllib.request
import zipfile
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

files_to_deploy = [
    'index.html',
    'Tinh_cach_likert_scale.html',
    'LOGIC_MATRIX_EXPLAINER.html',
    'AI_KNOWLEDGE_BASE_PRESENTATION.html',
    'PRODUCT_VISION_DUHAT_LIKERT.md',
    'AI_KNOWLEDGE_BASE_ASSESSMENT.md',
    'DUHAT_LOGIC_MATRIX_NONTECH_GUIDE.md',
    'QUESTION_BANK_48_STATEMENTS_12_DILEMMAS.md',
    'QUESTION_METHODOLOGY_AND_ADAPTIVE_ENGINE.md',
]

zip_filename = 'duhat_site.zip'
print(f"Creating {zip_filename} with {len(files_to_deploy)} files...")
with zipfile.ZipFile(zip_filename, 'w', compression=zipfile.ZIP_DEFLATED) as zf:
    for filename in files_to_deploy:
        zf.write(filename, filename)
        print(f"  + Added: {filename}")

with open(zip_filename, 'rb') as f:
    zip_data = f.read()

print(f"Deploying to https://ship.page/deploy ({len(zip_data)} bytes)...")
req = urllib.request.Request(
    'https://ship.page/deploy',
    data=zip_data,
    headers={'Content-Type': 'application/zip'},
    method='POST'
)

with urllib.request.urlopen(req) as resp:
    res = json.loads(resp.read().decode())
    url = res.get('url')
    print(f"\n==========================================")
    print(f"DEPLOY SUCCESSFUL!")
    print(f"BASE URL: {url}")
    print(f"PRESENTATION DECK: {url}/AI_KNOWLEDGE_BASE_PRESENTATION.html")
    print(f"PROTOTYPE: {url}/index.html")
    print(f"LOGIC MATRIX: {url}/LOGIC_MATRIX_EXPLAINER.html")
    print(f"==========================================")
