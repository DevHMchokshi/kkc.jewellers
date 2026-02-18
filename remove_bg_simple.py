from PIL import Image

def remove_white_background(input_path, output_path, tolerance=200):
    img = Image.open(input_path)
    img = img.convert("RGBA")
    datas = img.getdata()

    newData = []
    for item in datas:
        # Check if pixel is close to white
        # item[0], item[1], item[2] are R, G, B
        if item[0] > tolerance and item[1] > tolerance and item[2] > tolerance:
            newData.append((255, 255, 255, 0))  # Transparent
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(output_path, "PNG")
    print(f"Background removed and saved to {output_path}")

try:
    remove_white_background('logo.png', 'logo_transparent.png')
except Exception as e:
    print(f"Error: {e}")
