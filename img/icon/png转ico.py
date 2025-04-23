from PIL import Image
import os

def generate_individual_ico(png_path, output_dir):
    sizes = [16, 32, 48, 72, 96, 128, 144, 180, 192, 256, 512]

    # 创建输出目录（如果不存在）
    os.makedirs(output_dir, exist_ok=True)

    # 打开原始图片
    img = Image.open(png_path)

    # 确保是 RGBA 模式
    if img.mode != 'RGBA':
        img = img.convert('RGBA')

    # 遍历尺寸并保存为独立的 ico 文件
    for size in sizes:
        resized = img.resize((size, size), Image.LANCZOS)
        ico_filename = os.path.join(output_dir, f"{size}.ico")
        resized.save(ico_filename, format='ICO')
        print(f"生成: {ico_filename}")

# 示例用法
if __name__ == "__main__":
    png_file = "touxiang.png"          # 你的 PNG 文件
    output_folder = "ico_outputs"     # 输出目录
    generate_individual_ico(png_file, output_folder)
