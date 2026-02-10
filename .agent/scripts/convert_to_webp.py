import os
from PIL import Image
from pathlib import Path

def convert_to_webp(source_dir):
    """Converts images in source_dir to WebP format."""
    source_path = Path(source_dir)
    if not source_path.exists():
        print(f"Directory not found: {source_dir}")
        return

    print(f"Scanning {source_dir} for images...")
    
    extensions = {'.png', '.jpg', '.jpeg', '.PNG', '.JPG', '.JPEG'}
    
    for file_path in source_path.rglob('*'):
        if file_path.suffix in extensions:
            try:
                img = Image.open(file_path)
                webp_path = file_path.with_suffix('.webp')
                
                # Convert to RGB if necessary (e.g., proper handling of transparency for PNGs)
                if file_path.suffix.lower() in ['.png']:
                     img = img.convert("RGBA")
                else:
                     img = img.convert("RGB")

                img.save(webp_path, 'WEBP', quality=80)
                
                original_size = file_path.stat().st_size
                new_size = webp_path.stat().st_size
                reduction = (1 - new_size / original_size) * 100
                
                print(f"Converted: {file_path.name} -> {webp_path.name}")
                print(f"  Size: {original_size/1024:.2f}KB -> {new_size/1024:.2f}KB ({reduction:.1f}% reduction)")
                
            except Exception as e:
                print(f"Failed to convert {file_path.name}: {e}")

if __name__ == "__main__":
    # Ensure Pillow is installed: pip install Pillow
    convert_to_webp('public/assets')
